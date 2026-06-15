terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# S3 Bucket for Frontend static hosting
resource "aws_s3_bucket" "frontend" {
  bucket_prefix = "spendsense-frontend-"
}

resource "aws_s3_bucket_public_access_block" "frontend_block" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "frontend_web" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }
}

# AWS App Runner for Backend API hosting
resource "aws_iam_role" "apprunner_build_role" {
  name = "spendsense-apprunner-build-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "build.apprunner.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "apprunner_build_policy" {
  role       = aws_iam_role.apprunner_build_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess"
}

resource "aws_apprunner_service" "backend" {
  service_name = "spendsense-backend-service"

  source_configuration {
    auto_deployments_enabled = true
    
    code_repository {
      repository_url = "https://github.com/vinayak189varun-blip/spendsense-ai-pro"
      source_code_version {
        type  = "BRANCH"
        value = "main"
      }
      code_configuration {
        configuration_source = "API"
        code_configuration_values {
          build_command = "npm install && npm run build"
          port          = "3000"
          runtime       = "NODEJS_18"
          start_command = "npm run start"
          runtime_environment_variables = {
            NODE_ENV = "production"
          }
        }
      }
    }
  }

  instance_configuration {
    cpu    = "1024"
    memory = "2048"
  }
}

output "frontend_s3_bucket" {
  value       = aws_s3_bucket.frontend.bucket
  description = "Deploy the React build dist directory to this S3 bucket."
}

output "backend_apprunner_url" {
  value       = aws_apprunner_service.backend.service_url
  description = "The URL of the deployed App Runner backend service."
}

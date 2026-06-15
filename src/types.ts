export interface Transaction {
  date: string;
  description: string;
  amount: number;
  originalAmount?: number;
  originalCurrency?: string;
  category: string;
  merchant: string;
  type: 'debit' | 'credit';
  isAutopay: boolean;
  referenceId?: string;
  accountId: string;
}

export interface Summary {
  totalInflow: number;
  totalOutflow: number;
  netSavings: number;
  salaryCredits: { date: string; amount: number; description: string }[];
  autopays: { name: string; amount: number; date: string }[];
  top5Bills: { name: string; amount: number; category: string }[];
  sectorBreakdown: { name: string; value: number; count: number }[];
}

export interface Insight {
  title: string;
  message: string;
  type: 'warning' | 'info' | 'success';
}

export interface ParsedResult {
  accountName: string;
  currency: string;
  transactions: Transaction[];
  summary: Summary;
  insights: Insight[];
}

export interface SourceAccount {
  id: string;
  name: string;
  type: 'Savings' | 'Credit' | 'Forex' | 'UPI';
  currency: string;
  status: 'Synced' | 'Pending' | 'Needs Upload';
  colorBg: string;
  colorBorder: string;
  colorText: string;
  balance: number;
  accountNumber: string;
}

export interface Choice {
  id: string;
  label: string;
  description: string;
}

export interface DoubtQuestion {
  id: string;
  type: 'duplicate' | 'same_amount' | 'category_uncert' | 'forex_purpose';
  title: string;
  description: string;
  badge: string;
  severity: 'high' | 'medium' | 'low';
  amount: number;
  merchant: string;
  date: string;
  choices: Choice[];
  answeredId?: string;
}

export interface BankInsight {
  id: string;
  text: string;
  type: 'warning' | 'info' | 'success';
  badge: string;
}

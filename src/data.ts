/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Transaction, SourceAccount, DoubtQuestion, BankInsight } from './types';

export const INITIAL_ACCOUNTS: SourceAccount[] = [
  {
    id: 'acc_hdfc',
    name: 'HDFC Happy Piggy Bank 🏦',
    type: 'Savings',
    currency: 'INR',
    status: 'Synced',
    colorBg: 'bg-gradient-to-br from-cyan-400 to-sky-505 bg-cyan-400',
    colorBorder: 'border-cyan-200',
    colorText: 'text-sky-900',
    balance: 133824,
    accountNumber: 'XX-9812'
  },
  {
    id: 'acc_icici',
    name: 'ICICI Treat-O-Matic Card 💳',
    type: 'Credit',
    currency: 'INR',
    status: 'Synced',
    colorBg: 'bg-gradient-to-br from-rose-400 to-amber-350 bg-rose-400',
    colorBorder: 'border-rose-250',
    colorText: 'text-rose-900',
    balance: 11265,
    accountNumber: 'XX-3432'
  },
  {
    id: 'acc_gpay',
    name: 'GPay Quick Coins UPI 📱',
    type: 'UPI',
    currency: 'INR',
    status: 'Synced',
    colorBg: 'bg-gradient-to-br from-violet-400 to-fuchsia-500 bg-violet-400',
    colorBorder: 'border-violet-200',
    colorText: 'text-violet-950',
    balance: 5320,
    accountNumber: 'UPI-PayDirect'
  },
  {
    id: 'acc_niyo',
    name: 'Niyo Globe-Trotter Forex ✈️',
    type: 'Forex',
    currency: 'INR',
    status: 'Synced',
    colorBg: 'bg-gradient-to-br from-amber-400 to-orange-500 bg-amber-400',
    colorBorder: 'border-amber-200',
    colorText: 'text-amber-950',
    balance: 14524,
    accountNumber: 'XX-5512'
  }
];

export const BASELINE_TRANSACTIONS: Transaction[] = [
  // ==================== HISTORICAL: 1 YEAR AGO (MAY - OCT 2025) ====================
  {
    date: '2025-05-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 115000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-05-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-05-08',
    description: 'Airtel super recharge ⚡',
    amount: 455,
    category: 'Others',
    merchant: 'Airtel Mobile Recharge',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2025-05-15',
    description: 'Amazon shopping delight 📦',
    amount: 3200,
    category: 'Others',
    merchant: 'Amazon Prime Pay',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_icici'
  },

  // --- JUNE 2025 ---
  {
    date: '2025-06-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 115000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-06-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },

  // --- JULY 2025 ---
  {
    date: '2025-07-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 115000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-07-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },

  // --- AUGUST 2025 ---
  {
    date: '2025-08-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 118000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-08-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },

  // --- SEPTEMBER 2025 ---
  {
    date: '2025-09-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 118000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-09-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },

  // --- OCTOBER 2025 ---
  {
    date: '2025-10-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 118000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-10-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },

  // ==================== HISTORICAL: 6 MONTHS AGO (NOVEMBER 2025 - APRIL 2026) ====================
  // --- NOVEMBER 2025 ---
  {
    date: '2025-11-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 120000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-11-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-11-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-11-10',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },

  // --- DECEMBER 2025 ---
  {
    date: '2025-12-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 120000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-12-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-12-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2025-12-10',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2025-12-23',
    description: 'Swiggy delicious feast 🍔',
    amount: 1250,
    category: 'Entertainment',
    merchant: 'Swiggy Food Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },

  // --- JANUARY 2026 ---
  {
    date: '2026-01-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 120000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-01-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-01-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-01-10',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-01-14',
    description: 'Blinkit snacks rush 🍪',
    amount: 1560,
    category: 'Grocery',
    merchant: 'Blinkit Instant Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-01-18',
    description: 'Zepto quick milk and apples 🍎',
    amount: 2500,
    category: 'Grocery',
    merchant: 'Zepto Groceries Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-01-25',
    description: 'Zomato weekend treats 🍕',
    amount: 1500,
    category: 'Entertainment',
    merchant: 'Zomato Food Run',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },

  // --- FEBRUARY 2026 ---
  {
    date: '2026-02-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 120000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-02-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-02-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-02-10',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-02-12',
    description: 'Zepto lazy evening treats 🍩',
    amount: 2200,
    category: 'Grocery',
    merchant: 'Zepto Groceries Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },

  // --- MARCH 2026 ---
  {
    date: '2026-03-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 118000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-03-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-03-04',
    description: 'Jio Broadband speed boost 🌐',
    amount: 999,
    category: 'Others',
    merchant: 'Jio Fiber Broadband',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-03-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-03-08',
    description: 'Airtel phone juice recharge ⚡',
    amount: 455,
    category: 'Others',
    merchant: 'Airtel Mobile Recharge',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-03-10',
    description: 'Zepto crazy snack stock 🍊',
    amount: 1800,
    category: 'Grocery',
    merchant: 'Zepto Groceries Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-03-11',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-03-14',
    description: 'Blinkit emergency snacks 🍫',
    amount: 1500,
    category: 'Grocery',
    merchant: 'Blinkit Instant Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-03-18',
    description: 'London Tube Underground GBP Travel 🎡',
    amount: 840,
    originalAmount: 8,
    originalCurrency: 'GBP',
    category: 'Travel',
    merchant: 'London Transit',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_niyo'
  },
  {
    date: '2026-03-19',
    description: 'Apple One friendly family bundle 🍏',
    amount: 365,
    category: 'Entertainment',
    merchant: 'Apple Services',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-03-22',
    description: 'Swiggy yummy burger feast 🍔',
    amount: 900,
    category: 'Entertainment',
    merchant: 'Swiggy Food Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-03-25',
    description: 'Zomato cozy dinner delivery 🍛',
    amount: 2200,
    category: 'Entertainment',
    merchant: 'Zomato Food Run',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },

  // --- APRIL 2026 ---
  {
    date: '2026-04-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 124000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-04-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-04-04',
    description: 'Jio Broadband speed boost 🌐',
    amount: 999,
    category: 'Others',
    merchant: 'Jio Fiber Broadband',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-04-06',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-04-08',
    description: 'Airtel phone juice recharge ⚡',
    amount: 455,
    category: 'Others',
    merchant: 'Airtel Mobile Recharge',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-04-10',
    description: 'Apollo medical care box 💊',
    amount: 5600,
    category: 'Medical',
    merchant: 'Apollo Pharmacy Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_icici'
  },
  {
    date: '2026-04-11',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-04-12',
    description: 'Zepto giant snack stockpile! (Spiked!) 🛍️',
    amount: 5000,
    category: 'Grocery',
    merchant: 'Zepto Groceries Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-04-14',
    description: 'Blinkit massive munchies run 🍟',
    amount: 2800,
    category: 'Grocery',
    merchant: 'Blinkit Instant Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-04-15',
    description: 'Uber Ride Paris travel romance 🗼',
    amount: 1350,
    originalAmount: 15,
    originalCurrency: 'EUR',
    category: 'Travel',
    merchant: 'Uber Travel Premium',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_niyo'
  },
  {
    date: '2026-04-15',
    description: 'Zomato office lunch treat 🍱',
    amount: 2000,
    category: 'Entertainment',
    merchant: 'Zomato Food Run',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-04-19',
    description: 'Apple One friendly family bundle 🍏',
    amount: 365,
    category: 'Entertainment',
    merchant: 'Apple Services',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-04-22',
    description: 'Swiggy hot delicious biryani 🍛',
    amount: 1100,
    category: 'Entertainment',
    merchant: 'Swiggy Food Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },

  // --- MAY 2026 (ACTIVE MONTH PRESET) ---
  {
    date: '2026-05-01',
    description: 'Sweet Apex Payroll Direct Credit 🍬',
    amount: 124000,
    category: 'Salary',
    merchant: 'Apex Solutions Direct',
    type: 'credit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-02',
    description: 'Cozy Room Rent auto payment 🏠',
    amount: 35000,
    category: 'Rent',
    merchant: 'House Owner Transfer',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-04',
    description: 'Jio Broadband speed boost 🌐',
    amount: 999,
    category: 'Others',
    merchant: 'Jio Fiber Broadband',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-05',
    description: 'Tata green energy direct flow 💡',
    amount: 4200,
    category: 'Loans',
    merchant: 'Tata Utility Bills',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-08',
    description: 'Airtel phone juice recharge ⚡',
    amount: 455,
    category: 'Others',
    merchant: 'Airtel Mobile Recharge',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-09',
    description: 'HDFC Car EMI Piggy-Bite 🚗',
    amount: 18500,
    category: 'Loans',
    merchant: 'HDFC Vehicle EMI',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-10',
    description: 'Netflix chill time subscription 🎬',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Netflix Streaming Int',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-05-11',
    description: 'Zepto dynamic veggies & instant milk (Saved!) 🥛',
    amount: 1000, // saved massively!
    category: 'Grocery',
    merchant: 'Zepto Groceries Ltd',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-12',
    description: 'Cult.fit fitness gym daily endorphins 🏃',
    amount: 2000,
    category: 'Sports',
    merchant: 'Cult.fit Fitness Gym',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-14',
    description: 'Starbucks NY hot fragrant latte ☕',
    amount: 458,
    category: 'Entertainment',
    merchant: 'Starbucks NY Cafe',
    type: 'debit',
    isAutopay: false,
    originalAmount: 5.50,
    originalCurrency: 'USD',
    accountId: 'acc_niyo'
  },
  {
    date: '2026-05-14',
    description: 'Blinkit emergency midnight snack 🍿',
    amount: 1200,
    category: 'Grocery',
    merchant: 'Blinkit Instant Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-15',
    description: 'Zomato luxury treat night! (Spiked!) 🍔',
    amount: 3000, // jumped up!
    category: 'Entertainment',
    merchant: 'Zomato Food Run',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-15',
    description: 'LIC sweet car insurance coverage 🛡️',
    amount: 12000,
    category: 'Loans',
    merchant: 'LIC Auto Insurance',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-16',
    description: 'Booking.com lovely hotel room booking 🏖️',
    amount: 10010,
    category: 'Travel',
    merchant: 'Booking.com Forex',
    type: 'debit',
    isAutopay: false,
    originalAmount: 120.00,
    originalCurrency: 'USD',
    accountId: 'acc_niyo'
  },
  {
    date: '2026-05-18',
    description: 'Amazon prime checkout premium hardware 💻',
    amount: 72000,
    category: 'Others',
    merchant: 'Amazon Prime Pay',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_icici'
  },
  {
    date: '2026-05-18',
    description: 'Amazon prime checkout premium hardware duplicate glitch line',
    amount: 72000,
    category: 'Others',
    merchant: 'Amazon Prime Pay',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_icici'
  },
  {
    date: '2026-05-19',
    description: 'Apple One friendly family bundle 🍏',
    amount: 365,
    category: 'Entertainment',
    merchant: 'Apple Services',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-05-20',
    description: 'Deutsche Bahn ultra speed train pass 🚅',
    amount: 4056,
    category: 'Travel',
    merchant: 'Deutsche Bahn Travel',
    type: 'debit',
    isAutopay: false,
    originalAmount: 45.00,
    originalCurrency: 'EUR',
    accountId: 'acc_niyo'
  },
  {
    date: '2026-05-22',
    description: 'Swiggy delicious hot wings 🍗',
    amount: 800,
    category: 'Entertainment',
    merchant: 'Swiggy Food Delivery',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-24',
    description: 'Uber ride premium aircon back home 🚕',
    amount: 1800,
    category: 'Travel',
    merchant: 'Uber Travel Premium',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-26',
    description: 'Yummy local drip coffee break ☕',
    amount: 320,
    category: 'Entertainment',
    merchant: 'Tap Coffee Shop',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_gpay'
  },
  {
    date: '2026-05-05',
    description: 'Groww SIP Mutual Fund Transfer 🌱',
    amount: 15000,
    category: 'Investment',
    merchant: 'Groww Investments',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-15',
    description: 'Groww Mutual Fund lumpsum 🌱',
    amount: 10000,
    category: 'Investment',
    merchant: 'Groww Investments',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-08',
    description: 'NSE Trade - HDFC Bank shares 📈',
    amount: 24000,
    category: 'Investment',
    merchant: 'NSE Stock Trade',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-19',
    description: 'NSE Trade - Reliance Equity buying 📈',
    amount: 18500,
    category: 'Investment',
    merchant: 'NSE Stock Trade',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-25',
    description: 'NSE Trade - Tata Motors stock buy 📈',
    amount: 12000,
    category: 'Investment',
    merchant: 'NSE Stock Trade',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-12',
    description: 'BSE Settlement - Smallcase balance trade 🏛️',
    amount: 8050,
    category: 'Investment',
    merchant: 'BSE Stock Trade',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-21',
    description: 'BSE Option clearing - Nifty basket settle 🏛️',
    amount: 9700,
    category: 'Investment',
    merchant: 'BSE Stock Trade',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-10',
    description: 'Zerodha Kite - Nifty Index Funds buy 💎',
    amount: 14500,
    category: 'Investment',
    merchant: 'Zerodha Kite Equity',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-18',
    description: 'Zerodha Kite - Gold BeES ETF sip 💎',
    amount: 6000,
    category: 'Investment',
    merchant: 'Zerodha Kite Equity',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_icici'
  },
  {
    date: '2026-05-15',
    description: 'PPF Contribution - SBI safe haven transfer 🏦',
    amount: 10000,
    category: 'Investment',
    merchant: 'PPF National Savings',
    type: 'debit',
    isAutopay: false,
    accountId: 'acc_hdfc'
  },
  {
    date: '2026-05-22',
    description: 'NPS Trust Tier 1 - Pension contribution 🛡️',
    amount: 5000,
    category: 'Investment',
    merchant: 'NPS Retirement Trust',
    type: 'debit',
    isAutopay: true,
    accountId: 'acc_hdfc'
  }
];

export const INITIAL_DOUBTS: DoubtQuestion[] = [
  {
    id: 'd1',
    type: 'duplicate',
    title: 'Amazon Double-Charge Glitch! 😱',
    description: 'Our super smart engine flags 2 identical debits of ₹72,000 on May 18 side-by-side on your ICICI Statement. Is this a duplicate error by the bank?',
    badge: 'Oopsie Alert',
    severity: 'high',
    amount: 72000,
    merchant: 'Amazon Prime Pay',
    date: '2026-05-18',
    choices: [
      { id: 'c1', label: 'Oops, delete the duplicate!', description: 'Yep! Remove that extra ₹72,000 charge, it was a glitchy double reporting!' },
      { id: 'c2', label: 'Keep both charges!', description: 'Nope, I actually bought 2 identical luxury items at once. Keep both!' }
    ]
  },
  {
    id: 'd2',
    type: 'category_uncert',
    title: 'What is this House Owner lease? 🏠',
    description: 'We spotted a cozy recurring payment of ₹35,000 sweep. Is this your monthly residential sweet home rent or a deposit saving?',
    badge: 'Cozy House Tagging',
    severity: 'medium',
    amount: 35000,
    merchant: 'House Owner Transfer',
    date: '2026-05-02',
    choices: [
      { id: 'r1', label: 'Residential Rent!', description: 'Tag it under standard Home Rent Accommodation expenses.' },
      { id: 'r2', label: 'Security deposit invest!', description: 'Re-classify this under Mutual Funds, deposits & Invest Sweeps.' }
    ]
  },
  {
    id: 'd3',
    type: 'forex_purpose',
    title: 'Booking.com Oversea Stay Purpose ✈️',
    description: '$120.00 USD converted at ₹83.42. Help us tag this nicely for your visual graphs!',
    badge: 'Travel Tagging Pack',
    severity: 'low',
    amount: 10010,
    merchant: 'Booking.com Forex',
    date: '2026-05-16',
    choices: [
      { id: 'f1', label: 'Fun vacation stay!', description: 'Group it into Travel, Holidays & Flights.' },
      { id: 'f2', label: 'Cozy workspace lease!', description: 'Group it into Rent & Housing.' }
    ]
  }
];

export const BANK_INSIGHTS_DATABASE: Record<string, BankInsight[]> = {
  acc_hdfc: [
    {
      id: 'i_h1',
      text: 'Your standing car EMIs of ₹18,500 checked out perfectly on time! Plenty of sweet backup coins are remaining.',
      type: 'success',
      badge: 'All Clear!'
    },
    {
      id: 'i_h2',
      text: 'Cozy rent of ₹35,000 takes about 28.2% of your payroll drop. Keeping it under 30% is super healthy for your pocket! 🌟',
      type: 'info',
      badge: 'Wallet Health'
    }
  ],
  acc_icici: [
    {
      id: 'i_i1',
      text: 'Oh no! Resolving the duplicate bug on May 18 will instantly rescue a massive ₹72,000 credit limit slice back to your hands!',
      type: 'warning',
      badge: 'Unlocking limit'
    },
    {
      id: 'i_i2',
      text: 'Subscriptions like Netflix (₹800) and Apple (₹365) correctly flew out. Premium reward points are accumulating gracefully!',
      type: 'success',
      badge: 'Freebies Tracker'
    }
  ],
  acc_gpay: [
    {
      id: 'i_g1',
      text: 'Woohoo! Lots of cute UPI scans this cycle: Zepto, Swiggy, Uber and yummy coffee totaling ₹5,320 altogether.',
      type: 'info',
      badge: 'Quick Payments'
    },
    {
      id: 'i_g2',
      text: 'Zepto grocery drop was highly optimized this month! Let us try to keep those food cravings bundled together to save pocket delivery pennies.',
      type: 'success',
      badge: 'Smart Ordering'
    }
  ],
  acc_niyo: [
    {
      id: 'i_n1',
      text: 'Hooray! Met USD ($125.50) and EUR (€45.00) drops with exactly 0% markup fee! You saved about ₹1,240 in stupid bank fees. 💖',
      type: 'success',
      badge: 'Zero Markup Victory'
    },
    {
      id: 'i_n2',
      text: 'Booking.com hotel checkout (₹10,010) mapped. Invoice details are already packed up for you if you need to claim it back!',
      type: 'info',
      badge: 'Hotels Logged'
    }
  ]
};

export const RAW_PRESETS = {
  hdfc: `DATE,DESCRIPTION,AMOUNT,TYPE,ACCOUNT
2026-05-01,salary credit apex solutions,124000,CREDIT,acc_hdfc
2026-05-02,rent transfer hdfc auto,35000,DEBIT,acc_hdfc
2026-05-04,broadband access jio fiber,999,DEBIT,acc_hdfc
2026-05-05,tata power direct bill payment,4200,DEBIT,acc_hdfc
2026-05-09,hdfc car emi auto,18500,DEBIT,acc_hdfc
2026-05-12,cultfit premium membership,2000,DEBIT,acc_hdfc
2026-05-15,lic car insurance autopay,12000,DEBIT,acc_hdfc`,

  icici: `DATE,DESCRIPTION,AMOUNT,TYPE,ACCOUNT
2026-05-10,Netflix Premium subscription,800,DEBIT,acc_icici
2026-05-18,amzn prime checkout hardware,72000,DEBIT,acc_icici
2026-05-18,amzn prime checkout hardware (duplicate),72000,DEBIT,acc_icici
2026-05-19,Apple One family bundle,365,DEBIT,acc_icici`,

  gpay: `DATE,MERCHANT,AMOUNT,TYPE,ACCOUNT
2026-05-08,Airtel Recharge UPI,455,DEBIT,acc_gpay
2026-05-11,Zepto Groceries UPI,1000,DEBIT,acc_gpay
2026-05-14,Blinkit Midnight Munchies,1200,DEBIT,acc_gpay
2026-05-15,Zomato Food treats UPI,3000,DEBIT,acc_gpay
2026-05-22,Swiggy Food Delivery,800,DEBIT,acc_gpay
2026-05-24,Uber Rides Premium,1800,DEBIT,acc_gpay
2026-05-26,Tap Coffee Shop,320,DEBIT,acc_gpay`,

  niyo: `DATE,DESCRIPTION,CURR,AMOUNT,RATE,ACCOUNT
2026-05-14,STARBUCKS NEW YORK,USD,5.50,83.42,acc_niyo
2026-05-16,HOTEL BOOKING NYC,USD,120.00,83.42,acc_niyo
2026-05-20,DEUTSCHE BAHN TICKET,EUR,45.00,90.15,acc_niyo`
};

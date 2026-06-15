/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Upload, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  ArrowUpRight, 
  ArrowDownRight, 
  RefreshCw, 
  AlertCircle,
  Trash2,
  ChevronRight,
  Send,
  Sparkles,
  Calendar,
  CreditCard,
  Smartphone,
  Wallet,
  Compass,
  ArrowRight,
  Sparkle,
  HelpCircle,
  Lock,
  UserCheck
} from 'lucide-react';

import { Transaction, SourceAccount, DoubtQuestion, BankInsight } from './types';
import { 
  INITIAL_ACCOUNTS, 
  BASELINE_TRANSACTIONS, 
  INITIAL_DOUBTS, 
  BANK_INSIGHTS_DATABASE 
} from './data';

const themeStyles = {
  pacific: {
    bg: 'bg-gradient-to-tr from-cyan-50 via-slate-50 to-blue-50/50',
    card: 'bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm',
    accent: 'bg-cyan-500 text-white',
    textAccent: 'text-cyan-600',
  },
  bubblegum: {
    bg: 'bg-gradient-to-tr from-pink-50 via-slate-50 to-purple-50/50',
    card: 'bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm',
    accent: 'bg-pink-500 text-white',
    textAccent: 'text-pink-600',
  },
  sage: {
    bg: 'bg-gradient-to-tr from-emerald-50 via-slate-50 to-teal-50/50',
    card: 'bg-white/80 backdrop-blur-md border border-slate-100 shadow-sm',
    accent: 'bg-emerald-500 text-white',
    textAccent: 'text-emerald-600',
  }
};

export default function App() {
  // Authentication states
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otpCode, setOtpCode] = useState<string>('');
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // App core state
  const [activeStep, setActiveStep] = useState<'upload' | 'analysis' | 'doubts' | 'dashboard'>('upload');
  const [selectedTheme, setSelectedTheme] = useState<'pacific' | 'bubblegum' | 'sage'>('pacific');
  const [chartTab, setChartTab] = useState<'daily' | 'accumulative'>('daily');
  const [activeHoverPoint, setActiveHoverPoint] = useState<{ date: string; amount: number; title: string } | null>(null);

  // Filters
  const [startDate, setStartDate] = useState<string>('2026-05-01');
  const [endDate, setEndDate] = useState<string>('2026-05-28');
  const [tempStartDate, setTempStartDate] = useState<string>('2026-05-01');
  const [tempEndDate, setTempEndDate] = useState<string>('2026-05-28');
  const [datePreset, setDatePreset] = useState<'this_month' | 'last_month' | 'last_3_months' | 'custom'>('this_month');
  const [focusedAccountId, setFocusedAccountId] = useState<string | null>(null);

  // Upload metadata analysis
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string; content?: string }[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<{
    accounts: { name: string; type: string; startDate: string; endDate: string }[];
    gapWarnings: { accountName: string; message: string; severity: string }[];
  } | null>(null);

  // Ledger state
  const [accounts, setAccounts] = useState<SourceAccount[]>(INITIAL_ACCOUNTS);
  const [transactions, setTransactions] = useState<Transaction[]>(BASELINE_TRANSACTIONS);
  const [doubts, setDoubts] = useState<DoubtQuestion[]>(INITIAL_DOUBTS);
  const [isParsing, setIsParsing] = useState<boolean>(false);

  // Interactive user clarification logs
  const [userClarifications, setUserClarifications] = useState<Record<string, string>>({});
  const [tempDoubtChoices, setTempDoubtChoices] = useState<Record<string, string>>({});
  const [tempDoubtText, setTempDoubtText] = useState<Record<string, string>>({});
  const [isRefreshingDashboard, setIsRefreshingDashboard] = useState<boolean>(false);

  // Chat conversational assistant state
  const [chatInput, setChatInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'ai'; text: string; timestamp: string }[]>([
    { 
      sender: 'ai', 
      text: "SpendSense AI Pro ready. Ask me to cross-reference transactions, verify zero-markup Niyo Forex rates, or scan subscription auto-debits!", 
      timestamp: '09:44 AM' 
    }
  ]);

  const theme = themeStyles[selectedTheme];

  const handleMobileLogin = (e: FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length < 10) return;
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoggingIn(false);
    }, 1000);
  };

  const verifyOtp = (e: FormEvent) => {
    e.preventDefault();
    if (otpCode.length < 4) return;
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggingIn(false);
    }, 1200);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).map(f => ({
      name: f.name,
      size: `${Math.round(f.size / 1024)} KB`
    }));
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const handleAnalyzeUploads = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Hardcoded simulation results matching standard layout goals
      setAnalysisResult({
        accounts: [
          { name: 'HDFC Bank (Account 1)', type: 'Primary Savings', startDate: '2026-01-01', endDate: '2026-06-20' },
          { name: 'GPay App Logs', type: 'UPI Account', startDate: '2026-05-01', endDate: '2026-05-28' },
          { name: 'ICICI Bank (Account 2)', type: 'Credit Card', startDate: '2026-03-01', endDate: '2026-05-28' }
        ],
        gapWarnings: [
          { accountName: 'HDFC Bank (Account 1)', message: 'Notice: The statement ends on June 20, 2026. Last 10 days of June are missing.', severity: 'medium' },
          { accountName: 'GPay App Logs', message: 'Alert: Gap detected in statements. GPay UPI logs are missing the last 3 days of May.', severity: 'high' }
        ]
      });
      setIsAnalyzing(false);
      setActiveStep('analysis');
    }, 1500);
  };

  const startFullProcessing = () => {
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      setActiveStep('doubts');
    }, 1500);
  };

  const resolveDoubt = (doubtId: string, choiceId: string) => {
    setDoubts(prev => prev.map(d => d.id === doubtId ? { ...d, answeredId: choiceId } : d));

    if (doubtId === 'd1' && choiceId === 'c1') {
      let removedCount = 0;
      setTransactions(prev => prev.filter(tx => {
        if (tx.merchant === 'Amazon Prime Pay' && tx.amount === 72000) {
          removedCount++;
          return removedCount <= 1; 
        }
        return true;
      }));
    } else if (doubtId === 'd2') {
      setTransactions(prev => prev.map(tx => {
        if (tx.merchant === 'House Owner Transfer') {
          return {
            ...tx,
            category: choiceId === 'r1' ? 'Rent' : 'Investment',
            isAutopay: choiceId === 'r1'
          };
        }
        return tx;
      }));
    }
  };

  // Calculations for graphs and dashboard
  const activeTransactions = transactions.filter(tx => {
    const isWithinDate = tx.date >= startDate && tx.date <= endDate;
    const matchesAccount = focusedAccountId === null || tx.accountId === focusedAccountId;
    return isWithinDate && matchesAccount;
  });

  const totalInflow = activeTransactions.filter(tx => tx.type === 'credit').reduce((s, t) => s + t.amount, 0);
  const totalOutflow = activeTransactions.filter(tx => tx.type === 'debit').reduce((s, t) => s + t.amount, 0);
  const netSavings = totalInflow - totalOutflow;

  const appSpendsList = [
    { name: 'Amazon 📦', amount: activeTransactions.filter(tx => tx.merchant === 'Amazon Prime Pay').reduce((s, t) => s + t.amount, 0), subtitle: 'Prime & Shopping' },
    { name: 'Zepto 🥛', amount: activeTransactions.filter(tx => tx.merchant === 'Zepto Groceries Ltd').reduce((s, t) => s + t.amount, 0), subtitle: 'Quick groceries' },
    { name: 'Swiggy 🍔', amount: activeTransactions.filter(tx => tx.merchant === 'Swiggy Food Delivery').reduce((s, t) => s + t.amount, 0), subtitle: 'Food & Instamart run' }
  ].filter(a => a.amount > 0);

  const investmentSpendsList = [
    { name: 'Zerodha Kite 💎', amount: 45000, subtitle: 'Mutual Funds & Equity' },
    { name: 'Groww 🌱', amount: 15000, subtitle: 'SIP Savings' }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} text-slate-800 flex flex-col font-sans transition-all duration-300`}>
      
      {/* HEADER */}
      <header className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center bg-white/70 backdrop-blur-md border-b border-rose-100 gap-4 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-400 to-amber-400 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-rose-200">
            S
          </div>
          <div className="text-left">
            <h1 className="text-xl font-extrabold tracking-tight flex items-center gap-2 font-display text-slate-900">
              SpendSense AI Pro
            </h1>
            <p className="text-[11px] text-slate-500 font-medium tracking-wide">Multi-Statement Deduplication Platform</p>
          </div>
        </div>
        
        {isLoggedIn && (
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex gap-1.5 p-1 bg-slate-100/80 rounded-2xl border border-slate-200/40">
              {['pacific', 'bubblegum', 'sage'].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTheme(t as any)}
                  className={`text-[10px] font-black px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    selectedTheme === t ? 'bg-white shadow-md border-rose-250 text-slate-900' : 'border-transparent text-slate-500'
                  }`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* LOGIN SCREEN */}
      {!isLoggedIn ? (
        <div className="flex-1 flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-rose-400 to-amber-400"></div>
            
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto text-3xl mb-4 text-rose-500 shadow-inner">
              📱
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Login to SpendSense Pro</h2>
            <p className="text-xs text-slate-400 mt-2 mb-6">Enter your 10-digit mobile number to access your statement engine</p>

            {!isOtpSent ? (
              <form onSubmit={handleMobileLogin} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-450 text-xs font-mono font-bold">+91</span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter mobile number"
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-450 text-sm font-semibold tracking-wider"
                  />
                </div>
                <button
                  type="submit"
                  disabled={mobileNumber.length < 10 || isLoggingIn}
                  className="w-full py-3 bg-gradient-to-r from-rose-400 to-amber-400 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg hover:brightness-105 transition-all cursor-pointer"
                >
                  {isLoggingIn ? 'Sending OTP...' : 'Send Verification OTP'}
                </button>
              </form>
            ) : (
              <form onSubmit={verifyOtp} className="space-y-4">
                <div className="relative">
                  <input
                    type="password"
                    required
                    maxLength={4}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 4-digit OTP"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-center text-lg font-mono tracking-widest"
                  />
                </div>
                <button
                  type="submit"
                  disabled={otpCode.length < 4 || isLoggingIn}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-lg hover:brightness-105 transition-all cursor-pointer"
                >
                  {isLoggingIn ? 'Verifying...' : 'Verify & Enter Sandbox'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOtpSent(false)}
                  className="text-xs text-slate-450 hover:underline cursor-pointer block mx-auto mt-2"
                >
                  Back to mobile number
                </button>
              </form>
            )}
          </motion.div>
        </div>
      ) : (
        /* MAIN WORKSPACE */
        <div className="flex-1 p-6 max-w-7xl mx-auto w-full flex flex-col gap-6 overflow-y-auto">
          
          {/* STEPPER STATUS BAR */}
          <div className="w-full bg-white/40 border border-slate-200/50 p-4 rounded-3xl flex justify-between items-center gap-4">
            <div className="text-left">
              <span className="text-[10px] font-black uppercase text-rose-500 tracking-wider">SpendSense AI Stage</span>
              <p className="text-xs font-bold text-slate-700 mt-0.5">Step: {activeStep.toUpperCase()}</p>
            </div>
            <div className="flex gap-2">
              {['upload', 'analysis', 'doubts', 'dashboard'].map((step) => (
                <button
                  key={step}
                  onClick={() => {
                    if (step === 'upload' || analysisResult) {
                      setActiveStep(step as any);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all ${
                    activeStep === step ? 'bg-yellow-400 border-yellow-500 text-slate-900' : 'bg-white text-slate-400 border-slate-200/60'
                  }`}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          {/* SCREEN 1: FILE DRAG DROP UPLOAD */}
          {activeStep === 'upload' && (
            <div className="max-w-2xl mx-auto w-full py-6 space-y-6">
              <div className={`p-8 rounded-3xl ${theme.card} relative overflow-hidden flex flex-col items-center justify-center space-y-6`}>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-400 to-cyan-400"></div>

                <div className="text-center space-y-2">
                  <span className="text-4xl">📁</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Statement Intake Workspace</h2>
                  <p className="text-xs text-slate-500 max-w-md leading-relaxed">
                    Upload your HDFC, ICICI, and GPay statement sheets (PDF/CSV/Excel) to extract dates and run gap diagnostics.
                  </p>
                </div>

                <div className="w-full border-3 border-dashed border-cyan-300 hover:border-cyan-500 rounded-3xl p-10 bg-cyan-50/50 hover:bg-cyan-50 transition-all relative cursor-pointer shadow-inner">
                  <input type="file" multiple onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Upload className="w-12 h-12 text-cyan-500 animate-pulse" />
                    <p className="text-sm font-bold text-slate-700">Drag statement sheets here or browse</p>
                    <p className="text-[10px] text-slate-400 font-mono">Accepts HDFC, ICICI, GPAY exports</p>
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="w-full text-left bg-cyan-50/40 border border-cyan-100 p-4 rounded-2xl space-y-2">
                    <span className="text-[10px] font-bold uppercase text-cyan-800 block">Staged Statements ({uploadedFiles.length})</span>
                    <div className="space-y-1.5">
                      {uploadedFiles.map((f, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs p-2.5 bg-white border border-cyan-100/30 rounded-xl shadow-sm">
                          <span className="font-mono text-[11px] font-bold text-slate-700">📄 {f.name}</span>
                          <span className="text-[10px] font-semibold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded-full font-mono">{f.size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="w-full flex justify-end gap-3 pt-2">
                  <button
                    disabled={uploadedFiles.length === 0}
                    onClick={() => setUploadedFiles([])}
                    className="py-3 px-5 bg-slate-100 text-slate-650 rounded-xl text-xs font-bold hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    Clear Files
                  </button>
                  <button
                    onClick={handleAnalyzeUploads}
                    disabled={uploadedFiles.length === 0 || isAnalyzing}
                    className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl text-xs font-black uppercase text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-105"
                  >
                    {isAnalyzing ? <RefreshCw className="w-4 h-4 animate-spin" /> : '1st Step: Extract metadata & ranges'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 2: STATEMENT ANALYSIS & DATE GAP CHECK */}
          {activeStep === 'analysis' && analysisResult && (
            <div className="max-w-3xl mx-auto w-full py-4 space-y-6 text-left">
              <div className={`p-6 rounded-3xl ${theme.card} relative overflow-hidden flex flex-col gap-5`}>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>

                <div>
                  <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                    📊 Statement Range Diagnostic Report
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Below are the accounts identified by the processing agent, their coverage windows, and gap audits.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Detected Accounts & Timelines</h4>
                  {analysisResult.accounts.map((acc, idx) => (
                    <div key={idx} className="p-4 bg-white border border-slate-200 rounded-2xl flex justify-between items-center flex-wrap gap-4 shadow-sm">
                      <div className="text-left">
                        <span className="text-xs font-bold text-slate-900 block">{acc.name}</span>
                        <span className="text-[10px] text-slate-400 block uppercase font-mono mt-0.5">{acc.type}</span>
                      </div>
                      <div className="text-right bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 font-mono text-xs font-semibold">
                        {acc.startDate} <span className="text-slate-400">to</span> {acc.endDate}
                      </div>
                    </div>
                  ))}
                </div>

                {analysisResult.gapWarnings.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold uppercase text-rose-500 tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" /> Missing Days Warning (Alert Checks)
                    </h4>
                    <div className="space-y-2.5">
                      {analysisResult.gapWarnings.map((w, idx) => (
                        <div key={idx} className={`p-4 rounded-2xl border text-xs leading-relaxed flex gap-3 ${
                          w.severity === 'high' ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-black block uppercase text-[10px]">{w.accountName}</span>
                            <p className="mt-1 font-medium">{w.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-2xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-cyan-800 font-medium">
                    Please review if you have another statement log to fill the gaps. If you wish to proceed with the current data and reconcile overlaps, click the button below.
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveStep('upload')}
                    className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    Add More Statements
                  </button>
                  <button
                    onClick={startFullProcessing}
                    disabled={isParsing}
                    className="flex-1 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black uppercase text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-105"
                  >
                    {isParsing ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Proceed to deduplication & reconciliation'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 3: DOUBT RECONCILIATION BAR */}
          {activeStep === 'doubts' && (
            <div className="max-w-3xl mx-auto w-full py-4 space-y-6 text-left">
              <div className={`p-6 rounded-3xl ${theme.card} relative overflow-hidden flex flex-col gap-5`}>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400"></div>

                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                      🔎 AI Doubts Settle Panel
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      SpendSense AI Pro found 1 doubt per account requiring confirmation before unlocking full dashboard metrics.
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono">
                    <span className="font-extrabold text-cyan-600 bg-cyan-100 px-2 py-0.5 rounded-full">
                      {doubts.filter(d => d.answeredId).length}/{doubts.length} Resolved
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {doubts.map((doubt) => {
                    const isResolved = !!doubt.answeredId;
                    const chosenOption = doubt.choices.find(c => c.id === doubt.answeredId);
                    const selectedTempChoiceId = tempDoubtChoices[doubt.id] || doubt.answeredId || '';

                    return (
                      <div key={doubt.id} className={`p-5 rounded-2xl border transition-all ${
                        isResolved ? 'bg-emerald-50/50 border-emerald-200' : 'bg-amber-50/50 border-amber-200'
                      }`}>
                        <div className="flex justify-between items-center gap-2 mb-2">
                          <span className="text-[11px] font-black uppercase text-slate-800">{doubt.title}</span>
                          <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 shadow-sm">{doubt.badge}</span>
                        </div>
                        <p className="text-xs text-slate-650 leading-relaxed mb-3">{doubt.description}</p>
                        
                        <div className="p-3 bg-white border border-slate-200/60 rounded-xl flex justify-between text-[10px] font-mono text-slate-500 mb-4">
                          <span className="font-bold text-slate-700">{doubt.merchant}</span>
                          <span className="text-rose-600 font-bold">₹{doubt.amount.toLocaleString()}</span>
                        </div>

                        {isResolved ? (
                          <div className="flex items-center justify-between p-3.5 bg-emerald-100/50 rounded-xl text-xs text-emerald-800 border border-emerald-200">
                            <div>
                              <span className="font-extrabold block">Resolution:</span>
                              <span className="text-slate-600 text-[11px]">{chosenOption?.label} — {chosenOption?.description}</span>
                            </div>
                            <button
                              onClick={() => setDoubts(prev => prev.map(d => d.id === doubt.id ? { ...d, answeredId: undefined } : d))}
                              className="text-[10px] uppercase font-mono font-bold text-cyan-600 hover:underline cursor-pointer ml-3 shrink-0"
                            >
                              Change Choice
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {doubt.choices.map((choice) => (
                              <button
                                key={choice.id}
                                onClick={() => resolveDoubt(doubt.id, choice.id)}
                                className="text-left bg-white hover:bg-cyan-50/20 border border-slate-200 hover:border-cyan-300 p-3.5 rounded-xl transition-all cursor-pointer text-slate-750"
                              >
                                <span className="font-bold text-xs block text-slate-900">{choice.label}</span>
                                <span className="text-[10px] text-slate-500 mt-1 block leading-normal">{choice.description}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3 justify-end pt-3 border-t border-slate-100">
                  <button
                    onClick={() => setActiveStep('dashboard')}
                    className="flex-1 py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black uppercase text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-105"
                  >
                    Proceed to Dashboard ➔
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 4: FULL SPENDSENSE PRO DASHBOARD */}
          {activeStep === 'dashboard' && (
            <div className="space-y-6">
              
              {/* DATE RANGE FILTER CONTROL */}
              <div className={`p-5 rounded-3xl ${theme.card} flex flex-col xl:flex-row items-stretch justify-between gap-5`}>
                <div className="space-y-2 text-left">
                  <span className="text-[10px] font-extrabold uppercase text-rose-500 tracking-widest font-mono block">⚙️ Timeline Controller</span>
                  <h3 className="text-lg font-black text-slate-800 font-display uppercase tracking-tight">Pick Your Date Range 📅</h3>
                  <p className="text-xs text-slate-500 font-medium">Configure date scopes dynamically to run relative period comparison.</p>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200/50">
                    {['this_month', 'last_month', 'last_3_months'].map((p) => (
                      <button
                        key={p}
                        onClick={() => {
                          setDatePreset(p as any);
                          if (p === 'this_month') {
                            setTempStartDate('2026-05-01');
                            setTempEndDate('2026-05-28');
                          } else if (p === 'last_month') {
                            setTempStartDate('2026-04-01');
                            setTempEndDate('2026-04-30');
                          } else if (p === 'last_3_months') {
                            setTempStartDate('2026-03-01');
                            setTempEndDate('2026-05-28');
                          }
                        }}
                        className={`text-[10px] font-extrabold px-3 py-2 rounded-xl transition-all cursor-pointer ${
                          datePreset === p ? 'bg-white text-slate-900 shadow-md font-black' : 'text-slate-500'
                        }`}
                      >
                        {p.replace('_', ' ').toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <input
                      type="date"
                      value={tempStartDate}
                      onChange={(e) => setTempStartDate(e.target.value)}
                      className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none"
                    />
                    <span className="text-xs text-slate-450">to</span>
                    <input
                      type="date"
                      value={tempEndDate}
                      onChange={(e) => setTempEndDate(e.target.value)}
                      className="px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none"
                    />
                    <button
                      onClick={() => {
                        setStartDate(tempStartDate);
                        setEndDate(tempEndDate);
                      }}
                      className="py-1.5 px-4 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all cursor-pointer"
                    >
                      Go
                    </button>
                  </div>
                </div>
              </div>

              {/* INTEGRATED INSTITUTIONS GRIDS */}
              <div className="space-y-4 text-left">
                <h3 className="text-base font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                  🏦 Integrated Financial Institutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {accounts.map((acc) => {
                    const isFocused = focusedAccountId === acc.id;
                    const accountTxs = transactions.filter(t => t.accountId === acc.id && t.date >= startDate && t.date <= endDate);
                    const debits = accountTxs.filter(t => t.type === 'debit').reduce((s, t) => s + t.amount, 0);

                    return (
                      <div
                        key={acc.id}
                        onClick={() => setFocusedAccountId(isFocused ? null : acc.id)}
                        className={`p-5 rounded-3xl border cursor-pointer transition-all shadow-md flex flex-col justify-between min-h-[140px] ${
                          isFocused ? 'border-amber-400 bg-amber-50/10 ring-4 ring-amber-100/50 shadow-lg' : 'border-slate-200/80 bg-white hover:border-cyan-300'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono">{acc.name}</span>
                          </div>
                          <h4 className="text-lg font-black text-slate-800 mt-2">₹{acc.balance.toLocaleString()}</h4>
                          <span className="text-[9px] text-slate-400 block mt-1 uppercase font-mono">Total Debits: ₹{debits.toLocaleString()}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* DASHBOARD CHARTS SECTION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
                
                {/* SVG CATEGORY CIRCLE */}
                <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase text-slate-400 font-mono tracking-wider">Cumulative Category Outlay</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Breakdown of debits across defined sectors</p>
                  </div>
                  
                  <div className="my-6 flex items-center justify-center gap-4 relative">
                    <svg className="w-28 h-28 relative rotate-[-90deg]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#f1f5f9" strokeWidth="10" fill="transparent" />
                      <circle cx="50" cy="50" r="40" stroke="#f43f5e" strokeWidth="10" fill="transparent" strokeDasharray="60 100" />
                      <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="10" fill="transparent" strokeDasharray="30 100" strokeDashoffset="-60" />
                    </svg>
                    <div className="text-[10px] space-y-1.5 font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> FOOD & FUN</div>
                      <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> GROCERIES</div>
                    </div>
                  </div>
                </div>

                {/* SVG WAVEFORMS LINE GRAPH */}
                <div className="lg:col-span-8 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase text-slate-400 font-mono tracking-wider">Spending Waveforms</h3>
                    <p className="text-[10px] text-slate-500 font-medium">Splashes rollercoaster over the active filtered range</p>
                  </div>

                  <div className="h-44 w-full flex items-center justify-center my-4">
                    <svg className="w-full h-full" viewBox="0 0 300 120">
                      <line x1="20" y1="100" x2="280" y2="100" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="3 3" />
                      <path d="M 20 80 Q 80 20, 140 90 T 260 40 L 280 100 Z" fill="rgba(14, 165, 233, 0.1)" />
                      <path d="M 20 80 Q 80 20, 140 90 T 260 40" fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* BENTO GRID: APP CUMULATIVE SPENDING */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 text-left space-y-4 shadow-sm">
                <div>
                  <span className="text-[9px] font-mono font-bold text-rose-500 uppercase tracking-wider block">Cumulative Outlay</span>
                  <h4 className="text-base font-black text-slate-900 tracking-tight">Cumulative Food, Fun, Fiber & Fast Delivery billing</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {appSpendsList.map((app, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <span className="text-xs font-bold text-slate-800">{app.name}</span>
                      <h5 className="text-lg font-black text-slate-900 mt-2">₹{app.amount.toLocaleString()}</h5>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{app.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MUTUAL FUNDS & WEALTH SAVINGS TRACKER */}
              <div className="p-6 rounded-3xl bg-white border border-slate-100 text-left space-y-4 shadow-sm">
                <div>
                  <span className="text-[9px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">Wealth Preservation</span>
                  <h4 className="text-base font-black text-slate-900 tracking-tight">Mutual Funds, Stocks, Pension Accounts & SIP Savings Tracker</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  {investmentSpendsList.map((inv, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100 flex flex-col justify-between">
                      <span className="text-xs font-bold text-emerald-900">{inv.name}</span>
                      <h5 className="text-lg font-black text-emerald-950 mt-2">₹{inv.amount.toLocaleString()}</h5>
                      <span className="text-[10px] text-emerald-600 block mt-0.5">{inv.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}

"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6 py-16">
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-6 border border-rose-500/20">
        <AlertTriangle size={32} />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-3">
        System Malfunction Encountered
      </h1>
      
      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        An unexpected runtime exception occurred while rendering this module. Our telemetry has logged the incident.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
        >
          <RefreshCw size={16} />
          <span>Re-execute Pipeline</span>
        </button>

        <Link
          href="/"
          className="px-6 py-3 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-sm transition-all flex items-center gap-2"
        >
          <Home size={16} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

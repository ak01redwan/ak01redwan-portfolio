"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global crash exception:", error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
            <AlertCircle size={32} />
          </div>
          
          <h2 className="text-2xl font-extrabold mb-2 text-white">Application Exception</h2>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            The application experienced a critical fault in the root layout.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => reset()}
              className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={16} />
              <span>Retry Render</span>
            </button>
            <a
              href="/"
              className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-sm transition-all"
            >
              Reload from Origin
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}

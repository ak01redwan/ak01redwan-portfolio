import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <span className="text-6xl font-bold font-mono text-emerald-500 mb-4">404</span>
      <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
        The page or case study you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md transition-all"
      >
        Return to Home
      </Link>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = (localStorage.getItem('theme') as Theme | null) ?? null;
    const preferredDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const nextTheme: Theme = stored ?? (preferredDark ? 'dark' : 'light');
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    applyTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-core/60 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      <span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 p-0.5 transition dark:bg-slate-800">
        <span
          className="h-4 w-4 rounded-full bg-white shadow-sm transition dark:translate-x-4 dark:bg-slate-200"
          aria-hidden
        />
      </span>
      <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}

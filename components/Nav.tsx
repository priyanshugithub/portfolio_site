'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#chat', label: 'Chat' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-900/70 dark:bg-slate-950/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#top" className="group inline-flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight text-ink dark:text-slate-100">Priyanshu</span>
          <span className="hidden text-sm font-medium text-slate-500 group-hover:text-core dark:text-slate-400 dark:group-hover:text-sky-300 sm:inline">
            Portfolio
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-slate-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-core/60 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            Menu
          </button>
          <a
            href="mailto:priyanshumain@gmail.com"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white sm:inline-flex"
          >
            Email me
          </a>
          <ThemeToggle />
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white/80 px-6 pb-5 pt-4 backdrop-blur dark:border-slate-900/70 dark:bg-slate-950/60 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:priyanshumain@gmail.com"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              Email me
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  target?: string;
  rel?: string;
  download?: boolean | string;
};

const styles: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-ink text-white hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white',
  secondary:
    'border border-slate-300 bg-white text-ink hover:border-core hover:text-core dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:text-sky-300',
  ghost:
    'text-slate-600 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-900/60 dark:hover:text-slate-50',
};

export default function ButtonLink({ href, children, variant = 'primary', target, rel, download }: Props) {
  const safeRel =
    rel ?? (target === '_blank' ? 'noreferrer' : undefined);

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      download={download}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-core/60 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

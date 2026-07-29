export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 text-sm text-slate-500 dark:border-slate-900/70 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          © {new Date().getFullYear()} Priyanshu Tyagi. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="font-semibold text-slate-600 hover:text-core dark:text-slate-300 dark:hover:text-sky-300" href="#top">
            Back to top
          </a>
          <a
            className="font-semibold text-slate-600 hover:text-core dark:text-slate-300 dark:hover:text-sky-300"
            href="mailto:priyanshumain@gmail.com"
          >
            priyanshumain@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

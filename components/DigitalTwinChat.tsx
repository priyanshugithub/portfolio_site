'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Role = 'user' | 'assistant';

type Msg = {
  role: Role;
  content: string;
};

const starterPrompts = [
  'Summarise Priyanshu’s career in 5 bullets.',
  'What roles has Priyanshu had in Berlin?',
  'Which skills are strongest for product engineering roles?',
  'Tell me about the GoBOLT trip optimization impact.',
];

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: 'assistant',
      content:
        "Hi — I’m Priyanshu’s Digital Twin. Ask me anything about Priyanshu’s career, experience, education, and skills.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function send(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setError(null);
    setLoading(true);

    const nextMessages: Msg[] = [...messages, { role: 'user', content }];
    setMessages(nextMessages);
    setInput('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages
            // The API will ignore non user/assistant roles, but we keep it explicit.
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        const message = data?.error ? String(data.error) : 'Failed to get response.';
        throw new Error(message);
      }

      const reply = typeof data?.message === 'string' ? data.message : '';
      if (!reply.trim()) throw new Error('Empty reply from server.');

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="chat"
      className="rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-glow dark:border-slate-900/70 dark:bg-slate-950/60 sm:p-10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-slate-50">Digital Twin chat</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Ask questions about Priyanshu’s career journey. Powered by OpenRouter.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {starterPrompts.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => send(p)}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white disabled:opacity-50 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:bg-slate-950/60"
              disabled={loading}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.38fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-900/70 dark:bg-slate-900/30 sm:p-6">
          <div className="max-h-[420px] space-y-4 overflow-auto pr-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === 'user'
                    ? 'ml-auto w-fit max-w-[90%] rounded-2xl bg-ink px-4 py-3 text-sm leading-7 text-white dark:bg-slate-100 dark:text-slate-950'
                    : 'w-fit max-w-[90%] rounded-2xl bg-white px-4 py-3 text-sm leading-7 text-slate-700 shadow-sm dark:bg-slate-950/60 dark:text-slate-200'
                }
              >
                {m.content}
              </div>
            ))}
            {loading ? (
              <div className="w-fit max-w-[90%] rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm dark:bg-slate-950/60 dark:text-slate-400">
                Thinking…
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about experience, skills, education…"
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-core focus:ring-4 focus:ring-core/10 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:focus:border-sky-500 dark:focus:ring-sky-500/10"
            />
            <button
              type="submit"
              disabled={!canSend}
              className="inline-flex items-center justify-center rounded-2xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white"
            >
              Send
            </button>
          </form>

          {error ? (
            <p className="mt-3 text-sm font-semibold text-red-600 dark:text-red-400">{error}</p>
          ) : null}
        </div>

        <aside className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-900/70 dark:bg-slate-950/60">
          <h3 className="text-lg font-semibold text-ink dark:text-slate-50">What it can answer</h3>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            <li>• Roles, dates, and locations</li>
            <li>• Key achievements and impact</li>
            <li>• Skills and focus areas</li>
            <li>• Education, certifications, and languages</li>
          </ul>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            If something isn’t in the portfolio data, it will say so (no guessing).
          </p>
        </aside>
      </div>
    </section>
  );
}

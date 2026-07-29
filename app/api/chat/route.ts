import { digitalTwinSystemPrompt } from '../../../lib/profile';

export const runtime = 'nodejs';

type ChatRole = 'system' | 'user' | 'assistant';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

function coerceMessages(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];

  const result: ChatMessage[] = [];
  for (const item of input) {
    if (!item || typeof item !== 'object') continue;
    const record = item as Record<string, unknown>;
    const role = record.role;
    const content = record.content;
    if ((role !== 'user' && role !== 'assistant') || typeof content !== 'string') continue;

    // Basic size guard.
    const trimmed = content.trim();
    if (!trimmed) continue;
    result.push({ role, content: trimmed.slice(0, 8000) });
  }

  // Keep only the last ~12 messages to control token usage.
  return result.slice(-12);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: 'Missing OPENROUTER_API_KEY environment variable.' },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    const userMessages = coerceMessages(body?.messages);

    if (userMessages.length === 0) {
      return Response.json({ error: 'No messages provided.' }, { status: 400 });
    }

    const payload = {
      model: 'openai/gpt-oss-120b',
      temperature: 0.4,
      max_tokens: 600,
      messages: [{ role: 'system', content: digitalTwinSystemPrompt() }, ...userMessages],
    };

    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Optional but recommended by OpenRouter for attribution.
        'HTTP-Referer': process.env.OPENROUTER_SITE_URL ?? 'http://localhost:3000',
        'X-Title': process.env.OPENROUTER_APP_NAME ?? 'Priyanshu Portfolio',
      },
      body: JSON.stringify(payload),
    });

    const data = await upstream.json().catch(() => null);

    if (!upstream.ok) {
      return Response.json(
        {
          error: 'OpenRouter request failed.',
          status: upstream.status,
          details: data,
        },
        { status: 502 }
      );
    }

    const content = data?.choices?.[0]?.message?.content;
    if (typeof content !== 'string' || !content.trim()) {
      return Response.json(
        { error: 'Empty response from model.', details: data },
        { status: 502 }
      );
    }

    return Response.json({ message: content });
  } catch (err) {
    return Response.json(
      { error: 'Unexpected server error.', details: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}

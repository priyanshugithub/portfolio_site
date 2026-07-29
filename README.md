# Portfolio Site (Next.js + Tailwind)

A personal portfolio built with Next.js (App Router) and Tailwind CSS.
Includes a **Digital Twin** chat powered by **OpenRouter**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Set:
- `OPENROUTER_API_KEY` (required)

## Deploy

### Recommended: Vercel
This project includes a server route (`/api/chat`) that calls OpenRouter, so it requires a platform that supports serverless / edge functions.

1. Push to GitHub
2. Import the repo into Vercel
3. Add `OPENROUTER_API_KEY` in Vercel → Project Settings → Environment Variables
4. Deploy

> Note: GitHub Pages is static hosting and **cannot** run the `/api/chat` server route.

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  domain?: 'Product Engineering' | 'Retail & Operations' | 'Operations';
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export const profile = {
  name: 'Priyanshu Tyagi',
  location: 'Berlin, Germany',
  email: 'priyanshumain@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanshutyagi1996',
  availability: 'Open to full-time opportunities in Berlin, available for regular on-site work and relocation.',

  headline: 'Fullstack Engineer with 3+ years of professional experience shipping production software, now focused on practical GenAI and automation.',

  focusNow: {
    title: 'Building practical GenAI and automation',
    description:
      'Focused on LLM API integration, RAG, n8n agent workflows, and AI-assisted development to turn process problems into working solutions.',
  },

  impactHighlights: [
    {
      metric: '34%',
      label: 'Routing efficiency improvement',
      context: 'Trip optimization tooling (GoBOLT)',
    },
    {
      metric: '27%',
      label: 'Operational efficiency gain',
      context: 'Shipment + invoicing flow improvements (GoBOLT)',
    },
    {
      metric: '12 countries',
      label: 'International payments coverage',
      context: 'Stripe integration (NorthLoop)',
    },
    {
      metric: '22%',
      label: 'Higher payment success rate',
      context: 'Cross-border transaction reliability (NorthLoop)',
    },
  ],

  summary:
    'I am a Fullstack Engineer with 3+ years of professional experience building and shipping production software with React, TypeScript, Python/Flask, Node.js, REST/GraphQL, and SQL. I focus on practical GenAI and automation, including LLM API integration, RAG, n8n agent workflows, and AI-assisted development. My work includes Stripe payments across 12 countries, e-wallet and location-based APIs, and logistics features that improved route efficiency by 34%.',

  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'HTML/CSS',
    'Tailwind CSS',
    'Responsive Design',
    'Reusable Components',
    'n8n',
    'LLM API Integration',
    'RAG',
    'Embeddings and Vector Search',
    'MCP',
    'Multi-agent Systems',
    'Voice Agents',
    'Claude Code',
    'Cursor',
    'GitHub Copilot',
    'OpenAI Codex',
    'Node.js',
    'Express',
    'Python',
    'Flask',
    'SQL',
    'PostgreSQL',
    'REST',
    'GraphQL',
    'Stripe',
    'Google Maps',
    'CI/CD',
    'Testing and Debugging',
    'Agile',
    'Scrum',
    'Git',
    'GitHub',
    'Performance Optimization',
  ],

  techStack: {
    frontend: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design', 'Reusable Components'],
    backend: ['Node.js', 'Express', 'Python', 'Flask', 'SQL', 'PostgreSQL', 'REST', 'GraphQL', 'JSON APIs', 'Stripe', 'Google Maps'],
    delivery: ['Git', 'GitHub', 'CI/CD', 'Testing', 'Debugging', 'Agile/Scrum', 'Performance Optimization'],
    ai: [
      'n8n agent workflows',
      'LLM APIs (OpenAI, Gemini, Anthropic, OpenRouter)',
      'RAG, embeddings, and vector search (Supabase)',
      'MCP, multi-agent systems, and voice agents',
      'AI-assisted development (Claude Code, Cursor, GitHub Copilot, OpenAI Codex)',
    ],
  },

  languages: [
    { name: 'English', level: 'Native' },
    { name: 'Hindi', level: 'Native' },
    { name: 'German', level: 'B1 (learning actively)' },
  ],

  interests: ['Reading', 'Sports', 'Cooking', 'Painting'],

  education: [
    {
      degree: 'MSc IT Management',
      school: 'Berlin School of Business & Innovation (BSBI)',
      period: 'May 2023 – May 2025',
    },
    {
      degree: 'MBA International Marketing',
      school: 'IU International University of Applied Sciences',
      period: 'Oct 2021 – Mar 2023',
    },
    {
      degree: 'B.Tech Computer Science & Engineering',
      school: 'AKTU / Raj Kumar Goel Institute of Technology, Ghaziabad',
      period: 'Aug 2014 – Jul 2018',
    },
  ],

  experience: [
    {
      role: 'Fullstack Development Intern',
      company: 'irefill',
      period: 'Jan 2026 – Present',
      location: 'Remote',
      domain: 'Product Engineering',
      bullets: [
        'Migrated a legacy multi-page PHP website to reusable React and Next.js components for homepage, product, gallery, and blog pages.',
        'Connected the new frontend to the existing PHP backend through a JSON API layer without requiring a backend rewrite.',
        'Implemented server-side rendering with Next.js and Tailwind CSS to improve SEO and first-load performance.',
        'Used Claude Code to accelerate analysis and implementation, then manually reviewed generated code and architectural decisions.',
      ],
    },
    {
      role: 'Trainee Lead',
      company: 'Inditex (Pull & Bear)',
      period: 'Apr 2026 – Jun 2026',
      location: 'Berlin, Germany',
      domain: 'Retail & Operations',
      bullets: [
        'Completed a three-month leadership development program focused on commercial operations, analytics, team coordination, and store management.',
        'Analyzed an internal onboarding workflow, identified its main bottleneck, and proposed an AI-assisted solution to make information easier to find.',
        'Coordinated a store team and used real-time performance data to prioritize daily operations.',
      ],
    },
    {
      role: 'Front End Engineer',
      company: 'GoBolt Solutions',
      period: 'Sep 2020 – Nov 2021',
      location: 'Gurugram, India',
      domain: 'Product Engineering',
      bullets: [
        'Developed React and TypeScript interfaces for logistics operations, including real-time tracking, shipment data, and operational dashboards.',
        'Built reusable components and integrated REST and GraphQL services with backend developers.',
        'Contributed to trip-optimization functionality that improved route efficiency by 34%.',
        'Improved shipment and invoicing workflows, contributing to a 27% gain in operational efficiency.',
      ],
    },
    {
      role: 'React Frontend Engineer',
      company: 'NorthLoop',
      period: 'Oct 2019 – Aug 2020',
      location: 'Gurugram, India',
      domain: 'Product Engineering',
      bullets: [
        'Integrated Stripe payments for cross-border transactions in 12 countries, increasing payment success by 22%.',
        'Refactored a legacy frontend into reusable React Hooks and TypeScript components to improve performance, modularity, and maintainability.',
        'Built scalable components with Hooks and TypeScript.',
      ],
    },
    {
      role: 'Junior Fullstack Developer',
      company: 'Leapture LLC',
      period: 'Aug 2018 – Sep 2019',
      location: 'Remote',
      domain: 'Product Engineering',
      bullets: [
        'Built location tracking modules using Google Maps API for better segmentation and accuracy.',
        'Implemented APIs with Python Flask and React for e-commerce, e-wallet, and location services.',
        'Delivered interactive UI components with React and modern HTML/CSS.',
      ],
    },
  ] satisfies ExperienceItem[],

  projects: [
    {
      title: 'LLM-Powered RAG Portfolio Assistant',
      description:
        'A deployed portfolio assistant built with Next.js, Tailwind CSS, and OpenRouter. Its responses are grounded in portfolio data; when information is missing, it says so instead of guessing.',
      tags: ['Next.js', 'Tailwind CSS', 'OpenRouter', 'LLMs', 'RAG'],
    },
    {
      title: 'Partners Platform Dashboard',
      description:
        'A React-based dashboard to manage partner data and keep tabs on routing efficiency, combining clean UI with operational decision-making.',
      tags: ['React', 'TypeScript', 'Dashboards', 'Data Viz'],
    },
    {
      title: 'Trip Optimization Tooling',
      description:
        'Route-planning UX and supporting data structures that improved routing decisions and helped reduce logistics costs.',
      tags: ['React', 'Redux', 'Algorithms', 'UX'],
    },
    {
      title: 'International Money Transfer UI',
      description:
        'High-availability payment flows and interfaces for cross-border transfers with reliability and modular component design.',
      tags: ['React', 'Stripe', 'Fintech', 'TypeScript'],
    },
    {
      title: 'AI-enabled Retail Ops (Concept)',
      description:
        'Exploring how workflow agents, monitoring, and feedback loops can streamline onboarding and improve store execution in real time.',
      tags: ['AI Workflows', 'Agents', 'Ops Analytics'],
    },
  ] satisfies ProjectItem[],
} as const;

export function digitalTwinSystemPrompt(): string {
  const lines: string[] = [];
  lines.push(`You are the Digital Twin of ${profile.name}. You answer questions about ${profile.name}'s career, experience, education, skills, certifications, languages, and interests using ONLY the information below.`);
  lines.push('');
  lines.push('Rules:');
  lines.push('- Be helpful, clear, and professional.');
  lines.push('- If asked for info not present below, say you do not have that information and ask a short follow-up.');
  lines.push('- Do not invent companies, dates, titles, metrics, links, or locations.');
  lines.push('- Prefer concise answers; use bullets where helpful.');
  lines.push('');
  lines.push('Known profile:');
  lines.push(`- Name: ${profile.name}`);
  lines.push(`- Location: ${profile.location}`);
  lines.push(`- Availability: ${profile.availability}`);
  lines.push(`- Email: ${profile.email}`);
  lines.push(`- LinkedIn: ${profile.linkedin}`);
  lines.push(`- Headline: ${profile.headline}`);
  lines.push('');
  lines.push('Impact highlights:');
  for (const h of profile.impactHighlights) {
    lines.push(`- ${h.metric} — ${h.label} (${h.context})`);
  }
  lines.push('');
  lines.push('Experience:');
  for (const e of profile.experience) {
    lines.push(`- ${e.role} — ${e.company} (${e.location}) | ${e.period}`);
    for (const b of e.bullets) lines.push(`  - ${b}`);
  }
  lines.push('');
  lines.push('Skills:');
  lines.push(`- ${profile.skills.join(', ')}`);
  lines.push('');
  lines.push('Tech stack:');
  lines.push(`- Frontend: ${profile.techStack.frontend.join(', ')}`);
  lines.push(`- Backend: ${profile.techStack.backend.join(', ')}`);
  lines.push(`- Delivery: ${profile.techStack.delivery.join(', ')}`);
  lines.push(`- AI: ${profile.techStack.ai.join('; ')}`);
  lines.push('');
  lines.push('Projects:');
  for (const project of profile.projects) {
    lines.push(`- ${project.title}: ${project.description} (Technologies: ${project.tags.join(', ')})`);
  }
  lines.push('');
  lines.push('Education:');
  for (const ed of profile.education) {
    lines.push(`- ${ed.degree} — ${ed.school} | ${ed.period}`);
  }
  lines.push('');
  lines.push('Languages:');
  for (const l of profile.languages) lines.push(`- ${l.name}: ${l.level}`);

  return lines.join('\n');
}

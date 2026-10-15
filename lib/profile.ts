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
  availability: 'Open to Fullstack Engineer roles in Munich. Available immediately and open to relocation.',

  headline: 'Fullstack Engineer with 3+ years of experience building customer-facing applications with React, TypeScript, APIs, and AI integrations.',

  focusNow: {
    title: 'Exploring AI integrations and workflows',
    description:
      'Exploring practical AI integrations through agentic workflows, LLM evaluation, RAG systems, and monitoring loops that improve real business processes.',
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
    'I am a Fullstack Engineer with 3+ years of experience building customer-facing applications with React, TypeScript, and JavaScript. I have integrated REST and GraphQL APIs and worked with Node.js, Express, PostgreSQL, Python, and Flask across product and personal projects. I also build AI-enabled applications with LLM APIs, RAG, and agentic workflows.',

  skills: [
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
    'TypeScript',
    'ReactJS',
    'Redux',
    'Next.js',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'SQL',
    'Python',
    'Flask',
    'Docker',
    'Agile',
    'Scrum',
    'Git',
    'GitHub',
    'GitLab',
    'Agentic AI',
    'LLMs and RAG',
    'n8n',
  ],

  techStack: {
    frontend: ['ReactJS', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Styled Components', 'HTML/CSS', 'JavaScript'],
    backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Python (Flask)', 'SQL', 'REST APIs', 'GraphQL'],
    delivery: ['Docker', 'Agile', 'Scrum', 'Git', 'GitHub', 'GitLab'],
    ai: [
      'Agentic AI',
      'LLMs and RAG',
      'LLM evaluation and comparison',
      'Monitoring and feedback loops',
      'n8n, Cursor, Vibe Code, OpenClaw',
    ],
  },

  languages: [
    { name: 'Hindi', level: 'Native / C2' },
    { name: 'English', level: 'Full professional / C2' },
    { name: 'German', level: 'B1 (actively learning)' },
  ],

  interests: ['Reading', 'Sports', 'Cooking', 'Painting'],

  certifications: [],

  currentLearning: [
    'Udemy: AI Builder: Create Agents, Voice Agents & Automations in n8n (currently pursuing)',
    'Udemy: AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents (currently pursuing)',
  ],

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
      role: 'Frontend Development Intern',
      company: 'irefill',
      period: 'Jan 2026 – Present',
      location: 'Remote',
      domain: 'Product Engineering',
      bullets: [
        'Migrated a legacy PHP multi-page website to reusable, responsive React and Next.js components.',
        'Integrated the existing PHP backend through a JSON API layer and implemented server-side rendering for SEO and initial page performance.',
        'Used Tailwind CSS for responsive UI development and Claude Code to accelerate codebase analysis, migration, and debugging.',
        'Identified a live spam-link injection vulnerability during a technical audit and documented remediation steps.',
      ],
    },
    {
      role: 'Trainee Lead in Fashion',
      company: 'Inditex',
      period: 'Apr 2026 – Jun 2026',
      location: 'Berlin, Germany',
      domain: 'Retail & Operations',
      bullets: [
        'Completed a leadership program focused on commercial and store-operations analytics.',
        'Unblocked onboarding by documenting bottlenecks and supporting decisions around AI architecture and workflow design.',
        'Improved in-app operational visibility with real-time metrics and workflow-agent style orchestration.',
      ],
    },
    {
      role: 'Sales Assistant',
      company: 'Uniqlo',
      period: 'Sep 2025 – Dec 2025',
      location: 'Berlin, Germany',
      domain: 'Retail & Operations',
      bullets: [
        'Delivered customer-first service in German and English on a high-volume retail floor.',
        'Handled replenishment, fitting rooms, delivery orders, stock routines, and merchandising standards.',
        'Managed reservations and supported in-store tailoring orders and follow-ups.',
      ],
    },
    {
      role: 'Front End Engineer',
      company: 'GoBolt Solutions',
      period: 'Sep 2020 – Nov 2021',
      location: 'Gurugram, India',
      domain: 'Product Engineering',
      bullets: [
        'Modernized two SaaS products with React 17, Redux, Hooks, and improved maintainability.',
        'Delivered routing and tracking UX: trip optimization, real-time tracking, advanced filtering/sorting, and data visualization.',
        'Improved operational flows by integrating APIs across shipment and invoicing experiences (GraphQL/REST).',
      ],
    },
    {
      role: 'React Frontend Engineer',
      company: 'NorthLoop',
      period: 'Oct 2019 – Aug 2020',
      location: 'Gurugram, India',
      domain: 'Product Engineering',
      bullets: [
        'Shipped fintech UI for international transfers with Stripe payments across 12 countries.',
        'Refactored a legacy React codebase to improve performance and reduce feature delivery friction.',
        'Built reusable component foundations with TypeScript and Hooks.',
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
  lines.push('Certifications:');
  for (const c of profile.certifications) lines.push(`- ${c}`);
  lines.push('');
  lines.push('Current learning:');
  for (const c of profile.currentLearning) lines.push(`- ${c}`);
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

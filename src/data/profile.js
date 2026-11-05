// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// Anything marked TODO is placeholder text — replace it with your real info.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Shabbir Ahmad Shahid",
  shortName: "Shabbir",
  initials: "SA",
  role: "Full-Stack Developer & AI Engineer",
  tagline: "Laravel · React · WordPress · AI\u00A0Agents",
  intro:
    "I build web apps, WordPress sites and AI that does real work: RAG chatbots, autonomous agents and MCP integrations. I develop with AI agents and custom skills, then review every line before it ships.",
  photo: "./profile.png", // TODO: replace with your own photo if this is a stock image
  yearsExperience: "6+",
  projectsCount: "20+",
  location: "Pakistan", // TODO: city, country
  availability: "Open to new opportunities",
  cvUrl: "", // TODO: e.g. "./Shabbir-Ahmad-CV.pdf" (put the file in /public). Button hides while empty.

  contact: {
    email: "shabbir789shahid@gmail.com",
    phone: "03498695879",
    phoneIntl: "+923498695879",
    linkedin: "", // TODO: e.g. "https://www.linkedin.com/in/your-handle"
    github: "", // TODO: e.g. "https://github.com/your-handle"
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "ai", label: "AI" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "Hey, I'm Shabbir. I've spent 6+ years building for the web and shipped 20+ projects, from Laravel back ends and React front ends to WordPress and WooCommerce sites that business owners can run on their own.",
    "Today a big part of my work is AI. I build RAG chatbots that answer from a company's own documents instead of making things up, agents that call tools and APIs to finish multi-step tasks, and MCP servers that connect AI models to real apps and databases.",
    "AI is also how I build. I work in Claude Code with custom skills and subagents that plan, write, test and research in parallel, with MCP connections to docs, GitHub and the browser. That lets me deliver in days what used to take weeks.",
    "Speed is only worth it if the code holds up, so I'm strict about quality. Every change, whether I wrote it, a teammate did or an AI did, gets a proper review for bugs, security and maintainability before it goes live.",
  ],
  // TODO: tweak these to match the work you most want to be hired for.
  services: [
    {
      icon: "fullstack",
      title: "Full-Stack Web Apps",
      text: "Dashboards, portals and SaaS products with Laravel and React, including REST APIs, payments and third-party integrations.",
    },
    {
      icon: "wordpress",
      title: "WordPress & WooCommerce",
      text: "Fast, easy-to-edit business sites and online stores, plus custom themes and plugins when off-the-shelf won't cut it.",
    },
    {
      icon: "chat",
      title: "AI Chatbots with RAG",
      text: "Support and sales assistants trained on your docs, FAQs and data, so answers are accurate, sourced and on-brand.",
    },
    {
      icon: "ai",
      title: "AI Agents & MCP",
      text: "Agents that use tools, call APIs and complete real tasks, connected to your systems through Model Context Protocol servers.",
    },
    {
      icon: "vibe",
      title: "AI-Powered Development",
      text: "Vibe coding done right: I turn ideas into working MVPs fast with AI agents and skills, then harden them for real users.",
    },
    {
      icon: "review",
      title: "Code Review",
      text: "A second pair of eyes on pull requests and AI-written code: bugs, security holes, performance and readability.",
    },
  ],
};

// The "AI Engineering" section.
export const ai = {
  intro:
    "I don't just use AI, I build with it and ship it. Here's what I make with AI, and the AI-first workflow I use to build everything else.",
  builds: [
    {
      icon: "chat",
      title: "RAG chatbots",
      text: "Chatbots that answer from your own documents, website or database instead of guessing. I build the whole pipeline: chunking, embeddings, vector search and prompts that keep answers grounded and on-brand.",
    },
    {
      icon: "agent",
      title: "Autonomous agents",
      text: "Agents that plan, call tools and APIs, and finish multi-step jobs on their own: qualifying leads, processing data, drafting replies and updating records.",
    },
    {
      icon: "mcp",
      title: "MCP servers",
      text: "Model Context Protocol servers that plug AI assistants like Claude straight into your apps, databases and internal tools, so they can safely read and act on real data.",
    },
    {
      icon: "spark",
      title: "AI inside your product",
      text: "AI features added to existing Laravel, React and WordPress apps: smart search, summaries, content generation and in-app assistants.",
    },
  ],
  workflow: [
    {
      title: "Plan with AI",
      text: "I turn the idea into a clear spec and task list with AI, catching edge cases before a line of code is written.",
    },
    {
      title: "Build with agents & skills",
      text: "I code in Claude Code with custom skills and subagents that research, build and test in parallel.",
    },
    {
      title: "Connect through MCP",
      text: "MCP gives my AI tools direct access to docs, databases, GitHub and the browser, so they work from real context, not guesses.",
    },
    {
      title: "Review every line",
      text: "AI writes fast; I make sure it's right. Each change gets a human code review, tests and a security check before it ships.",
    },
  ],
  // TODO: remove anything you haven't used.
  stack: [
    "Claude API",
    "OpenAI API",
    "RAG",
    "Embeddings",
    "Vector search",
    "MCP",
    "Tool calling",
    "Claude Code",
    "Skills & subagents",
    "Prompt engineering",
  ],
};

// level: "Advanced" | "Intermediate" | "Learning"
// TODO: check the levels, especially in the WordPress and AI groups.
export const skills = [
  {
    group: "Frontend",
    sub: "Development",
    items: [
      { name: "HTML5", icon: "html", level: "Advanced" },
      { name: "CSS3", icon: "css", level: "Advanced" },
      { name: "JavaScript", icon: "js", level: "Advanced" },
      { name: "React.js", icon: "react", level: "Intermediate" },
    ],
  },
  {
    group: "Backend",
    sub: "Development",
    items: [
      { name: "PHP", icon: "php", level: "Advanced" },
      { name: "Laravel", icon: "laravel", level: "Advanced" },
      { name: "Node.js", icon: "node", level: "Intermediate" },
      { name: "Express.js", icon: "express", level: "Intermediate" },
    ],
  },
  {
    group: "WordPress",
    sub: "Sites & Stores",
    items: [
      { name: "WordPress", icon: "wordpress", level: "Advanced" },
      { name: "WooCommerce", icon: "woo", level: "Advanced" },
      { name: "Elementor", icon: "elementor", level: "Advanced" },
      { name: "Custom Themes & Plugins", icon: "plugin", level: "Intermediate" },
    ],
  },
  {
    group: "Code",
    sub: "Quality & Workflow",
    items: [
      { name: "Code Review", icon: "review", level: "Advanced" },
      { name: "Git & GitHub", icon: "github", level: "Advanced" },
      { name: "REST APIs", icon: "api", level: "Advanced" },
      { name: "MySQL", icon: "mysql", level: "Advanced" },
    ],
  },
  {
    group: "AI",
    sub: "Engineering",
    wide: true,
    items: [
      { name: "AI Agents", icon: "agent", level: "Advanced" },
      { name: "RAG", icon: "rag", level: "Advanced" },
      { name: "MCP Servers", icon: "mcp", level: "Advanced" },
      { name: "Chatbots", icon: "chat", level: "Advanced" },
      { name: "LLM APIs", icon: "llm", level: "Advanced" },
      { name: "Prompt Engineering", icon: "prompt", level: "Advanced" },
      { name: "Claude Code", icon: "terminal", level: "Advanced" },
      { name: "Skills & Subagents", icon: "vibe", level: "Advanced" },
    ],
  },
];

// Newest first. TODO: replace with your real work history / education.
export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Company name", // TODO
    period: "20XX – Present", // TODO
    points: [
      "TODO: What you built or own here, e.g. Built and maintained Laravel + React web apps for clients.",
      "TODO: A measurable result, e.g. Cut page load time by 40% by optimising queries and caching.",
    ],
  },
  {
    role: "Web Developer",
    company: "Company name", // TODO
    period: "20XX – 20XX", // TODO
    points: [
      "TODO: Main responsibility, e.g. Developed responsive websites from Figma designs.",
      "TODO: Tech or achievement, e.g. Integrated payment gateways and third-party APIs.",
    ],
  },
];

// TODO: these describe the kind of work you've done. Rename them to your real
// projects, fix the details, add screenshots in /public and live/code links.
export const projects = [
  {
    name: "AI Support Chatbot (RAG)",
    description:
      "A support assistant that answers customer questions from the company's own docs and FAQs, shows its sources, and hands off to a human when it isn't sure.",
    image: "./web-design-3411373_1280.webp",
    tags: ["RAG", "Embeddings", "LLM API", "Laravel"],
    live: "",
    code: "",
  },
  {
    name: "AI Agent with MCP Tools",
    description:
      "An agent that connects to business tools through MCP servers, looks up data, runs multi-step tasks and reports back, turning hours of manual work into minutes.",
    image: "./web-development-coding-cross-platform-260nw-1128653108.webp",
    tags: ["AI Agents", "MCP", "Tool calling", "Node.js"],
    live: "",
    code: "",
  },
  {
    name: "Laravel + React Web App",
    description:
      "A full-stack business app with a Laravel API, a React dashboard, user roles, payments and third-party integrations, built with an AI-assisted workflow and fully code-reviewed.",
    image: "./web-design-3411373_1280.webp",
    tags: ["Laravel", "React", "MySQL", "REST API"],
    live: "",
    code: "",
  },
];

// Only real client quotes, please. The section stays hidden while this is empty.
// Example: { quote: "…", name: "Client Name", title: "CEO, Company" }
export const testimonials = [];

// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// Anything marked TODO is placeholder text — replace it with your real info.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Shabbir Ahmad Shahid",
  shortName: "Shabbir",
  initials: "SA",
  role: "Full-Stack Developer",
  tagline: "Laravel & React.js",
  intro:
    "I build fast, scalable web applications end to end — from clean, responsive React interfaces to solid Laravel and Node.js back ends.",
  photo: "./profile.png", // TODO: replace with your own photo if this is a stock image
  yearsExperience: "3+",
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
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack web developer with more than three years of experience turning ideas into reliable, production-ready websites and web apps. My main stack is Laravel on the back end and React.js on the front end.",
    "I care about clean code, fast load times and interfaces that feel simple to use. Whether it's a business website, an admin dashboard or a custom API, I like owning the whole journey: planning, building, testing and deploying.",
  ],
  // TODO: tweak these to match the work you most want to be hired for.
  services: [
    {
      icon: "frontend",
      title: "Frontend Development",
      text: "Responsive, accessible interfaces in React.js, HTML, CSS and modern JavaScript.",
    },
    {
      icon: "backend",
      title: "Backend & APIs",
      text: "Secure REST APIs, authentication and business logic with Laravel, PHP, Node.js and Express.",
    },
    {
      icon: "fullstack",
      title: "Full-Stack Web Apps",
      text: "Complete products from database design to deployment, built to scale and easy to maintain.",
    },
  ],
};

// level: "Advanced" | "Intermediate" | "Learning"
export const skills = [
  {
    group: "Frontend",
    items: [
      { name: "HTML5", icon: "html", level: "Advanced" },
      { name: "CSS3", icon: "css", level: "Advanced" },
      { name: "JavaScript", icon: "js", level: "Advanced" },
      { name: "React.js", icon: "react", level: "Intermediate" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "PHP", icon: "php", level: "Advanced" },
      { name: "Laravel", icon: "laravel", level: "Advanced" },
      { name: "Node.js", icon: "node", level: "Intermediate" },
      { name: "Express.js", icon: "express", level: "Intermediate" },
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

// TODO: replace with your real projects. Put screenshots in /public.
export const projects = [
  {
    name: "Project one",
    description:
      "TODO: One or two sentences on what it does, who it's for and your role in it.",
    image: "./web-design-3411373_1280.webp",
    tags: ["Laravel", "React", "MySQL"],
    live: "",
    code: "",
  },
  {
    name: "Project two",
    description:
      "TODO: One or two sentences on what it does, who it's for and your role in it.",
    image: "./web-development-coding-cross-platform-260nw-1128653108.webp",
    tags: ["React", "Node.js", "Express"],
    live: "",
    code: "",
  },
  {
    name: "Project three",
    description:
      "TODO: One or two sentences on what it does, who it's for and your role in it.",
    image: "./web-design-3411373_1280.webp",
    tags: ["PHP", "Laravel"],
    live: "",
    code: "",
  },
];

// Only real client quotes, please. The section stays hidden while this is empty.
// Example: { quote: "…", name: "Client Name", title: "CEO, Company" }
export const testimonials = [];

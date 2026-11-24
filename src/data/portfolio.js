/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — no component changes needed.
 */

export const profile = {
  name: "Jyothish Goud",
  initials: "JG",
  role: "AI & Full-Stack Developer",
  // Rotated in the hero section
  roles: ["AI Enthusiast", "Software Developer", "Full-Stack Engineer", "Problem Solver"],
  headline: "I build AI-powered products and full-stack web apps.",
  tagline:
    "Engineering student at Maharaja Institute of Technology, Mysore — exploring AI, software development and full-stack engineering.",
  location: "Mysore, Karnataka, India",
  college: "Maharaja Institute of Technology, Mysore",

  email: "jyothishgoud06@gmail.com",
  github: "https://github.com/Jyothish5955l",
  linkedin: "https://www.linkedin.com/in/jyothish-goud-2a1aab35a",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm Jyothish Goud, an engineering student at Maharaja Institute of Technology, Mysore, with a strong interest in Artificial Intelligence, software development and full-stack engineering.",
    "I enjoy turning ideas into working products — designing clean, responsive interfaces in React and building efficient backends with FastAPI and Python. I care about writing code that is readable, maintainable and built to last.",
    "Right now I'm going deeper into AI and full-stack development while shipping projects like an AI prompt debugger, a personal safety app and a retrieval-augmented document assistant.",
  ],
  stats: [
    { label: "Projects built", value: "3" },
    { label: "Core stack", value: "React · FastAPI" },
    { label: "Focus", value: "AI · Full-Stack" },
    { label: "Based in", value: "Mysore, India" },
  ],
};

export const skillGroups = [
  {
    key: "languages",
    title: "Languages",
    icon: "code",
    blurb: "The languages I use to solve problems.",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    key: "frameworks",
    title: "Frameworks & Libraries",
    icon: "layers",
    blurb: "What I reach for when building products.",
    skills: ["React", "FastAPI"],
  },
  {
    key: "tools",
    title: "Tools & Workflow",
    icon: "git",
    blurb: "How I ship and collaborate on code.",
    skills: ["Git", "GitHub"],
  },
];

/**
 * Project cards.
 * NOTE: descriptions and tech tags are starting points — update them to match
 * the real repos. Leave `github` empty to show the "Coming soon" state.
 */
export const projects = [
  {
    title: "AI Prompt Debugger",
    description:
      "Analyses, scores and debugs AI prompts so you can understand why a prompt fails and how to improve it — turning prompt engineering into something measurable instead of guesswork.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/Jyothish5955l/AI-PROMPT-DEBUGGER",
    demo: "",
  },
  {
    title: "SOS Guardian",
    description:
      "A personal safety app that lets a user trigger an emergency alert with their live location and notify trusted contacts instantly when they need help.",
    tech: ["Python", "FastAPI", "React"],
    github: "https://github.com/Jyothish5955l/Sos_project",
    demo: "",
  },
  {
    title: "DocuMind · AI-RAG",
    description:
      "A retrieval-augmented document assistant: upload your documents and ask questions in natural language, with grounded answers pulled straight from your own sources.",
    tech: ["Python", "FastAPI", "RAG", "LLM"],
    github: "https://github.com/Jyothish5955l/AI-RAG",
    demo: "",
  },
 ];

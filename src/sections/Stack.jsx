import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../animations/ScrollReveal';
import Spotlight from '../animations/Spotlight';
import { TECH_STACK } from '../data/portfolioData';
import {
  Layers,
  Box,
  Wrench,
  Send,
  Bot,
  Terminal,
  Database,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const categoryMeta = {
  Frontend: {
    displayName: "Frontend & Mobile",
    description: "Component hierarchies, reactive state pipelines, cross-platform mobile architectures & high-framerate UIs.",
    icon: Layers,
    accent: "#ff5722",
  },
  Backend: {
    displayName: "Backend & Services",
    description: "RESTful endpoints, Node/Express middleware, authentication layers & high-throughput API integrations.",
    icon: Box,
    accent: "#ff6b35",
  },
  Database: {
    displayName: "Database Architecture",
    description: "Relational schema design, optimized indexing, relational queries & data integrity in MySQL.",
    icon: Database,
    accent: "#ff7849",
  },
  Tools: {
    displayName: "Developer Toolchain",
    description: "Version control workflows, API testing collections, native mobile SDKs & compilation pipelines.",
    icon: Wrench,
    accent: "#ff8a65",
  },
  Publishing: {
    displayName: "App Store Publishing",
    description: "Production release tracks, Play Console rollouts & App Store Connect compliance validation.",
    icon: Send,
    accent: "#ff9e80",
  },
  "AI Tools": {
    displayName: "AI & Agentic Tooling",
    description: "LLM-assisted engineering workflows, contextual reasoning, inline generation & autonomous agent pipelines.",
    icon: Bot,
    accent: "#ff6b35",
  },
};

/* =========================================================================
   Authentic Brand SVG Logos in Orange Color Palette (#ff5722)
   ========================================================================= */

// --- FRONTEND ---
// Official React.js Atom
function ReactLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.25" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}

// Official React Native Mobile Atom
function ReactNativeLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="3.5" fill="currentColor" fillOpacity="0.1" />
      <line x1="10" y1="18.5" x2="14" y2="18.5" strokeWidth="1.8" />
      <ellipse cx="12" cy="9.5" rx="5.5" ry="2.2" transform="rotate(-30 12 9.5)" />
      <ellipse cx="12" cy="9.5" rx="5.5" ry="2.2" transform="rotate(30 12 9.5)" />
      <circle cx="12" cy="9.5" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Official JavaScript Badge
function JavaScriptLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16.5c.5.8 1.2 1.2 2.2 1.2 1.2 0 2-.7 2-2.1v-5.1h-1.8v5.1c0 .5-.3.8-.8.8-.4 0-.7-.2-.9-.6l-.7.7zm7.4.1c.7.4 1.5.7 2.3.7 1.3 0 2.1-.7 2.1-1.7 0-1-.6-1.5-1.9-2-1.4-.6-2.2-1.3-2.2-2.4 0-1.3 1-2.2 2.5-2.2.9 0 1.6.3 2.1.6l-.5 1.3c-.5-.3-1-.5-1.6-.5-.8 0-1.3.5-1.3 1.1 0 .8.5 1.2 1.7 1.7 1.5.6 2.4 1.3 2.4 2.6 0 1.4-1.1 2.4-2.8 2.4-1 0-1.9-.3-2.5-.8l.4-1.2z" />
    </svg>
  );
}

// Official HTML5 Shield
function HTML5Logo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3zm14.8 5.7h-9l.2 2.3h8.6l-.7 7.7-4.9 1.4-4.9-1.4-.3-3.6h2.2l.2 1.8 2.8.8 2.8-.8.3-3.4H6.8l-.6-7.2h11.8l-.2 2.4z" />
    </svg>
  );
}

// Official CSS3 Shield
function CSS3Logo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 2l1.6 18.2L12 23l7.4-2.8L21 2H3zm14.7 5.7H9.2l.2 2.3h8l-.7 7.7-4.7 1.3-4.7-1.3-.3-3.6h2.2l.2 1.8 2.6.7 2.6-.7.3-3.3H6.8l-.6-7.2h11.7l-.2 2.3z" />
    </svg>
  );
}

// --- BACKEND ---
// Official Node.js Hexagonal Runtime Logo
function NodeJSLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L20.5 7.4V16.6L12 21.5L3.5 16.6V7.4L12 2.5Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M12 2.5L20.5 7.4V16.6L12 21.5L3.5 16.6V7.4L12 2.5Z" />
      <path d="M9.5 8.5v6c0 .8.6 1.5 1.5 1.5h2c.8 0 1.5-.7 1.5-1.5v-6" strokeWidth="1.8" />
      <line x1="7.5" y1="12" x2="16.5" y2="12" strokeWidth="1.8" />
    </svg>
  );
}

// Official Express.js Monogram Badge
function ExpressJSLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 8.5h2.5l1.8 2.8 1.8-2.8h2.5l-3 4.3 3.2 4.7h-2.6l-1.9-3-1.9 3H5.8l3.2-4.7-3-4.3zm9.5 0h2.5v9h-2.5v-9z" />
    </svg>
  );
}

// Official REST APIs Architecture & Gateway Icon
function RestAPILogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="4" width="8" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="14" y="14" width="8" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
      <path d="M6 10v4a2 2 0 0 0 2 2h6" />
      <path d="M18 14v-4a2 2 0 0 0-2-2h-6" />
      <polyline points="12 6 10 8 12 10" />
      <polyline points="12 18 14 16 12 14" />
    </svg>
  );
}

// --- DATABASE ---
// Official MySQL Dolphin (Sakila) & Relational DB Mark
function MySQLLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.5 3c-4.2 0-7.8 2.8-9 6.8-.4 1.3-.5 2.8-.2 4.2.4 2 1.6 3.8 3.3 5 1.8 1.2 4 1.8 6.2 1.7 1.8-.1 3.6-.7 5.1-1.8.8-.6 1.4-1.3 1.9-2.2.3-.6.6-1.3.7-2 .2-1.3-.1-2.7-.8-3.8-.9-1.4-2.3-2.4-3.9-2.9-1-.3-2.1-.4-3.2-.2-.3-.6-.8-1.2-1.4-1.6-.8-.6-1.8-.9-2.8-.9-.5 0-1.1.1-1.6.3 1.3-1.6 3.3-2.6 5.7-2.6zm-1.8 6.8c.8 0 1.5.4 1.9 1.1-.6.1-1.2.3-1.8.6-.5.3-1 .7-1.4 1.1-.3-.6-.4-1.3-.2-2 .2-.5.8-.8 1.5-.8z" />
      <ellipse cx="12" cy="18" rx="8" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// --- TOOLS ---
// Official Git Branching Rhombus Logo
function GitLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.5 10.7L13.3 2.5a1.7 1.7 0 0 0-2.4 0L8.5 4.9l3.1 3.1a2 2 0 0 1 2.5 2.5l3 3a2 2 0 1 1-1.2 1.2l-2.8-2.8v4.6a2 2 0 1 1-1.8 0V11.2a2 2 0 0 1-1-2.6L7.2 5.5 2.5 10.2a1.7 1.7 0 0 0 0 2.4l8.2 8.2a1.7 1.7 0 0 0 2.4 0l8.4-8.4a1.7 1.7 0 0 0 0-2.4l-.001.001z" fill="currentColor" fillOpacity="0.14" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      <circle cx="17.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="9.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Official GitHub Octocat Mark
function GitHubLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

// Official VS Code Origami Ribbon Logo
function VSCodeLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.6 2.1l-9.8 8.8-4.5-3.4L1 9.1l3.7 2.9L1 14.9l2.3 1.6 4.5-3.4 9.8 8.8 4.4-2.1V4.2l-4.4-2.1zm0 5.4v9l-6-4.5 6-4.5z" />
    </svg>
  );
}

// Official Postman Flying Spaceman Hero Badge
function PostmanLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="9.5" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7.8 4.7l-3.6-1.5-.7 1.8 2.4 1-2.9 2.5-.9-1.2-1.6 1.2 1.8 2.4 4.5-3.9 1-2.3z" />
    </svg>
  );
}

// Official Android Bugdroid Robot Head
function AndroidLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.83 3.23 12.94 3 12 3c-.94 0-1.83.23-2.64.63L7.88 2.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.72 5.25 5.5 7.21 5.5 9.5h13c0-2.29-1.22-4.25-2.97-5.34zM9 7.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

// Official Apple Xcode Developer Hammer Logo
function XcodeLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18.7 6.3l-1-1a1 1 0 0 0-1.4 0l-1.8 1.8 2.4 2.4 1.8-1.8a1 1 0 0 0 0-1.4zm-5.6 2.2l-8.8 8.8V19h1.7l8.8-8.8-1.7-1.7zM7.5 4h3v2h-3zm-3 3h2v3h-2zm0 4h2v3h-2z" />
    </svg>
  );
}

// --- PUBLISHING ---
// Official Google Play Store Faceted Triangle
function GooglePlayLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.6 2.3c-.4.4-.6 1-.6 1.7v16c0 .7.2 1.3.6 1.7l.1.1 9-9v-.2l-9.1-9.3v-1zm12.3 8.3l-2.6-2.6-9.7-5.5c.3-.2.8-.2 1.3 0l11 6.3zm0 2.8l-11 6.3c-.5.2-1 .2-1.3 0l9.7-5.5 2.6-2.6v1.8zm1.8-.9l2.8 1.6c.9.5.9 1.4 0 1.9l-2.8 1.6-2.1-2.1v-.1l2.1-2.9z" />
    </svg>
  );
}

// Official Apple App Store Connect "A" Icon
function AppStoreLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 5.2l5.2 9.5h-1.8l-1.2-2.3H9.8l-1.2 2.3H6.8L12 5.2zm-1.4 5.7h2.8L12 8.5l-1.4 2.4z" />
    </svg>
  );
}

// --- AI TOOLS ---
// Official OpenAI / ChatGPT Hexagonal Rosette
function OpenAILogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.28 9.82a6 6 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.51 2.9A6.07 6.07 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 6 6 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zm-9.02 12.61a4.5 4.5 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.8.8 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.59a4.5 4.5 0 0 1-4.49 4.49zm-9.66-4.13a4.5 4.5 0 0 1-.54-3.01l.14.08 4.79 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.74 19.95a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.5 4.5 0 0 1 2.37-1.98v5.69a.77.77 0 0 0 .38.67l5.82 3.36-2.02 1.17a.08.08 0 0 1-.07 0l-4.83-2.79A4.5 4.5 0 0 1 2.34 7.9zm16.6 3.85L13.1 8.36 15.12 7.2a.08.08 0 0 1 .07 0l4.83 2.79a4.5 4.5 0 0 1-.68 8.1v-5.67a.8.8 0 0 0-.4-.67zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86L6.29 11.7a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08L8.7 5.46a.8.8 0 0 0-.39.68zm1.1-2.37l2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5z" />
    </svg>
  );
}

// Official GitHub Copilot Robot Visor Icon
function CopilotLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5a7.5 7.5 0 0 0-7.5 7.5v2.8a3.7 3.7 0 0 0 3.7 3.7h7.6a3.7 3.7 0 0 0 3.7-3.7V10A7.5 7.5 0 0 0 12 2.5z" fill="currentColor" fillOpacity="0.12" />
      <rect x="2.5" y="10" width="2" height="4.5" rx="1" fill="currentColor" />
      <rect x="19.5" y="10" width="2" height="4.5" rx="1" fill="currentColor" />
      <path d="M7 11a1.5 1.5 0 0 1 1.5-1.5h7a1.5 1.5 0 0 1 1.5 1.5v1.2a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 12.2V11z" fill="currentColor" />
      <circle cx="9.6" cy="11.6" r="1.1" fill="#0a0a0f" stroke="none" />
      <circle cx="14.4" cy="11.6" r="1.1" fill="#0a0a0f" stroke="none" />
      <path d="M8.5 16.8v1.8a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-1.8" />
    </svg>
  );
}

// Official Cursor 3D Isometric Cube
function CursorLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z" fill="currentColor" fillOpacity="0.15" />
      <polygon points="12,2.5 20.5,7.5 12,12 3.5,7.5" fill="currentColor" fillOpacity="0.25" />
      <line x1="12" y1="12" x2="12" y2="21.5" />
      <line x1="12" y1="12" x2="20.5" y2="7.5" />
      <line x1="12" y1="12" x2="3.5" y2="7.5" />
    </svg>
  );
}

// Official Anthropic Claude Radiant Starburst Logo
function ClaudeLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.5c.55 0 1 .45 1 1v4.83l3.41-3.41a1 1 0 1 1 1.41 1.41L14.41 8.74h4.84a1 1 0 1 1 0 2h-4.84l3.41 3.41a1 1 0 1 1-1.41 1.41L13 12.16v4.84a1 1 0 1 1-2 0v-4.84l-3.41 3.41a1 1 0 1 1-1.41-1.41l3.41-3.41H4.75a1 1 0 1 1 0-2h4.84L6.18 5.33a1 1 0 1 1 1.41-1.41L11 7.33V2.5c0-.55.45-1 1-1z" />
      <circle cx="12" cy="9.74" r="1.5" />
    </svg>
  );
}

// Official Cline Autonomous Agent Mascot Logo
function ClineLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.2v3.3" />
      <circle cx="12" cy="2.2" r="1.2" fill="currentColor" />
      <rect x="3.5" y="5.5" width="17" height="15" rx="4" fill="currentColor" fillOpacity="0.12" />
      <rect x="6.5" y="8.5" width="11" height="5" rx="1.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9.5" cy="11" r="1" fill="currentColor" />
      <circle cx="14.5" cy="11" r="1" fill="currentColor" />
      <path d="M8.5 16.5l2-1.5-2-1.5" strokeWidth="1.5" />
      <line x1="12" y1="16.5" x2="15.5" y2="16.5" strokeWidth="1.5" />
    </svg>
  );
}

// Official Google Antigravity Agentic Coding Emblem
function AntigravityLogo({ size = 38, className = "text-[#ff5722]" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12,19.5 4.5,6.5 19.5,6.5" fill="currentColor" fillOpacity="0.18" />
      <ellipse cx="12" cy="12" rx="9.5" ry="4.2" transform="rotate(-22 12 12)" strokeDasharray="3 2" />
      <circle cx="12" cy="11" r="1.6" fill="currentColor" />
      <path d="M9 3.2l3-1.8 3 1.8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function renderTechIcon(name, category, size = 38) {
  const lower = (name || '').toLowerCase().trim();

  // 1. FRONTEND
  if (lower === 'react.js' || lower === 'react' || (lower.includes('react') && !lower.includes('native'))) {
    return <ReactLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('react native')) {
    return <ReactNativeLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('javascript') || lower === 'js') {
    return <JavaScriptLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('html')) {
    return <HTML5Logo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('css')) {
    return <CSS3Logo size={size} className="text-[#ff5722]" />;
  }

  // 2. BACKEND
  if (lower.includes('node')) {
    return <NodeJSLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('express')) {
    return <ExpressJSLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('rest') || lower.includes('api')) {
    return <RestAPILogo size={size} className="text-[#ff5722]" />;
  }

  // 3. DATABASE
  if (lower.includes('mysql') || lower.includes('sql')) {
    return <MySQLLogo size={size} className="text-[#ff5722]" />;
  }

  // 4. TOOLS
  if (lower === 'git') {
    return <GitLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('github')) {
    return <GitHubLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('vs code') || lower.includes('vscode')) {
    return <VSCodeLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('postman')) {
    return <PostmanLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('android')) {
    return <AndroidLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('xcode')) {
    return <XcodeLogo size={size} className="text-[#ff5722]" />;
  }

  // 5. PUBLISHING
  if (lower.includes('play') || lower.includes('google play')) {
    return <GooglePlayLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('app store') || lower.includes('connect')) {
    return <AppStoreLogo size={size} className="text-[#ff5722]" />;
  }

  // 6. AI TOOLS
  if (lower.includes('chatgpt') || lower.includes('gpt')) {
    return <OpenAILogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('copilot')) {
    return <CopilotLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('cursor')) {
    return <CursorLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('claude')) {
    return <ClaudeLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('cline')) {
    return <ClineLogo size={size} className="text-[#ff5722]" />;
  }
  if (lower.includes('antigravity')) {
    return <AntigravityLogo size={size} className="text-[#ff5722]" />;
  }

  // Fallback to Category Icon
  const FallbackIcon = categoryMeta[category]?.icon || Terminal;
  return <FallbackIcon size={size} className="text-[#ff5722]" />;
}

export default function Stack() {
  const categories = Object.keys(TECH_STACK);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedTech, setSelectedTech] = useState({
    ...TECH_STACK[categories[0]][0],
    category: categories[0]
  });

  const isUserInteractingRef = useRef(false);
  const timeoutRef = useRef(null);

  // Smooth Category Jump Handler
  const scrollToCategory = (cat) => {
    setActiveCategory(cat);
    const element = document.getElementById(`stack-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`);
    if (element) {
      const yOffset = -140; // Account for fixed navbar + sticky filters
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // User Selection with Interaction Pause
  const handleSelectTech = (tech, category) => {
    setSelectedTech({ ...tech, category });
    setActiveCategory(category);
    isUserInteractingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 1800);
  };

  // IntersectionObserver to dynamically detect current category during page window scroll
  useEffect(() => {
    const observerCallback = (entries) => {
      if (isUserInteractingRef.current) return;

      const visibleEntries = entries.filter((e) => e.isIntersecting);
      if (visibleEntries.length > 0) {
        const topEntry = visibleEntries.reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
        );
        const cat = topEntry.target.getAttribute('data-stack-category');
        if (cat && cat !== activeCategory) {
          setActiveCategory(cat);
          const firstTech = TECH_STACK[cat]?.[0];
          if (firstTech) {
            setSelectedTech({ ...firstTech, category: cat });
          }
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-15% 0px -40% 0px',
      threshold: 0.1,
    });

    const categoryElements = document.querySelectorAll('[data-stack-category]');
    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeCategory]);

  const activeIndex = categories.indexOf(selectedTech.category || activeCategory);
  const currentCategoryData = categoryMeta[selectedTech.category || activeCategory] || categoryMeta.Frontend;

  return (
    <section
      id="stack"
      className="section-wrapper w-full relative py-24 sm:py-32 lg:py-36 bg-[#060609] border-t border-white/[0.08]"
    >
      {/* Background Ambient Lights (isolated so they never cause horizontal scroll) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ff5722]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ff6b35]/5 rounded-full blur-[140px]" />
      </div>

      <div className="page-container w-full max-w-[1400px] mx-auto px-5 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#ff5722] tracking-widest uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
                <span>05 // ARSENAL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                ENGINEERING STACK
              </h2>
            </div>
            <p className="font-mono text-xs text-[#94a3b8] max-w-sm">
              Verified technologies & tools utilized across enterprise web, mobile, and spatial workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            TWO-COLUMN STICKY SPLIT-SCROLL ARCHITECTURE
            Parent grid container: naturally sized to fit all right-side content.
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          {/* Left Column: Sticky Central Hub Display */}
          <div className="w-full lg:col-span-5 stack-sticky-panel lg:sticky lg:top-28 z-20 mb-8 lg:mb-0">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0f] border border-white/[0.08] relative overflow-hidden shadow-2xl shadow-black/80 flex flex-col justify-between min-h-[480px]">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5722]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Panel Top HUD Header */}
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] text-[#ff6b35] uppercase tracking-wider mb-6 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_8px_#ff5722] animate-pulse" />
                    <span className="font-bold">CORE ARCHITECTURAL IDENTITY</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] text-[#cbd5e1]">
                    {selectedTech.category || activeCategory}
                  </div>
                </div>

                {/* Animated Dynamic Tech Presentation Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTech.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center py-2"
                  >
                    {/* Visual Icon Node Graphic */}
                    <div className="relative mb-5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#ff5722]/20 via-[#0d0d14] to-white/5 border border-[#ff5722]/40 flex items-center justify-center shadow-[0_0_35px_rgba(255,87,34,0.22)]">
                        {renderTechIcon(selectedTech.name, selectedTech.category || activeCategory)}
                      </div>
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#ff5722] text-black font-mono text-[10px] font-bold tracking-widest uppercase shadow-md">
                        {selectedTech.level || "Verified"}
                      </div>
                    </div>

                    {/* Technology Name */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                      {selectedTech.name}
                    </h3>

                    {/* Category & Capability Subtitle */}
                    <div className="text-xs font-mono text-[#ff7849] uppercase tracking-wider mb-4">
                      {currentCategoryData.displayName}
                    </div>

                    {/* Architectural Description (reserved height to prevent vertical jitter) */}
                    <div className="w-full p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-[#cbd5e1] leading-relaxed text-left">
                      <p className="min-h-[48px]">
                        {selectedTech.desc || "Core architectural foundation for modern digital products and production systems."}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Panel Bottom Progress HUD & Scroll Tracker */}
              <div className="pt-4 mt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#64748b] mb-2.5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-[#ff5722]" />
                    <span className="text-[#94a3b8]">CATEGORY {activeIndex + 1} OF {categories.length}</span>
                  </span>
                  <span className="text-[#ff5722] font-semibold">VERIFIED IN RESUME</span>
                </div>

                {/* Progress Indicator Steps */}
                <div className="grid grid-cols-6 gap-1.5 w-full">
                  {categories.map((cat, i) => (
                    <button
                      key={cat}
                      onClick={() => scrollToCategory(cat)}
                      title={`Jump to ${cat}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex
                          ? 'bg-[#ff5722] shadow-[0_0_8px_#ff5722]'
                          : i < activeIndex
                          ? 'bg-[#ff5722]/40'
                          : 'bg-white/10 hover:bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="mt-2 text-center">
                  <span className="text-[10px] font-mono text-[#475569]">
                    HOVER OR CLICK ANY NODE • SCROLL TO EXPLORE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Normal Page Scrolling Content
              - NO nested scrollbar
              - NO overflow-y: auto
              - NO fixed height
              - Category filters sticky at top of right column
              - All skill categories and cards move upward with normal page scrolling
              ========================================================================= */}
          <div className="w-full lg:col-span-7">
            {/* Category Filters: Sticky within right column only */}
            <div className="sticky top-20 sm:top-24 z-10 py-3 mb-8 bg-[#060609]/90 backdrop-blur-md border-b border-white/[0.08] flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isCurrent = (selectedTech.category || activeCategory) === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => scrollToCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#ff5722] text-black font-bold shadow-[0_0_12px_rgba(255,87,34,0.35)]'
                        : 'bg-white/[0.03] text-[#94a3b8] hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Skills Content: Normal Document Flow */}
            <div>
              {categories.map((cat, catIdx) => {
                const meta = categoryMeta[cat] || categoryMeta.Frontend;
                const CatIcon = meta.icon || Layers;
                const items = TECH_STACK[cat] || [];

                return (
                  <div
                    key={cat}
                    id={`stack-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    data-stack-category={cat}
                    className="mb-14 scroll-mt-36"
                  >
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722]">
                          <CatIcon size={15} />
                        </div>
                        <h3 className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
                          0{catIdx + 1} // {meta.displayName}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-[#64748b]">
                        {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                      {items.map((item) => {
                        const isSelected = selectedTech.name === item.name;
                        return (
                          <Spotlight
                            key={item.name}
                            spotlightColor="rgba(255, 87, 34, 0.22)"
                            spotlightSize={180}
                            className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                              isSelected
                                ? 'bg-[#ff5722]/12 border-[#ff5722] text-white shadow-[0_0_18px_rgba(255,87,34,0.18)]'
                                : 'bg-white/[0.02] border-white/[0.06] text-[#94a3b8] hover:border-white/[0.2] hover:bg-white/[0.04]'
                            }`}
                          >
                            <div
                              onClick={() => handleSelectTech(item, cat)}
                              onMouseEnter={() => handleSelectTech(item, cat)}
                              className="h-full flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-1.5">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                                      {renderTechIcon(item.name, cat, 14)}
                                    </div>
                                    <span className="text-sm font-bold text-white tracking-tight truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                  {isSelected && (
                                    <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_6px_#ff5722] shrink-0" />
                                  )}
                                </div>
                                <div className="text-[11px] font-mono text-[#ff7849]">
                                  {item.level ? `Role: ${item.level}` : "Commercial"}
                                </div>
                              </div>

                              <p className="text-[11px] text-[#64748b] line-clamp-2 mt-2 leading-relaxed">
                                {item.desc}
                              </p>

                              <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-[#475569]">
                                <span>INSPECT</span>
                                <ArrowRight size={11} className={isSelected ? 'text-[#ff5722]' : 'text-[#475569]'} />
                              </div>
                            </div>
                          </Spotlight>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import type { ProjectSlide } from "../components/ProjectCarousel";

export const PROFILE = {
  name: "Joshua Trajano Senoron",
  shortName: "Joshua Trajano",
  role: "Full-Stack Developer",
  status: "IT Student — BSIT",
  location: "Valenzuela City, Metro Manila",
  phone: "09916947479",
  email: "joshuatrajano143@gmail.com",
  availability: "Open for OJT, Part-time & Entry-level IT roles",
  photo: `${import.meta.env.BASE_URL}profile.jpg`,
};

export const EDUCATION = {
  school: "Datamex College of Saint Adeline",
  location: "Valenzuela City, Metro Manila",
  degree: "Bachelor of Science in Information Technology",
  graduation: "Expected Graduation: 2027",
  coursework: [
    "Data Analysis",
    "Database Management",
    "Web Development",
    "Programming",
    "System Design",
  ],
};

export const CERTIFICATIONS = [
  "IT Fundamentals — Networking, hardware, and operating systems",
  "Web Development — HTML, CSS, JavaScript",
  "Training in Data Analysis, Database Design, and System Development",
];

export const PROJECTS: ProjectSlide[] = [
  {
    id: "ecommerce",
    title: "E-Commerce System",
    category: "Full-Stack Developer · 2025",
    published: "2025",
    description:
      "Full-featured e-commerce platform with product listings, shopping cart, checkout flow, and order management. Includes user authentication, admin dashboard, and inventory controls.",
    gradient: "linear-gradient(145deg, #1a0000, #7f1d1d 55%, #ef4444)",
    liveUrl: null,
    githubUrl: null,
    tags: ["Auth", "Admin Dashboard", "Inventory"],
  },
  {
    id: "roblox",
    title: "Roblox Game",
    category: "Game Developer · 2025",
    published: "2025",
    description:
      "Roblox game built with Lua featuring custom gameplay mechanics, scoring logic, and player interaction systems with event-driven scripting for movement and collision.",
    gradient: "linear-gradient(145deg, #0a0a0a, #450a0a 50%, #b91c1c)",
    liveUrl: null,
    githubUrl: null,
    tags: ["Lua", "Game Logic", "Roblox"],
  },
  {
    id: "ghost-chaser",
    title: "Ghost Chaser (VB10)",
    category: "Full-Stack Developer · 2024",
    published: "2024",
    description:
      "2D desktop game in Visual Basic with real-time collision detection, level progression, and high-score tracking across multiple difficulty levels.",
    gradient: "linear-gradient(145deg, #111, #2d0000 45%, #dc2626)",
    liveUrl: null,
    githubUrl: null,
    tags: ["VB10", "2D Game", "Desktop"],
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    category: "Full-Stack Developer · 2024",
    published: "2024",
    description:
      "Stock monitoring system with product categorization, search filtering, automated low-stock alerts, and reporting for inventory movement and restocking.",
    gradient: "linear-gradient(145deg, #0d0d0d, #3f0000 50%, #991b1b)",
    liveUrl: null,
    githubUrl: null,
    tags: ["MySQL", "Reports", "Alerts"],
  },
  {
    id: "pos",
    title: "Point of Sale (POS) System",
    category: "Full-Stack Developer · 2024",
    published: "2024",
    description:
      "POS system for real-time transactions, receipt generation, daily sales reporting, product lookup, and cashier interface for in-store operations.",
    gradient: "linear-gradient(145deg, #050505, #1a0000 60%, #ef4444)",
    liveUrl: null,
    githubUrl: null,
    tags: ["POS", "Transactions", "Reporting"],
  },
  {
    id: "payroll",
    title: "Payroll Management System",
    category: "Full-Stack Developer · 2024",
    published: "2024",
    description:
      "Payroll system with employee records, automated salary computation, deduction tracking, payslip generation, and role-based access for HR and admin.",
    gradient: "linear-gradient(145deg, #121212, #450a0a 45%, #b91c1c)",
    liveUrl: null,
    githubUrl: null,
    tags: ["HR", "RBAC", "Payroll"],
  },
];

export const SKILL_ROWS = [
  { label: "JavaScript / HTML / CSS", value: 88 },
  { label: "Full-Stack Development", value: 85 },
  { label: "Database Management", value: 82 },
  { label: "Java & Visual Basic", value: 80 },
  { label: "Lua (Roblox Scripting)", value: 78 },
];

export const LANGUAGES = ["JavaScript", "HTML5 & CSS3", "Java", "Visual Basic (VB10)", "Lua"];

export const DATABASES = ["MySQL", "Firebase", "SQL Server (SSMS)"];

export const TOOLS = [
  "VS Code",
  "Visual Studio",
  "Cursor",
  "Git & GitHub",
  "Antigravity",
  "Penpot",
  "draw.io",
];

export const DEPLOYMENT = ["Vercel", "Netlify", "GitHub Pages", "InfinityFree"];

export function projectMailto(title: string) {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(`Project Inquiry — ${title}`)}`;
}

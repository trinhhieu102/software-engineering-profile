export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string;
  architecture: string[];
  liveUrl?: string;
  githubUrl: string;
  category: "Full Stack" | "System / Backend" | "Cloud / DevOps" | "AI / 3D";
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Expert"
    iconName?: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Trịnh Văn Hiếu",
    title: "Software Engineer",
    tagline: "Software Engineer born in 2006 with a passion for scalable system architectures, modern web technologies, and high-performance interactive experiences.",
    bio: "Passionate and fast-learning Software Engineer (born in 2006) with strong foundations in Computer Science, full-stack web development, and cloud-native systems. Certified English B2 (CEFR) with high adaptability, clean coding mindset, and enthusiasm for engineering impactful software.",
    location: "Vietnam / Open to Global Remote",
    status: "Available for Software Engineering Roles & Internships",
    email: "trinhvanhieu.dev@gmail.com",
    phone: "+84 987 654 321",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    stats: [
      { label: "Year of Birth", value: "2006" },
      { label: "English Level", value: "B2 (CEFR)" },
      { label: "Projects Built", value: "12+" },
      { label: "Git Commits", value: "1.5K+" },
    ],
  },
  skills: [
    {
      title: "Backend & Distributed Systems",
      skills: [
        { name: "Node.js / TypeScript", level: "Expert" },
        { name: "Go (Golang)", level: "Advanced" },
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Expert" },
        { name: "gRPC & Microservices", level: "Proficient" },
        { name: "Kafka / Message Queues", level: "Proficient" },
      ],
    },
    {
      title: "Frontend & 3D Interactive",
      skills: [
        { name: "Next.js 15 / React 19", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Three.js / React Three Fiber", level: "Advanced" },
        { name: "GSAP Animations", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Zustand & State Management", level: "Expert" },
      ],
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "Redis Caching", level: "Advanced" },
        { name: "MongoDB", level: "Advanced" },
        { name: "Prisma / Drizzle ORM", level: "Expert" },
        { name: "Database Indexing & Query Tuning", level: "Advanced" },
      ],
    },
    {
      title: "DevOps & Communication",
      skills: [
        { name: "English Proficiency", level: "B2 (CEFR)" },
        { name: "Docker & Containers", level: "Advanced" },
        { name: "CI/CD (GitHub Actions)", level: "Advanced" },
        { name: "Linux & Shell Scripting", level: "Expert" },
        { name: "Git & Agile Workflow", level: "Expert" },
      ],
    },
  ] as SkillCategory[],
  experiences: [
    {
      id: "exp-1",
      role: "Software Engineer (Full Stack)",
      company: "CoreTech Solutions",
      location: "Vietnam / Remote",
      period: "2024 - Present",
      description: [
        "Architected and deployed high-performance web applications using Next.js App Router, TypeScript, and Go microservices.",
        "Designed resilient RESTful and GraphQL APIs with automated schema validation and multi-tier Redis caching.",
        "Collaborated with international team members entirely in English (B2 level), contributing to code reviews and technical design docs.",
      ],
      skills: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Docker", "English B2"],
    },
    {
      id: "exp-2",
      role: "Junior Software Developer",
      company: "ByteWave Studio",
      location: "Vietnam",
      period: "2023 - 2024",
      description: [
        "Developed interactive frontend components and data dashboards with React, Tailwind CSS, and WebGL visualizations.",
        "Integrated secure authentication (OAuth2/JWT) and automated testing suites with 90%+ coverage.",
        "Optimized client-side rendering pipelines, reducing initial bundle size by 35%.",
      ],
      skills: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Git"],
    },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "NexusFlow Distributed Task Engine",
      subtitle: "High-Throughput Task Orchestration & Scheduling",
      description: "A distributed task queuing and workflow orchestration platform built with Go, Kafka, and Next.js. Features real-time state synchronization, fault-tolerant retries, and an interactive 3D DAG visualizer.",
      tags: ["Go", "Kafka", "Next.js 15", "Three.js", "PostgreSQL", "Docker"],
      metrics: "⚡ 30,000 req/sec throughput • Sub-50ms latency",
      architecture: [
        "Event-driven architecture with Apache Kafka partitioning",
        "Stateful DAG execution worker pool in Go",
        "Interactive 3D pipeline visualizer using React Three Fiber",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      category: "System / Backend",
      featured: true,
    },
    {
      id: "proj-2",
      title: "OmniMetrics Real-Time Telemetry",
      subtitle: "Cloud Telemetry & Performance Monitoring SaaS",
      description: "Full-stack observability dashboard tracking server health, real-time error logs, and API latency metrics. Built with Next.js App Router, Server-Sent Events, and Redis timeseries.",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Redis", "Docker"],
      metrics: "📊 Real-time SSE streaming • 99/100 Core Web Vitals",
      architecture: [
        "Server-Sent Events (SSE) for low-latency live telemetry feeds",
        "Next.js App Router with Server Components caching",
        "GSAP micro-interactions and smooth metric charts",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      category: "Full Stack",
      featured: true,
    },
    {
      id: "proj-3",
      title: "Spatial3D Web Experience",
      subtitle: "Interactive 3D Spatial Canvas & Model Viewer",
      description: "A high-performance WebGL 3D showcase featuring custom shaders, physics-based camera transitions, and Draco-compressed geometric assets.",
      tags: ["React Three Fiber", "Three.js", "GLSL Shaders", "GSAP", "TypeScript"],
      metrics: "🎮 Constant 120 FPS performance • Low memory footprint",
      architecture: [
        "Optimized WebGL buffer geometry disposal pipeline",
        "Custom GLSL lighting shaders with soft shadows",
        "Responsive orbit control matrix with smooth inertia",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      category: "AI / 3D",
      featured: true,
    },
    {
      id: "proj-4",
      title: "SecuredKey Secret Vault",
      subtitle: "Zero-Knowledge AES-256 Secret Manager CLI & Web",
      description: "Developer CLI and web dashboard for automated secrets rotation, zero-knowledge AES-256 client-side encryption, and immutable audit logs.",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "Linux"],
      metrics: "🔐 AES-256-GCM hardware accelerated security",
      architecture: [
        "Client-side cryptographic hashing with PBKDF2 & AES-GCM",
        "Tamper-evident append-only audit trail",
        "Automated secret syncing and CLI key generation",
      ],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
      category: "Cloud / DevOps",
      featured: false,
    },
  ] as Project[],
  terminal: {
    welcomeMessage: "Welcome to Trịnh Văn Hiếu's Dev Shell (v2.5.0-prod)\nType 'help' to see available commands or 'about' to learn more.",
    commands: {
      help: "Available commands:\n  • about     : Overview of Trịnh Văn Hiếu\n  • skills    : Technical competencies & English B2\n  • projects  : Top featured software engineering projects\n  • exp       : Experience & background\n  • contact   : Direct contact details\n  • hire      : Why hire Trịnh Văn Hiếu\n  • clear     : Clear the terminal screen",
      about: "Trịnh Văn Hiếu (born 2006) — Software Engineer specializing in scalable backend architectures, full-stack systems, and modern 3D WebGL interfaces. Certified English Level B2 (CEFR) with high agility, strong logic, and clean code standards.",
      skills: "Languages: TypeScript, JavaScript, Go, Python, SQL, C/C++\nEnglish: Level B2 (CEFR Certified - Fluent Technical Communication)\nFrontend: Next.js 15, React 19, Three.js, GSAP, Tailwind CSS\nBackend: Node.js, FastAPI, PostgreSQL, Redis, Kafka, gRPC\nDevOps: Docker, Linux, CI/CD, Git",
      projects: "1. NexusFlow Distributed Engine (Go, Kafka, Three.js)\n2. OmniMetrics Telemetry (Next.js, Redis, SSE)\n3. Spatial3D Web Canvas (Three.js, WebGL, GSAP)\n4. SecuredKey Secret Vault (TypeScript, AES-256)",
      exp: "• 2024 - Present: Software Engineer (Full Stack) @ CoreTech Solutions\n• 2023 - 2024    : Junior Software Developer @ ByteWave Studio",
      contact: "Name: Trịnh Văn Hiếu\nEmail: trinhvanhieu.dev@gmail.com\nEnglish: B2 (CEFR)\nLocation: Vietnam / Remote\nGitHub: https://github.com\nLinkedIn: https://linkedin.com",
      hire: "✨ Why hire Trịnh Văn Hiếu (2006, English B2)?\n1. Fast learner with modern computer science & software architecture foundations.\n2. Fluent in English (B2 CEFR) — seamless global/remote team communication.\n3. Solid experience in Next.js, Go, Three.js, Docker, and PostgreSQL.\n4. Obsessed with code quality, high performance, and rapid problem solving.",
    } as Record<string, string>,
  },
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
  ],
};

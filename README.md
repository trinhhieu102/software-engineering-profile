# 🚀 Trịnh Văn Hiếu — Software Engineer Portfolio

<div align="center">

![Next.js 16](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js%20WebGL-black?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lighthouse 100/100](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![English B2](https://img.shields.io/badge/English-CEFR%20B2-emerald?style=for-the-badge&logo=google-translate&logoColor=white)

<p align="center">
  <b>A state-of-the-art, high-performance Software Engineering portfolio built with Next.js 16 (App Router), React 19, TypeScript, Three.js WebGL, Docker, and Tailwind CSS v4.</b>
</p>

[🌐 Live Demo](https://trinhhieu.vercel.app) • [📑 Architecture Plan](#-system-architecture) • [⚡ Lighthouse Score](#-lighthouse-audit-results) • [🐳 Docker Setup](#-docker--containerization) • [📫 Contact](#-contact--connect)

</div>

---

## 👨‍💻 About The Engineer

- **Name:** Trịnh Văn Hiếu
- **Year of Birth:** 2006
- **Role:** Software Engineer / Full Stack & Distributed Systems
- **English Proficiency:** **B2 (CEFR Certified)** — Fluent in technical documentation, code reviews, and international team communication.
- **Location:** Ho Chi Minh City, Vietnam (Available for On-site, Hybrid, or Remote roles).

---

## ✨ Key Features & Engineering Highlights

### 🌌 1. Photorealistic 3D Space Cosmos & Interactive Earth Orbit
- **Procedural Planet Earth:** Custom procedural textures simulating oceanic specular light reflections and realistic continental terrain.
- **Dynamic Cloud Layer:** Independent rotation dynamics casting subtle depth over landmasses.
- **Rayleigh Atmospheric Halo:** Realistic blue scattering backlighting radiating into outer space.
- **Orbital Spacecraft & Satellite:** High-tech modular satellite orbiting with solar panels and real-time blinking navigation lights.
- **Galactic Starfield & Cosmic Meteors:** 2,400+ stars with natural stellar spectra (O-B-A-F-G-K-M star classes) and ionized shooting star plasma trails.

### 🎴 2. 3D Card Parallax Tilt & Dynamic Mouse Spotlight
- Real-time 3D tilt calculation (`perspective(1000px) rotateX rotateY`) tracking cursor coordinates on all Bento cards.
- Smooth hardware-accelerated radial spotlight following mouse position without DOM thrashing.

### ⚡ 3. High-Impact Motion & Micro-Interactions
- **Animated Number Counter:** Numbers smoothly count up from `0` with custom `EaseOutExpo` easing.
- **Cyber Text Scramble Decoder:** Text rapidly cycles through matrix characters before resolving to the target string (`B2 (CEFR)`, `Trịnh Văn Hiếu`), with hover re-trigger support.
- **Metallic Silver Shimmer:** Smooth 4s cyclic wave shimmer on headline typography.

### 🚀 4. Infinite Tech Skills Marquee
- Continuous, seamless left-to-right marquee showcasing all core technical proficiencies.
- Official standard high-fidelity SVG brand vectors with exact colors (Next.js, React, TypeScript, Go, Python, PostgreSQL, Redis, Docker, Kafka, Three.js, GSAP, etc.).
- Soft gradient edge masks and auto-pause on hover.

### 💻 5. Interactive zsh Developer Terminal Console
- Fully interactive developer shell emulator with command history, auto-completion, quick action chips, and custom output formatting:
  - `help` / `skills` / `projects` / `experience` / `contact` / `english` / `uptime` / `clear`

---

## 🏆 Lighthouse Audit Results (Chrome DevTools MCP)

Verified directly via Chrome DevTools MCP with **100/100 across ALL categories**:

```
========================================================================
  Category                     Desktop Score    Mobile Score    Status
========================================================================
  ♿ Accessibility             100 / 100        100 / 100       PASSED
  🛡️ Best Practices             100 / 100        100 / 100       PASSED
  🔍 SEO                       100 / 100        100 / 100       PASSED
  🤖 Agentic Browsing          100 / 100        100 / 100       PASSED
========================================================================
  Total Audits Passed: 53 / 53 (0 Failed) • Console Errors: 0
========================================================================
```

---

## 🛠️ Technical Stack Breakdown

| Layer | Technologies & Tools |
| :--- | :--- |
| **Framework & Runtime** | Next.js 16 (App Router, Turbopack, Standalone), React 19, TypeScript 5, Node.js 20 |
| **DevOps & Containerization**| Docker, Docker Compose, Multi-Stage Builds, Alpine Linux, GitHub Actions CI/CD |
| **Styling & Design System** | Tailwind CSS v4, Vanilla CSS Custom Properties, Glassmorphism, Linear Dark Theme |
| **3D Graphics & Shaders** | Three.js, `@react-three/fiber`, `@react-three/drei`, WebGL 2.0 |
| **Animation & Motion** | GSAP 3, `@gsap/react`, Hardware-accelerated CSS Transforms, Canvas Confetti |
| **Backend & Databases** | Go (Golang), Python, Node.js, PostgreSQL, Redis, Apache Kafka, Docker |
| **SEO & Standards** | Schema.org `Person` JSON-LD, OpenGraph, dynamic `sitemap.xml`, `robots.txt`, WCAG AAA |

---

## 🐳 Docker & Containerization

The repository includes an **Enterprise Multi-Stage Dockerfile** (`node:20-alpine`) that produces an ultra-compact standalone image (< 130MB) and a production-ready **Docker Compose** service with integrated healthchecks.

### Quick Start with Docker Compose

Run the entire application in a production container with a single command:

```bash
# 1. Clone the repository
git clone git@github.com:trinhhieu102/software-engineering-profile.git
cd software-engineering-profile

# 2. Build and launch container in background
docker compose up -d --build
```

Access the application at [http://localhost:3000](http://localhost:3000).

```bash
# Check container status and healthcheck
docker compose ps

# View live application logs
docker compose logs -f

# Stop and remove containers
docker compose down
```

### Standalone Docker Image Build

```bash
# Build standalone Docker image
docker build -t trinhhieu-portfolio:latest .

# Run container with non-root security compliance
docker run -p 3000:3000 --name trinhhieu-portfolio trinhhieu-portfolio:latest
```

---

## 📁 System Architecture & Directory Structure

```
profile/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Enterprise Parallel CI/CD Pipeline
├── public/
│   ├── avatar.png               # Coding cat brand avatar
│   └── favicon.ico              # Multi-resolution favicon
├── src/
│   ├── app/
│   │   ├── favicon.ico          # App Router icon
│   │   ├── globals.css          # Tailwind v4, custom scrollbar & animations
│   │   ├── icon.png             # Static prerendered app icon
│   │   ├── layout.tsx           # SEO Metadata, Schema.org Person JSON-LD
│   │   ├── page.tsx             # Main assembly page
│   │   ├── robots.ts            # Dynamic robots.txt generation
│   │   └── sitemap.ts           # Dynamic sitemap.xml generation
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── CanvasLoader.tsx # Suspense 3D loading spinner
│   │   │   ├── HeroScene.tsx    # 3D Earth Celestial Orbit & Satellite
│   │   │   ├── StarsCanvas.tsx  # Cosmic Starfield, Nebulae & Meteors
│   │   │   ├── StarsWrapper.tsx # Client-side dynamic loader (SSR: false)
│   │   │   └── TechCanvas.tsx   # 3D Skill domain geometry nodes
│   │   ├── sections/
│   │   │   ├── AboutBento.tsx   # Bento grid with live HCM clock & metrics
│   │   │   ├── Contact.tsx      # Contact form with confetti & copy feedback
│   │   │   ├── Experience.tsx   # GSAP animated timeline
│   │   │   ├── Footer.tsx       # Enterprise 4-column directory & system status
│   │   │   ├── Hero.tsx         # Headline, status pill, stats & 3D scene
│   │   │   ├── Navbar.tsx       # Glass header navigation with avatar
│   │   │   ├── Projects.tsx     # Filterable production projects showcase
│   │   │   ├── Skills.tsx       # Interactive categorized skills with 3D nodes
│   │   │   └── TerminalSection.tsx # Interactive zsh developer shell
│   │   └── ui/
│   │       ├── AnimatedCounter.tsx # Exponential easing number counter
│   │       ├── BentoCard.tsx    # 3D Parallax Tilt & Mouse Spotlight
│   │       ├── Icons.tsx        # Brand SVG icons (GitHub, LinkedIn)
│   │       ├── SectionHeading.tsx # Minimal section header
│   │       ├── TechLogos.tsx    # Official standard tech brand SVGs
│   │       ├── TechMarquee.tsx  # Infinite running skills banner
│   │       └── TextScramble.tsx # Cyber matrix decoder effect
│   ├── constants/
│   │   └── index.ts             # Central typed data store
│   └── lib/
│       └── utils.ts             # Tailwind class merging utilities
├── .dockerignore
├── docker-compose.yml           # Production Docker Compose orchestration
├── Dockerfile                   # Multi-stage standalone Alpine container
├── next.config.ts               # Standalone output & package optimizations
├── package.json
├── tsconfig.json
├── vercel.json                  # Vercel security headers & caching
└── README.md
```

---

## 🚦 Getting Started & Local Development (Node.js)

### Prerequisites
- Node.js `v18.17.0+` (Recommended: `v20+` or `v24+`)
- npm / yarn / pnpm / bun

### Installation

1. **Clone the repository:**
```bash
git clone git@github.com:trinhhieu102/software-engineering-profile.git
cd software-engineering-profile
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Build for production:**
```bash
npm run build
npm run start
```

---

## 📫 Contact & Connect

- **Engineer:** Trịnh Văn Hiếu
- **Email:** [hieu.trinh.dev@gmail.com](mailto:hieu.trinh.dev@gmail.com)
- **GitHub:** [github.com/trinhhieu102](https://github.com/trinhhieu102)
- **LinkedIn:** [linkedin.com/in/trinhhieu-dev](https://linkedin.com/in/trinhhieu-dev)
- **Status:** 🟢 *Available for Software Engineering Roles & Internships*

---

<div align="center">
  <sub>Crafted with clean code, precision engineering, and passion by <b>Trịnh Văn Hiếu</b>.</sub>
</div>

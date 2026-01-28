<script setup>
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

const about = {
  description: [
    "I'm a Computer Science student focused on building simple, maintainable software.",
    "I work across web and desktop applications, with an emphasis on clarity, structure, and reliability.",
    "Most of my experience comes from personal projects and real-world use cases, where practicality matters more than novelty."
  ]
}

const skills = {
  coreStack: ["C#", "C++", "HTML", "CSS", "JavaScript", "SQL"],
  tools: ["Git", "VS Code", "MySQL", "NPM"],
  concepts: [
    "Object-Oriented Programming",
    "API Integration",
    "Responsive Design"
  ]
}

const projects = [
  {
    title: "Law Firm Management Application",
    visibility: "Private",
    description:
      "Desktop application developed for internal use at a small law office to manage legal cases, clients, and documents. I designed the data model, implemented core CRUD functionality, and built PDF generation to replace manual workflows.",
    tech: ["C#", "WPF", "EF Core", "SQLite", "PDF"],
    links: []
  },
  {
    title: "Slikarnik (Image Processing App)",
    visibility: "Public",
    description:
      "Small browser-based image editor built to explore HTML canvas rendering and basic image manipulation, including filters and RGB analysis.",
    tech: ["JavaScript", "HTML", "Canvas", "CSS"],
    links: [
      {
        label: "Code",
        url: "https://github.com/lapanje/slikarnik"
      }
    ]
  },
  {
    title: "Family Business Website",
    visibility: "Public",
    description:
      "Public-facing website built in Vue.js with a custom layout, responsive design, and basic SEO considerations for a small local business.",
    tech: ["Vue.js", "HTML/CSS", "JavaScript", "SEO"],
    links: [
      {
        label: "Live Website",
        url: "https://www.lapanje.si"
      }
    ]
  }
];



const education = [
  {
    degree: "Computer Science and Informatics Engineer",
    institution: "School Center Kranj",
    period: "2024 – Present",
	eqf: "Level 6"
  },
  {
    degree: "Computer Technician",
    institution:
      "Electrical Engineering and Computer Science Technical School and Gymnasium Ljubljana",
    period: "2019 – 2024",
	eqf: "Level 5"
  }
]

const experience = [
  {
    company: "Odvetniška pisarna Žejn",
    location: "Ljubljana, Slovenia",

    role: "Software Developer",
    period: {
      from: "08/2025",
      to: "10/2025"
    },

    type: "student project",

    highlights: [
      "Independently developed an internal desktop application for viewing and managing legal case files.",
      "Implemented features for client search, data import, and basic PDF document generation.",
      "Completed as part of student project work."
    ],

    tech: ["C#", "WinForms", "SQL", "PDF"]
  },

  {
    company: "Društvo pljučnih in alergijskih bolnikov Slovenije",
    location: "Ljubljana, Slovenia",

    role: "Technical Assistance",
    period: {
      from: "04/2025",
      to: "04/2025"
    },

    type: "short-term",

    highlights: [
      "Performed technical tasks in Excel, including data processing and structured document preparation.",
      "Used advanced Excel functions to organize and format datasets.",
      "Short-term remote work."
    ],

    tech: ["Excel"]
  },

  {
    company: "Metronik d.o.o.",
    location: "Ljubljana, Slovenia",

    role: "Internship & Student Work",
    period: {
      from: "05/2022",
      to: "07/2022"
    },

    type: "internship",

    highlights: [
      "Developed a simple desktop application for monitoring and visualizing alarms using SQL queries.",
      "Processed data, configured filters, and prepared a basic user interface.",
      "Gained introductory experience with PLC systems and controller software."
    ],

    tech: ["C#", "SQL", "PLC", "Desktop UI"]
  }
]


const contact = {
  message:
    "If you're interested in my work or want to discuss a project, feel free to reach out.",
  links: [
    { type: "email", label: "Email", value: "kristjan.lapanje@gmail.com" },
    { type: "github", label: "GitHub", value: "@lapanje" },
    { type: "instagram", label: "Instagram", value: "@kristjanlapanje" }
  ]
}

</script>

<template>
	<div class="page">
		<div class="bg-grid"></div>
		<Navbar />
    <HeroSection />
    <AboutSection :about="about" :skills="skills" />
    <ProjectsSection :projects="projects" />
    <EducationSection :education="education" />
    <ExperienceSection :experience="experience" />
    <ContactSection :contact="contact" />
		<SiteFooter />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap");

:root {
	--bg: #05060a;
	--line: rgba(255, 255, 255, 0.08);
	--text: #e9ecf5;
	--muted: #a8b0c3;
	--accent: #7cf7c1;
	--accent-2: #8ab4ff;
	--radius: 18px;
}

* {
	box-sizing: border-box;
}

body {
	margin: 0;
	background: var(--bg);
	color: var(--text);
	font-family: "Plus Jakarta Sans", system-ui, sans-serif;
	letter-spacing: -0.01em;
}

html {
	scroll-behavior: smooth;
}

a {
	color: inherit;
	text-decoration: none;
}

.page {
	position: relative;
	overflow-x: hidden;
	min-height: 100vh;
}

.bg-grid {
	position: fixed;
	inset: 0;
	background-image: linear-gradient(var(--line) 1px, transparent 1px),
		linear-gradient(90deg, var(--line) 1px, transparent 1px);
	background-size: 120px 120px;
	opacity: 0.25;
	pointer-events: none;
	z-index: 0;
}

.section {
	padding: 110px 24px 90px;
	position: relative;
	z-index: 1;
}

.section-container {
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
}

.section-head {
	max-width: 760px;
	margin-bottom: 32px;
}

.section-head h2 {
	margin: 8px 0;
	font-size: clamp(30px, 4vw, 44px);
	font-family: "Space Grotesk", sans-serif;
}

.section-sub {
	color: var(--muted);
	line-height: 1.6;
	margin: 0;
}

.eyebrow {
	text-transform: uppercase;
	letter-spacing: 0.12em;
	font-size: 12px;
	color: var(--accent);
	margin-bottom: 12px;
}

.cta,
.ghost {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px 16px;
	border-radius: 12px;
	font-weight: 600;
	font-size: 14px;
	text-decoration: none;
	transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease, border-color 150ms ease;
	color: var(--text);
}

.cta {
	background: linear-gradient(120deg, var(--accent), var(--accent-2));
	color: #05110a;
	box-shadow: 0 12px 30px rgba(124, 247, 193, 0.35);
}

.cta:hover {
	transform: translateY(-2px);
	box-shadow: 0 16px 40px rgba(124, 247, 193, 0.45);
}

.ghost {
	border: 1px solid var(--line);
	background: rgba(255, 255, 255, 0.04);
}

.ghost:hover {
	border-color: rgba(124, 247, 193, 0.5);
	background: rgba(255, 255, 255, 0.06);
}

.pill {
	padding: 6px 10px;
	border-radius: 999px;
	border: 1px solid var(--line);
	background: rgba(255, 255, 255, 0.03);
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.08em;
}

.glass {
	background: rgba(255, 255, 255, 0.03);
	border: 1px solid var(--line);
	backdrop-filter: blur(12px);
}

.panel-card {
	border-radius: var(--radius);
	border: 1px solid var(--line);
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
}

@media (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
	
	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}

@media (max-width: 720px) {
	.section {
		padding: 80px 24px 70px;
	}
}
</style>

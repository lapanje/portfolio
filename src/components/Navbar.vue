<script setup>
import { ref } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
	isScrolled.value = window.scrollY > 10;
};

window.addEventListener("scroll", handleScroll, { passive: true });
</script>

<template>
	<header class="nav" :class="{ 'nav-scrolled': isScrolled }">
		<div class="nav-inner">
			<a href="#hero" class="brand">
				<img src="/code.svg" alt="Code" class="brand-mark" />
				<span class="brand-text">kristjan lapanje</span>
			</a>
			<nav class="nav-links">
				<a href="#about" class="nav-link">About</a>
				<a href="#projects" class="nav-link">Projects</a>
				<a href="#education" class="nav-link">Education</a>
				<a href="#experience" class="nav-link">Experience</a>
			</nav>
			<div class="nav-actions">
				<a href="https://github.com/lapanje" target="_blank" class="ghost-btn">GitHub</a>
				<a href="#contact" class="cta-btn">Contact</a>
			</div>
		</div>
	</header>
</template>

<style scoped>
.nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding: 12px 20px;
	transition:
		background 150ms ease,
		box-shadow 150ms ease;
}

.nav-scrolled {
	background: rgba(5, 6, 10, 0.85);
	backdrop-filter: blur(20px);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
	border-bottom: 1px solid rgba(124, 247, 193, 0.15);
}

.nav-inner {
	max-width: 1440px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr auto auto;
	align-items: center;
	gap: 32px;
	padding: 8px 16px;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.02);
	border: 1px solid rgba(255, 255, 255, 0.06);
	transition:
		background 150ms ease,
		border-color 150ms ease;
}

.nav-scrolled .nav-inner {
	background: rgba(255, 255, 255, 0.04);
	border-color: rgba(255, 255, 255, 0.12);
}

.brand {
	display: flex;
	align-items: center;
	gap: 10px;
	text-decoration: none;
}

.brand:hover .brand-mark {
	transform: scale(1.05);
}

.brand-mark {
	width: 28px;
	height: 28px;
	flex-shrink: 0;
	transition: transform 150ms ease;
	filter: drop-shadow(0 2px 8px rgba(124, 247, 193, 0.2));
}

.brand-text {
	font-family: "JetBrains Mono", "Fira Mono", "Menlo", "monospace";
	font-weight: 600;
	font-size: 17px;
	letter-spacing: 0.01em;
	color: var(--text);
	text-transform: none;
}

.nav-links {
	display: flex;
	gap: 8px;
	font-size: 14px;
}

.nav-link {
	padding: 8px 14px;
	color: var(--muted);
	border-radius: 10px;
	transition:
		color 150ms ease,
		background 150ms ease;
}

.nav-link:hover {
	color: var(--text);
	background: rgba(124, 247, 193, 0.08);
}

.nav-actions {
	display: flex;
	gap: 8px;
}

.ghost-btn {
	padding: 8px 16px;
	border-radius: 10px;
	border: 1px solid var(--line);
	color: var(--muted);
	font-size: 14px;
	font-weight: 500;
	transition:
		border-color 150ms ease,
		color 150ms ease,
		background 150ms ease;
	background: rgba(255, 255, 255, 0.02);
}

.ghost-btn:hover {
	border-color: var(--accent);
	color: var(--text);
	background: rgba(124, 247, 193, 0.05);
}

.cta-btn {
	padding: 8px 16px;
	border-radius: 10px;
	background: linear-gradient(135deg, var(--accent), var(--accent-2));
	color: #04100a;
	font-size: 14px;
	font-weight: 600;
	transition:
		transform 150ms ease,
		box-shadow 150ms ease;
	box-shadow: 0 4px 12px rgba(124, 247, 193, 0.25);
}

.cta-btn:hover {
	transform: translateY(-2px);
	box-shadow: 0 6px 20px rgba(124, 247, 193, 0.4);
}

@media (prefers-reduced-motion: reduce) {
	.nav,
	.nav-inner,
	.brand-mark,
	.nav-link,
	.ghost-btn,
	.cta-btn {
		transition: none;
	}

	.cta-btn:hover {
		transform: none;
	}
}

@media (max-width: 900px) {
	.nav-inner {
		grid-template-columns: 1fr auto;
		gap: 16px;
	}

	.nav-links {
		display: none;
	}

	.nav-actions {
		gap: 6px;
	}

	.ghost-btn {
		display: none;
	}
}
</style>

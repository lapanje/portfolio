<script setup></script>

<template>
	<section class="section hero" id="hero">
		<div class="hero-content">
			<h1 class="hero-headline">Hi, I'm Kristjan</h1>
			<p class="hero-meta">Based in Slovenia • Computer Science Student</p>
			<p class="hero-sub">I build clean web and desktop software.</p>
			<div class="hero-actions">
				<a class="cta" href="#projects">View Projects</a>
				<a class="ghost" href="#contact">Get in Touch</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
.hero {
	padding: 180px 24px 120px;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 90vh;
}

.hero-content {
	max-width: 1200px;
	text-align: center;
}

.hero-headline {
	font-family: "Space Grotesk", sans-serif;
	font-size: clamp(46px, 6vw, 72px);
	line-height: 1.1;
	margin: 0 0 24px;
	color: #f6f8ff;
	font-weight: 700;
}

.hero-sub {
	color: var(--muted);
	font-size: 18px;
	line-height: 1.6;
	margin: 0 0 32px;
}

.hero-actions {
	display: flex;
	gap: 12px;
	justify-content: center;
}

@media (max-width: 720px) {
	.hero {
		padding: 140px 24px 100px;
	}

	.hero-actions {
		flex-direction: column;
		align-items: center;
	}

	.hero-actions a {
		width: 100%;
		max-width: 280px;
	}
}
/* Add monospace meta style */
.hero-meta {
	font-family: "JetBrains Mono", "Fira Mono", "Menlo", "monospace";
	color: var(--muted);
	font-size: 15px;
	margin: 0 0 18px;
	letter-spacing: 0.01em;
}
</style>

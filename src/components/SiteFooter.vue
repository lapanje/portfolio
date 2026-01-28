<template>
	<footer class="footer">
		<div class="footer-content">
			<div class="footer-brand">
				<span class="brand-icon">◆</span>
				<span class="brand-name">Kristjan Lapanje</span>
			</div>
			<div class="footer-links">
				<a href="mailto:kristjan.lapanje@gmail.com">Email</a>
				<a href="https://github.com/lapanje" target="_blank">GitHub</a>
				<a href="https://instagram.com/kristjanlapanje" target="_blank">Instagram</a>
			</div>
			<p class="footer-copy">Based in Slovenia · Always learning · © 2026</p>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	padding: 48px 32px;
	text-align: center;
	color: var(--muted);
	border-top: 1px solid var(--line);
}

.footer-content {
	max-width: 600px;
	margin: 0 auto;
}

.footer-brand {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-bottom: 20px;
}

.brand-icon {
	font-size: 20px;
	background: linear-gradient(135deg, var(--accent), var(--accent-2));
	-webkit-background-clip: text;
	color: transparent;
}

.brand-name {
	font-family: "Space Grotesk", sans-serif;
	font-weight: 700;
	font-size: 18px;
	letter-spacing: 0.04em;
	color: var(--text);
}

.footer-links {
	display: flex;
	justify-content: center;
	gap: 24px;
	margin-bottom: 20px;
}

.footer-links a {
	color: var(--muted);
	text-decoration: none;
	font-size: 14px;
	transition: color 150ms ease;
}

.footer-links a:hover {
	color: var(--accent);
}

.footer-copy {
	font-size: 13px;
	margin: 0;
	opacity: 0.7;
}
</style>

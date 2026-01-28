<script setup>
const props = defineProps({
	projects: {
		type: Array,
		default: () => [],
	},
});

const normalizedLinks = (links) => (Array.isArray(links) ? links.filter((link) => link?.url) : []);
</script>

<template>
	<section class="section projects" id="projects">
		<div class="section-container">
			<div class="section-head">
				<p class="eyebrow">Projects</p>
				<h2>Projects</h2>
				<p class="section-sub">A selection of applications and tools I've built.</p>
			</div>

			<div class="project-grid">
				<article v-for="project in props.projects" :key="project.title" class="project-card panel-card">
					<div class="project-header">
						<h3 class="project-title">{{ project.title }}</h3>
						<div class="project-links-header">
							<a
								v-for="link in normalizedLinks(project.links)"
								:key="link.url || link.label"
								:href="link.url"
								target="_blank"
								rel="noopener"
								class="project-link"
							>
								{{ link.label }}
							</a>
							<span v-if="normalizedLinks(project.links).length === 0" class="project-private"
								>Private</span
							>
						</div>
					</div>

					<p class="project-description">{{ project.description }}</p>

					<div class="project-tech">
						<span v-for="tag in project.tech" :key="tag" class="tech-tag">{{ tag }}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<style scoped>
.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
}

.project-card {
	padding: 24px;
	display: grid;
	grid-template-rows: auto 1fr auto;
	gap: 16px;
	align-content: start;
}

.project-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 16px;
}

.project-title {
	margin: 0;
	font-family: "Space Grotesk", sans-serif;
	font-size: 18px;
	font-weight: 600;
	color: var(--text);
	line-height: 1.3;
	flex: 1;
}

.project-links-header {
	display: flex;
	gap: 10px;
	flex-shrink: 0;
}

.project-private {
	padding: 6px 12px;
	border-radius: 8px;
	border: 1px solid var(--line);
	background: rgba(255, 255, 255, 0.03);
	color: var(--muted);
	font-size: 13px;
	font-weight: 500;
}

.project-description {
	margin: 0;
	color: var(--muted);
	line-height: 1.6;
	font-size: 15px;
}

.project-tech {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
}

.tech-tag {
	padding: 6px 10px;
	border-radius: 999px;
	border: 1px solid var(--line);
	background: rgba(255, 255, 255, 0.03);
	font-size: 12px;
	color: var(--muted);
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.project-link {
	padding: 6px 12px;
	border-radius: 8px;
	border: 1px solid var(--line);
	background: rgba(255, 255, 255, 0.03);
	color: var(--accent);
	text-decoration: none;
	font-size: 13px;
	font-weight: 500;
	transition:
		border-color 150ms ease,
		background 150ms ease;
}

.project-link:hover {
	border-color: rgba(124, 247, 193, 0.5);
	background: rgba(124, 247, 193, 0.08);
}

@media (max-width: 720px) {
	.project-grid {
		grid-template-columns: 1fr;
	}
}
</style>

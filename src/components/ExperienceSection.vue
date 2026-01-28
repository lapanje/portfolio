<script setup>
const props = defineProps({
	experience: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<section class="section experience" id="experience">
		<div class="section-container">
			<div class="section-head">
				<p class="eyebrow">Experience</p>
				<h2>Experience</h2>
				<p class="section-sub">Professional work and projects I've contributed to.</p>
			</div>

			<div class="experience-grid">
				<article
					v-for="role in props.experience"
					:key="role.company + role.role"
					class="experience-card panel-card"
				>
					<div class="experience-header">
						<h3 class="experience-title">{{ role.role }}</h3>
						<span class="experience-type">{{ role.type }}</span>
					</div>

					<div class="experience-meta">
						<p class="experience-company">{{ role.company }}</p>
						<p class="experience-location">{{ role.location }}</p>
						<p class="experience-period">{{ role.period.from }} — {{ role.period.to }}</p>
					</div>

					<ul class="experience-highlights">
						<li v-for="item in role.highlights" :key="item">{{ item }}</li>
					</ul>

					<div class="experience-tech">
						<span v-for="tag in role.tech" :key="tag" class="tech-tag">{{ tag }}</span>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<style scoped>
.experience-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
}

.experience-card {
	padding: 24px;
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	gap: 16px;
	align-content: start;
}

.experience-header {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 12px;
}

.experience-title {
	margin: 0;
	font-family: "Space Grotesk", sans-serif;
	font-size: 18px;
	font-weight: 600;
	color: var(--text);
	line-height: 1.3;
	flex: 1;
}

.experience-type {
	padding: 4px 10px;
	border-radius: 999px;
	border: 1px solid var(--line);
	font-size: 11px;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	font-weight: 600;
	color: var(--muted);
	background: rgba(255, 255, 255, 0.03);
	white-space: nowrap;
	flex-shrink: 0;
}

.experience-meta {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.experience-company {
	margin: 0;
	color: var(--text);
	font-size: 15px;
	font-weight: 500;
}

.experience-location {
	margin: 0;
	color: var(--muted);
	font-size: 14px;
}

.experience-period {
	margin: 0;
	color: var(--muted);
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.experience-highlights {
	margin: 0;
	padding-left: 20px;
	color: var(--muted);
	display: flex;
	flex-direction: column;
	gap: 8px;
	line-height: 1.6;
	font-size: 15px;
}

.experience-highlights li {
	margin: 0;
}

.experience-tech {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	align-self: end;
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

@media (max-width: 720px) {
	.experience-grid {
		grid-template-columns: 1fr;
	}
}
</style>

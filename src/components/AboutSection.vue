<script setup>
const props = defineProps({
	about: {
		type: Object,
		default: () => ({ description: [] }),
	},
	skills: {
		type: Object,
		default: () => ({ coreStack: [], tools: [], concepts: [] }),
	},
});
</script>

<template>
	<section class="section about" id="about">
		<div class="section-container">
			<div class="section-head">
				<p class="eyebrow">About</p>
				<h2>About me</h2>
			</div>

			<div class="about-layout">
				<article class="about-card panel-card">
					<div class="about-text">
						<p v-for="line in props.about.description" :key="line">{{ line }}</p>
					</div>
				</article>

				<div class="about-columns">
					<div class="skill-card glass">
						<h3>Core Stack</h3>
						<div class="pill-grid">
							<span v-for="item in props.skills.coreStack" :key="item" class="pill">{{ item }}</span>
						</div>
					</div>
					<div class="skill-card panel-card">
						<h3>Tools</h3>
						<div class="pill-grid">
							<span v-for="item in props.skills.tools" :key="item" class="pill">{{ item }}</span>
						</div>
					</div>
					<div class="skill-card panel-card">
						<h3>Concepts</h3>
						<div class="pill-grid">
							<span v-for="item in props.skills.concepts" :key="item" class="pill">{{ item }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.about-layout {
	display: grid;
	grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
	gap: 28px;
}

.about-card {
	padding: 26px;
}

.about-text {
	display: grid;
	gap: 12px;
	font-size: 16px;
	line-height: 1.7;
	color: var(--muted);
}

.about-text p {
	margin: 0;
}

.about-columns {
	display: grid;
	gap: 18px;
}

.skill-card {
	padding: 18px 20px;
	border-radius: var(--radius);
}

.skill-card h3 {
	margin: 0 0 12px;
	font-family: "Space Grotesk", sans-serif;
	font-size: 16px;
}

.pill-grid {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

@media (max-width: 900px) {
	.about-layout {
		grid-template-columns: 1fr;
	}
}
</style>

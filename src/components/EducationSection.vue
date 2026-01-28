<script setup>
const props = defineProps({
	education: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<section class="section education" id="education">
		<div class="section-container">
			<div class="section-head">
				<p class="eyebrow">Education</p>
				<h2>Education</h2>
				<p class="section-sub">Academic background in computer science and software development.</p>
			</div>

			<div class="timeline">
			<div v-for="item in props.education" :key="item.degree" class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-card panel-card">
					<div class="timeline-meta">
						<span>{{ item.period }}</span>
						<span>{{ item.eqf }}</span>
					</div>
					<h3>{{ item.degree }}</h3>
					<p>{{ item.institution }}</p>
				</div>
			</div>
		</div>
		</div>
	</section>
</template>

<style scoped>
.timeline {
	position: relative;
	padding-left: 24px;
	display: grid;
	gap: 20px;
}

.timeline::before {
	content: "";
	position: absolute;
	left: 6px;
	top: 0;
	bottom: 0;
	width: 2px;
	background: linear-gradient(180deg, rgba(124, 247, 193, 0.6), rgba(138, 180, 255, 0.1));
}

.timeline-item {
	position: relative;
	padding-left: 24px;
}

.timeline-dot {
	position: absolute;
	left: -1px;
	top: 24px;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: linear-gradient(120deg, var(--accent), var(--accent-2));
}

.timeline-card {
	padding: 20px;
}

.timeline-meta {
	display: flex;
	justify-content: space-between;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--muted);
}

.timeline-card h3 {
	margin: 12px 0 8px;
	font-family: "Space Grotesk", sans-serif;
	font-size: 20px;
}

.timeline-card p {
	margin: 0;
	color: var(--muted);
	line-height: 1.6;
}
</style>

<script setup>
const props = defineProps({
	contact: {
		type: Object,
		default: () => ({ message: "", links: [] }),
	},
});

const resolveHref = (link) => {
	if (link.type === "email") return `mailto:${link.value}`;
	if (link.type === "github") return `https://github.com/${link.value.replace("@", "")}`;
	if (link.type === "instagram") return `https://instagram.com/${link.value.replace("@", "")}`;
	return "#contact";
};
</script>

<template>
	<section class="section contact" id="contact">
		<div class="section-container">
			<div class="section-head">
				<p class="eyebrow">Contact</p>
				<h2>Get in touch</h2>
				<p class="section-sub">{{ props.contact.message }}</p>
			</div>

			<div class="contact-grid">
				<div class="contact-card panel-card">
					<h3>Quick Reach</h3>
					<ul>
						<li v-for="item in props.contact.links" :key="item.label">
							<span>{{ item.label }}</span>
							<a :href="resolveHref(item)" target="_blank">{{ item.value }}</a>
						</li>
					</ul>
					<div class="contact-actions">
						<a class="cta" :href="resolveHref({ type: 'email', value: 'kristjan.lapanje@gmail.com' })"
							>Email me</a
						>
						<a class="ghost" href="#projects">See work</a>
					</div>
				</div>

				<div class="social-card glass">
					<div class="social-head">
						<h3>Socials</h3>
					</div>
					<div class="social-grid">
						<a
							v-for="item in props.contact.links.filter((l) => l.type !== 'email')"
							:key="item.type"
							:href="resolveHref(item)"
							target="_blank"
						>
							<span class="social-label">{{ item.label }}</span>
							<span class="social-handle">{{ item.value }}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.contact-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 20px;
}

.contact-card {
	padding: 22px;
}

.contact-card h3 {
	margin: 0 0 14px;
	font-family: "Space Grotesk", sans-serif;
}

.contact-card ul {
	list-style: none;
	padding: 0;
	margin: 0 0 18px;
	display: grid;
	gap: 12px;
}

.contact-card li {
	display: flex;
	justify-content: space-between;
	gap: 12px;
	color: var(--muted);
	font-size: 14px;
}

.contact-card a {
	color: var(--text);
	text-decoration: none;
}

.contact-actions {
	display: flex;
	gap: 10px;
}

.contact-actions a {
	padding: 10px 14px;
	font-size: 13px;
}

.social-card {
	padding: 22px;
	border-radius: var(--radius);
}

.social-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
}

.social-head h3 {
	margin: 0;
	font-family: "Space Grotesk", sans-serif;
}

.social-grid {
	display: grid;
	gap: 10px;
}

.social-grid a {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 14px;
	border-radius: 12px;
	border: 1px solid var(--line);
	text-decoration: none;
	color: var(--text);
	background: rgba(255, 255, 255, 0.02);
	transition:
		transform 150ms ease,
		border-color 150ms ease;
}

.social-grid a:hover {
	transform: translateY(-2px);
	border-color: rgba(124, 247, 193, 0.6);
}

.social-label {
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: var(--muted);
}

.social-handle {
	font-weight: 600;
}
</style>

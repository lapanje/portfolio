import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { motion as Motion } from "framer-motion";
import { Briefcase, User, Code2, GraduationCap } from "lucide-react";

const projects = [
	{
		title: "Real-Time Chat",
		tech: ["React", "WebSocket", "Node"],
		desc: "Optimistic UI, presence, message caching.",
		slug: "realtime-chat",
	},
	{
		title: "Algorithm Visualizer",
		tech: ["Canvas", "React"],
		desc: "Path-finding and sorting visualizations with precise timing.",
		slug: "algo-visualizer",
	},
	{
		title: "Portfolio CMS",
		tech: ["Vite", "React", "MDX"],
		desc: "Content-based portfolio with MDX and code blocks.",
		slug: "portfolio-cms",
	},
	{
		title: "3D Configurator",
		tech: ["React", "Three.js"],
		desc: "Parametric materials, lighting settings, screenshots.",
		slug: "3d-configurator",
	},
];

const gridVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { when: "beforeChildren", staggerChildren: 0.08 },
	},
};
const itemVariants = {
	hidden: { opacity: 0, y: 12 },
	show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
	return (
		<div
			className="antialiased"
			style={{ background: "var(--bg)", color: "var(--text)" }}
		>
			<Header />
			<Hero />
			<div className="flex flex-col gap-4">
				<Section
					id="about"
					eyebrow="Get to know me"
					title="About Me"
					right={<User size={18} className="opacity-70" />}
				>
					<Reveal>
						<article
							className="rounded-2xl border overflow-hidden"
							style={{
								background: "var(--card)",
								borderColor: "var(--border)",
							}}
						>
							<div className="p-6 md:p-8 grid gap-8 md:grid-cols-5">
								{/* LEFT: short, simple text (replace with your own) */}
								<div className="md:col-span-3 space-y-4">
									<h3
										className="text-lg font-semibold"
										style={{ color: "var(--text)" }}
									>
										A bit about me
									</h3>
									<p
										className="text-sm leading-relaxed"
										style={{ color: "var(--desc-text)" }}
									>
										I enjoy building fast, readable and
										reliable software. Clear UX, clean code,
										and small details matter to me. I like
										working across the stack and shipping
										things that feel good to use.
									</p>
									<p
										className="text-sm leading-relaxed"
										style={{ color: "var(--desc-text)" }}
									>
										Right now I’m focused on modern
										front‑end with React + Vite, with enough
										back‑end to make the product real.
										Always learning, always iterating.
									</p>
									{/* 👉 Replace the two paragraphs above with your own short text */}
								</div>

								{/* RIGHT: Spretnosti */}
								<div className="md:col-span-2">
									<div
										className="rounded-xl border h-full"
										style={{
											borderColor: "var(--border)",
											background: "var(--bg)",
										}}
									>
										<div
											className="flex items-center gap-2 px-4 py-3 border-b"
											style={{
												borderColor: "var(--border)",
											}}
										>
											<Code2
												size={16}
												className="opacity-70"
											/>
											<h4
												className="text-sm font-semibold"
												style={{ color: "var(--text)" }}
											>
												Skills
											</h4>
										</div>

										<div className="p-4 space-y-5">
											{/* Core stack */}
											<div>
												<div
													className="text-xs uppercase tracking-wide mb-2 font-semibold"
													style={{
														color: "var(--text-secondary)",
													}}
												>
													Core stack
												</div>
												<div className="flex flex-wrap gap-2">
													{[
														"React",
														"Vite",
														"Tailwind",
														"C#",
														"Node",
														"SQL",
													].map((s) => (
														<span
															key={s}
															className="rounded-md px-2 py-1 text-[11px] font-medium"
															style={{
																background:
																	"var(--badge-bg)",
																color: "var(--badge-text)",
																border: "1px solid var(--border)",
															}}
														>
															{s}
														</span>
													))}
												</div>
											</div>

											{/* Tools */}
											<div>
												<div
													className="text-xs uppercase tracking-wide mb-2 font-semibold"
													style={{
														color: "var(--text-secondary)",
													}}
												>
													Tools
												</div>
												<div className="flex flex-wrap gap-2">
													{[
														"Git",
														"Prisma/EF (basics)",
														"Docker (basics)",
														"Figma",
													].map((s) => (
														<span
															key={s}
															className="rounded-md px-2 py-1 text-[11px] font-medium"
															style={{
																background:
																	"var(--badge-bg)",
																color: "var(--badge-text)",
																border: "1px solid var(--border)",
															}}
														>
															{s}
														</span>
													))}
												</div>
											</div>

											{/* Concepts */}
											<div>
												<div
													className="text-xs uppercase tracking-wide mb-2 font-semibold"
													style={{
														color: "var(--text-secondary)",
													}}
												>
													Concepts
												</div>
												<div className="flex flex-wrap gap-2">
													{[
														"Component APIs",
														"State mgmt",
														"REST",
														"Performance",
														"Accessibility",
													].map((s) => (
														<span
															key={s}
															className="rounded-md px-2 py-1 text-[11px] font-medium"
															style={{
																background:
																	"var(--badge-bg)",
																color: "var(--badge-text)",
																border: "1px solid var(--border)",
															}}
														>
															{s}
														</span>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
					</Reveal>
				</Section>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "var(--section-gap)",
				}}
			>
				<Section
					id="projects"
					eyebrow="Selected Works"
					title="Projects"
				>
					<Motion.div
						variants={gridVariants}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
						className="grid gap-6 md:grid-cols-2"
					>
						{projects.map((p) => (
							<Motion.div key={p.title} variants={itemVariants}>
								<ProjectCard {...p} />
							</Motion.div>
						))}
					</Motion.div>
				</Section>

				<Section
					id="education"
					eyebrow="Academic background"
					title="Education"
					right={<GraduationCap size={18} className="opacity-70" />}
				>
					<Reveal>
						<ol className="relative border-s pl-6">
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900"
									style={{ background: "var(--card)" }}
								/>
								<div
									className="text-xs uppercase tracking-wide font-semibold"
									style={{ color: "var(--text-secondary)" }}
								>
									2024 - Present
								</div>
								<div className="text-base font-semibold">
									Computer Science and Informatics Engineer
								</div>
								<div className="text-sm mt-1 font-medium">
									Šolski center Kranj
								</div>
								<div className="text-xs mt-1">
									Website{" "}
									<a
										href="https://www.sckr.si"
										className="underline"
									>
										www.sckr.si
									</a>{" "}
									| EQF Level 6
								</div>
							</li>
							<li>
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900"
									style={{ background: "var(--card)" }}
								/>
								<div
									className="text-xs uppercase tracking-wide font-semibold"
									style={{ color: "var(--text-secondary)" }}
								>
									2019 - 2024
								</div>
								<div className="text-base font-semibold">
									Computer Technician
								</div>
								<div className="text-sm mt-1 font-medium">
									Vegova Ljubljana
								</div>
								<div className="text-xs mt-1">
									Website{" "}
									<a
										href="https://www.vegova.si"
										className="underline"
									>
										www.vegova.si
									</a>{" "}
									| EQF Level 5
								</div>
							</li>
						</ol>
					</Reveal>
				</Section>

				<Section
					id="experience"
					eyebrow="Work history"
					title="Experience"
					right={<Briefcase size={18} className="opacity-70" />}
				>
					<Reveal>
						<ol className="relative border-s pl-6">
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-900"
									style={{ background: "var(--card)" }}
								/>
								<div
									className="text-xs uppercase tracking-wide font-semibold"
									style={{ color: "var(--text-secondary)" }}
								>
									05/2022 - 07/2022
								</div>
								<div className="text-base font-semibold">
									Practical Training and Student Summer Work
								</div>
								<div className="text-sm mt-1 font-medium">
									Metronik d.o.o., Ljubljana
								</div>
								<ul
									className="list-disc pl-5 text-sm mt-2"
									style={{ color: "var(--desc-text)" }}
								>
									<li>
										Developed a C# application for
										monitoring and visualizing alarms using
										SQL queries
									</li>
									<li>
										Data processing, filter configuration,
										and basic user interface preparation
									</li>
									<li>
										Basic work with PLC and controller
										software
									</li>
								</ul>
							</li>
						</ol>
					</Reveal>
				</Section>

			</div>
			<Footer />
		</div>
	);
}

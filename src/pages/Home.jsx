import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import ExperienceItem from "../components/ExperienceItem";
import EducationItem from "../components/EducationItem";
import { motion as Motion } from "framer-motion";
import {
	Briefcase,
	User,
	Code2,
	GraduationCap,
	Github,
	Mail,
	Wrench,
	Instagram,
} from "lucide-react";

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
										Hello there 👋
									</h3>
									<p
										className="text-sm leading-relaxed text-justify"
										style={{ color: "var(--desc-text)" }}
									>
										I'm 20 years old student from Slovenia.
										I study Computer Science and Informatics
										Engineering at{" "}
										<a
											href="https:\\www.sckr.si"
											style={{ color: "var(--accent)" }}
										>
											Šolski center Kranj
										</a>
										. I have a passion for web development
										and enjoy creating clean, efficient, and
										user-friendly interfaces.
									</p>
									<p
										className="text-sm leading-relaxed text-justify"
										style={{ color: "var(--desc-text)" }}
									>
										In my free time, I like exploring with
										my motorcycle, hiking in the mountains,
										and photography. I also enjoy learning
										new technologies and improving my skills
										through personal projects and
										collaborations.
									</p>
									{/* 👉 Replace the two paragraphs above with your own short text */}
								</div>

								{/* RIGHT: Skills */}
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
													core stack
												</div>
												<div className="flex flex-wrap gap-2">
													{[
														"C++",
														"C#",
														"HTML/CSS",
														"PHP",
														"JS",
														"React",
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
														"Visual Studio",
														"EF Core",
														"npm",
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
														"State Management",
														"Responsive Design",
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
					right={<Wrench size={18} className="opacity-70" />}
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
						<ol
							className="relative border-s pl-6"
							style={{ borderColor: "var(--border)" }}
						>
							<EducationItem
								title="Computer Science and Informatics Engineer"
								period="2024 — Present"
								institution="Šolski center Kranj"
								url="https://www.sckr.si"
								badges={["EQF Level 6"]}
							/>
							<EducationItem
								title="Computer Technician"
								period="2019 — 2024"
								institution="Vegova Ljubljana"
								url="https://www.vegova.si"
								badges={["EQF Level 5"]}
							/>
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
						<ol
							className="relative border-s pl-6"
							style={{ borderColor: "var(--border)" }}
						>
							<ExperienceItem
								title="Freelance Software Developer — Odvetniška pisarna Žejn"
								period="2025"
								bullets={[
									"Developed a full-featured C# desktop app for legal case management.",
									"Included autocomplete client directory, CSV import, and A3 PDF case covers.",
									"Delivered clean UI and modular architecture for future-proofing.",
								]}
								tags={[
									"C#",
									"WinForms",
									"EF Core",
									"SQLite",
									"PDF",
								]}
							/>

							<ExperienceItem
								title="Web Developer — Family Business Website"
								period="2024"
								bullets={[
									"Built a responsive website for our family business using WordPress.",
									"Handled layout, styling, and basic SEO configuration.",
									<>
										Website is live at{" "}
										<a
											href="https://www.lapanje.si"
											target="_blank"
											rel="noopener noreferrer"
											className="underline"
											style={{ color: "var(--accent)" }}
										>
											www.lapanje.si
										</a>
										.
									</>,
								]}
								tags={[
									"WordPress",
									"HTML",
									"CSS",
									"SEO Basics",
								]}
							/>

							<ExperienceItem
								title="Remote Assistant — Društvo pljučnih bolnikov"
								period="2024 (short term)"
								bullets={[
									"Completed Excel-based tasks for internal use.",
									"Short freelance job done remotely from home.",
								]}
								tags={["Excel", "Remote", "Freelance"]}
							/>

							<ExperienceItem
								title="Practical Training & Student Work — Metronik d.o.o., Ljubljana"
								period="05/2022 — 07/2022"
								bullets={[
									"Built a C# desktop app to monitor and visualize alarms via SQL queries.",
									"Prepared filters, processed data, and delivered a clean, usable UI.",
									"Worked with PLC/controller software to test and verify integrations.",
								]}
								tags={["C#", "WinForms/WPF", "SQL", "UI/UX"]}
							/>
						</ol>
					</Reveal>
				</Section>

				<Section
					id="contact"
					eyebrow="Get in touch"
					title="Contact"
					right={<Mail size={18} className="opacity-70" />}
				>
					<Reveal>
						<div
							className="rounded-2xl border overflow-hidden"
							style={{
								background: "var(--card)",
								borderColor: "var(--border)",
							}}
						>
							<div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
								{/* LEFT: intro */}
								<div className="space-y-4">
									<h3
										className="text-lg font-semibold"
										style={{ color: "var(--text)" }}
									>
										Let’s connect
									</h3>
									<p
										className="text-sm leading-relaxed"
										style={{ color: "var(--desc-text)" }}
									>
										If something you saw here sparked an
										idea or you'd like to work together,
										<br />
										feel free to reach out. I'm just a
										message away.
									</p>
								</div>

								{/* RIGHT: action cards */}
								<div className="grid gap-3">
									{/* Email */}
									<a
										href="mailto:kristjan.lapanje@gmail.com"
										className="group flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm hover:shadow-sm transition"
										style={{
											background: "var(--bg)",
											borderColor: "var(--border)",
											color: "var(--text)",
										}}
									>
										<div className="flex items-center gap-2">
											<span
												className="inline-flex h-7 w-7 items-center justify-center rounded-lg border"
												style={{
													borderColor:
														"var(--border)",
													background: "var(--card)",
												}}
											>
												<Mail
													size={16}
													className="opacity-70"
												/>
											</span>
											<span>Email</span>
										</div>
										<span
											className="text-xs"
											style={{
												color: "var(--text-secondary)",
											}}
										>
											kristjan.lapanje@gmail.com
										</span>
									</a>

									{/* GitHub */}
									<a
										href="https://github.com/lapanje"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm hover:shadow-sm transition"
										style={{
											background: "var(--bg)",
											borderColor: "var(--border)",
											color: "var(--text)",
										}}
									>
										<div className="flex items-center gap-2">
											<span
												className="inline-flex h-7 w-7 items-center justify-center rounded-lg border"
												style={{
													borderColor:
														"var(--border)",
													background: "var(--card)",
												}}
											>
												<Github
													size={16}
													className="opacity-70"
												/>
											</span>
											<span>GitHub</span>
										</div>
										<span
											className="text-xs"
											style={{
												color: "var(--text-secondary)",
											}}
										>
											@lapanje
										</span>
									</a>

									{/* Instagram */}
									<a
										href="https://instagram.com/kristjanlapanje"
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm hover:shadow-sm transition"
										style={{
											background: "var(--bg)",
											borderColor: "var(--border)",
											color: "var(--text)",
										}}
									>
										<div className="flex items-center gap-2">
											<span
												className="inline-flex h-7 w-7 items-center justify-center rounded-lg border"
												style={{
													borderColor:
														"var(--border)",
													background: "var(--card)",
												}}
											>
												<Instagram
													size={16}
													className="opacity-70"
												/>
											</span>
											<span>Instagram</span>
										</div>
										<span
											className="text-xs"
											style={{
												color: "var(--text-secondary)",
											}}
										>
											@kristjanlapanje
										</span>
									</a>
								</div>
							</div>
						</div>
					</Reveal>
				</Section>
			</div>
			<Footer />
		</div>
	);
}

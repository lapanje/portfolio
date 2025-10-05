import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
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
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Computer Science and Informatics
											Engineer
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											2024 — Present
										</span>
									</div>
									<div className="mt-1 text-sm font-medium">
										School Center Kranj
									</div>
									<div className="mt-2 flex flex-wrap items-center gap-2">
										<a
											href="https://www.sckr.si"
											className="text-xs underline"
											style={{
												color: "var(--desc-text)",
											}}
										>
											www.sckr.si
										</a>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											EQF Level 6
										</span>
									</div>
								</div>
							</li>

							<li>
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Computer Technician
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											2019 — 2024
										</span>
									</div>
									<div className="mt-1 text-sm font-medium">
										Electrical Engineering and Computer
										Science Technical School and Gymnasium
										Ljubljana
									</div>
									<div className="mt-2 flex flex-wrap items-center gap-2">
										<a
											href="https://www.vegova.si"
											className="text-xs underline"
											style={{
												color: "var(--desc-text)",
											}}
										>
											www.vegova.si
										</a>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											EQF Level 5
										</span>
									</div>
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
						<ol
							className="relative border-s pl-6"
							style={{ borderColor: "var(--border)" }}
						>
							{/* LAW OFFICE */}
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Freelance Software Developer —
											Odvetniška pisarna Žejn
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											2025
										</span>
									</div>

									<ul
										className="list-disc pl-5 text-sm mt-3"
										style={{ color: "var(--desc-text)" }}
									>
										<li>
											Developed a full-featured C# desktop
											app for legal case management.
										</li>
										<li>
											Included autocomplete client
											directory, CSV import, and A3 PDF
											case covers.
										</li>
										<li>
											Delivered clean UI and modular
											architecture for future-proofing.
										</li>
									</ul>

									<div className="mt-3 flex flex-wrap gap-2">
										{[
											"C#",
											"WinForms",
											"EF Core",
											"SQLite",
											"PDF",
										].map((t) => (
											<span
												key={t}
												className="rounded-md px-2 py-1 text-[11px] font-medium"
												style={{
													background:
														"var(--badge-bg)",
													color: "var(--badge-text)",
													border: "1px solid var(--border)",
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</li>

							{/* BUSINESS WEBSITES */}
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Front-End Developer — Freelance
											Websites
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											2024 — 2025
										</span>
									</div>

									<ul
										className="list-disc pl-5 text-sm mt-3"
										style={{ color: "var(--desc-text)" }}
									>
										<li>
											Built two responsive websites for
											local businesses (services, gallery,
											contact).
										</li>
										<li>
											Delivered fast-loading HTML/CSS/JS
											sites with minimal dependencies.
										</li>
										<li>
											Provided handover with instructions
											and SEO basics.
										</li>
									</ul>

									<div className="mt-3 flex flex-wrap gap-2">
										{[
											"HTML",
											"CSS",
											"JavaScript",
											"SEO Basics",
										].map((t) => (
											<span
												key={t}
												className="rounded-md px-2 py-1 text-[11px] font-medium"
												style={{
													background:
														"var(--badge-bg)",
													color: "var(--badge-text)",
													border: "1px solid var(--border)",
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</li>

							{/* METRONIK INTERNSHIP (YOUR ORIGINAL) */}
							<li className="mb-8">
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Practical Training & Student Work
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											05/2022 — 07/2022
										</span>
									</div>
									<div className="mt-1 text-sm font-medium">
										Metronik d.o.o., Ljubljana
									</div>

									<ul
										className="list-disc pl-5 text-sm mt-3"
										style={{ color: "var(--desc-text)" }}
									>
										<li>
											Built a C# desktop app to monitor
											and visualize alarms via SQL
											queries.
										</li>
										<li>
											Prepared filters, processed data,
											and delivered a clean, usable UI.
										</li>
										<li>
											Worked with PLC/controller software
											to test and verify integrations.
										</li>
									</ul>

									<div className="mt-3 flex flex-wrap gap-2">
										{[
											"C#",
											"WinForms/WPF",
											"SQL",
											"UI/UX",
										].map((t) => (
											<span
												key={t}
												className="rounded-md px-2 py-1 text-[11px] font-medium"
												style={{
													background:
														"var(--badge-bg)",
													color: "var(--badge-text)",
													border: "1px solid var(--border)",
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</li>

							{/* OPTIONAL – SHORT EXCEL GIG */}
							<li>
								<span
									className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								/>
								<div
									className="rounded-xl border p-4"
									style={{
										background: "var(--card)",
										borderColor: "var(--border)",
									}}
								>
									<div className="flex flex-wrap items-baseline justify-between gap-2">
										<h4
											className="text-base font-semibold"
											style={{ color: "var(--text)" }}
										>
											Remote Assistant — Društvo pljučnih
											bolnikov
										</h4>
										<span
											className="text-[11px] rounded-md px-2 py-1 border"
											style={{
												borderColor: "var(--border)",
												color: "var(--text-secondary)",
											}}
										>
											2023 (short term)
										</span>
									</div>

									<ul
										className="list-disc pl-5 text-sm mt-3"
										style={{ color: "var(--desc-text)" }}
									>
										<li>
											Prepared Excel reports and performed
											data cleanup for a healthcare NGO.
										</li>
									</ul>

									<div className="mt-3 flex flex-wrap gap-2">
										{[
											"Excel",
											"Data Cleaning",
											"Reports",
										].map((t) => (
											<span
												key={t}
												className="rounded-md px-2 py-1 text-[11px] font-medium"
												style={{
													background:
														"var(--badge-bg)",
													color: "var(--badge-text)",
													border: "1px solid var(--border)",
												}}
											>
												{t}
											</span>
										))}
									</div>
								</div>
							</li>
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

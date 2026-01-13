import Header from "../components/Header";
import Hero from "../components/Hero";
import Hero1 from "../components/Hero1";
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
		title: "Law Firm Management App",
		tech: ["C#", "WPF", "EF Core", "SQLite", "PDF"],
		desc: "Desktop application for managing legal cases, clients and generating PDF case covers, built with a clean WPF interface.",
		isPrivate: true,
	},
	{
		title: "Slikarnik (Image Processing App)",
		tech: ["JavaScript", "HTML5 Canvas", "CSS"],
		desc: "A simple browser-based image editor with filters, RGB analysis graph, channel manipulation and sharpening/blur effects.",
		repo: "https://github.com/lapanje/Slikarnik",
	},
	{
		title: "2D Platformer (SDL2)",
		tech: ["C++", "SDL2"],
		desc: "Side-scrolling platformer built with a custom game loop, sprite rendering, collision system and basic enemy behavior.",
		isPrivate: true,
	},
	{
		title: "Family Business Website",
		tech: ["WordPress", "HTML", "CSS", "SEO"],
		desc: "WordPress site with custom styling, optimized structure and SEO improvements for a local company.",
		href: "https://www.lapanje.si",
	},
];

const gridVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { when: "beforeChildren", staggerChildren: 0.04 },
	},
};
const itemVariants = {
	hidden: { opacity: 0, y: 8 },
	show: { opacity: 1, y: 0, transition: { duration: 0.32 } },
};

export default function Home() {
	return (
		<div
			className="antialiased"
			style={{ background: "var(--bg)", color: "var(--text)" }}
		>
			<Header />
			<Hero1 />
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
										I'm 21 years old student from Slovenia.
										I study Computer Science and Informatics
										Engineering at{" "}
										<a
											href="https:\\www.sckr.si"
											target="_blank"
											className="underline"
											style={{ color: "var(--accent)" }}
										>
											School Center Kranj
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
								</div>

								{/* RIGHT: Skills */}
								<div className="md:col-span-2">
									<div
										className="rounded-xl border h-full"
										style={{
											borderColor: "var(--border)",
											background: "var(--bg-secondary)",
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
														"VS Code",
														"MySQL",
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
														"API Integration",
														"Object Oriented Programming",
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
								institution="School Center Kranj"
								url="https://www.sckr.si"
								badges={["EQF Level 6"]}
							/>
							<EducationItem
								title="Computer Technician"
								period="2019 — 2024"
								institution="Electrical Engineering and Computer Science Technical School and Gymnasium Ljubljana"
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
								title="Software Developer — Odvetniška pisarna Žejn"
								period="2025"
								bullets={[
									"Developed a full-featured C# desktop app for legal case management.",
									"Included autocomplete client directory, CSV import, and PDF generation.",
									"Delivered clean UI and modular architecture for future-proofing.",
								]}
								tags={[
									"C#",
									"WPF",
									"EF Core",
									"SQLite",
									"PDF Gen",
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
											style={{ color: "var(--accent)"}}
										>
											www.lapanje.si
										</a>
										.
									</>,
								]}
								tags={[
									"Wordpress",
									"HTML",
									"CSS",
									"SEO",
								]}
							/>

							<ExperienceItem
								title="Technical Assistance — Društvo pljučnih bolnikov in alergikov"
								period="2024 (short term)"
								bullets={[
									"Completed Excel-based tasks.",
									"Short freelance job done remotely from home.",
								]}
								tags={["Excel", "Remote", "Freelance"]}
							/>

							<ExperienceItem
								title="Internship & Student Work — Metronik d.o.o., Ljubljana"
								period="05/2022 — 07/2022"
								bullets={[
									"Built a C# desktop app to monitor and visualize alarms via SQL queries.",
									"Prepared filters, processed data, and delivered a clean, usable UI.",
									"Worked with PLC/controller software to test and verify integrations.",
								]}
								tags={["C#", "WinForms", "SQL", "UI/UX"]}
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
										feel free to reach out.
										I'm just a
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
											background: "var(--bg-secondary)",
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
											background: "var(--bg-secondary)",
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
											background: "var(--bg-secondary)",
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

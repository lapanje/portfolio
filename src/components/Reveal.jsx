import { motion as Motion } from "framer-motion";
export default function Reveal({ children, delay = 0 }) {
	return (
		<Motion.div
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.36, delay }}
			// smaller margin and faster reveal; keep once: true
			viewport={{ once: true, margin: "-40px" }}
		>
			{children}
		</Motion.div>
	);
}

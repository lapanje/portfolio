import { motion as Motion } from 'framer-motion'
export default function Reveal({ children, delay=0 }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .6, delay }}
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </Motion.div>
  )
}
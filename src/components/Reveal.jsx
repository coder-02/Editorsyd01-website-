import { motion } from 'framer-motion'

// Generic scroll/mount reveal. Respects reduced motion automatically via framer.
export function Reveal({ children, delay = 0, y = 40, className = '', once = true }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Word-by-word cinematic headline reveal. Pass text with \n for line breaks.
export function RevealText({ text, className = 'display', delay = 0, as: Tag = 'h1' }) {
  const lines = text.split('\n')
  return (
    <Tag className={className} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, li) => (
        <span key={li} className="reveal-line" style={{ display: 'block' }}>
          <motion.span
            style={{ display: 'inline-block', willChange: 'transform' }}
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: delay + li * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

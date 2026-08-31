import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ImageReveal.css'

// Cinematic image unveil: a curtain wipes away while the image
// eases from a slight zoom, plus gentle scroll parallax.
export default function ImageReveal({
  src,
  alt = '',
  className = '',
  ratio = '4 / 5',
  parallax = true,
  badge,
  loading = 'lazy',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ['-6%', '6%'] : ['0%', '0%'])

  return (
    <div className={`imgrev ${className}`} ref={ref} style={{ aspectRatio: ratio }}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className="imgrev__img"
        style={{ y }}
        initial={{ scale: 1.28 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="imgrev__curtain"
        aria-hidden="true"
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.15, ease: [0.83, 0, 0.17, 1] }}
      />
      {badge && <span className="imgrev__badge">{badge}</span>}
      <span className="imgrev__glow" aria-hidden="true" />
    </div>
  )
}

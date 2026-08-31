import { motion } from 'framer-motion'
import { RevealText } from './Reveal'
import HeroPattern from './HeroPattern'
import './PageHero.css'

// Cinematic hero used on top of every inner page.
export default function PageHero({ eyebrow, title, subtitle, poster, pattern = 'default' }) {
  return (
    <section className="page-hero">
      {poster && (
        <div className="page-hero__bg" style={{ backgroundImage: `url(${poster})` }} aria-hidden="true" />
      )}
      <div className="page-hero__overlay" aria-hidden="true" />
      <HeroPattern variant={pattern} />
      <div className="container page-hero__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="accent-line" />{eyebrow}
        </motion.p>
        <RevealText text={title} className="display page-hero__title" delay={0.15} />
        {subtitle && (
          <motion.p
            className="lead page-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

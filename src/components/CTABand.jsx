import { motion } from 'framer-motion'
import { Instagram, MessageCircle, ArrowUpRight } from 'lucide-react'
import { RevealText } from './Reveal'
import MagneticButton from './MagneticButton'
import { links } from '../config/site'
import './CTABand.css'

export default function CTABand() {
  return (
    <section className="section cta-band noise-panel">
      <div className="cta-band__glow" aria-hidden="true" />
      <div className="container cta-band__inner">
        <p className="eyebrow"><span className="accent-line" />Let's talk</p>
        <RevealText text={'LET\u2019S CREATE\nSOMETHING CINEMATIC.'} className="display cta-band__title" />
        <motion.p
          className="lead cta-band__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Have a story worth telling? Let's turn your footage into something unforgettable.
        </motion.p>
        <div className="cta-band__actions">
          <MagneticButton to="/contact" className="btn btn-primary">Start a Project <ArrowUpRight size={16} /></MagneticButton>
          <MagneticButton href={links.whatsapp} className="btn btn-ghost"><MessageCircle size={16} /> WhatsApp</MagneticButton>
          <MagneticButton href={links.instagram} className="btn btn-ghost"><Instagram size={16} /> Instagram</MagneticButton>
        </div>
      </div>
    </section>
  )
}

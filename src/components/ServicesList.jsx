import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '../config/site'
import './ServicesList.css'

export default function ServicesList() {
  return (
    <div className="svc-list">
      {services.map((s, i) => (
        <motion.div
          key={s.n}
          className="svc-row"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="svc-row__num mono">{s.n}</span>
          <h3 className="svc-row__title">{s.title}</h3>
          <p className="svc-row__desc">{s.desc}</p>
          <ArrowRight className="svc-row__arrow" size={22} />
          <span className="svc-row__bg" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  )
}

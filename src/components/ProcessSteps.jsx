import { motion } from 'framer-motion'
import { processSteps } from '../config/site'
import './ProcessSteps.css'

export default function ProcessSteps() {
  return (
    <div className="proc">
      {processSteps.map((s, i) => (
        <motion.div
          key={s.n}
          className="proc__step"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="proc__num mono">{s.n}</span>
          <div className="proc__body">
            <h3 className="proc__title">{s.title}</h3>
            <p className="proc__desc">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

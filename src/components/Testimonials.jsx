import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../config/site'
import './Testimonials.css'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const go = useCallback((d) => setI((p) => (p + d + n) % n), [n])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => go(1), 6500)
    return () => clearInterval(t)
  }, [go])

  const t = testimonials[i]
  return (
    <div className="tst">
      <Quote className="tst__mark" size={64} aria-hidden="true" />
      <div className="tst__stage">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="tst__quote serif-italic">“{t.quote}”</p>
            <footer className="tst__by">
              <span className="tst__name">{t.name}</span>
              <span className="tst__role">{t.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="tst__controls">
        <button onClick={() => go(-1)} aria-label="Previous testimonial"><ChevronLeft size={20} /></button>
        <div className="tst__dots">
          {testimonials.map((_, d) => (
            <button key={d} className={`tst__dot ${d === i ? 'is-on' : ''}`} onClick={() => setI(d)} aria-label={`Go to testimonial ${d + 1}`} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Next testimonial"><ChevronRight size={20} /></button>
      </div>
    </div>
  )
}

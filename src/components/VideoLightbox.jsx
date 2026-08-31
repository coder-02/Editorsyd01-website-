import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './VideoLightbox.css'

export default function VideoLightbox({ project, onClose }) {
  useEffect(() => {
    // Only lock scroll and bind Escape while the lightbox is actually open.
    if (!project) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div className="lb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} onClick={onClose}>
          <button className="lb__close" onClick={onClose} aria-label="Close"><X size={26} /></button>
          <motion.div
            className="lb__frame"
            initial={{ scale: 0.92, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {project.video ? (
              <video src={project.video} poster={project.thumb} controls autoPlay playsInline className="lb__video" />
            ) : (
              <div className="lb__placeholder" style={{ backgroundImage: `url(${project.thumb})` }}>
                <div className="lb__placeholder-note">
                  <span>Preview</span>
                  <p>Add a video URL for “{project.title}” in <code>src/config/site.js</code></p>
                </div>
              </div>
            )}
            <div className="lb__meta">
              <div>
                <p className="eyebrow">{project.category} · {project.year}</p>
                <h3 className="display-md">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

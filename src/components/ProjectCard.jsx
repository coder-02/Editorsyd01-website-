import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, index = 0, onOpen }) {
  return (
    <motion.button
      className="pcard"
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Play ${project.title}`}
    >
      <div className="pcard__media">
        <img src={project.thumb} alt={project.title} loading="lazy" className="pcard__img" />
        <div className="pcard__shade" />
        <span className="pcard__chip">{project.category}</span>
        <div className="pcard__play"><Play size={20} fill="currentColor" /></div>
      </div>
      <div className="pcard__info">
        <div>
          <h3 className="pcard__title">{project.title}</h3>
          <span className="pcard__cat">{project.category}</span>
        </div>
        <span className="pcard__year mono">{project.year}</span>
      </div>
    </motion.button>
  )
}

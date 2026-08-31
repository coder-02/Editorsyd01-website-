import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import VideoLightbox from '../components/VideoLightbox'
import CTABand from '../components/CTABand'
import { Reveal } from '../components/Reveal'
import { projects, categories, heroImages } from '../config/site'
import './Work.css'

export default function Work() {
  const [active, setActive] = useState(null)
  const [filter, setFilter] = useState('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <>
      <PageHero
        eyebrow="Selected Work"
        title={'FRAMES,\nSTORIES,\nMOMENTS.'}
        subtitle="A collection of frames, stories and moments shaped through editing — from wedding films to brand campaigns."
        poster={heroImages.work}
        pattern="reel"
      />

      <section className="section">
        <div className="container">
          <div className="work-filter" role="tablist" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                className={`work-filter__btn ${filter === c ? 'is-on' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="work-page-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={p} index={i} onOpen={setActive} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <Reveal><p className="lead" style={{ textAlign: 'center', margin: '3rem auto' }}>New work in this category is coming soon.</p></Reveal>
          )}
        </div>
      </section>

      <CTABand />
      <VideoLightbox project={active} onClose={() => setActive(null)} />
    </>
  )
}

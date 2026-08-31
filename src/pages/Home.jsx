import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight, ArrowUpRight, MousePointer2 } from 'lucide-react'
import { RevealText, Reveal } from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import ProjectCard from '../components/ProjectCard'
import VideoLightbox from '../components/VideoLightbox'
import ServicesList from '../components/ServicesList'
import Testimonials from '../components/Testimonials'
import BeforeAfter from '../components/BeforeAfter'
import CTABand from '../components/CTABand'
import ImageReveal from '../components/ImageReveal'
import HeroPattern from '../components/HeroPattern'
import { media, projects, brand } from '../config/site'
import './Home.css'

export default function Home() {
  const [active, setActive] = useState(null)
  const heroVideoRef = useRef(null)
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 800], [0, 180])
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.15])
  const featured = projects.slice(0, 6)

  // Hero video: skip the glitchy start and loop from the same offset.
  useEffect(() => {
    const v = heroVideoRef.current
    if (!v) return
    const start = media.heroVideoStart || 0

    const seekToStart = () => {
      // Only jump forward if the video is long enough to allow it.
      if (v.duration && v.duration > start + 0.5) {
        try { v.currentTime = start } catch (_) {}
      }
    }
    const onLoaded = () => { seekToStart(); v.play?.().catch(() => {}) }
    const onEnded = () => { seekToStart(); v.play?.().catch(() => {}) }
    // Safety net in case 'ended' doesn't fire on some browsers.
    const onTimeUpdate = () => {
      if (v.duration && v.currentTime >= v.duration - 0.15) seekToStart()
    }

    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('ended', onEnded)
    v.addEventListener('timeupdate', onTimeUpdate)
    if (v.readyState >= 1) onLoaded()

    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('ended', onEnded)
      v.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <motion.div className="hero__media" style={{ y: heroY, scale: heroScale }}>
          <video
            ref={heroVideoRef}
            className="hero__video"
            poster={media.heroPoster}
            src={media.heroVideo}
            autoPlay muted playsInline preload="auto"
          />
          <div className="hero__poster" style={{ backgroundImage: `url(${media.heroPoster})` }} />
        </motion.div>
        <div className="hero__overlay" aria-hidden="true" />
        <HeroPattern variant="default" />

        <div className="container hero__content">
          <motion.p
            className="eyebrow hero__label"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="accent-line" />EDITOR · COLOR · STORY
          </motion.p>

          <RevealText text={'WE TURN FOOTAGE\nINTO CINEMA.'} className="display hero__title" delay={0.35} />

          <motion.p
            className="lead hero__sub"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Cinematic video editing crafted to make every frame feel like a story.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton to="/work" className="btn btn-primary"><Play size={16} fill="currentColor" /> View Showreel</MagneticButton>
            <MagneticButton to="/contact" className="btn btn-ghost">Start a Project <ArrowRight size={16} /></MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <MousePointer2 size={15} />
          <span>SCROLL TO EXPLORE</span>
          <span className="hero__scroll-line" />
        </motion.div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="section" id="work">
        <div className="container">
          <div className="sec-head">
            <div>
              <p className="eyebrow"><span className="accent-line" />Selected Work</p>
              <RevealText text={'SELECTED WORK'} className="display-md display sec-head__title" as="h2" />
              <Reveal delay={0.1}><p className="lead">A collection of frames, stories and moments shaped through editing.</p></Reveal>
            </div>
            <Link to="/work" className="sec-head__link">All Projects <ArrowUpRight size={16} /></Link>
          </div>

          <div className="work-grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="section about-teaser">
        <div className="container about-teaser__inner">
          <div className="about-teaser__text">
            <p className="eyebrow"><span className="accent-line" />The Edit</p>
            <RevealText text={'THE EDIT IS\nWHERE THE STORY\nBEGINS.'} className="display-md display" as="h2" />
            <Reveal delay={0.15}>
              <p className="lead about-teaser__lead">
                {brand.name} is built on cinematic storytelling — pacing that breathes,
                sound design that moves you, transitions that feel invisible, and color
                grading that gives every frame a mood. It's not just cutting clips.
                It's shaping feeling.
              </p>
              <MagneticButton to="/about" className="btn btn-ghost">More About Me <ArrowRight size={16} /></MagneticButton>
            </Reveal>
          </div>
          <ImageReveal
            className="about-teaser__media"
            src={brand.ownerPhoto}
            alt={`${brand.owner}, cinematic video editor`}
            ratio="4 / 5"
            badge={brand.owner}
          />
        </div>
      </section>

      {/* ===== BEFORE / AFTER ===== */}
      <section className="section ba-section">
        <div className="container">
          <div className="sec-head sec-head--center">
            <p className="eyebrow"><span className="accent-line" />From Raw to Cinema</p>
            <RevealText text={'FROM RAW TO CINEMA'} className="display-md display" as="h2" />
            <Reveal delay={0.1}><p className="lead" style={{ margin: '0 auto' }}>Drag to see how color grading, pacing, sound and storytelling transform raw footage.</p></Reveal>
          </div>
          <Reveal delay={0.15}><BeforeAfter /></Reveal>
        </div>
      </section>

      {/* ===== SERVICES TEASER ===== */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <div>
              <p className="eyebrow"><span className="accent-line" />What I Do</p>
              <RevealText text={'SERVICES'} className="display-md display" as="h2" />
            </div>
            <Link to="/services" className="sec-head__link">All Services <ArrowUpRight size={16} /></Link>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testi-section noise-panel">
        <div className="container">
          <div className="sec-head sec-head--center">
            <p className="eyebrow"><span className="accent-line" />Kind Words</p>
            <RevealText text={'CLIENT STORIES'} className="display-md display" as="h2" />
          </div>
          <Testimonials />
        </div>
      </section>

      <CTABand />

      <VideoLightbox project={active} onClose={() => setActive(null)} />
    </>
  )
}

import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { RevealText, Reveal } from '../components/Reveal'
import ImageReveal from '../components/ImageReveal'
import CTABand from '../components/CTABand'
import { brand, heroImages } from '../config/site'
import './About.css'

const craft = [
  { k: 'Storytelling', v: 'Every cut serves the story — structure before flash.' },
  { k: 'Pacing', v: 'Rhythm that breathes, tension that builds, moments that land.' },
  { k: 'Sound Design', v: 'Layered audio and mix that make footage feel alive.' },
  { k: 'Transitions', v: 'Invisible, motivated cuts that keep you inside the frame.' },
  { k: 'Color Grading', v: 'Filmic tones and mood, a signature look on every project.' },
]

const stats = [
  { n: '150+', l: 'Films Edited' },
  { n: '6', l: 'Years Crafting' },
  { n: '40+', l: 'Happy Clients' },
  { n: '∞', l: 'Cups of Coffee' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={'THE EDIT IS\nWHERE THE STORY\nBEGINS.'}
        subtitle={`I'm ${brand.owner} — a cinematic video editor obsessed with turning raw footage into something you feel.`}
        poster={heroImages.about}
        pattern="cool"
      />

      <section className="section">
        <div className="container about-lead">
          <ImageReveal
            className="about-lead__media"
            src={brand.ownerPhoto}
            alt={brand.owner}
            ratio="4 / 5"
          />
          <div className="about-lead__text">
            <p className="eyebrow"><span className="accent-line" />The Storyteller</p>
            <Reveal>
              <p className="about-lead__big serif-italic">
                “I don't just cut clips. I shape feeling — the pause before a smile,
                the beat that makes a room go quiet.”
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead about-lead__body">
                {brand.name} started from a simple obsession: making footage feel like cinema.
                Whether it's a wedding, a brand film, or a reel, I care about pacing, sound design,
                transitions and color the same way a director cares about a scene. The goal is never
                “nice video.” The goal is a story you remember.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section about-craft noise-panel">
        <div className="container">
          <RevealText text={'HOW I APPROACH\nTHE CRAFT.'} className="display-md display about-craft__title" as="h2" />
          <div className="about-craft__list">
            {craft.map((c, i) => (
              <motion.div
                key={c.k}
                className="about-craft__row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
              >
                <span className="about-craft__k">{c.k}</span>
                <span className="about-craft__v">{c.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="about-stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <span className="about-stat__n">{s.n}</span>
              <span className="about-stat__l">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  )
}

import PageHero from '../components/PageHero'
import ProcessSteps from '../components/ProcessSteps'
import BeforeAfter from '../components/BeforeAfter'
import Testimonials from '../components/Testimonials'
import { RevealText, Reveal } from '../components/Reveal'
import CTABand from '../components/CTABand'
import { heroImages } from '../config/site'

export default function Process() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title={'FROM FOOTAGE\nTO FINAL FRAME.'}
        subtitle="A calm, transparent workflow — so you always know where your film is and what happens next."
        poster={heroImages.process}
        pattern="cool"
      />

      <section className="section">
        <div className="container">
          <ProcessSteps />
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="sec-head sec-head--center">
            <p className="eyebrow"><span className="accent-line" />From Raw to Cinema</p>
            <RevealText text={'THE TRANSFORMATION.'} className="display-md display" as="h2" />
            <Reveal delay={0.1}><p className="lead" style={{ margin: '0 auto' }}>Grade, pacing, sound and story — drag to feel the difference.</p></Reveal>
          </div>
          <Reveal delay={0.15}><BeforeAfter /></Reveal>
        </div>
      </section>

      <section className="section noise-panel">
        <div className="container">
          <div className="sec-head sec-head--center">
            <p className="eyebrow"><span className="accent-line" />Kind Words</p>
            <RevealText text={'WHAT CLIENTS SAY.'} className="display-md display" as="h2" />
          </div>
          <Testimonials />
        </div>
      </section>

      <CTABand />
    </>
  )
}

import PageHero from '../components/PageHero'
import ServicesList from '../components/ServicesList'
import { RevealText, Reveal } from '../components/Reveal'
import CTABand from '../components/CTABand'
import { heroImages } from '../config/site'
import './Services.css'

const deliverables = [
  'Full-length cinematic edits',
  'Vertical reels & shorts',
  'Wedding highlight & feature films',
  'Brand & promo films',
  'Music video edits',
  'Custom color LUTs & grade',
  'Sound design & mix',
  'Titles, motion & light VFX',
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={'CRAFTED\nPOST-PRODUCTION.'}
        subtitle="Everything from the first cut to the final grade — handled with a director's eye and an editor's patience."
        poster={heroImages.services}
      />

      <section className="section">
        <div className="container">
          <ServicesList />
        </div>
      </section>

      <section className="section svc-deliver noise-panel">
        <div className="container">
          <RevealText text={'WHAT YOU GET.'} className="display-md display" as="h2" />
          <Reveal delay={0.1}><p className="lead svc-deliver__lead">Deliverables shaped around your story and your platforms.</p></Reveal>
          <ul className="svc-deliver__grid">
            {deliverables.map((d, i) => (
              <Reveal key={d} delay={i * 0.04}>
                <li className="svc-deliver__item"><span className="mono">{String(i + 1).padStart(2, '0')}</span>{d}</li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTABand />
    </>
  )
}

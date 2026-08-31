import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Mail, Facebook, Send, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import MagneticButton from '../components/MagneticButton'
import { Reveal } from '../components/Reveal'
import { contact, links, heroImages } from '../config/site'
import './Contact.css'

const projectTypes = ['Wedding Film', 'Cinematic Reel', 'Travel Film', 'Brand Film', 'Music Video', 'Social Media', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', type: projectTypes[0], budget: '', message: '' })
  const [sent, setSent] = useState('') // '' | 'whatsapp' | 'email'

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Basic check so we never send an empty inquiry.
  const isValid = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert('Please add at least your name and email.')
      return false
    }
    return true
  }

  // Human-readable lines shared by both WhatsApp and email.
  const lines = () => [
    `New project inquiry`,
    ``,
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `WhatsApp: ${form.whatsapp || '-'}`,
    `Project: ${form.type}`,
    `Budget: ${form.budget || 'Open / to discuss'}`,
    `Message: ${form.message || '-'}`,
  ]

  const flash = (which) => { setSent(which); setTimeout(() => setSent(''), 4000) }

  // Sends the form details to your WhatsApp (no API — uses wa.me).
  const sendWhatsApp = (e) => {
    e.preventDefault()
    if (!isValid()) return
    const text = encodeURIComponent(lines().join('\n'))
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, '_blank', 'noopener')
    flash('whatsapp')
  }

  // Sends the same details to your email (no API — uses the user's mail app).
  const sendEmail = () => {
    if (!isValid()) return
    const subject = encodeURIComponent(`New project inquiry — ${form.name} (${form.type})`)
    const body = encodeURIComponent(lines().join('\n'))
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    flash('email')
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={'LET\u2019S CREATE\nSOMETHING\nCINEMATIC.'}
        subtitle="Have a story worth telling? Let's turn your footage into something unforgettable."
        poster={heroImages.contact}
      />

      <section className="section">
        <div className="container contact-grid">
          {/* ----- Form ----- */}
          <Reveal className="contact-form-wrap">
            <p className="eyebrow"><span className="accent-line" />Project Inquiry</p>
            <h2 className="display-md display contact-form-title">TELL ME ABOUT IT.</h2>

            <form className="contact-form" onSubmit={sendWhatsApp}>
              <div className="cf-row">
                <label className="cf-field">
                  <span>Name</span>
                  <input required type="text" value={form.name} onChange={update('name')} placeholder="Your name" />
                </label>
                <label className="cf-field">
                  <span>Email</span>
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="you@email.com" />
                </label>
              </div>

              <label className="cf-field">
                <span>WhatsApp</span>
                <input type="tel" value={form.whatsapp} onChange={update('whatsapp')} placeholder="+91 ..." />
              </label>

              <div className="cf-row">
                <label className="cf-field">
                  <span>Project Type</span>
                  <select value={form.type} onChange={update('type')}>
                    {projectTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </label>
                <label className="cf-field">
                  <span>Budget <em className="cf-hint">(your call)</em></span>
                  <input type="text" value={form.budget} onChange={update('budget')} placeholder="e.g. ₹15,000 or your range" inputMode="text" />
                </label>
              </div>

              <label className="cf-field">
                <span>Message</span>
                <textarea rows={4} value={form.message} onChange={update('message')} placeholder="Tell me about your footage, the story, and your deadline." />
              </label>

              <div className="cf-actions">
                <button type="submit" className={`btn btn-primary cf-submit ${sent === 'whatsapp' ? 'is-sent' : ''}`}>
                  {sent === 'whatsapp' ? <><Check size={16} /> Opening WhatsApp…</> : <><MessageCircle size={16} /> Send on WhatsApp</>}
                </button>
                <button type="button" onClick={sendEmail} className={`btn btn-ghost cf-submit ${sent === 'email' ? 'is-sent' : ''}`}>
                  {sent === 'email' ? <><Check size={16} /> Opening Email…</> : <><Mail size={16} /> Send on Email</>}
                </button>
              </div>
              <p className="cf-note">
                Your details are sent to me directly — “Send on WhatsApp” opens WhatsApp ({contact.whatsappDisplay}),
                “Send on Email” opens your mail app to {contact.email}. No account or sign-up needed.
              </p>
            </form>
          </Reveal>

          {/* ----- Direct channels ----- */}
          <Reveal delay={0.15} className="contact-side">
            <h3 className="contact-side__h">Direct channels</h3>
            <div className="contact-channels">
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-channel">
                <MessageCircle size={20} />
                <div><span>WhatsApp</span><small>{contact.whatsappDisplay}</small></div>
              </a>
              <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="contact-channel">
                <Instagram size={20} />
                <div><span>Instagram</span><small>{contact.instagramHandle}</small></div>
              </a>
              <a href={links.email} className="contact-channel">
                <Mail size={20} />
                <div><span>Email</span><small>{contact.email}</small></div>
              </a>
              <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="contact-channel">
                <Facebook size={20} />
                <div><span>Facebook</span><small>Editorsyd01</small></div>
              </a>
            </div>

            <div className="contact-quick">
              <MagneticButton href={links.whatsapp} className="btn btn-ghost"><MessageCircle size={16} /> Chat Now</MagneticButton>
              <MagneticButton href={links.instagram} className="btn btn-ghost"><Instagram size={16} /> Follow</MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

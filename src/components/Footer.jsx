import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Mail, Facebook, ArrowUpRight } from 'lucide-react'
import { brand, contact, links } from '../config/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <p className="eyebrow"><span className="accent-line" />Let's collaborate</p>
          <Link to="/contact" className="footer__big">
            START A PROJECT <ArrowUpRight className="footer__big-arrow" size={48} />
          </Link>
        </div>

        <div className="divider" />

        <div className="footer__grid">
          <div className="footer__brand">
            <img src={brand.logo} alt={`${brand.name} ${brand.subtitle}`} className="footer__logo" />
            <p className="footer__tagline">{brand.tagline}</p>
            <p className="footer__owner">Cinematic editing by {brand.owner}</p>
          </div>

          <div className="footer__col">
            <h4>Menu</h4>
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/process">Process</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <a href={links.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={15} /> Instagram</a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a>
            <a href={links.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={15} /> Facebook</a>
            <a href={links.email}><Mail size={15} /> Email</a>
          </div>

          <div className="footer__col">
            <h4>Reach out</h4>
            <a href={links.email}>{contact.email}</a>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">{contact.whatsappDisplay}</a>
            <span className="footer__muted">{contact.instagramHandle}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} {brand.name} {brand.subtitle}. All rights reserved.</span>
          <span className="footer__muted">EDIT · FEEL · REMEMBER</span>
          <span className="footer__credit">Developed by Syd01</span>
        </div>
      </div>
    </footer>
  )
}

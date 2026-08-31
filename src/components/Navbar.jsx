import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, MessageCircle } from 'lucide-react'
import { brand, links } from '../config/site'
import './Navbar.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner container">
          <Link to="/" className="nav__brand" aria-label={`${brand.name} home`}>
            <motion.img
              src={brand.logo}
              alt={`${brand.name} ${brand.subtitle}`}
              className="nav__logo"
              initial={{ opacity: 0, filter: 'blur(8px)', y: -6 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
                end={n.to === '/'}
              >
                <span>{n.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="nav__icon" href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a className="nav__icon" href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <Link to="/contact" className="nav__cta">Start a Project</Link>
          </div>

          <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu__top container">
              <img src={brand.logo} alt={brand.name} className="mobile-menu__logo" />
              <button className="nav__burger" onClick={() => setOpen(false)} aria-label="Close menu"><X size={28} /></button>
            </div>

            <nav className="mobile-menu__nav">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink to={n.to} className="mobile-menu__link" end={n.to === '/'}>
                    <span className="mobile-menu__num">0{i + 1}</span>
                    {n.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu__footer container">
              <a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={links.email}>Email</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

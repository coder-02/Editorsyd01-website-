import './HeroPattern.css'

// Automatic cinematic pattern background for hero sections.
// Pure CSS animations — loops on its own, GPU-friendly, and
// fully hidden when the user prefers reduced motion.
export default function HeroPattern({ variant = 'default' }) {
  return (
    <div className={`hpat hpat--${variant}`} aria-hidden="true">
      <div className="hpat__grid" />
      <div className="hpat__scan" />
      <div className="hpat__orb hpat__orb--1" />
      <div className="hpat__orb hpat__orb--2" />
      <div className="hpat__beam" />
      <div className="hpat__noise" />
    </div>
  )
}

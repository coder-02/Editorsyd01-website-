import { useRef } from 'react'
import { Link } from 'react-router-dom'

// Magnetic hover wrapper. Renders <a>, <Link> or <button> based on props.
export default function MagneticButton({ to, href, children, className = 'btn', strength = 0.35, ...rest }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const props = {
    ref,
    className: `magnetic ${className}`,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' },
    ...rest,
  }

  if (to) return <Link to={to} {...props}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  return <button {...props}>{children}</button>
}

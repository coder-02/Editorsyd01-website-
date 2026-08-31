import { useRef, useState, useCallback, useEffect } from 'react'
import { MoveHorizontal } from 'lucide-react'
import './BeforeAfter.css'

// Interactive RAW -> FINAL comparison slider.
// Pass `before` (raw look) and `after` (graded look) image URLs.
export default function BeforeAfter({
  before = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  after = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
}) {
  const wrap = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX) => {
    const el = wrap.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  useEffect(() => {
    const move = (e) => { if (dragging.current) setFromClientX(e.touches ? e.touches[0].clientX : e.clientX) }
    const up = () => { dragging.current = false }
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: false })
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [setFromClientX])

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      className="ba"
      ref={wrap}
      onMouseDown={(e) => { dragging.current = true; setFromClientX(e.clientX) }}
      onTouchStart={(e) => { dragging.current = true; setFromClientX(e.touches[0].clientX) }}
    >
      {/* AFTER (graded) — base layer */}
      <div className="ba__img ba__after" style={{ backgroundImage: `url(${after})` }}>
        <span className="ba__tag ba__tag--right">FINAL</span>
      </div>
      {/* BEFORE (raw) — clipped layer */}
      <div className="ba__img ba__before" style={{ backgroundImage: `url(${before})`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <span className="ba__tag ba__tag--left">RAW</span>
      </div>

      <div className="ba__line" style={{ left: `${pos}%` }}>
        <button
          className="ba__handle"
          style={{ left: `${pos}%` }}
          role="slider"
          aria-label="Compare raw and final footage"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={onKey}
          onClick={(e) => e.stopPropagation()}
        >
          <MoveHorizontal size={20} />
        </button>
      </div>
    </div>
  )
}

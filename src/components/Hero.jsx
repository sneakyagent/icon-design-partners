import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const EMAIL = 'admin@icondesignpartners.com'
const words = ['Websites', 'Mobile Apps', 'Dashboards', 'Experiences', 'Platforms']

const stats = [
  ['10+', 'Projects Shipped'],
  ['4', 'Core Services'],
  ['100%', 'Custom Built'],
]

export function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)
  const mobile = useIsMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % words.length)
        setVisible(true)
      }, 300)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero__grid-bg" />
      <div className="hero__glow hero__glow--primary" />
      <div className="hero__glow hero__glow--secondary" />

      {!mobile && (
        <div className="hero__spinner">
          <svg viewBox="0 0 120 120">
            <defs>
              <path
                id="circle"
                d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
              />
            </defs>
            <text
              fontSize="10.5"
              fill="var(--yellow)"
              letterSpacing="3.5"
              fontFamily="var(--font-display)"
              fontWeight="600"
            >
              <textPath href="#circle">WE BUILD &bull; WE DESIGN &bull; WE SHIP &bull;</textPath>
            </text>
          </svg>
          <div className="hero__spinner-icon">&#10022;</div>
        </div>
      )}

      <div className="hero__content">
        <div className="hero__badge animate-up" style={{ animationDelay: '0s' }}>
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">Available for new projects</span>
        </div>

        <h1 className="hero__title animate-up" style={{ animationDelay: '0.1s' }}>
          We Build
          <br />
          <span
            className={`hero__title-word ${visible ? 'hero__title-word--visible' : ''}`}
          >
            {words[wordIdx]}
          </span>
          <br />
          <span className="hero__title-muted">That Convert.</span>
        </h1>

        <p className="hero__desc animate-up" style={{ animationDelay: '0.25s' }}>
          From pixel-perfect frontends to bulletproof backends — we make digital products
          that look incredible and perform even better.
        </p>

        <div className="hero__actions animate-up" style={{ animationDelay: '0.35s' }}>
          <a href={`mailto:${EMAIL}`} className="btn btn--primary">
            Start a Project <span>&rarr;</span>
          </a>
          <a href="#services" className="btn btn--outline">
            See What We Do
          </a>
        </div>

        <div className="hero__stats animate-up" style={{ animationDelay: '0.45s' }}>
          {stats.map(([num, label]) => (
            <div key={label} className="hero__stat">
              <div className="hero__stat-num">{num}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint animate-up" style={{ animationDelay: '1s' }}>
        <div className="hero__scroll-text">Scroll</div>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

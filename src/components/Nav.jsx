import { useState, useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const EMAIL = 'admin@icondesignpartners.com'
const links = ['Services', 'Clients', 'Process', 'Contact']

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const mobile = useIsMobile()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobile) setMenuOpen(false)
  }, [mobile])

  const active = scrolled || menuOpen

  return (
    <>
      <nav className={`nav ${active ? 'nav--active' : ''}`}>
        <div className="nav__logo">
          <span className="nav__logo-icon">&#10022;</span> Icon Design Partners
        </div>
        {mobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="nav__toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? '\u2715' : '\u2630'}
          </button>
        ) : (
          <div className="nav__links">
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav__link">
                {item}
              </a>
            ))}
            <a href={`mailto:${EMAIL}`} className="nav__cta">
              Let's Talk
            </a>
          </div>
        )}
      </nav>
      {mobile && (
        <div className={`nav__mobile-menu ${menuOpen ? 'nav__mobile-menu--open' : ''}`}>
          <div className="nav__mobile-links">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="nav__mobile-link"
              >
                {item}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              onClick={() => setMenuOpen(false)}
              className="nav__mobile-cta"
            >
              Let's Talk &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  )
}

import { useIsMobile } from '../hooks/useIsMobile'

const EMAIL = 'admin@icondesignpartners.com'

export function Footer() {
  const mobile = useIsMobile()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <span className="footer__logo-icon">&#10022;</span> Icon Design Partners
        </div>
        <div className="footer__copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
        <a href={`mailto:${EMAIL}`} className="footer__email" data-hover="true">
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}

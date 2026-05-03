import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EMAIL = 'admin@icondesignpartners.com'

export function Contact() {
  const mobile = useIsMobile()
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className={`contact__inner ${visible ? 'reveal' : ''}`}>
        <div className="contact__icon-wrap">
          <div className="contact__icon">&#10022;</div>
          <div className="contact__icon-ring" />
        </div>
        <h2 className="contact__title">
          Ready to build
          <br />
          <span className="text-accent">something great?</span>
        </h2>
        <p className="contact__desc">
          Tell us what you're working on. No price lists, no packages — just a real
          conversation about what you need and how we can make it happen.
        </p>
        <a href={`mailto:${EMAIL}`} className="btn btn--primary btn--lg contact__btn" data-hover="true">
          <span>&#9993;</span> {EMAIL}
        </a>
        <div className="contact__note">
          We respond within 24 hours. Usually way faster.
        </div>
      </div>
    </section>
  )
}

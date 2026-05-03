import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EMAIL = 'admin@icondesignpartners.com'

const points = [
  ['No fluff', 'We ship real, working products — not just pretty mockups that fall apart in production.'],
  ['Full stack', 'One team for everything — frontend, backend, mobile. No coordination chaos.'],
  ['You own it all', "Every line of code, every asset, every credential. It's yours, always."],
  ['Humans only', "You get a direct line to the people building your product. No account managers playing telephone."],
]

export function WhyUs() {
  const mobile = useIsMobile()
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section className="section why-us" ref={ref}>
      <div className="container">
        <div className={`why-us__grid ${visible ? 'reveal' : ''}`}>
          <div className="why-us__left">
            <div className="section-header__label" style={{ color: 'var(--teal)' }}>
              Why Icon Design Partners
            </div>
            <h2 className="section-header__title">
              We're the team
              <br />
              that actually
              <br />
              <span className="text-accent">gets it done.</span>
            </h2>
            <p className="why-us__desc">
              We've seen it all — bad outsourcing, missed deadlines, bloated agencies. We
              exist because clients deserve better.
            </p>
            <a href={`mailto:${EMAIL}`} className="why-us__cta" data-hover="true">
              Email us directly <span>&rarr;</span>
            </a>
          </div>
          <div className="why-us__points">
            {points.map(([title, desc], i) => (
              <div
                key={title}
                className="why-us__point"
                style={{
                  borderRadius:
                    i === 0
                      ? '20px 20px 4px 4px'
                      : i === points.length - 1
                      ? '4px 4px 20px 20px'
                      : '4px',
                }}
              >
                <div className="why-us__point-title">&#10022; {title}</div>
                <div className="why-us__point-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

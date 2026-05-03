import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'You Tell Us Everything',
    desc: "What you need, what you hate, what you love, your timeline. We listen first — no templates, no cookie-cutter.",
  },
  {
    num: '02',
    title: 'We Plan & Propose',
    desc: "We map out the approach, tech stack, and timeline. You know exactly what you're getting and when.",
  },
  {
    num: '03',
    title: 'We Build It',
    desc: "Development with regular check-ins and live previews. You see progress, not surprises.",
  },
  {
    num: '04',
    title: 'We Launch & Support',
    desc: "Go live, squash any bugs, and keep the lights on. We don't disappear after launch.",
  },
]

export function Process() {
  const mobile = useIsMobile()
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section id="process" className="section process" ref={ref}>
      <div className="container">
        <div className={`section-header ${visible ? 'reveal' : ''}`}>
          <div className="section-header__label" style={{ color: 'var(--coral)' }}>
            How It Works
          </div>
          <h2 className="section-header__title">
            Simple process.
            <br />
            <span className="text-muted">Real results.</span>
          </h2>
        </div>
        <div className={`process__grid ${visible ? 'reveal' : ''}`}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process__step ${mobile ? 'process__step--mobile' : ''}`}
              style={{ '--step-delay': `${i * 0.1}s` }}
            >
              <div className="process__step-num">{step.num}</div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: '\uD83C\uDF10',
    title: 'Web Apps',
    desc: 'From marketing sites to complex SaaS platforms. We craft web experiences that are fast, beautiful, and built to scale.',
    tags: ['React', 'Next.js', 'Node.js', 'Databases'],
    color: 'var(--yellow)',
  },
  {
    icon: '\uD83D\uDCF1',
    title: 'Mobile Apps',
    desc: 'iOS and Android apps that feel native and polished. We build mobile experiences users actually enjoy using.',
    tags: ['React Native', 'iOS', 'Android', 'APIs'],
    color: 'var(--teal)',
  },
  {
    icon: '\uD83C\uDFA8',
    title: 'Frontend Dev',
    desc: 'Pixel-perfect UI components, animations, and interactions that make your product feel alive and premium.',
    tags: ['React', 'TypeScript', 'CSS', 'Figma'],
    color: 'var(--coral)',
  },
  {
    icon: '\u2699\uFE0F',
    title: 'Backend Dev',
    desc: 'Rock-solid APIs, databases, and server architecture. The engine under the hood that keeps everything running smooth.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'REST/GraphQL'],
    color: 'var(--sand)',
  },
]

function ServiceCard({ service, index }) {
  return (
    <div className="service-card" data-hover="true" style={{ '--card-accent': service.color }}>
      <div className="service-card__number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <div className="service-card__tags">
        {service.tags.map((tag) => (
          <span key={tag} className="tag" style={{ '--tag-color': service.color }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Services() {
  const mobile = useIsMobile()
  const [ref, visible] = useScrollReveal(0.1)

  return (
    <section id="services" className="section services" ref={ref}>
      <div className="container">
        <div className={`section-header ${visible ? 'reveal' : ''}`}>
          <div className="section-header__label" style={{ color: 'var(--yellow)' }}>
            What We Do
          </div>
          <h2 className="section-header__title">
            We don't do templates.
            <br />
            <span className="text-muted">We build yours.</span>
          </h2>
        </div>
        <div className={`services__grid ${visible ? 'reveal' : ''}`}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

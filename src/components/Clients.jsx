import { useIsMobile } from '../hooks/useIsMobile'
import { useScrollReveal } from '../hooks/useScrollReveal'

const clients = [
  {
    name: 'Jaybird Group',
    url: 'https://www.jaybirdgroup.com',
    tagline: 'Strategic Thinking. Agile Development.',
    desc: 'Full-service design & development agency. Web and app experiences for major U.S. brands.',
    tags: ['Web', 'Apps', 'Design'],
    emoji: '\uD83D\uDC26',
    accent: '#4A90E2',
  },
  {
    name: 'Green Valley Naturals',
    url: 'https://www.greenvalleynaturals.com',
    tagline: 'Rooted in Nature. Refined by Science.',
    desc: 'Science-backed natural supplements with traceable ingredients and 3rd-party testing.',
    tags: ['E-Commerce', 'Web', 'Brand'],
    emoji: '\uD83C\uDF3F',
    accent: '#52C78B',
  },
  {
    name: 'LongevityGLP',
    url: 'https://www.longevityglp.com',
    tagline: "Unlock Your Body's Full Potential.",
    desc: 'Physician-formulated peptide therapeutics for energy, recovery, sleep, and performance.',
    tags: ['Health Tech', 'E-Commerce', 'Web'],
    emoji: '\u2697\uFE0F',
    accent: '#D4A853',
  },
  {
    name: 'Gene Guard Detox',
    url: 'https://www.geneguarddetox.com',
    tagline: 'Patent Pending Probiotic Detox.',
    desc: 'Helping F&B companies create healthier products with probiotics that remove glyphosate.',
    tags: ['Biotech', 'Web', 'Brand'],
    emoji: '\uD83E\uDDEC',
    accent: '#FF9F47',
  },
  {
    name: 'City Ice Denver',
    url: 'https://www.cityicedenver.com',
    tagline: "Denver's Go-To for Ice Delivery.",
    desc: "24/7/365 scheduled and emergency bagged & dry ice delivery. Family-owned since 1996, covering Colorado and surrounding states.",
    tags: ['Local Business', 'Web', 'E-Commerce'],
    emoji: '\uD83E\uDDCA',
    accent: 'var(--teal)',
  },
]

function ClientCard({ client }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="client-card"
      data-hover="true"
      style={{ '--card-accent': client.accent }}
    >
      <div className="client-card__arrow">&#8599;</div>
      <div className="client-card__emoji">{client.emoji}</div>
      <h3 className="client-card__name">{client.name}</h3>
      <div className="client-card__tagline">&ldquo;{client.tagline}&rdquo;</div>
      <p className="client-card__desc">{client.desc}</p>
      <div className="client-card__tags">
        {client.tags.map((tag) => (
          <span key={tag} className="tag" style={{ '--tag-color': client.accent }}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export function Clients() {
  const mobile = useIsMobile()
  const [ref, visible] = useScrollReveal(0.08)

  return (
    <section id="clients" className="section clients" ref={ref}>
      <div className="container">
        <div className={`clients__header ${visible ? 'reveal' : ''}`}>
          <div>
            <div className="section-header__label" style={{ color: 'var(--coral)' }}>
              Our Work
            </div>
            <h2 className="section-header__title">
              Clients we've
              <br />
              <span className="text-accent">shipped for.</span>
            </h2>
          </div>
          {!mobile && (
            <p className="clients__subtitle">
              From health tech to natural products to full-service agencies — we build for
              real businesses solving real problems.
            </p>
          )}
        </div>
        <div className={`clients__grid ${visible ? 'reveal' : ''}`}>
          {clients.map((c) => (
            <ClientCard key={c.name} client={c} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

const EMAIL = 'admin@icondesignpartners.com'

const navLinks = [
  ['Services', '#services'],
  ['Clients', '#work'],
  ['Process', '#process'],
  ['Contact', '#contact'],
]

const services = [
  {
    title: 'Websites that sell',
    text: 'Friendly, polished websites for service businesses, local brands, and growing companies that need visitors to become leads.',
  },
  {
    title: 'Custom web apps',
    text: 'Booking flows, dashboards, client portals, internal tools, and the practical systems your team needs to work faster.',
  },
  {
    title: 'Mobile experiences',
    text: 'Mobile-first products and responsive interfaces that feel easy for customers on the devices they actually use.',
  },
  {
    title: 'Launch support',
    text: 'Hosting, analytics, performance tuning, SEO basics, and practical support after the site goes live.',
  },
]

const clients = [
  {
    name: 'Jaybird Group',
    url: 'https://www.jaybirdgroup.com',
    tagline: 'Strategic Thinking. Agile Development.',
    text: 'Full-service design and development agency work for web and app experiences.',
    tags: ['Agency', 'Web', 'Apps'],
  },
  {
    name: 'Green Valley Naturals',
    url: 'https://www.greenvalleynaturals.com',
    tagline: 'Rooted in Nature. Refined by Science.',
    text: 'Natural supplement brand experience with product storytelling and e-commerce structure.',
    tags: ['E-Commerce', 'Brand', 'Web'],
  },
  {
    name: 'LongevityGLP',
    url: 'https://www.longevityglp.com',
    tagline: "Unlock Your Body's Full Potential.",
    text: 'Health and wellness product experience for peptide therapeutics and performance support.',
    tags: ['Health Tech', 'Web', 'Commerce'],
  },
  {
    name: 'Gene Guard Detox',
    url: 'https://www.geneguarddetox.com',
    tagline: 'Patent Pending Probiotic Detox.',
    text: 'Biotech-facing web presence for a probiotic detox product and company story.',
    tags: ['Biotech', 'Brand', 'Web'],
  },
  {
    name: 'City Ice Denver',
    url: 'https://www.cityicedenver.com',
    tagline: "Denver's Go-To for Ice Delivery.",
    text: 'Local business website for scheduled and emergency ice delivery across Colorado.',
    tags: ['Local Business', 'Web', 'Leads'],
  },
  {
    name: 'Front Range Runner',
    url: 'https://www.frontrangerunner.com',
    tagline: 'Lace Up. Show Up. Level Up.',
    text: 'Service brand site for personalized running coaching along Colorado’s Front Range.',
    tags: ['Fitness', 'Brand', 'Web'],
  },
  {
    name: 'Dry Ice Inc USA',
    url: 'https://www.dryiceincusa.com',
    tagline: 'Industrial Dry Ice & Blasting.',
    text: 'Industrial dry ice supply and blasting website for manufacturing and food processing.',
    tags: ['Industrial', 'Web', 'B2B'],
  },
]

const process = [
  ['Listen', 'We learn what you do, who you serve, and what a good client should do next.'],
  ['Shape', 'We turn that into clear pages, helpful copy, and a build plan that fits your budget.'],
  ['Build', 'You get steady previews, direct communication, and room to adjust before launch.'],
  ['Launch', 'We ship the site, check the details, and stay available when you need help.'],
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Icon Design Partners home">
        <span className="brand-mark" aria-hidden="true">I</span>
        <span className="brand-name">Icon Design Partners</span>
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="site-menu">
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>
      <nav id="site-menu" className={open ? 'site-nav open' : 'site-nav'} aria-label="Main navigation">
        {navLinks.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href={`mailto:${EMAIL}`} onClick={() => setOpen(false)}>
          Start a project
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Websites, apps, and digital systems</p>
          <h1>Websites and apps that make you easier to hire.</h1>
          <p className="hero-text">
            Icon Design Partners designs and builds websites, apps, portals, and launch-ready digital tools for businesses that need more leads and less confusion.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${EMAIL}`}>
              Start a project
            </a>
            <a className="button secondary" href="#work">
              View clients
            </a>
          </div>
          <div className="trust-row" aria-label="Project highlights">
            <span>Strategy</span>
            <span>Design</span>
            <span>Development</span>
            <span>Launch</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Digital product mockups on a studio desk">
          <img src="/client-friendly-hero.png" alt="Layered website and mobile app mockups on a bright creative studio desk" />
        </div>
      </div>
      <div className="proof-strip" aria-label="Client proof">
        <span>Built for 7+ client brands</span>
        <span>Web, mobile, e-commerce, and B2B</span>
        <span>Direct founder-level communication</span>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <p className="eyebrow">What we can help with</p>
        <h2>Digital work that feels human before it feels technical.</h2>
        <p>
          Whether you need a better first impression or a custom workflow behind the scenes, we make the experience simple for your customers and your team.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section work" id="work">
      <div className="section-heading work-heading">
        <div>
          <p className="eyebrow">Client work</p>
          <h2>A portfolio with range, not filler.</h2>
        </div>
        <p>
          From local service companies to health, wellness, biotech, industrial, and agency work, the portfolio shows a range of real business needs.
        </p>
      </div>
      <div className="work-list">
        {clients.map((client) => (
          <a className="work-item" href={client.url} target="_blank" rel="noopener noreferrer" key={client.name}>
            <span className="work-kicker">{client.tags[0]}</span>
            <h3>{client.name}</h3>
            <p className="work-tagline">{client.tagline}</p>
            <p>{client.text}</p>
            <div className="work-tags">
              {client.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="section-heading compact">
        <p className="eyebrow">How projects feel</p>
        <h2>A clear path from first call to launch day.</h2>
      </div>
      <div className="process-grid">
        {process.map(([title, text], index) => (
          <article className="process-step" key={title}>
            <div>{index + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Reassurance() {
  const points = [
    'You talk directly with the people doing the work.',
    'You see progress before everything is final.',
    'You own the finished site, code, accounts, and assets.',
  ]

  return (
    <section className="reassurance">
      <div>
        <p className="eyebrow">Why clients like working with us</p>
        <h2>No mystery, no pressure, no disappearing after launch.</h2>
      </div>
      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">Ready when you are</p>
      <h2>Have a project in mind? Let us make it easier to say yes.</h2>
      <p>
        Send a quick note with what you are trying to build, improve, or fix. We will reply with thoughtful next steps, not a hard sell.
      </p>
      <a className="button primary large" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <a className="brand" href="#top" aria-label="Icon Design Partners home">
          <span className="brand-mark" aria-hidden="true">I</span>
          <span className="brand-name">Icon Design Partners</span>
        </a>
        <p>Friendly websites, apps, and digital tools for businesses that want more clients.</p>
      </div>
      <nav className="footer-links" aria-label="Footer navigation">
        {navLinks.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <div className="footer-contact">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <span>© {new Date().getFullYear()} Icon Design Partners</span>
      </div>
    </footer>
  )
}

function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('idp_cookie_consent')) setShow(true)
    } catch (error) {
      setShow(true)
    }
  }, [])

  function choose(granted) {
    try {
      localStorage.setItem('idp_cookie_consent', granted ? 'granted' : 'denied')
    } catch (error) {
      // Browsers can block storage in strict privacy modes.
    }

    if (window.gtag) {
      window.gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' })
    }

    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div>
        <strong>Cookies and analytics</strong>
        <p>We use simple analytics. You can decline and the site still works normally.</p>
      </div>
      <div className="cookie-actions">
        <button onClick={() => choose(false)}>Decline</button>
        <button onClick={() => choose(true)}>Accept</button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Reassurance />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}

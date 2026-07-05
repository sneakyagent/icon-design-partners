import { useEffect, useState } from 'react'

const EMAIL = 'admin@icondesignpartners.com'

const navLinks = [
  ['Services', '#services'],
  ['Work', '#work'],
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

const work = [
  ['Jaybird Group', 'Agency website and digital product support'],
  ['City Ice Denver', 'Local business website and conversion paths'],
  ['Green Valley Naturals', 'E-commerce storytelling and product experience'],
  ['Front Range Runner', 'Service brand site for coaching leads'],
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
        <span className="brand-mark">IDP</span>
        <span>Icon Design Partners</span>
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
      <div className="hero-copy">
        <p className="eyebrow">Friendly websites and apps for growing businesses</p>
        <h1>Friendly websites that help clients trust and hire you.</h1>
        <p className="hero-text">
          Icon Design Partners builds warm, professional websites and digital tools for teams that want more clients without sounding like everybody else.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${EMAIL}`}>
            Tell us about your project
          </a>
          <a className="button secondary" href="#work">
            See the work
          </a>
        </div>
        <div className="trust-row" aria-label="Project highlights">
          <span>Custom design</span>
          <span>Clear communication</span>
          <span>Launch-ready builds</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Warm digital product mockups on a creative desk">
        <img src="/client-friendly-hero.png" alt="Layered website and mobile app mockups on a bright creative studio desk" />
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
      <div className="section-heading compact">
        <p className="eyebrow">Recent client work</p>
        <h2>Built for real businesses, not imaginary case studies.</h2>
      </div>
      <div className="work-list">
        {work.map(([name, detail]) => (
          <article className="work-item" key={name}>
            <h3>{name}</h3>
            <p>{detail}</p>
          </article>
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
      <span>Icon Design Partners</span>
      <span>© {new Date().getFullYear()}</span>
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

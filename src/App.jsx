import { useState, useEffect, useRef } from 'react'

const EMAIL = 'admin@icondesignpartners.com'

/* ─── Custom Cursor ─────────────────────────────────────────── */
function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovered(true)
      else setHovered(false)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: hovered ? 8 : 6, height: hovered ? 8 : 6,
        background: 'var(--yellow)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s, height 0.2s',
        mixBlendMode: 'difference'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: hovered ? 48 : 32, height: hovered ? 48 : 32,
        border: '1.5px solid var(--yellow)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.15s ease',
        opacity: hovered ? 0.9 : 0.5,
        mixBlendMode: 'difference'
      }} />
    </>
  )
}

/* ─── Marquee ────────────────────────────────────────────────── */
function Marquee() {
  const items = ['Web Apps', '✦', 'Mobile Apps', '✦', 'Frontend', '✦', 'Backend', '✦', 'UI / UX', '✦', 'Full Stack', '✦']
  const doubled = [...items, ...items]
  return (
    <div style={{
      overflow: 'hidden', background: 'var(--yellow)', padding: '12px 0',
      borderTop: '1px solid #333', borderBottom: '1px solid #333'
    }}>
      <div style={{
        display: 'flex', gap: 48, whiteSpace: 'nowrap',
        animation: 'marquee 18s linear infinite',
        width: 'max-content'
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 13, color: 'var(--black)', letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}>{item}</span>
        ))}
      </div>
    </div>
  )
}

/* ─── Nav ────────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 40px',
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--gray-mid)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between'
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 18, letterSpacing: '-0.02em', color: 'var(--white)'
      }}>
        <span style={{ color: 'var(--yellow)' }}>✦</span> Icon Design Partners
      </div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {['Services', 'Clients', 'Process', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
            color: 'var(--gray-light)', letterSpacing: '0.04em',
            transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.target.style.color = 'var(--yellow)'}
            onMouseLeave={e => e.target.style.color = 'var(--gray-light)'}
          >{item}</a>
        ))}
        <a href={`mailto:${EMAIL}`} style={{
          background: 'var(--yellow)', color: 'var(--black)',
          padding: '10px 22px', borderRadius: 40,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          transition: 'transform 0.2s, box-shadow 0.2s',
          display: 'inline-block'
        }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; e.target.style.boxShadow = '0 0 30px rgba(232,255,71,0.4)' }}
          onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = 'none' }}
        >Let's Talk</a>
      </div>
    </nav>
  )
}

/* ─── Hero ───────────────────────────────────────────────────── */
const words = ['Websites', 'Mobile Apps', 'Dashboards', 'Experiences', 'Platforms']

function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIdx(i => (i + 1) % words.length)
        setVisible(true)
      }, 300)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '120px 40px 80px',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating blobs */}
      <div style={{
        position: 'absolute', top: '20%', right: '8%',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,255,71,0.12) 0%, transparent 70%)',
        animation: 'float 7s ease-in-out infinite', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: 220, height: 220, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,77,106,0.1) 0%, transparent 70%)',
        animation: 'float 9s ease-in-out infinite reverse', zIndex: 0
      }} />

      {/* Spinning badge */}
      <div style={{
        position: 'absolute', top: '18%', right: '12%', zIndex: 2,
        width: 120, height: 120
      }}>
        <svg viewBox="0 0 120 120" style={{ animation: 'spin 14s linear infinite', width: '100%' }}>
          <defs>
            <path id="circle" d="M 60,60 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
          </defs>
          <text fontSize="10.5" fill="var(--yellow)" letterSpacing="3.5" fontFamily="var(--font-display)" fontWeight="600">
            <textPath href="#circle">WE BUILD • WE DESIGN • WE SHIP •</textPath>
          </text>
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 28
        }}>✦</div>
      </div>

      {/* Main headline */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 900 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'var(--gray)', border: '1px solid var(--gray-mid)',
          padding: '8px 18px', borderRadius: 40, marginBottom: 36,
          animation: 'fadeUp 0.6s ease both'
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--coral)', display: 'inline-block', animation: 'blink 2s ease infinite' }} />
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', color: 'var(--gray-light)', textTransform: 'uppercase' }}>
            Available for new projects
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 0.95,
          letterSpacing: '-0.04em', animation: 'fadeUp 0.7s ease 0.1s both'
        }}>
          We Build<br />
          <span style={{
            color: 'var(--yellow)',
            display: 'inline-block',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)'
          }}>
            {words[wordIdx]}
          </span><br />
          <span style={{ color: 'var(--gray-light)' }}>That Convert.</span>
        </h1>

        <p style={{
          maxWidth: 520, fontSize: 18, color: 'var(--gray-light)', fontWeight: 300,
          marginTop: 32, lineHeight: 1.7,
          animation: 'fadeUp 0.7s ease 0.25s both'
        }}>
          From pixel-perfect frontends to bulletproof backends — we make digital products 
          that look incredible and perform even better.
        </p>

        <div style={{
          display: 'flex', gap: 16, marginTop: 44, flexWrap: 'wrap',
          animation: 'fadeUp 0.7s ease 0.35s both'
        }}>
          <a href={`mailto:${EMAIL}`} style={{
            background: 'var(--yellow)', color: 'var(--black)',
            padding: '18px 40px', borderRadius: 60,
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 15, letterSpacing: '0.04em',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            transition: 'all 0.25s ease'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(232,255,71,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Start a Project <span style={{ fontSize: 20 }}>→</span>
          </a>
          <a href="#services" style={{
            border: '1.5px solid var(--gray-mid)', color: 'var(--white)',
            padding: '18px 40px', borderRadius: 60,
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 15, transition: 'all 0.25s ease'
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--white)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-mid)'; e.currentTarget.style.background = 'transparent' }}
          >
            See What We Do
          </a>
        </div>

        <div style={{
          display: 'flex', gap: 40, marginTop: 64,
          animation: 'fadeUp 0.7s ease 0.45s both'
        }}>
          {[['10+', 'Projects Shipped'], ['4', 'Core Services'], ['100%', 'Custom Built']].map(([num, label]) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--yellow)' }}>{num}</div>
              <div style={{ fontSize: 12, color: 'var(--gray-light)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0.4, animation: 'fadeUp 1s ease 1s both'
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>Scroll</div>
        <div style={{ width: 1, height: 40, background: 'var(--gray-light)' }} />
      </div>
    </section>
  )
}

/* ─── Services ───────────────────────────────────────────────── */
const services = [
  {
    icon: '🌐',
    title: 'Web Apps',
    desc: 'From marketing sites to complex SaaS platforms. We craft web experiences that are fast, beautiful, and built to scale.',
    tags: ['React', 'Next.js', 'Node.js', 'Databases'],
    color: 'var(--yellow)'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'iOS and Android apps that feel native and polished. We build mobile experiences users actually enjoy using.',
    tags: ['React Native', 'iOS', 'Android', 'APIs'],
    color: '#7DF9FF'
  },
  {
    icon: '🎨',
    title: 'Frontend Dev',
    desc: 'Pixel-perfect UI components, animations, and interactions that make your product feel alive and premium.',
    tags: ['React', 'TypeScript', 'CSS', 'Figma'],
    color: 'var(--coral)'
  },
  {
    icon: '⚙️',
    title: 'Backend Dev',
    desc: 'Rock-solid APIs, databases, and server architecture. The engine under the hood that keeps everything running smooth.',
    tags: ['Node.js', 'Python', 'PostgreSQL', 'REST/GraphQL'],
    color: '#C8B4FF'
  }
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      data-hover="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--gray)' : 'transparent',
        border: `1.5px solid ${hovered ? service.color : 'var(--gray-mid)'}`,
        borderRadius: 24, padding: '40px 36px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${service.color}18` : 'none',
        cursor: 'default', position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Number */}
      <div style={{
        position: 'absolute', top: 24, right: 28,
        fontFamily: 'var(--font-display)', fontWeight: 800,
        fontSize: 64, color: 'rgba(255,255,255,0.04)', lineHeight: 1,
        userSelect: 'none'
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div style={{ fontSize: 40, marginBottom: 20 }}>{service.icon}</div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 26, marginBottom: 14, color: 'var(--white)',
        letterSpacing: '-0.02em'
      }}>{service.title}</h3>

      <p style={{
        color: 'var(--gray-light)', fontSize: 15, lineHeight: 1.7,
        fontWeight: 300, marginBottom: 28
      }}>{service.desc}</p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {service.tags.map(tag => (
          <span key={tag} style={{
            background: `${service.color}15`,
            border: `1px solid ${service.color}40`,
            color: service.color, padding: '5px 14px',
            borderRadius: 20, fontSize: 12,
            fontWeight: 600, letterSpacing: '0.04em'
          }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ marginBottom: 64 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
          color: 'var(--yellow)', letterSpacing: '0.2em', textTransform: 'uppercase',
          marginBottom: 16
        }}>What We Do</div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.03em',
          lineHeight: 1.05
        }}>
          We don't do templates.<br />
          <span style={{ color: 'var(--gray-light)' }}>We build yours.</span>
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24
      }}>
        {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
      </div>
    </section>
  )
}

/* ─── Clients ────────────────────────────────────────────────── */
const clients = [
  {
    name: 'Jaybird Group',
    url: 'https://www.jaybirdgroup.com',
    tagline: 'Strategic Thinking. Agile Development.',
    desc: 'Full-service design & development agency. Web and app experiences for major U.S. brands.',
    tags: ['Web', 'Apps', 'Design'],
    emoji: '🐦',
    accent: '#4A90E2'
  },
  {
    name: 'Green Valley Naturals',
    url: 'https://www.greenvalleynaturals.com',
    tagline: 'Rooted in Nature. Refined by Science.',
    desc: 'Science-backed natural supplements with traceable ingredients and 3rd-party testing.',
    tags: ['E-Commerce', 'Web', 'Brand'],
    emoji: '🌿',
    accent: '#52C78B'
  },
  {
    name: 'LongevityGLP',
    url: 'https://www.longevityglp.com',
    tagline: 'Unlock Your Body\'s Full Potential.',
    desc: 'Physician-formulated peptide therapeutics for energy, recovery, sleep, and performance.',
    tags: ['Health Tech', 'E-Commerce', 'Web'],
    emoji: '⚗️',
    accent: '#C8B4FF'
  },
  {
    name: 'Gene Guard Detox',
    url: 'https://www.geneguarddetox.com',
    tagline: 'Patent Pending Probiotic Detox.',
    desc: 'Helping F&B companies create healthier products with probiotics that remove glyphosate.',
    tags: ['Biotech', 'Web', 'Brand'],
    emoji: '🧬',
    accent: '#FF9F47'
  }
]

function ClientCard({ client }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      data-hover="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block', textDecoration: 'none',
        background: hovered ? 'var(--gray)' : 'transparent',
        border: `1.5px solid ${hovered ? client.accent : 'var(--gray-mid)'}`,
        borderRadius: 24, padding: '36px 32px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.4), 0 0 40px ${client.accent}18` : 'none',
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Arrow */}
      <div style={{
        position: 'absolute', top: 28, right: 28,
        width: 36, height: 36, borderRadius: '50%',
        background: hovered ? client.accent : 'var(--gray-mid)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, transition: 'all 0.3s ease',
        color: hovered ? 'var(--black)' : 'var(--gray-light)'
      }}>↗</div>

      <div style={{ fontSize: 36, marginBottom: 16 }}>{client.emoji}</div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 22, color: 'var(--white)', marginBottom: 6,
        letterSpacing: '-0.02em'
      }}>{client.name}</h3>

      <div style={{
        fontSize: 13, color: client.accent, fontWeight: 600,
        letterSpacing: '0.02em', marginBottom: 14, fontStyle: 'italic'
      }}>"{client.tagline}"</div>

      <p style={{
        color: 'var(--gray-light)', fontSize: 14, lineHeight: 1.7,
        fontWeight: 300, marginBottom: 24
      }}>{client.desc}</p>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {client.tags.map(tag => (
          <span key={tag} style={{
            background: `${client.accent}15`,
            border: `1px solid ${client.accent}40`,
            color: client.accent, padding: '4px 12px',
            borderRadius: 20, fontSize: 11,
            fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase'
          }}>{tag}</span>
        ))}
      </div>
    </a>
  )
}

function Clients() {
  return (
    <section id="clients" style={{
      padding: '100px 40px',
      background: 'linear-gradient(180deg, var(--black) 0%, var(--gray) 50%, var(--black) 100%)',
      borderTop: '1px solid var(--gray-mid)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
              color: 'var(--coral)', letterSpacing: '0.2em', textTransform: 'uppercase',
              marginBottom: 16
            }}>Our Work</div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.05
            }}>
              Clients we've<br />
              <span style={{ color: 'var(--yellow)' }}>shipped for.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 340, color: 'var(--gray-light)', fontSize: 15, lineHeight: 1.7, fontWeight: 300 }}>
            From health tech to natural products to full-service agencies — we build for real businesses solving real problems.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 20
        }}>
          {clients.map(c => <ClientCard key={c.name} client={c} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ────────────────────────────────────────────────── */
const steps = [
  { num: '01', title: 'You Tell Us Everything', desc: "What you need, what you hate, what you love, your timeline. We listen first — no templates, no cookie-cutter." },
  { num: '02', title: 'We Plan & Propose', desc: "We map out the approach, tech stack, and timeline. You know exactly what you're getting and when." },
  { num: '03', title: 'We Build It', desc: "Development with regular check-ins and live previews. You see progress, not surprises." },
  { num: '04', title: 'We Launch & Support', desc: "Go live, squash any bugs, and keep the lights on. We don't disappear after launch." },
]

function Process() {
  return (
    <section id="process" style={{
      padding: '100px 40px', background: 'var(--gray)',
      borderTop: '1px solid var(--gray-mid)',
      borderBottom: '1px solid var(--gray-mid)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
            color: 'var(--coral)', letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 16
          }}>How It Works</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 60px)', letterSpacing: '-0.03em', lineHeight: 1.05
          }}>Simple process.<br /><span style={{ color: 'var(--gray-light)' }}>Real results.</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{
              padding: '40px 32px',
              borderLeft: i === 0 ? '1px solid var(--gray-mid)' : 'none',
              borderRight: '1px solid var(--gray-mid)',
              borderTop: '1px solid var(--gray-mid)',
              borderBottom: '1px solid var(--gray-mid)',
              position: 'relative'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: 48, color: 'rgba(232,255,71,0.15)', marginBottom: 16,
                lineHeight: 1
              }}>{step.num}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 20, marginBottom: 12, color: 'var(--white)'
              }}>{step.title}</h3>
              <p style={{ color: 'var(--gray-light)', fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why Us ─────────────────────────────────────────────────── */
function WhyUs() {
  const points = [
    ['No fluff', 'We ship real, working products — not just pretty mockups that fall apart in production.'],
    ['Full stack', 'One team for everything — frontend, backend, mobile. No coordination chaos.'],
    ['You own it all', 'Every line of code, every asset, every credential. It's yours, always.'],
    ['Humans only', 'You get a direct line to the people building your product. No account managers playing telephone.'],
  ]
  return (
    <section style={{ padding: '100px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center'
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12,
            color: '#7DF9FF', letterSpacing: '0.2em', textTransform: 'uppercase',
            marginBottom: 16
          }}>Why Icon Design Partners</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.05
          }}>
            We're the team<br /> that actually<br />
            <span style={{ color: 'var(--yellow)' }}>gets it done.</span>
          </h2>
          <p style={{ color: 'var(--gray-light)', fontSize: 16, lineHeight: 1.8, marginTop: 24, fontWeight: 300 }}>
            We've seen it all — bad outsourcing, missed deadlines, bloated agencies. 
            We exist because clients deserve better.
          </p>
          <a href={`mailto:${EMAIL}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 15, marginTop: 32, letterSpacing: '0.04em',
            borderBottom: '1px solid rgba(232,255,71,0.4)', paddingBottom: 4,
            transition: 'gap 0.2s'
          }}
            onMouseEnter={e => e.currentTarget.style.gap = '16px'}
            onMouseLeave={e => e.currentTarget.style.gap = '8px'}
          >
            Email us directly <span>→</span>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {points.map(([title, desc], i) => (
            <div key={title} style={{
              padding: '28px 32px',
              border: '1px solid var(--gray-mid)',
              borderRadius: i === 0 ? '20px 20px 4px 4px' :
                i === points.length - 1 ? '4px 4px 20px 20px' : '4px'
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 700,
                fontSize: 16, color: 'var(--white)', marginBottom: 6
              }}>✦ {title}</div>
              <div style={{ color: 'var(--gray-light)', fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA / Contact ──────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{
      padding: '100px 40px',
      background: 'linear-gradient(135deg, var(--gray) 0%, #0f0f0f 100%)',
      borderTop: '1px solid var(--gray-mid)'
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        {/* Pulsing ring accent */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 40 }}>
          <div style={{
            width: 70, height: 70, borderRadius: '50%',
            background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 28, margin: '0 auto', position: 'relative', zIndex: 1
          }}>✦</div>
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'var(--yellow)', opacity: 0.3,
            animation: 'pulse-ring 2s ease-out infinite'
          }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 1,
          marginBottom: 24
        }}>
          Ready to build<br />
          <span style={{ color: 'var(--yellow)' }}>something great?</span>
        </h2>

        <p style={{
          color: 'var(--gray-light)', fontSize: 18, lineHeight: 1.8,
          fontWeight: 300, marginBottom: 48, maxWidth: 540, margin: '0 auto 48px'
        }}>
          Tell us what you're working on. No price lists, no packages — just a real conversation 
          about what you need and how we can make it happen.
        </p>

        <a href={`mailto:${EMAIL}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 14,
          background: 'var(--yellow)', color: 'var(--black)',
          padding: '22px 52px', borderRadius: 80,
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 18, letterSpacing: '-0.01em',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 0 rgba(232,255,71,0)'
        }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.06)'
            e.currentTarget.style.boxShadow = '0 0 60px rgba(232,255,71,0.4)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 0 0 rgba(232,255,71,0)'
          }}
        >
          <span>📬</span>
          {EMAIL}
        </a>

        <div style={{
          marginTop: 48, fontSize: 14, color: 'var(--gray-light)', fontWeight: 300
        }}>
          We respond within 24 hours. Usually way faster.
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--gray-mid)',
      padding: '32px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: 16
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700,
        fontSize: 16, color: 'var(--white)'
      }}>
        <span style={{ color: 'var(--yellow)' }}>✦</span> Icon Design Partners
      </div>
      <div style={{ color: 'var(--gray-light)', fontSize: 13 }}>
        © {new Date().getFullYear()} All rights reserved.
      </div>
      <a href={`mailto:${EMAIL}`} style={{
        color: 'var(--yellow)', fontSize: 13, fontWeight: 500,
        borderBottom: '1px solid rgba(232,255,71,0.3)', paddingBottom: 2
      }}>{EMAIL}</a>
    </footer>
  )
}

/* ─── App ────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Clients />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

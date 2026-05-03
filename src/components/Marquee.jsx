const items = ['Web Apps', '\u2726', 'Mobile Apps', '\u2726', 'Frontend', '\u2726', 'Backend', '\u2726', 'UI / UX', '\u2726', 'Full Stack', '\u2726']
const doubled = [...items, ...items]

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

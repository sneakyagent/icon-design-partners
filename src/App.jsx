import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Clients } from './components/Clients'
import { Process } from './components/Process'
import { WhyUs } from './components/WhyUs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

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

import Nav from './components/Nav'
import Hero from './components/Hero'
import SlotsBand from './components/SlotsBand'
import Why from './components/Why'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#what-we-do"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <SlotsBand />
        <Why />
        <Portfolio />
        <Testimonials />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import Notes from './components/Notes.jsx'
import Craft from './components/Craft.jsx'
import Ritual from './components/Ritual.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal />
        <Notes />
        <Craft />
        <Ritual />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import ScrollReveal from './components/ScrollReveal.jsx'
import Notes from './components/Notes.jsx'
import Craft from './components/Craft.jsx'
import Ritual from './components/Ritual.jsx'
import Collection from './components/Collection.jsx'
import Spotlight from './components/Spotlight.jsx'
import Reviews from './components/Reviews.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ScrollReveal />
        <Notes />
        <Craft />
        <Ritual />
        <Collection />
        <Spotlight />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <Toast />
    </CartProvider>
  )
}

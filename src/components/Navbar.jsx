import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'The Scent', href: '#reveal' },
  { label: 'Notes', href: '#notes' },
  { label: 'Craft', href: '#craft' },
  { label: 'Ritual', href: '#ritual' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--solid' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="nav__inner container">
        <a href="#top" className="nav__brand">
          MAISON&nbsp;SABLE
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="nav__cta">
          Acquire
        </a>
      </div>
    </motion.header>
  )
}

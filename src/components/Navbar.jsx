import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { label: 'The Scent', href: '#reveal' },
  { label: 'Notes', href: '#notes' },
  { label: 'Collection', href: '#collection' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { count } = useCart()

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
        <a href="#collection" className="nav__bag" aria-label="Shopping bag">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path
              d="M6 8h12l-1 12H7L6 8z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M9 8V6.5a3 3 0 0 1 6 0V8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
          <span className="nav__bag-label">Bag</span>
          {count > 0 && <span className="nav__bag-count">{count}</span>}
        </a>
      </div>
    </motion.header>
  )
}

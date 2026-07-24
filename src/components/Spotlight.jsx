import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const sizes = [
  { ml: '30ml', label: 'Travel', price: 120 },
  { ml: '50ml', label: 'Signature', price: 180 },
  { ml: '100ml', label: 'Maison', price: 240 },
]

const assurances = [
  { t: 'Complimentary shipping', d: 'On every order, worldwide' },
  { t: 'Two free samples', d: 'Chosen from the house' },
  { t: '30-day returns', d: 'Fall in love, or send it back' },
]

export default function Spotlight() {
  const [size, setSize] = useState(sizes[2])
  const [gift, setGift] = useState(false)
  const { addItem } = useCart()

  const total = size.price + (gift ? 15 : 0)

  return (
    <section id="spotlight" className="section spotlight">
      <div className="container spotlight__grid">
        <motion.div
          className="spotlight__media"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <video
            className="spotlight__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/media/perfume-hero.mp4" type="video/mp4" />
          </video>
          <span className="spotlight__glow" aria-hidden />
        </motion.div>

        <motion.div
          className="spotlight__panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Signature · Eau de Parfum</span>
          <h2 className="spotlight__title display">MIRAGE</h2>
          <div className="spotlight__rating">
            <span className="stars">★★★★★</span>
            <span className="spotlight__rating-text">4.9 · 2,418 reviews</span>
          </div>
          <p className="spotlight__desc">
            The house signature. An amber oud that opens with saffron and
            bergamot, blooms with rose and settles into a smoky, velvet drydown
            that lingers for hours.
          </p>

          <span className="spotlight__field-label">Size</span>
          <div className="spotlight__sizes">
            {sizes.map((s) => (
              <button
                key={s.ml}
                className={`size-chip ${size.ml === s.ml ? 'is-active' : ''}`}
                onClick={() => setSize(s)}
              >
                <span className="size-chip__ml">{s.ml}</span>
                <span className="size-chip__label">{s.label}</span>
                <span className="size-chip__price">${s.price}</span>
              </button>
            ))}
          </div>

          <label className="spotlight__gift">
            <input
              type="checkbox"
              checked={gift}
              onChange={(e) => setGift(e.target.checked)}
            />
            <span className="spotlight__gift-box" aria-hidden />
            <span>
              Add signature gift wrapping <em>+$15</em>
            </span>
          </label>

          <div className="spotlight__buy">
            <div className="spotlight__total">
              <span className="spotlight__total-amount display">${total}</span>
              <span className="spotlight__total-note">{size.ml} · in stock</span>
            </div>
            <button
              className="btn spotlight__add"
              onClick={() => addItem(`MIRAGE ${size.ml}`)}
            >
              Add to Bag
            </button>
          </div>

          <ul className="spotlight__assurances">
            {assurances.map((a) => (
              <li key={a.t}>
                <span className="spotlight__assurance-check" aria-hidden>
                  ✦
                </span>
                <div>
                  <strong>{a.t}</strong>
                  <span>{a.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

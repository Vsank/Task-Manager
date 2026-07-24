import { motion } from 'framer-motion'
import Bottle from './Bottle.jsx'
import { useCart } from '../context/CartContext.jsx'

const products = [
  {
    name: 'MIRAGE',
    code: 'N°1',
    kind: 'Eau de Parfum · 100ml',
    notes: 'Amber · Oud · Saffron',
    price: 240,
    rating: 4.9,
    variant: 'tall',
    liquid: '#c9a35b',
    liquidTop: '#e7d3a1',
    tag: 'Bestseller',
  },
  {
    name: 'DUNE NOIR',
    code: 'N°2',
    kind: 'Eau de Parfum · 100ml',
    notes: 'Leather · Tobacco · Vetiver',
    price: 265,
    rating: 4.8,
    variant: 'square',
    liquid: '#6b4a2a',
    liquidTop: '#a9793f',
  },
  {
    name: 'SOLEIL D’OR',
    code: 'N°3',
    kind: 'Eau de Parfum · 100ml',
    notes: 'Neroli · Fig · White Musk',
    price: 220,
    rating: 4.7,
    variant: 'round',
    liquid: '#d9a94e',
    liquidTop: '#f2dc9a',
  },
  {
    name: 'AMBRE SEC',
    code: 'N°4',
    kind: 'Eau de Parfum · 100ml',
    notes: 'Amber · Incense · Cedar',
    price: 245,
    rating: 4.9,
    variant: 'flask',
    liquid: '#b07a34',
    liquidTop: '#e0b566',
  },
  {
    name: 'DISCOVERY SET',
    code: '5 × 2ml',
    kind: 'The full library, in miniature',
    notes: 'Five house fragrances',
    price: 45,
    rating: 5.0,
    variant: 'flask',
    liquid: '#c9a35b',
    liquidTop: '#e7d3a1',
    tag: 'Gift',
  },
  {
    name: 'MIRAGE CANDLE',
    code: '220g',
    kind: 'Scented candle · 55h burn',
    notes: 'Amber · Sandalwood',
    price: 85,
    rating: 4.8,
    variant: 'square',
    liquid: '#caa35b',
    liquidTop: '#ecd6a0',
  },
]

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {'★★★★★'}
      <span className="stars__label">{rating.toFixed(1)}</span>
    </span>
  )
}

export default function Collection() {
  const { addItem } = useCart()

  return (
    <section id="collection" className="section collection">
      <div className="container">
        <motion.div
          className="collection__head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">The Collection</span>
          <h2 className="collection__title display">
            Six ways to wear the desert
          </h2>
          <p className="lead">
            Each fragrance is composed in Grasse and poured into hand-finished
            amber glass. Explore the full house.
          </p>
        </motion.div>

        <div className="collection__grid">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              className="product-card"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.1,
              }}
            >
              <div className="product-card__media">
                {p.tag && <span className="product-card__tag">{p.tag}</span>}
                <Bottle
                  variant={p.variant}
                  liquid={p.liquid}
                  liquidTop={p.liquidTop}
                  label={p.name.split(' ')[0]}
                  code={p.code}
                />
              </div>
              <div className="product-card__body">
                <div className="product-card__top">
                  <h3 className="product-card__name display">{p.name}</h3>
                  <Stars rating={p.rating} />
                </div>
                <p className="product-card__kind">{p.kind}</p>
                <p className="product-card__notes">{p.notes}</p>
                <div className="product-card__foot">
                  <span className="product-card__price">${p.price}</span>
                  <button
                    className="product-card__add"
                    onClick={() => addItem(p.name)}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

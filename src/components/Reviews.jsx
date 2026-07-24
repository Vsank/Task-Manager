import { motion } from 'framer-motion'

const reviews = [
  {
    quote:
      'It genuinely smells like warm sand at golden hour. I get stopped and asked what I’m wearing at least once a day.',
    name: 'Amara O.',
    place: 'London',
    fragrance: 'MIRAGE · 100ml',
  },
  {
    quote:
      'The longevity is unreal — I can still catch it on my scarf the next morning. Worth every penny.',
    name: 'Julian R.',
    place: 'New York',
    fragrance: 'DUNE NOIR · 100ml',
  },
  {
    quote:
      'Bought the discovery set to test and ended up ordering full bottles of three. The packaging alone feels like a gift.',
    name: 'Priya M.',
    place: 'Dubai',
    fragrance: 'Discovery Set',
  },
]

const stats = [
  { value: '4.9', label: 'Average rating' },
  { value: '2,418', label: 'Verified reviews' },
  { value: '96%', label: 'Would repurchase' },
]

export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <motion.div
          className="reviews__head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Loved by thousands</span>
          <h2 className="reviews__title display">Worn, and remembered</h2>
          <div className="reviews__stats">
            {stats.map((s) => (
              <div key={s.label} className="reviews__stat">
                <span className="reviews__stat-value display">{s.value}</span>
                <span className="reviews__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              className="review-card"
              initial={{ opacity: 0, y: 46 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
            >
              <span className="review-card__stars">★★★★★</span>
              <p className="review-card__quote">“{r.quote}”</p>
              <footer className="review-card__foot">
                <div className="review-card__avatar" aria-hidden>
                  {r.name.charAt(0)}
                </div>
                <div>
                  <cite className="review-card__name">{r.name}</cite>
                  <span className="review-card__meta">
                    {r.place} · <span className="review-card__verified">Verified</span>
                  </span>
                  <span className="review-card__frag">{r.fragrance}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const notes = [
  {
    tier: 'Top Notes',
    items: ['Calabrian Bergamot', 'Saffron', 'Pink Pepper'],
    desc: 'The first breath — luminous and resinous, like sunrise over dunes.',
  },
  {
    tier: 'Heart Notes',
    items: ['Rose Absolute', 'Amber', 'Cedarwood'],
    desc: 'The warm centre that blooms as the fragrance settles into the skin.',
  },
  {
    tier: 'Base Notes',
    items: ['Oud', 'Sandalwood', 'White Musk'],
    desc: 'A lingering trail — smoky, velvet-deep, unmistakably enduring.',
  },
]

const reveal = {
  hidden: { y: 60, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
  }),
}

export default function Notes() {
  return (
    <section id="notes" className="section notes">
      <div className="container">
        <motion.div
          className="notes__head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">The Composition</span>
          <h2 className="notes__title display">
            A fragrance built in three movements
          </h2>
          <p className="lead">
            MIRAGE unfolds over hours, each accord giving way to the next like
            light shifting across the sand.
          </p>
        </motion.div>

        <div className="notes__grid">
          {notes.map((n, i) => (
            <motion.article
              key={n.tier}
              className="note-card"
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-10% 0px' }}
            >
              <span className="note-card__index">0{i + 1}</span>
              <h3 className="note-card__tier display">{n.tier}</h3>
              <ul className="note-card__list">
                {n.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <p className="note-card__desc">{n.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const steps = [
  {
    n: 'I',
    title: 'Warm the pulse',
    body: 'Apply to the wrists and the base of the throat where skin runs warmest.',
  },
  {
    n: 'II',
    title: 'Let it settle',
    body: 'Do not rub. Allow the top notes to open naturally into the heart.',
  },
  {
    n: 'III',
    title: 'Wear the trail',
    body: 'By evening the oud emerges — a signature that follows, never announces.',
  },
]

export default function Ritual() {
  return (
    <section id="ritual" className="section ritual">
      <div className="container">
        <motion.div
          className="ritual__head"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">The Ritual</span>
          <h2 className="ritual__title display">How to wear MIRAGE</h2>
        </motion.div>

        <div className="ritual__steps">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              className="ritual__step"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
            >
              <span className="ritual__num display">{s.n}</span>
              <h3 className="ritual__step-title display">{s.title}</h3>
              <p className="ritual__step-body">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

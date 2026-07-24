import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const stats = [
  { value: '14', label: 'Rare botanicals' },
  { value: '18h', label: 'On the skin' },
  { value: '2027', label: 'Limited release' },
]

export default function Craft() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const glowY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <section id="craft" className="section craft" ref={ref}>
      <div className="container craft__grid">
        <motion.div
          className="craft__media"
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.video
            className="craft__video"
            style={{ y: mediaY }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/media/perfume-hero.mp4" type="video/mp4" />
          </motion.video>
          <motion.span className="craft__glow" style={{ y: glowY }} aria-hidden />
        </motion.div>

        <motion.div
          className="craft__text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">The Craft</span>
          <h2 className="craft__title display">
            Distilled from the quiet of the dunes
          </h2>
          <p className="lead">
            Our master perfumer traced the scent of the Sahara at dusk — warm
            sand, dry wood, the last breath of desert flowers.
          </p>
          <p className="craft__body">
            Each bottle is filled by hand in Grasse and rested for thirty days
            before it leaves the atelier. What emerges is a fragrance that seems
            to rise from the earth itself — slow, luminous, and impossible to
            forget.
          </p>

          <div className="craft__stats">
            {stats.map((s) => (
              <div key={s.label} className="craft__stat">
                <span className="craft__stat-value display">{s.value}</span>
                <span className="craft__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

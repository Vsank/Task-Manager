import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <video
        className="cta__bg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/media/perfume-hero.mp4" type="video/mp4" />
      </video>
      <div className="cta__scrim" />

      <motion.div
        className="cta__inner container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">The First Edition</span>
        <h2 className="cta__title display">Wear the desert</h2>
        <p className="cta__body">
          Only 500 numbered bottles from the inaugural pour. Once they are gone,
          the first edition closes for good.
        </p>

        <div className="cta__actions">
          <a href="#spotlight" className="btn">
            Shop MIRAGE
          </a>
          <a href="#collection" className="btn btn--ghost">
            View the Collection
          </a>
        </div>
        <p className="cta__note">Complimentary shipping · Two free samples · 30-day returns</p>
      </motion.div>
    </section>
  )
}

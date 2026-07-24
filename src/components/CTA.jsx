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
        <span className="eyebrow">Limited First Edition</span>
        <h2 className="cta__title display">Claim your MIRAGE</h2>
        <p className="cta__body">
          100&nbsp;ml Eau de Parfum, numbered and sealed in hand-finished amber
          glass. Only 500 bottles from the inaugural pour.
        </p>

        <div className="cta__price">
          <span className="cta__amount display">$240</span>
          <span className="cta__vol">/ 100&nbsp;ml</span>
        </div>

        <div className="cta__actions">
          <a href="#top" className="btn">
            Add to Cart
          </a>
          <a href="#notes" className="btn btn--ghost">
            Explore the Notes
          </a>
        </div>
        <p className="cta__note">Complimentary shipping · 30-day returns</p>
      </motion.div>
    </section>
  )
}

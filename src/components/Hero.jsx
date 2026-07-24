import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } },
  }
  const rise = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero__media" style={{ scale: videoScale, y: videoY }}>
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster=""
        >
          <source src="/media/perfume-hero.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div className="hero__overlay" style={{ opacity: overlayOpacity }} />

      <motion.div
        className="hero__content container"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="eyebrow" variants={rise}>
          Maison Sable · Eau de Parfum
        </motion.span>
        <motion.h1 className="hero__title display" variants={rise}>
          MIRAGE
        </motion.h1>
        <motion.p className="hero__tagline" variants={rise}>
          Where light meets sand. An amber oud drawn from the stillness of the
          desert at dusk.
        </motion.p>
        <motion.div className="hero__actions" variants={rise}>
          <a href="#cta" className="btn">
            Discover the Scent
          </a>
          <a href="#reveal" className="btn btn--ghost">
            Watch it Rise
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        style={{ opacity: contentOpacity }}
        aria-hidden
      >
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}

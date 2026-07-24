import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const frameY = useTransform(scrollYProgress, [0, 1], ['0%', '-14%'])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
  }
  const rise = {
    hidden: { y: 34, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="top" className="hero" ref={ref}>
      <div className="hero__ambient" aria-hidden />

      <motion.div
        className="hero__content container"
        style={{ opacity: contentOpacity }}
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

        <motion.div
          className="hero__frame"
          variants={rise}
          style={{ y: frameY, scale: frameScale }}
        >
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/media/perfume-hero.mp4" type="video/mp4" />
          </video>
          <span className="hero__frame-glow" aria-hidden />
        </motion.div>

        <motion.p className="hero__tagline" variants={rise}>
          Where light meets sand — an amber oud drawn from the stillness of the
          desert at dusk.
        </motion.p>

        <motion.div className="hero__actions" variants={rise}>
          <a href="#spotlight" className="btn">
            Shop MIRAGE — $240
          </a>
          <a href="#reveal" className="btn btn--ghost">
            Experience the Scent
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

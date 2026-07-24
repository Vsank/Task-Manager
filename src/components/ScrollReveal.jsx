import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const captions = [
  {
    k: 'top',
    eyebrow: 'The Opening',
    title: 'Emergence',
    body: 'Bergamot and saffron break the surface — bright, resinous, alive.',
  },
  {
    k: 'heart',
    eyebrow: 'The Heart',
    title: 'Ascension',
    body: 'Rose absolute and amber lift through warm currents of desert air.',
  },
  {
    k: 'base',
    eyebrow: 'The Drydown',
    title: 'Permanence',
    body: 'Oud, sandalwood and musk settle into skin like the last warmth of the sun.',
  },
]

export default function ScrollReveal() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const durationRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Smooth the raw scroll progress so scrubbing feels weighted, not jittery.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
  })

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onMeta = () => {
      durationRef.current = video.duration || 0
    }
    video.addEventListener('loadedmetadata', onMeta)
    if (video.readyState >= 1) onMeta()

    const unsub = smooth.on('change', (p) => {
      const d = durationRef.current
      if (!d) return
      const t = Math.min(Math.max(p, 0), 0.999) * d
      // Guard against redundant seeks that stall some browsers.
      if (Math.abs(video.currentTime - t) > 0.02) {
        video.currentTime = t
      }
    })

    return () => {
      video.removeEventListener('loadedmetadata', onMeta)
      unsub()
    }
  }, [smooth])

  const progressWidth = useTransform(smooth, [0, 1], ['0%', '100%'])

  return (
    <section id="reveal" className="reveal" ref={sectionRef}>
      <div className="reveal__sticky">
        <video
          ref={videoRef}
          className="reveal__video"
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/media/perfume-hero.mp4" type="video/mp4" />
        </video>
        <div className="reveal__vignette" />

        <div className="reveal__captions container">
          {captions.map((c, i) => {
            const start = i / captions.length
            const end = (i + 1) / captions.length
            const mid = (start + end) / 2
            return (
              <Caption key={c.k} data={c} progress={smooth} range={[start, mid, end]} />
            )
          })}
        </div>

        <div className="reveal__progress" aria-hidden>
          <motion.span style={{ width: progressWidth }} />
        </div>
        <span className="reveal__hint" aria-hidden>
          Keep scrolling to reveal
        </span>
      </div>
    </section>
  )
}

function Caption({ data, progress, range }) {
  const [start, mid, end] = range
  const opacity = useTransform(
    progress,
    [start, start + (mid - start) * 0.5, mid, end - (end - mid) * 0.5, end],
    [0, 1, 1, 1, 0],
  )
  const y = useTransform(progress, [start, mid, end], [40, 0, -40])

  return (
    <motion.div className="reveal__caption" style={{ opacity, y }}>
      <span className="eyebrow">{data.eyebrow}</span>
      <h2 className="reveal__caption-title display">{data.title}</h2>
      <p className="reveal__caption-body">{data.body}</p>
    </motion.div>
  )
}

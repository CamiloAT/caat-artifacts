import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const TAGLINE = 'Ingeniero en Sistemas · Desarrollador Fullstack'

const Hero = () => {
  const [revealed, setRevealed] = useState(false)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!revealed) return
    if (taglineIndex >= TAGLINE.length) return
    const timer = setTimeout(() => {
      setTaglineIndex(prev => prev + 1)
    }, 30)
    return () => clearTimeout(timer)
  }, [revealed, taglineIndex])

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__vignette" />
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">ACT I</span>
          <span className="hero__eyebrow-line" />
        </motion.div>

        <div className="hero__name-container">
          <motion.h1
            className="hero__name"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: revealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <span className="hero__name-line hero__name-line--1">Camilo Andrés</span>
            <span className="hero__name-line hero__name-line--2">Arias Tenjo</span>
          </motion.h1>
        </div>

        <motion.div
          className="hero__pseudo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__pseudo-bracket">[</span>
          <span className="hero__pseudo-text">Camilo AT</span>
          <span className="hero__pseudo-bracket">]</span>
        </motion.div>

        <motion.div
          className="hero__tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
        >
          <span className="hero__tagline-text">
            {TAGLINE.slice(0, taglineIndex)}
            <span className="hero__cursor">|</span>
          </span>
        </motion.div>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <span className="hero__scroll-text">Scroll to explore</span>
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Decorative frame corners */}
      <div className="hero__frame hero__frame--tl" />
      <div className="hero__frame hero__frame--tr" />
      <div className="hero__frame hero__frame--bl" />
      <div className="hero__frame hero__frame--br" />
    </section>
  )
}

export default Hero

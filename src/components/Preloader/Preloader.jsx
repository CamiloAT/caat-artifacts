import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(3)
  const [phase, setPhase] = useState('counting') // counting, title, done

  useEffect(() => {
    if (phase === 'counting') {
      if (count === 0) {
        setPhase('title')
        return
      }
      const timer = setTimeout(() => setCount(count - 1), 800)
      return () => clearTimeout(timer)
    }
    if (phase === 'title') {
      const timer = setTimeout(() => {
        setPhase('done')
        onComplete()
      }, 1800)
      return () => clearTimeout(timer)
    }
  }, [count, phase, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="preloader__film-lines" />

          {phase === 'counting' && (
            <motion.div
              key={count}
              className="preloader__count"
              initial={{ opacity: 0, scale: 1.5, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {count === 0 ? '' : count}
            </motion.div>
          )}

          {phase === 'title' && (
            <motion.div
              className="preloader__title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                className="preloader__initials"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                CA
              </motion.span>
              <motion.div
                className="preloader__line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="preloader__subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                CAMILO AT
              </motion.span>
            </motion.div>
          )}

          {/* Film flicker overlay */}
          <div className="preloader__flicker" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader

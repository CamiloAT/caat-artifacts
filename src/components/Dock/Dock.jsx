import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Dock.css'

const NAV_ITEMS = [
  { id: 'story', label: 'I', title: 'The Story' },
  { id: 'work', label: 'II', title: 'The Work' },
  { id: 'craft', label: 'III', title: 'The Craft' },
  { id: 'outro', label: 'IV', title: 'Contact' },
]

const Dock = () => {
  const [hovered, setHovered] = useState(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="dock" aria-label="Main navigation">
      <div className="dock__container">
        {NAV_ITEMS.map((item, index) => (
          <motion.button
            key={item.id}
            className="dock__item"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => scrollTo(item.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 + index * 0.1 }}
            whileHover={{ y: -4 }}
            aria-label={`Navigate to ${item.title}`}
          >
            <span className="dock__label">{item.label}</span>
            <AnimatePresence>
              {hovered === item.id && (
                <motion.span
                  className="dock__tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </nav>
  )
}

export default Dock

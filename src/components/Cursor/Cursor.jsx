import { useEffect, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import './Cursor.css'

const Cursor = () => {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const trailRef = useRef([])

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!visible) setVisible(true)
    }

    const over = (e) => {
      const target = e.target
      if (target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(true)
      }
    }

    const out = () => setHovering(false)

    const leave = () => setVisible(false)
    const enter = () => setVisible(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
    }
  }, [cursorX, cursorY, visible])

  // Hide on touch devices
  if ('ontouchstart' in window) return null

  return (
    <>
      <motion.div
        className={`cursor ${hovering ? 'cursor--hover' : ''}`}
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <div className="cursor__dot" />
      </motion.div>
      <motion.div
        className="cursor__ring"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          opacity: visible ? 0.4 : 0,
          scale: hovering ? 2 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </>
  )
}

export default Cursor

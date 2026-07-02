import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/Preloader/Preloader'
import Hero from './components/Hero/Hero'
import Particles from './components/Particles/Particles'
import Dock from './components/Dock/Dock'
import Cursor from './components/Cursor/Cursor'
import Story from './sections/Story/Story'
import Work from './sections/Work/Work'
import Craft from './sections/Craft/Craft'
import Outro from './sections/Outro/Outro'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Lock scroll while preloader is active
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <div className="app">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Cursor />
          <Particles count={25} />
          <Dock />

          <main className="main">
            <Hero />
            <Story />
            <Work />
            <Craft />
            <Outro />
          </main>
        </>
      )}
    </div>
  )
}

export default App

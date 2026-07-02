import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Story.css'

const Story = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="story" className="story" ref={sectionRef}>
      <div className="story__bg">
        <motion.div className="story__bg-gradient" style={{ y: y1 }} />
      </div>

      <div className="story__content">
        <motion.div className="story__header" style={{ opacity }}>
          <motion.span
            className="story__act"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            ACT II
          </motion.span>
          <motion.h2
            className="story__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Story
          </motion.h2>
          <motion.div
            className="story__divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        <div className="story__grid">
          <motion.div className="story__text-col" style={{ y: y2 }}>
            <motion.p
              className="story__lead"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              No construyo software. Construyo experiencias que la gente recuerda.
            </motion.p>

            <motion.p
              className="story__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Soy Camilo Andrés Arias Tenjo, Ingeniero de Sistemas con una obsesión
              por los detalles que nadie pide pero todos notan. Creo que la tecnología
              no es solo funcionalidad — es la diferencia entre algo que funciona
              y algo que se siente bien.
            </motion.p>

            <motion.p
              className="story__body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Cada proyecto que toco empieza con una pregunta: "¿Cómo hago que esto
              se sienta inevitable?" No me conformo con lo que ya existe. Busco la
              versión que nadie ha visto todavía, la que hace que el usuario se detenga
              y piense: "esto es diferente."
            </motion.p>
          </motion.div>

          <div className="story__visual-col">
            <motion.div
              className="story__visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="story__visual-frame">
                <div className="story__visual-inner">
                  <span className="story__visual-text">CA</span>
                  <span className="story__visual-year">2026</span>
                </div>
              </div>
              <div className="story__visual-accent" />
            </motion.div>

            <motion.div
              className="story__stats"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="story__stat">
                <span className="story__stat-number">4+</span>
                <span className="story__stat-label">Años de experiencia</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">∞</span>
                <span className="story__stat-label">Curiosidad</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story

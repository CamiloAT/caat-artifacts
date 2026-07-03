import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Outro.css'

const Outro = () => {
  const sectionRef = useRef(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="outro" className="outro" ref={sectionRef}>
      <div className="outro__content">
        <motion.div className="outro__header" style={{ y, opacity }}>
          <motion.div
            className="outro__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="outro__eyebrow-line" />
            <span className="outro__eyebrow-text">ACT V</span>
            <span className="outro__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="outro__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Let's Create
          </motion.h2>
        </motion.div>

        <div className="outro__grid">
          <motion.div
            className="outro__text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="outro__lead">
              Tienes un proyecto en mente? Una idea que necesita vida? O simplemente
              quieres conversar sobre tecnología y diseño?
            </p>
            <p className="outro__body">
              Siempre estoy abierto a nuevas colaboraciones, retos interesantes
              y conversaciones que vayan más allá de lo ordinario.
            </p>

            <div className="outro__links">
              <motion.a
                href="mailto:camilo@example.com"
                className="outro__link"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="outro__link-label">Email</span>
                <span className="outro__link-value">camilo@ariastenjo.dev</span>
              </motion.a>
              <motion.a
                href="https://github.com/camiloat"
                className="outro__link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="outro__link-label">GitHub</span>
                <span className="outro__link-value">github.com/camiloat</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/camiloat"
                className="outro__link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <span className="outro__link-label">LinkedIn</span>
                <span className="outro__link-value">linkedin.com/in/camiloat</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="outro__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="outro__field">
              <label className="outro__label" htmlFor="name">Nombre</label>
              <input
                className="outro__input"
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="outro__field">
              <label className="outro__label" htmlFor="email">Email</label>
              <input
                className="outro__input"
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="outro__field">
              <label className="outro__label" htmlFor="message">Mensaje</label>
              <textarea
                className="outro__textarea"
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
              />
            </div>
            <motion.button
              className="outro__submit"
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? 'Enviado ✓' : 'Enviar mensaje'}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <footer className="outro__footer">
        <div className="outro__footer-content">
          <div className="outro__footer-left">
            <span className="outro__footer-name">Camilo AT</span>
            <span className="outro__footer-copy">© 2026 — Todos los derechos reservados</span>
          </div>
          <div className="outro__footer-right">
            <span className="outro__footer-built">
              Built with <span className="outro__footer-heart">passion</span> & React
            </span>
          </div>
        </div>
        <div className="outro__footer-line" />
      </footer>
    </section>
  )
}

export default Outro

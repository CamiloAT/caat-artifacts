import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import './Work.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Nexus Platform',
    category: 'Fullstack · React · Node.js',
    year: '2026',
    description: 'Plataforma de gestión de datos en tiempo real para empresas de logística. Arquitectura de microservicios con WebSocket y dashboards interactivos.',
    accent: '#c4956a',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Sentinel API',
    category: 'Backend · Seguridad',
    year: '2025',
    description: 'Sistema de monitoreo y alertas para infraestructura cloud. Detección de anomalías con machine learning y notificaciones en tiempo real.',
    accent: '#8b6914',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
  },
  {
    id: 3,
    title: 'Verde Urbano',
    category: 'Frontend · UX/UI',
    year: '2025',
    description: 'Aplicación web para rastreo de huella de carbono personal. Visualización de datos ambientales con gráficas interactivas y gamificación.',
    accent: '#6b8a5e',
    tags: ['React', 'D3.js', 'Tailwind', 'Supabase'],
  },
  {
    id: 4,
    title: 'Flux Studio',
    category: 'Creative Dev · WebGL',
    year: '2024',
    description: 'Herramienta de visualización musical con audio-reactive graphics. Experiencia inmersiva que sincroniza sonido y movimiento.',
    accent: '#7c5cbf',
    tags: ['Three.js', 'Web Audio API', 'GLSL', 'Vite'],
  },
]

const Work = () => {
  const sectionRef = useRef(null)
  const [activeProject, setActiveProject] = useState(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  return (
    <section id="work" className="work" ref={sectionRef}>
      <div className="work__content">
        <motion.div className="work__header" style={{ y: headerY, opacity: headerOpacity }}>
          <motion.div
            className="work__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="work__eyebrow-line" />
            <span className="work__eyebrow-text">ACT III</span>
            <span className="work__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="work__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Work
          </motion.h2>
        </motion.div>

        <div className="work__projects">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              className={`work__project ${activeProject === project.id ? 'work__project--active' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{ '--project-accent': project.accent }}
            >
              <div className="work__project-index">
                <span className="work__project-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="work__project-content">
                <div className="work__project-meta">
                  <span className="work__project-category">{project.category}</span>
                  <span className="work__project-year">{project.year}</span>
                </div>

                <h3 className="work__project-title">{project.title}</h3>

                <p className="work__project-desc">{project.description}</p>

                <div className="work__project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work__project-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="work__project-line" />

              <AnimatePresence>
                {activeProject === project.id && (
                  <motion.div
                    className="work__project-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

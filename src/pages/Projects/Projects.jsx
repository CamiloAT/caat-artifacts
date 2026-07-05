import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Projects.css'

const MORE_PROJECTS = [
  {
    id: 'unfollow-spy',
    title: 'UnfollowSpy',
    category: 'Frontend · React · Vite',
    year: '2026',
    description: 'Herramienta 100% local y segura que audita tus seguidores de Instagram directamente en el navegador.',
    fullDescription: 'UnfollowSpy es una herramienta 100% local y segura que audita los seguidores de Instagram directamente en el navegador. El usuario sube su exportación oficial de Meta y la app cruza las listas de seguidores y seguidos al instante, sin contraseñas, sin servidores, sin riesgo de baneos. Incluye análisis cruzado para detectar "traidores", seguimiento de tiempo con marcas UNIX, reportes PDF descargables, modo oscuro con persistencia en localStorage, ordenamiento y búsqueda inteligente, y un tutorial interactivo de 22 pasos.\n\nNació de una necesidad personal, quería ver quién lo dejaba de seguir en Instagram pero no había herramientas gratuitas o que no implicaran baneos de la cuenta. Fue el primer proyecto personal más allá de lo académico, y enseñó lo que significa construir algo desde cero para resolver un problema real.',
    logo: '/projects/unfollow-spy/unfollow-spy-logo.png',
    accent: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
    tags: ['React', 'Vite', 'jsPDF', 'Lucide', 'React Router'],
    collaborators: [],
    github: 'https://github.com/CamiloAT/UnfollowSpy',
    demo: '',
    images: [
      '/projects/unfollow-spy/app-photo-1.webp',
      '/projects/unfollow-spy/app-photo-2.webp',
      '/projects/unfollow-spy/app-photo-3.webp',
      '/projects/unfollow-spy/app-photo-4.webp',
      '/projects/unfollow-spy/app-photo-5.webp',
    ],
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    category: 'Desktop · Java · Swing',
    year: '2023',
    description: 'Juego clasico de Snake con dificultad progresiva, persistencia de puntajes y UI personalizada en Swing.',
    fullDescription: 'Implementacion clasica del juego Snake en Java con dificultad progresiva, sistema de puntajes persistentes y una interfaz grafica construida desde cero con Swing. Incluye tres niveles de dificultad, velocidad progresiva, dashboard de historial y componentes UI personalizados.\n\nA pesar de que no fue el primero que desarrollo en Java, es un proyecto al que le tengo mucho cariño. Absolutamente todo fue escrito solo por mi, cada linea, cada palabra, cada decision fue desarrollada exclusivamente por mi. Lo recuerdo como el primer proyecto importante que hice.',
    logo: '/projects/snake-game/snake-game-logo.png',
    accent: '#1e40af',
    tags: ['Java', 'Swing', 'Gson', 'JSON'],
    collaborators: [],
    github: 'https://github.com/CamiloAT/snake-game',
    demo: '',
    images: [
      '/projects/snake-game/app-photo-1.webp',
      '/projects/snake-game/app-photo-2.webp',
      '/projects/snake-game/app-photo-3.webp',
    ],
  },
  {
    id: 'sentinel',
    title: 'Sentinel API',
    category: 'Backend · Seguridad',
    year: '2025',
    description: 'Sistema de monitoreo y alertas para infraestructura cloud con detección de anomalías.',
    fullDescription: 'Sistema de monitoreo y alertas para infraestructura cloud. Detección de anomalías con machine learning y notificaciones en tiempo real. Incluye dashboard de métricas, sistema de reglas personalizables y integración con múltiples proveedores cloud.',
    accent: '#8b6914',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    github: 'https://github.com/camiloat/sentinel-api',
    demo: '',
    images: [],
  },
  {
    id: 'verde-urbano',
    title: 'Verde Urbano',
    category: 'Frontend · UX/UI',
    year: '2025',
    description: 'Aplicación web para rastreo de huella de carbono personal con gamificación.',
    fullDescription: 'Aplicación web para rastreo de huella de carbono personal. Visualización de datos ambientales con gráficas interactivas y gamificación. Los usuarios pueden registrar sus actividades diarias, comparar con la comunidad y ganar logros por acciones sostenibles.',
    accent: '#6b8a5e',
    tags: ['React', 'D3.js', 'Tailwind', 'Supabase'],
    github: 'https://github.com/camiloat/verde-urbano',
    demo: '',
    images: [],
  },
  {
    id: 'flux-studio',
    title: 'Flux Studio',
    category: 'Creative Dev · WebGL',
    year: '2024',
    description: 'Herramienta de visualización musical con audio-reactive graphics.',
    fullDescription: 'Herramienta de visualización musical con audio-reactive graphics. Experiencia inmersiva que sincroniza sonido y movimiento. Utiliza WebGL para renderizar geometrías 3D que responden al audio en tiempo real, creando una experiencia visual única para cada canción.',
    accent: '#7c5cbf',
    tags: ['Three.js', 'Web Audio API', 'GLSL', 'Vite'],
    github: 'https://github.com/camiloat/flux-studio',
    demo: '',
    images: [],
  },
  {
    id: 'nexus-platform',
    title: 'Nexus Platform',
    category: 'Fullstack · React · Node.js',
    year: '2026',
    description: 'Plataforma de gestión de datos en tiempo real para empresas de logística.',
    fullDescription: 'Plataforma de gestión de datos en tiempo real para empresas de logística. Arquitectura de microservicios con WebSocket y dashboards interactivos. El sistema permite monitorear flotas, optimizar rutas y generar reportes automáticos en tiempo real.',
    accent: '#c4956a',
    tags: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com/camiloat/nexus-platform',
    demo: '',
    images: [],
  },
  {
    id: 'portafolio-caat',
    title: 'Portafolio CAAT',
    category: 'Frontend · React · Framer Motion',
    year: '2026',
    description: 'Portafolio personal cinematográfico con animaciones scroll-driven.',
    fullDescription: 'Sitio web portafolio personal con estética cinematográfica. Construido con React y Framer Motion para animaciones scroll-driven, preloader con countdown, partículas flotantes, dock de navegación y diseño responsive. Paleta oscura con acentos ámbar.',
    accent: '#c4956a',
    tags: ['React', 'Framer Motion', 'Vite', 'CSS'],
    github: 'https://github.com/CamiloAT/caat-artifacts',
    demo: '',
    images: [],
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <div className="projects-page">
      <div className="projects-page__content">
        <motion.div
          className="projects-page__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/" className="projects-page__back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al portafolio
          </Link>
          <h1 className="projects-page__title">Otros proyectos</h1>
          <p className="projects-page__subtitle">Una vista un poco más amplia de los proyectos más relevantes que he desarrollado a lo largo de mi aprendizaje.</p>
        </motion.div>

        <div className="projects-page__list">
          {MORE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              className="projects-page__item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ '--project-accent': project.accent }}
            >
              <div className="projects-page__item-line" />
              <div className="projects-page__item-left">
                <span className="projects-page__item-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="projects-page__item-info">
                  <div className="projects-page__item-meta">
                    <span className="projects-page__item-category">{project.category}</span>
                    <span className="projects-page__item-year">{project.year}</span>
                  </div>
                  <h3 className="projects-page__item-title">{project.title}</h3>
                  <p className="projects-page__item-desc">{project.description}</p>
                  <div className="projects-page__item-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="projects-page__item-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projects-page__item-actions">
                <motion.button
                  className="projects-page__item-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(project)}
                >
                  More Info
                </motion.button>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-page__item-btn projects-page__item-btn--icon"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects-page__item-btn projects-page__item-btn--icon"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="projects-page__modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="projects-page__modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="projects-page__modal-close" onClick={closeModal}>×</button>

              <div className="projects-page__modal-header">
                <span className="projects-page__modal-category">{selectedProject.category}</span>
                <div className="projects-page__modal-title-row">
                  <h3 className="projects-page__modal-title">{selectedProject.title}</h3>
                  {selectedProject.logo && <img src={selectedProject.logo} alt="" className="projects-page__modal-logo" />}
                </div>
                <span className="projects-page__modal-year">{selectedProject.year}</span>
              </div>

              <div className="projects-page__modal-body">
                <div className="projects-page__modal-info">
                  <div className="projects-page__modal-desc">
                    {selectedProject.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {selectedProject.images.length > 0 && (
                  <div className="projects-page__modal-carousel">
                    <button className="projects-page__modal-arrow projects-page__modal-arrow--left" onClick={prevImage}>‹</button>
                    <div className="projects-page__modal-image">
                      <img
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                        className="projects-page__modal-img"
                      />
                    </div>
                    <button className="projects-page__modal-arrow projects-page__modal-arrow--right" onClick={nextImage}>›</button>
                    <div className="projects-page__modal-dots">
                      {selectedProject.images.map((_, dotIndex) => (
                        <span
                          key={dotIndex}
                          className={`projects-page__modal-dot ${dotIndex === currentImageIndex ? 'projects-page__modal-dot--active' : ''}`}
                          onClick={() => setCurrentImageIndex(dotIndex)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.collaborators && selectedProject.collaborators.length > 0 && (
                  <div className="projects-page__modal-collaborators">
                    <span className="projects-page__modal-collaborators-title">Compañeros de trabajo</span>
                    <div className="projects-page__modal-collaborators-list">
                      {selectedProject.collaborators.map((collab) => (
                        <a
                          key={collab.github}
                          href={collab.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-page__modal-collaborator"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          {collab.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="projects-page__modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="projects-page__modal-tag">{tag}</span>
                  ))}
                </div>

                <div className="projects-page__modal-actions">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="projects-page__modal-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="projects-page__modal-btn projects-page__modal-btn--primary">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects

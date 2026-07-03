import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Craft.css'

const SKILLS = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'Python', level: 82, category: 'Backend' },
  { name: 'PostgreSQL', level: 85, category: 'Data' },
  { name: 'Docker', level: 80, category: 'DevOps' },
  { name: 'AWS', level: 75, category: 'Cloud' },
  { name: 'Figma', level: 78, category: 'Design' },
]

const Craft = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="craft" className="craft" ref={sectionRef}>
      <div className="craft__content">
        <motion.div className="craft__header" style={{ y }}>
          <motion.div
            className="craft__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="craft__eyebrow-line" />
            <span className="craft__eyebrow-text">ACT IV</span>
            <span className="craft__eyebrow-line" />
          </motion.div>
          <motion.h2
            className="craft__title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Craft
          </motion.h2>
        </motion.div>

        <div className="craft__grid">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="craft__skill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="craft__skill-header">
                <span className="craft__skill-name">{skill.name}</span>
                <span className="craft__skill-category">{skill.category}</span>
              </div>
              <div className="craft__skill-bar">
                <motion.div
                  className="craft__skill-fill"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: skill.level / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="craft__philosophy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <blockquote className="craft__quote">
            <p className="craft__quote-text">
              "El buen diseño es invisible. El great design es inevitable."
            </p>
            <footer className="craft__quote-attr">— Mi filosofía de desarrollo</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default Craft

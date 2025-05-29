import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Smartphone, Globe, Bot, BrainCircuit, Server} from 'lucide-react'
import personalData from '../data/personal.json'
import './About.css'

const About = () => {
  const { personalInfo, skills } = personalData

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: skills.languages,
      color: '#f39c12'
    },
    {
      title: 'Generative AI',
      icon: <Bot size={24} />,
      skills: skills.generative,
      color: '#e74c3c'
    },
    {
      title: 'Computer Vision',
      icon: <BrainCircuit size={24} />,
      skills: skills.computervision,
      color: '#3498db'
    },

    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: skills.backend,
      color: '#27ae60'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my skills, experience, and passion for technology
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-description">
              <p>
                I'm a passionate {personalInfo.title.toLowerCase()} with over 3 years of experience 
                creating innovative AI solutions. I love transforming complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p>
                My journey in technology started with curiosity and has evolved into a career 
                focused on creating meaningful digital experiences. I'm constantly learning 
                new technologies and best practices to deliver high-quality solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, playing sports, or just Netflix & Chill.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <Globe className="highlight-icon" />
                <div>
                  <h4>End-to-End ML</h4>
                  <p>Developed full-stack machine learning workflows from data to deployment.</p>
                </div>
              </div>
              <div className="highlight-item">
                <Smartphone className="highlight-icon" />
                <div>
                  <h4>Real-Time AI</h4>
                  <p>Built fast, real-time inference systems for video and image analysis.</p>
                </div>
              </div>
              <div className="highlight-item">
                <Cloud className="highlight-icon" />
                <div>
                  <h4>Edge AI</h4>
                  <p>Deployed optimized ML models on edge devices for low-latency processing.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="skill-category"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-header">
                    <div 
                      className="skill-icon"
                      style={{ color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h4 className="skill-title">{category.title}</h4>
                  </div>
                  <div className="skill-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: index * 0.1 + skillIndex * 0.05,
                          duration: 0.3 
                        }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

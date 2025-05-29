import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, BookOpen } from 'lucide-react'
import educationData from '../data/education.json'
import './Education.css'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  const EducationCard = ({ education, index }) => (
    <motion.div
      className="education-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="education-timeline-dot" />
      {index < educationData.length - 1 && <div className="education-timeline-line" />}
      
      <div className="education-content">
        <div className="education-header">
          <div className="institution-info">
            {education.logo && (
              <img
                src={education.logo}
                alt={`${education.institution} logo`}
                className="institution-logo"
              />
            )}
            <div className="degree-details">
              <h3>{education.title}</h3>
              <p className="institution-name">{education.institution}</p>
            </div>
          </div>
          
          <div className="education-meta">
            <div className="education-duration">
              <Calendar size={16} />
              <span>{formatDate(education.startDate)} - {formatDate(education.endDate)}</span>
            </div>
            {education.location && (
              <div className="education-location">
                <MapPin size={16} />
                <span>{education.location}</span>
              </div>
            )}
          </div>
        </div>

        {education.gpa && (
          <div className="education-gpa">
            <Award size={16} />
            <span>GPA: {education.gpa}</span>
          </div>
        )}

        {education.honors && education.honors.length > 0 && (
          <div className="education-honors">
            <h4>Honors & Recognition</h4>
            <div className="honors-list">
              {education.honors.map((honor, idx) => (
                <span key={idx} className="honor-tag">{honor}</span>
              ))}
            </div>
          </div>
        )}

        {education.relevant_courses && education.relevant_courses.length > 0 && (
          <div className="education-courses">
            <h4>
              <BookOpen size={16} />
              Relevant Coursework
            </h4>
            <div className="courses-grid">
              {education.relevant_courses.map((course, idx) => (
                <motion.span
                  key={idx}
                  className="course-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {education.projects && education.projects.length > 0 && (
          <div className="education-projects">
            <h4>Notable Projects</h4>
            <ul>
              {education.projects.map((project, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {project}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <EducationCard key={education.id} education={education} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
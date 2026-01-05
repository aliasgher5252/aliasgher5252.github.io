import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import experienceData from '../data/experience.json'
import './WorkExperience.css'

const WorkExperience = () => {
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

  const WorkExperienceCard = ({ job, index }) => (
    <motion.div
      className="work-experience-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="work-timeline-dot" />
      {index < experienceData.length - 1 && <div className="work-timeline-line" />}
      
      <div className="work-experience-content">
        <div className="work-experience-header">
          <div className="work-company-info">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="work-company-logo"
              />
            )}
            <div className="work-job-details">
              <h3>{job.position}</h3>
              <div className="work-company-row">
                <p className="work-company-name">{job.company}</p>
                {job.type && <span className="work-type-badge">{job.type}</span>}
              </div>
            </div>
          </div>
          
          <div className="work-job-meta">
            <div className="work-duration">
              <Calendar size={16} />
              <span>{formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}</span>
            </div>
            {job.location && (
              <div className="work-location">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
            )}
          </div>
        </div>

        <div className="work-job-description">
          <p>{job.description}</p>
        </div>

        {job.highlights && job.highlights.length > 0 && (
          <div className="work-highlights">
            <ul>
              {job.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {job.technologies && job.technologies.length > 0 && (
          <div className="work-technologies">
            {job.technologies.map((tech) => (
              <span key={tech} className="work-tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
  return (
    <section id="work-experience" className="work-experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and career highlights
          </p>
        </motion.div>

        <motion.div
          className="work-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((job, index) => (
            <WorkExperienceCard key={job.id} job={job} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience

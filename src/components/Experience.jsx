import { motion } from 'framer-motion'
import { MapPin, Calendar, ExternalLink, Award, GraduationCap } from 'lucide-react'
import experienceData from '../data/experience.json'
import educationData from '../data/education.json'
import certificationsData from '../data/certifications.json'
import './Experience.css'

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }

  const ExperienceCard = ({ job, index }) => (
    <motion.div
      className="experience-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="experience-timeline">
        <div className="timeline-dot" />
        {index < experienceData.length - 1 && <div className="timeline-line" />}
      </div>
      
      <div className="experience-content">
        <div className="experience-header">
          <div className="company-info">
            {job.companyLogo && (
              <img
                src={job.companyLogo}
                alt={`${job.company} logo`}
                className="company-logo"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            )}
            <div>
              <h3 className="position">{job.position}</h3>
              <div className="company-details">
                <a
                  href={job.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-name"
                >
                  {job.company}
                  <ExternalLink size={14} />
                </a>
                <div className="job-meta">
                  <span className="job-type">{job.type}</span>
                  {job.remote && <span className="remote-badge">Remote</span>}
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-dates">
            <div className="date-range">
              <Calendar size={16} />
              <span>
                {formatDate(job.startDate)} - {job.current ? 'Present' : formatDate(job.endDate)}
              </span>
            </div>
            <div className="location">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <p className="job-description">{job.description}</p>

        <div className="responsibilities">
          <h4>Key Responsibilities</h4>
          <ul>
            {job.responsibilities.map((responsibility, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {responsibility}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="achievements">
          <h4>Achievements</h4>
          <ul>
            {job.achievements.map((achievement, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="technologies-used">
          <h4>Technologies</h4>
          <div className="tech-tags">
            {job.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  const EducationCard = ({ education }) => (
    <motion.div
      className="education-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="education-header">
        <div className="education-icon">
          <GraduationCap size={24} />
        </div>
        <div className="education-info">
          <h3 className="degree">{education.title}</h3>
          <p className="institution">{education.institution}</p>
          <div className="education-meta">
            <span className="duration">
              {formatDate(education.startDate)} - {formatDate(education.endDate)}
            </span>
            <span className="location">{education.location}</span>
          </div>
        </div>
      </div>

      {education.gpa && (
        <div className="gpa">
          <strong>GPA: {education.gpa}</strong>
        </div>
      )}

      {education.honors && (
        <div className="honors">
          <h4>Honors</h4>
          <div className="honors-list">
            {education.honors.map((honor) => (
              <span key={honor} className="honor-badge">{honor}</span>
            ))}
          </div>
        </div>
      )}

      <div className="coursework">
        <h4>Relevant Coursework</h4>
        <div className="course-tags">
          {education.relevant_courses.map((course) => (
            <span key={course} className="course-tag">{course}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  const CertificationCard = ({ cert }) => (
    <motion.div
      className="certification-card"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className="cert-header">
        <div className="cert-badge">
          <img
            src={cert.badge}
            alt={cert.name}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(cert.issuer)}&size=60&background=6366f1&color=fff`
            }}
          />
        </div>
        <div className="cert-info">
          <h3 className="cert-name">{cert.name}</h3>
          <p className="cert-issuer">{cert.issuer}</p>
          <div className="cert-meta">
            <span className="cert-date">Issued: {formatDate(cert.date)}</span>
            {cert.expiryDate && (
              <span className="cert-expiry">
                Expires: {formatDate(cert.expiryDate)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="cert-skills">
        {cert.skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>

      <div className="cert-actions">
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="verify-btn"
        >
          <Award size={16} />
          Verify Certificate
        </a>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="experience-content">
          {/* Work Experience */}
          <motion.div
            className="work-experience"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">Work Experience</h3>
            <div className="experience-timeline-container">
              {experienceData.map((job, index) => (
                <ExperienceCard key={job.id} job={job} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            className="education-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">Education</h3>
            <div className="education-grid">
              {educationData.map((education) => (
                <EducationCard key={education.id} education={education} />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="certifications-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certificationsData.map((cert) => (
                <CertificationCard key={cert.id} cert={cert} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

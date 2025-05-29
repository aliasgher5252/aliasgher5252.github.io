import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Award, CheckCircle } from 'lucide-react'
import certificationsData from '../data/certifications.json'
import './Certifications.css'

const Certifications = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const isExpired = (expiryDate) => {
    if (!expiryDate) return false
    return new Date(expiryDate) < new Date()
  }

  const CertificationCard = ({ certification }) => (
    <motion.div
      className={`certification-card ${!certification.verificationUrl ? 'no-verification' : ''}`}
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="certification-badge">
        {certification.badge && (
          <img
            src={certification.badge}
            alt={`${certification.name} badge`}
            className="badge-image"
          />
        )}
        <div className="badge-overlay">
          <Award size={24} />
        </div>
      </div>
      
      <div className="certification-content">
        <h3 className="certification-name">{certification.name}</h3>
        <p className="certification-issuer">{certification.issuer}</p>
        
        <div className="certification-meta">
          <div className="certification-date">
            <Calendar size={16} />
            <span>Issued: {formatDate(certification.date)}</span>
          </div>
          
          {certification.expiryDate && (
            <div className={`certification-expiry ${isExpired(certification.expiryDate) ? 'expired' : 'valid'}`}>
              <CheckCircle size={16} />
              <span>
                {isExpired(certification.expiryDate) 
                  ? `Expired: ${formatDate(certification.expiryDate)}`
                  : `Valid until: ${formatDate(certification.expiryDate)}`
                }
              </span>
            </div>
          )}
          
          {!certification.expiryDate && (
            <div className="certification-expiry valid">
              <CheckCircle size={16} />
              <span>No expiration</span>
            </div>
          )}
        </div>

        {certification.credentialId && (
          <div className="credential-id">
            <strong>Credential ID:</strong> {certification.credentialId}
          </div>
        )}

        {certification.skills && certification.skills.length > 0 && (
          <div className="certification-skills">
            <h4>Skills Validated</h4>
            <div className="skills-tags">
              {certification.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* Add a spacer div to push verification link to bottom */}
        <div className="flex-spacer"></div>

        {certification.verificationUrl && (
          <motion.a
            href={certification.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="verification-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Verify Credential
          </motion.a>
        )}
      </div>
    </motion.div>
  )

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and industry credentials
          </p>
        </motion.div>

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationsData.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
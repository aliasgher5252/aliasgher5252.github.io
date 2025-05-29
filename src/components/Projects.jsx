import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, Award, ExternalLink, Github } from 'lucide-react'
import projectsData from '../data/projects.json'
import './Projects.css'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [lightboxImage, setLightboxImage] = useState(null)

  const categories = ['All', ...new Set(projectsData.map(project => project.category))]
  
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)
  const featuredProjects = projectsData.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const ProjectCard = ({ project, featured = false }) => (
    <motion.div
      className={`project-card ${featured ? 'featured' : ''}`}
      variants={projectVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={() => setSelectedProject(project)}
    >
      <div className="project-image">
        <img
          src={project.images[0]}
          alt={project.title}
          onError={(e) => {
            e.target.src = ``
          }}        />
        <div className="project-status">
          <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
            {project.status}
          </span>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-more">+{project.technologies.length - 3}</span>
          )}
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <Calendar size={16} />
            <span>{new Date(project.date).getFullYear()}</span>
          </div>
          <div className="meta-item">
            <Users size={16} />
            <span>{project.team}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            className="featured-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="featured-title">
              <Award size={24} />
              Featured Projects
            </h3>
            <motion.div
              className="featured-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Project Filter */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Projects */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>{selectedProject.title}</h3>
                  <button
                    className="close-btn"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </button>
                </div>
                  <div className="modal-content">
                  {/* Content section on top */}
                  <div className="modal-details">
                    <p className="modal-description">
                      {selectedProject.longDescription}
                    </p>
                    
                    <div className="modal-tech">
                      <h4>Technologies Used:</h4>
                      <div className="tech-list">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="modal-highlights">
                      <h4>Key Highlights:</h4>
                      <ul>
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>                    <div className="modal-actions">
                      {selectedProject.links.live && (
                        <a
                          href={selectedProject.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-btn primary"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-btn secondary"
                        >
                          <Github size={18} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Assets section below */}
                  <div className="modal-assets">
                    {/* Images */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <div className="modal-images">
                        <h4>Project Images:</h4>                        <div className="images-grid">
                          {selectedProject.images.map((image, index) => (
                            <div 
                              key={index} 
                              className="modal-image"
                              onClick={() => setLightboxImage(image)}
                              style={{ cursor: 'pointer' }}
                            >
                              <img
                                src={image}
                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                onError={(e) => {
                                  e.target.src = ``
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Videos */}
                    {selectedProject.videos && selectedProject.videos.length > 0 && (
                      <div className="modal-videos">
                        <h4>Project Videos:</h4>
                        <div className="videos-grid">
                          {selectedProject.videos.map((video, index) => (
                            <div key={index} className="modal-video">
                              <video
                                controls
                                preload="metadata"
                                onError={(e) => {
                                  e.target.style.display = 'none'
                                }}
                              >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}        </AnimatePresence>

        {/* Image Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
            >
              <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="lightbox-close"
                  onClick={() => setLightboxImage(null)}
                >
                  ×
                </button>
                <img
                  src={lightboxImage}
                  alt="Full size view"
                  className="lightbox-image"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

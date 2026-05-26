import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Network Configuration Suite',
      description: 'Advanced tool for configuring and monitoring network infrastructure with real-time diagnostics and automated troubleshooting.',
      tags: ['Python', 'Networking', 'System Admin', 'Real-time'],
      category: 'Networking',
      featured: true
    },
    {
      title: 'Cloud Management Platform',
      description: 'Full-stack application for managing cloud resources, with integrated CI/CD pipelines and containerization support.',
      tags: ['React', 'Node.js', 'Docker', 'AWS'],
      category: 'Software Engineering',
      featured: true
    },
    {
      title: 'Distributed File System',
      description: 'Scalable file storage system built on distributed architecture with redundancy and load balancing.',
      tags: ['Java', 'Distributed Systems', 'Networking'],
      category: 'Networking',
      featured: false
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing large datasets with WebSocket live updates.',
      tags: ['React', 'WebSocket', 'D3.js', 'Express'],
      category: 'Software Engineering',
      featured: false
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and intelligent routing capabilities.',
      tags: ['Node.js', 'Microservices', 'JWT', 'Express'],
      category: 'Software Engineering',
      featured: false
    },
    {
      title: 'Network Packet Analyzer',
      description: 'Deep packet inspection tool for network analysis and security monitoring with visualization.',
      tags: ['C++', 'Networking', 'Security', 'Low-level'],
      category: 'Networking',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Innovative solutions spanning Software Engineering & Networking</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass p-8 md:p-12 rounded-2xl hover:glow-primary transition-all duration-500 cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gradient transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold text-secondary bg-secondary bg-opacity-10 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold">
                        View Project <ExternalLink size={18} />
                      </button>
                      <button className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-semibold">
                        GitHub <Github size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="h-80 bg-gradient-dark rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={itemVariants} className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass p-6 rounded-xl hover:glow-accent transition-all duration-300 h-full flex flex-col justify-between hover:border-primary hover:border-opacity-50 cursor-pointer">
                <div>
                  <div className="inline-block mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-primary bg-primary bg-opacity-10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects

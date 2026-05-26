import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: 'FE',
      skills: ['React.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript', 'TypeScript']
    },
    {
      category: 'Backend',
      icon: 'BE',
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Networking',
      icon: 'NET',
      skills: ['TCP/IP', 'DNS', 'VPN', 'Firewall Config', 'Network Security', 'System Admin']
    },
    {
      category: 'DevOps & Tools',
      icon: 'OPS',
      skills: ['Docker', 'Git', 'AWS', 'CI/CD', 'Linux', 'Kubernetes']
    },
    {
      category: 'Databases',
      icon: 'DB',
      skills: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL', 'Firebase', 'SQL']
    },
    {
      category: 'Other',
      icon: 'DEV',
      skills: ['Microservices', 'REST APIs', 'GraphQL', 'WebSockets', 'Machine Learning Basics', 'Agile']
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
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
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Comprehensive skill set in modern technologies</p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass p-8 rounded-2xl hover:glow-primary transition-all duration-500 h-full hover:border-primary hover:border-opacity-50 cursor-pointer">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-gray-300 group-hover:text-primary transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-20 border-t border-primary border-opacity-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-gradient">Qualifications & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="glass p-8 rounded-xl hover:glow-secondary transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-secondary">BS</div>
                <div>
                  <h4 className="font-bold text-lg text-secondary mb-2">B.Sc. Computer Science & Mathematics</h4>
                  <p className="text-gray-400">Northwest University (NWU)</p>
                  <p className="text-sm text-gray-500 mt-2">2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-xl hover:glow-accent transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-accent">PC</div>
                <div>
                  <h4 className="font-bold text-lg text-accent mb-2">Professional Certifications</h4>
                  <p className="text-gray-400">AWS Solutions Architect Associate</p>
                  <p className="text-sm text-gray-500 mt-2">In Progress</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

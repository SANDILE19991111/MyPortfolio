import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Brain } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="min-h-screen py-20 px-6 flex items-center">
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Sandile Khoza, a passionate Computer Science and Mathematics graduate from Northwest University. My journey in tech has been driven by a desire to solve complex problems and create innovative solutions that make a real impact.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With expertise spanning Software Engineering and Networking, I excel at building robust, scalable applications and designing systems that work seamlessly. I'm committed to staying at the forefront of technology and continuously expanding my skill set.
            </p>

            <div className="pt-6 space-y-4">
              <motion.div
                variants={itemVariants}
                className="glass p-4 rounded-lg hover:glow-primary transition-all"
              >
                <div className="flex items-start gap-4">
                  <Code2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Software Engineering</h3>
                    <p className="text-gray-400 text-sm">Building efficient, maintainable code using modern frameworks and best practices</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="glass p-4 rounded-lg hover:glow-secondary transition-all"
              >
                <div className="flex items-start gap-4">
                  <Zap className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Networking</h3>
                    <p className="text-gray-400 text-sm">Designing and implementing robust network architectures and solutions</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="glass p-4 rounded-lg hover:glow-accent transition-all"
              >
                <div className="flex items-start gap-4">
                  <Brain className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-accent mb-1">Problem Solving</h3>
                    <p className="text-gray-400 text-sm">Analytical mindset combining math & logic to tackle challenges</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Visual Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass p-8 rounded-2xl">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary font-semibold">Frontend Development</span>
                    <span className="text-gray-400">92%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-secondary font-semibold">Backend & Networking</span>
                    <span className="text-gray-400">88%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      transition={{ duration: 1.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-accent font-semibold">Database Design</span>
                    <span className="text-gray-400">85%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary font-semibold">System Architecture</span>
                    <span className="text-gray-400">90%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      transition={{ duration: 1.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

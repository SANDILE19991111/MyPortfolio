import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent opacity-20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

      <motion.div
        className="max-w-4xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="glass px-6 py-2 rounded-full flex items-center space-x-2">
            <span className="text-primary text-lg">•</span>
            <span className="text-sm text-primary font-semibold">Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-center mb-6 leading-tight"
        >
          <span className="text-gradient">Full Stack Developer</span>
          <br />
          <span className="text-white">& Tech Innovator</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 text-center mb-8 max-w-2xl mx-auto"
        >
          Computer Science & Mathematics Graduate from NWU. Specializing in Software Engineering, Networking, and building futuristic digital solutions.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">10+</div>
            <div className="text-gray-400 text-sm md:text-base">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">5+</div>
            <div className="text-gray-400 text-sm md:text-base">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gradient">100%</div>
            <div className="text-gray-400 text-sm md:text-base">Dedication</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <button className="btn-primary group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          <button className="btn-secondary">
            Download CV
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-primary opacity-50">↓</div>
      </motion.div>
    </section>
  )
}

export default Hero

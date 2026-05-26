import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'text-gray-400 hover:text-primary' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-gray-400 hover:text-secondary' },
    { icon: Mail, label: 'Email', href: '#', color: 'text-gray-400 hover:text-accent' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'text-gray-400 hover:text-primary' }
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
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <motion.div
        className="max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 text-lg">Let's collaborate and create something amazing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full glass px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitted ? '✓ Message Sent!' : 'Send Message'}
                  <Send size={18} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass p-8 rounded-2xl hover:glow-primary transition-all">
              <h3 className="text-2xl font-bold text-gradient mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out. I'm always interested in discussing new opportunities and challenges.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">L</div>
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">R</div>
                  <div>
                    <p className="font-semibold text-white">Response Time</p>
                    <p className="text-gray-400">Usually within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-primary">A</div>
                  <div>
                    <p className="font-semibold text-white">Availability</p>
                    <p className="text-gray-400">Open for projects & collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-semibold text-white mb-6">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`glass p-4 rounded-lg flex items-center gap-3 hover:glow-primary transition-all group ${link.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon size={20} />
                    <span className="text-sm font-semibold">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-12 border-t border-primary border-opacity-20 text-center"
        >
          <p className="text-gray-400">
            © 2026 Sandile Khoza. All rights reserved. | Designed & Built with passion
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact

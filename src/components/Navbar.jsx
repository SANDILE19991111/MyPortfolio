import React from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Navbar = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass backdrop-blur-lg border-b border-primary border-opacity-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient">SK</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="p-2 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-2 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="p-2 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-primary border-opacity-20">
          <div className="px-6 py-4 space-y-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-300 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

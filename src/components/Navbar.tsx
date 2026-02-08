import { useState } from 'react'
import { Menu, X, Bike } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Bike className="h-8 w-8 text-accent" />
            <span className="text-xl font-bold text-primary">SOSbike</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">About</a>
            <a href="#gallery" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Gallery</a>
            <a href="#partners" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Partners</a>
            <a href="#contact" className="text-sm font-medium text-text-secondary hover:text-accent transition-colors">Contact</a>
            <a href="#contact" className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-hover transition-colors">
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-3 pt-4">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-secondary hover:text-accent px-2 py-1">Services</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-secondary hover:text-accent px-2 py-1">About</a>
              <a href="#gallery" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-secondary hover:text-accent px-2 py-1">Gallery</a>
              <a href="#partners" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-secondary hover:text-accent px-2 py-1">Partners</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-text-secondary hover:text-accent px-2 py-1">Contact</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="bg-accent text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-hover text-center mt-2">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

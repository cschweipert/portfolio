import React from 'react'
import { Mail, ChevronUp } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Bottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative bg-gray-800 pb-8">
      <div 
        className="absolute inset-0 bg-gray-50"
        style={{
          clipPath: 'polygon(0 0%, 100% 0%, 50% 50%)'
        }}
      ></div>
      
      <div className="relative z-10 text-center pt-32">
        <div className="flex justify-center items-center gap-8 mb-8 mt-2">
          <a 
            href="https://github.com/cschweipert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-blue-300 transition-colors duration-300"
            title="GitHub profile"
          >
            <SiGithub size={32} />
          </a>
          
          <a 
            href="mailto:christina@motherdata.earth"
            className="text-gray-50 hover:text-blue-300 transition-colors duration-300"
            title="Send email"
          >
            <Mail size={32} />
          </a>
          
          <a 
            href="https://linkedin.com/in/christinaschweipert"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-50 hover:text-blue-300 transition-colors duration-300"
            title="LinkedIn profile"
          >
            <SiLinkedin size={32} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="cursor-pointer text-gray-50 hover:text-blue-300 transition-colors duration-300 mx-auto block"
          title="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  )
}
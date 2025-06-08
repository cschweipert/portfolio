import React, { useState, useEffect } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import WorkCard from './components/WorkCard'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 flex justify-between items-center h-16">
          <div className="flex gap-8 pl-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('work')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('work')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Tool Belt
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              About
            </button>
          </div>

          <div className={`flex items-center gap-3 pr-8 ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <span>Contact | </span>
            <a 
              href="mailto:christina@motherdata.earth" 
              className={`transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/cschweipert" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/christinaschweipert" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-all duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Landing Page */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center justify-start relative"
        style={{ backgroundImage: 'url(/jungle.png)' }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
        
        <div className="relative text-gray-300 text-left ml-12 z-20">
          <h1 className="text-6xl font-bold mb-4">Christina Schweipert</h1>
          <p className="text-2xl font-light">Software Engineer solving complex Application Design Challenges.</p>
          <p className="text-xl font-light">Driven by curiosity and a deep love for mother Earth.</p>
        </div>
      </section>

      <section id="work" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work</h2>
          <p className="text-gray-600 text-lg mb-12">Here are some of the projects I've worked on</p>
          
          <div className="flex flex-col gap-12">
            <WorkCard
              image="/electra_2.png"
              title="End-to-end Next.js App and REST API development."
              company="Electra"
              description="Planned, designed, and developed internal tooling."
              technologies={["Next.js", "Typescript", "PostgreSQL", "Python", "FastAPI", "Docker"]}
              onClick={() => {}}
            />
            
            <WorkCard
              image="/wikirate.png"
              title="Wikirate"
              company="Wikirate"
              description=""
              technologies={["Ruby in Rails", "Python", "FastAPI", "DASH"]}  
              onClick={() => {}}
            />

            <WorkCard
              image="/tpg.png"
              title="Travelpassgroup"
              company=""
              description=""
              technologies={["Python, Flask", "PostgreSQL", "SQL", "AWS"]}
              onClick={() => {}}
            />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Tool Belt</h2>
          <p className="text-gray-600 text-lg">Tool Belt will go here...</p>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">About Me</h2>
          <p className="text-gray-600 text-lg">About section content will go here...</p>
        </div>
      </section>
    </div>
  )
}
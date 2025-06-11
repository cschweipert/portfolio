import React, { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import {
  SiLinkedin,
  SiGithub,
} from 'react-icons/si'

import WorkCard from './components/WorkCard'
import WorkDetails from './components/WorkDetails'
import { workData } from './assets/WorkData'
import Toolbelt from './components/Toolbelt'
import About from './components/About'
import Bottom from './components/Bottom'
import Footer from './components/Footer'

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [selectedWork, setSelectedWork] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setCurrentView('home')
    setSelectedWork(null)
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleWorkCardClick = (workId) => {
    setSelectedWork(workData[workId])
    setCurrentView('work-detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToWork = () => {
    setCurrentView('home')
    setSelectedWork(null)
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || currentView === 'work-detail'
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 flex justify-between items-center h-16">
          <div className="flex gap-8 pl-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('work')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('toolbelt')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Toolbelt
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              About
            </button>
          </div>

          <div className={`flex items-center gap-3 pr-8 ${
            isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
          }`}>
            <a 
              href="mailto:christina@motherdata.earth" 
              className={`transition-all duration-200 ${
                isScrolled || currentView === 'work-detail'
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
                isScrolled || currentView === 'work-detail'
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <SiGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/christinaschweipert" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-all duration-200 ${
                isScrolled || currentView === 'work-detail'
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <SiLinkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      {currentView === 'work-detail' && selectedWork ? (
        <>
          <WorkDetails workItem={selectedWork} onBack={handleBackToWork} />
          <Footer />
        </>
      ) : (
        <>
          <section
            id="home"
            className="h-screen bg-cover bg-center flex items-center justify-start relative"
            style={{ backgroundImage: 'url(/jungle.png)' }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0"></div>
            
            <div className="relative text-gray-300 text-left ml-12 z-20">
              <h1 className="text-6xl font-bold mb-4">Christina Schweipert</h1>
              <p className="text-3xl font-light">Software Engineer solving complex Application and API Design Challenges.</p>
              <p className="text-xl font-light">Driven by curiosity and a deep love for mother Earth.</p>
            </div>
          </section>

          <section id="work" className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work.</h2>
              <p className="text-gray-600 text-lg mb-12">Here are some of the projects I've worked on.</p>
              
              <div className="flex flex-col gap-12">
                <WorkCard
                  image={workData.electra.image}
                  title={workData.electra.title}
                  company={workData.electra.company}
                  description={workData.electra.description}
                  technologies={workData.electra.technologies}
                  onClick={() => handleWorkCardClick('electra')}
                />
                
                <WorkCard
                  image={workData.wikirate.image}
                  title={workData.wikirate.title}
                  company={workData.wikirate.company}
                  description={workData.wikirate.description}
                  technologies={workData.wikirate.technologies}
                  onClick={() => handleWorkCardClick('wikirate')}
                />

                <WorkCard
                  image={workData.tpg.image}
                  title={workData.tpg.title}
                  company={workData.tpg.company}
                  description={workData.tpg.description}
                  technologies={workData.tpg.technologies}
                  onClick={() => handleWorkCardClick('tpg')}
                />
              </div>
            </div>
          </section>

          <section id="toolbelt" className="min-h-screen bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Toolbelt.</h2>
              <p className="text-gray-600 text-lg mb-12">My technology stack and tools.</p>
              <Toolbelt />
            </div>
          </section>

          <section id="about" className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me.</h2>
              <About />
            </div>
          </section>
          <Bottom />
          <Footer />
        </>
      )}
    </div>
  )
}
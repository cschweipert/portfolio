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
              onClick={() => scrollToSection('geospatial')}
              className={`cursor-pointer transition-all duration-200 ${
                isScrolled || currentView === 'work-detail' ? 'text-gray-800' : 'text-white'
              } hover:!text-blue-400`}
            >
              Geospatial data project
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
              <p className="text-3xl font-light">Software Engineer solving complex Application and API design challenges.</p>
              <p className="text-xl font-light">Driven by curiosity and a deep love for mother earth.</p>
            </div>
          </section>

          <section id="work" className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">My Work.</h2>
              <p className="text-gray-600 text-lg mb-12">Here are some of the projects I've worked on.</p>
              
              <div className="flex flex-col gap-12">
                <WorkCard
                  image={workData.electra.image}
                  company={workData.electra.company}
                  description={workData.electra.description}
                  technologies={workData.electra.technologies}
                  onClick={() => handleWorkCardClick('electra')}
                />
                
                <WorkCard
                  image={workData.wikirate.image}
                  company={workData.wikirate.company}
                  description={workData.wikirate.description}
                  technologies={workData.wikirate.technologies}
                  onClick={() => handleWorkCardClick('wikirate')}
                />

                <WorkCard
                  image={workData.tpg.image}
                  company={workData.tpg.company}
                  description={workData.tpg.description}
                  technologies={workData.tpg.technologies}
                  onClick={() => handleWorkCardClick('tpg')}
                />
              </div>
            </div>
          </section>

          <section id="geospatial" className="min-h-screen bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Geospatial Data Project.</h2>
              <p className="text-gray-600 text-lg mb-8">
                Atmospheric River Forecast — a scheduled pipeline that ingests NOAA forecast data every six hours, detects atmospheric rivers in it, and serves the results as an interactive map.
              </p>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <a
                  href="https://atmospheric-river.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity duration-300"
                >
                  <img
                    src="/ar.png"
                    alt="Atmospheric River Forecast Application"
                    className="w-full rounded-lg shadow-md mb-6 cursor-pointer"
                  />
                </a>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">
                      A scheduled job pulls GRIB2 model output from NOAA on the GFS cycle (0Z, 6Z, 12Z, 18Z), computes Integrated Vapor
                      Transport by vertically integrating wind and humidity, applies geometric detection criteria to isolate atmospheric
                      river events, and writes them to PostGIS as spatial geometries. A FastAPI query layer then serves current conditions,
                      forecasts, and historical lookback to an interactive map — no manual handling between the raw files and the map.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Scheduled ingestion of NOAA GFS GRIB2 output every 6 hours (APScheduler, pygrib)</li>
                      <li>AR detection from scientific criteria (IVT ≥ 250 kg/(m·s), length ≥ 2000 km)</li>
                      <li>Forecast detection out to 72 hours, with temporal tracking of events across time steps</li>
                      <li>Spatial modeling in PostGIS with Alembic-managed schema changes</li>
                      <li>Geospatial queries for bounding box and distance-based lookups</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'FastAPI', 'PostgreSQL', 'PostGIS', 'SQLAlchemy', 'GeoAlchemy2', 'Alembic', 'APScheduler', 'pygrib', 'NumPy', 'SciPy', 'Shapely', 'Preact', 'OpenLayers'].map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <a
                      href="https://atmospheric-river.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
                    >
                      View Live Application →
                    </a>
                    <a
                      href="https://github.com/cschweipert/atmos-river"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium"
                      title="Backend Repository"
                    >
                      <SiGithub size={20} />
                      Backend
                    </a>
                    <a
                      href="https://github.com/cschweipert/atmos-river-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium"
                      title="Frontend Repository"
                    >
                      <SiGithub size={20} />
                      Frontend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="toolbelt" className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Toolbelt.</h2>
              <p className="text-gray-600 text-lg mb-12">My technology stack and tools.</p>
              <Toolbelt />
            </div>
          </section>

          <section id="about" className="min-h-screen bg-white py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Me.</h2>
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
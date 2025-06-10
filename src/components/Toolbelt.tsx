import React from 'react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiPostgresql,
  SiSqlalchemy,
  SiGithub,
  SiRubyonrails,
  SiMysql,
  SiPlotly,
  SiDocker,
  SiAmazonwebservices
} from 'react-icons/si'

export default function Toolbelt() {
  const technologies = [
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiDjango, name: 'Django', color: '#092E20' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiSqlalchemy, name: 'SQLAlchemy', color: '#D71F00' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiPlotly, name: 'Dash', color: '#3F4F75' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiRubyonrails, name: 'Ruby on Rails', color: '#CC0000' }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Tech Toolbelt</h2>
        <p className="text-gray-600">My technology stack and tools</p>
      </div> */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="mb-3 p-2">
                <IconComponent 
                  size={40} 
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                {tech.name}
              </span>
            </div>
          )
        })}
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
          <span className="text-sm text-gray-600">
            {technologies.length} technologies in my toolkit
          </span>
        </div>
      </div>
    </div>
  )
}
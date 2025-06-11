import React from 'react'
import {
  SiHtml5,
  SiCss3,
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
  SiAmazonwebservices,
  SiTailwindcss
} from 'react-icons/si'

export default function Toolbelt() {
  const technologies = [
    { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
    { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
    { icon: SiPython, name: 'Python', color: '#3776AB' },
    { icon: SiFlask, name: 'Flask', color: '#000000' },
    { icon: SiFastapi, name: 'FastAPI', color: '#009688' },
    { icon: SiDjango, name: 'Django', color: '#092E20' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiSqlalchemy, name: 'SQLAlchemy', color: '#D71F00' },
    { icon: SiPlotly, name: 'Dash', color: '#3F4F75' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
    { icon: SiAmazonwebservices, name: 'AWS', color: '#FF9900' },
    { icon: SiGithub, name: 'GitHub', color: '#181717' },
    { icon: SiRubyonrails, name: 'Ruby on Rails', color: '#CC0000' }
  ]

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6">
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
    </div>
  )
}
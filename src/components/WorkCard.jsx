import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function WorkCard ({ image, title, company, description, technologies, onClick }) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
      onClick={onClick}
    >
      <div className="flex h-80">
        <div className="w-2/5">
          <img 
            src={image} 
            alt={`${company} website screenshot`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-3/5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800">{title}</h3>
              <ExternalLink size={20} className="text-gray-400" />
            </div>
            <p className="text-blue-600 font-medium mb-3">{company}</p>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">{description}</p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

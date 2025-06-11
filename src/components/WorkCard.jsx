import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function WorkCard({ image, title, company, description, technologies, onClick }) {
  return (
    <div
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 overflow-hidden"
      onClick={onClick}
    >
      <div className="flex h-80">
        <div className="w-5/12">
          <img
            src={image}
            alt={`${company} website screenshot`}
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="w-7/12 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{company}</h3>
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
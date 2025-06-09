import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function WorkDetails({ workItem, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-[50vh]">
        <img
          src={workItem.wide_img}
          alt={workItem.company}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{workItem.company}</h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 text-md max-w-3xl mx-auto leading-relaxed">
            {workItem.compDescription}
          </p>
        </div>

        <div className="text-center mb-6">
          <a
            href={workItem.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-lg"
          >
            <ExternalLink size={20} />
            Visit Website
          </a>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">My Role</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600">Full-stack development</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600">System architecture design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600">Database optimization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-600">API development</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {workItem.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Situation</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.situation}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Task</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.task}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Action</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.action}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Result</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
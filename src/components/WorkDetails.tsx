import React from 'react'
import { ExternalLink, ChevronLeft } from 'lucide-react'

export default function WorkDetails({ workItem, onBack }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm pt-16">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Work
          </button>
        </div>
      </div>

      <div className="w-full h-[50vh]">
        <img
          src={workItem.wide_img}
          alt={workItem.company}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{workItem.company}</h1>
          <div className="text-xl text-gray-600 mb-2">{workItem.role}</div>
          {/* <div className="text-lg text-gray-500">{workItem.period} | {workItem.location}</div> */}
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {workItem.compDescription}
          </p>
        </div>

        <div className="text-center mb-12">
          <a
            href={workItem.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
          >
            <ExternalLink size={20} />
            Visit Website
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Key Responsibilities</h3>
            <ul className="space-y-3">
              {workItem.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600 leading-relaxed">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {workItem.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Project Overview</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{workItem.description}</p>
        </div>

        <div className="space-y-10">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">S</span>
              Situation
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.situation}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm">T</span>
              Task
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.task}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">A</span>
              Action
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.action}</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold text-sm">R</span>
              Result
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{workItem.result}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
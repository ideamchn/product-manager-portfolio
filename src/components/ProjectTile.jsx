import React from 'react'
import { Link } from 'react-router-dom'

const ProjectTile = ({ project }) => {
  return (
      <Link to={`/projects/${project.id}`}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 hover:border-blue-300 cursor-pointer h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                project.status === 'MVP Development'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
            }`}>
            {project.status}
          </span>
          </div>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
                <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                >
              {tech}
            </span>
            ))}
            {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">{project.metrics.value}</div>
              <div className="text-xs text-gray-500">{project.metrics.label}</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">{project.timeline}</div>
              <div className="text-xs text-gray-500">Timeline</div>
            </div>
          </div>
        </div>
      </Link>
  )
}

export default ProjectTile

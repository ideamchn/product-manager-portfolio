import React from 'react'
import ProjectTile from '../components/ProjectTile'
import projects from '../data/projectsData'


const Home = () => {
  return (
      <div className="min-h-screen bg-gray-50">
        {/* Projects Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive product strategy and technical implementation showcasing 17+ years of experience
              in building scalable products and leading cross-functional teams
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <ProjectTile key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default Home
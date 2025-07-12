import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  return (
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                Product Manager Portfolio
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === '/'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:text-blue-600'
                  }`}
              >
                Projects
              </Link>

              <a
                  href="https://linkedin.com/in/srinivasthangalapally/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>

              <a
                  href="https://github.com/ideamchn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Github
              </a>

              <a
                  href="https://bitbucket.org/cinudaurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Bitbucket
              </a>


            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navigation
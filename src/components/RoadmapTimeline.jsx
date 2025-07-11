import React from 'react'

const RoadmapTimeline = ({ roadmapData }) => {
  return (
      <div className="space-y-8">
        {roadmapData.map((phase, index) => (
            <div key={index} className="relative">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">{index + 1}</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{phase.title}</h4>
                  <p className="text-sm text-gray-500">{phase.duration}</p>
                </div>
              </div>

              <div className="ml-12 pb-8">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Effort:</span> {phase.effort}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Deliverable:</span> {phase.deliverable}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                  ))}
                </div>
              </div>

              {index < roadmapData.length - 1 && (
                  <div className="absolute left-4 top-12 w-0.5 h-full bg-gray-300"></div>
              )}
            </div>
        ))}
      </div>
  )
}

export default RoadmapTimeline
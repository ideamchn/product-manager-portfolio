import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projectsData'
import MetricsTable from '../components/MetricsTable'
import RoadmapTimeline from '../components/RoadmapTimeline'
import CodeBlock from '../components/CodeBlock'

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projects.find(p => p.id === id)

    if (!project) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-800">
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
            >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
            </Link>

            {/* Project Header */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.status === 'MVP Development'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                    }`}>
            {project.status}
          </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>

            {/* Executive Summary */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-gray-700 mb-4">{project.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded">
                        <div className="text-2xl font-bold text-blue-600">{project.metrics.value}</div>
                        <div className="text-sm text-gray-500">{project.metrics.label}</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded">
                        <div className="text-2xl font-bold text-green-600">{project.timeline}</div>
                        <div className="text-sm text-gray-500">Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded">
                        <div className="text-2xl font-bold text-purple-600">{project.team}</div>
                        <div className="text-sm text-gray-500">Team Size</div>
                    </div>
                </div>
            </div>

            {/* Origin Story (if exists) */}
            {project.originStory && (
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">The Origin Story</h2>
                    <p className="text-gray-700 italic">{project.originStory}</p>
                </div>
            )}

            {/* Current Traction (if exists) */}
            {project.currentTraction && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Traction</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(project.currentTraction).map(([key, value]) => (
                            <div key={key} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Success Metrics (if exists) */}
            {project.successMetrics && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Success Metrics</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {Object.entries(project.successMetrics).map(([category, metrics]) => (
                            <div key={category}>
                                <h3 className="text-lg font-medium text-gray-800 mb-3 capitalize">{category}</h3>
                                <div className="space-y-2">
                                    {metrics.map((metric, idx) => (
                                        <div key={idx} className="flex justify-between text-sm">
                                            <span className="text-gray-600">{metric.metric}</span>
                                            <span className="font-medium text-gray-900">{metric.target}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Financial Projections (if exists) */}
            {project.financialProjections && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Projections</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                            <tr className="border-b">
                                <th className="text-left py-2 px-4">Period</th>
                                {Object.keys(project.financialProjections[0])
                                    .filter(key => key !== 'year')
                                    .map(key => (
                                        <th key={key} className="text-center py-2 px-4 capitalize">{key}</th>
                                    ))}
                            </tr>
                            </thead>
                            <tbody>
                            {project.financialProjections.map((projection, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4 font-medium">{projection.year}</td>
                                    {Object.entries(projection)
                                        .filter(([key]) => key !== 'year')
                                        .map(([key, value]) => (
                                            <td key={key} className="text-center py-2 px-4">{value}</td>
                                        ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Investment Ask (if exists) */}
            {project.investmentAsk && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>

                    <div className="bg-white rounded-lg p-6 mb-6">
                        <h3 className="text-3xl font-bold text-indigo-600 mb-2">{project.investmentAsk.amount}</h3>
                        <p className="text-lg text-gray-700 mb-2">{project.investmentAsk.valuation}</p>
                        <p className="text-gray-600">{project.investmentAsk.timeline}</p>
                        <p className="text-lg font-medium text-purple-600 mt-4">{project.investmentAsk.vision}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {project.investmentAsk.useOfFunds && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Use of Funds</h3>
                                <div className="space-y-3">
                                    {project.investmentAsk.useOfFunds.map((fund, index) => (
                                        <div key={index} className="bg-white rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="font-medium text-gray-900">{fund.category}</span>
                                                <span className="text-indigo-600 font-semibold">{fund.amount} ({fund.percentage})</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{fund.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.investmentAsk.returns && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expected Returns</h3>
                                <div className="space-y-3">
                                    {project.investmentAsk.returns.map((returnScenario, index) => (
                                        <div key={index} className={`rounded-lg p-4 ${
                                            index === 1 ? 'bg-green-100 border-2 border-green-500' : 'bg-white'
                                        }`}>
                                            <div className="font-medium text-gray-900 mb-1">{returnScenario.scenario}</div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Valuation: {returnScenario.valuation}</span>
                                                <span className="font-semibold text-green-600">{returnScenario.multiple} return</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="prose max-w-none">
                {/* Render each section */}
                {project.sections.map((section, index) => (
                    <div key={index} className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.title}</h2>

                        {/* Render section content based on type */}
                        {section.content.map((item, itemIndex) => {
                            if (item.type === 'text') {
                                return (
                                    <div key={itemIndex} className="mb-4">
                                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                    </div>
                                )
                            }

                            if (item.type === 'subsection') {
                                return (
                                    <div key={itemIndex} className="mb-6">
                                        <h3 className="text-xl font-medium text-gray-800 mb-3">{item.title}</h3>
                                        {item.content.map((subItem, subIndex) => (
                                            <div key={subIndex} className="mb-3">
                                                {subItem.type === 'text' && (
                                                    <p className="text-gray-700">{subItem.content}</p>
                                                )}
                                                {subItem.type === 'list' && (
                                                    <ul className="list-disc pl-6 text-gray-700">
                                                        {subItem.items.map((listItem, listIndex) => (
                                                            <li key={listIndex} className="mb-1">{listItem}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {subItem.type === 'bullet' && (
                                                    <div className="ml-4 mb-2">
                                                        <strong className="text-gray-800">{subItem.title}:</strong> {subItem.content}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )
                            }

                            if (item.type === 'table' && item.component === 'MetricsTable') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <MetricsTable data={item.data} />
                                    </div>
                                )
                            }

                            if (item.type === 'timeline' && item.component === 'RoadmapTimeline') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <RoadmapTimeline roadmapData={item.data} />
                                    </div>
                                )
                            }

                            if (item.type === 'image') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className="w-full h-auto rounded-lg shadow-lg"
                                        />
                                        {item.caption && (
                                            <p className="text-sm text-gray-500 text-center mt-2">{item.caption}</p>
                                        )}
                                    </div>
                                )
                            }

                            if (item.type === 'code') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <CodeBlock
                                            code={item.code}
                                            language={item.language}
                                            title={item.title}
                                        />
                                    </div>
                                )
                            }

                            if (item.type === 'list') {
                                return (
                                    <ul key={itemIndex} className="list-disc pl-6 text-gray-700 mb-4">
                                        {item.items.map((listItem, listIndex) => (
                                            <li key={listIndex} className="mb-2">{listItem}</li>
                                        ))}
                                    </ul>
                                )
                            }

                            return null
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectDetail
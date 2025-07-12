import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projectsData.js'
import MetricsTable from '../components/MetricsTable'
import RoadmapTimeline from '../components/RoadmapTimeline'
import CodeBlock from '../components/CodeBlock'

const ProjectDetail = () => {
    const { id } = useParams()

    // Debug logging
    console.log('Projects data:', projects)
    console.log('Looking for project ID:', id)
    console.log('Projects is array?', Array.isArray(projects))

    // Find project with error handling
    const project = projects.find(p => p && p.id === id)

    if (!project) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
                    <p className="text-gray-600 mb-4">
                        Looking for "{id}" in {projects.length} projects
                    </p>
                    <div className="text-sm text-gray-500 mb-4">
                        Available projects: {projects.map(p => p.id).join(', ')}
                    </div>
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
                            : project.status === 'Launched'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                    }`}>
            {project.status}
          </span>
                </div>

                {/* Domain and Market Info */}
                {project.domain && (
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-500 mr-4">Domain:</span>
                        <span className="text-sm text-gray-700">{project.domain}</span>
                    </div>
                )}

                {project.market && (
                    <div className="mb-6">
                        <span className="text-sm font-medium text-gray-500 mr-4">Market Size:</span>
                        <span className="text-sm font-semibold text-green-600">{project.market}</span>
                    </div>
                )}

                {/* Technologies */}
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

            {/* Origin Story - Special styling for compelling narrative */}
            {project.originStory && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8 border-l-4 border-blue-500">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">The Origin Story</h2>
                    <p className="text-lg text-gray-700 italic leading-relaxed">{project.originStory}</p>
                </div>
            )}

            {/* Executive Summary */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{project.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{project.metrics.value}</div>
                        <div className="text-sm text-gray-600">{project.metrics.label}</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">{project.timeline}</div>
                        <div className="text-sm text-gray-600">Timeline</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{project.team}</div>
                        <div className="text-sm text-gray-600">Team Size</div>
                    </div>
                </div>
            </div>

            {/* Burn Rate Analysis - Show financial metrics prominently */}
            {project.burnRate && (
                <div className="bg-yellow-50 rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Financial Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Current Burn Rate</h3>
                            <div className="text-2xl font-bold text-red-600 mb-1">{project.burnRate.monthly}</div>
                            <div className="text-sm text-gray-500">{project.burnRate.monthlyUSD}</div>
                        </div>
                        <div className="bg-white rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">18-Month Runway</h3>
                            <div className="text-2xl font-bold text-green-600 mb-1">{project.burnRate.runway18Month}</div>
                            <div className="text-sm text-gray-500">{project.burnRate.runway18MonthUSD}</div>
                        </div>
                    </div>

                    {/* Revenue Targets */}
                    {project.revenueTargets && (
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Milestones</h3>
                            <div className="space-y-3">
                                {project.revenueTargets.map((target, index) => (
                                    <div key={index} className="flex items-center p-3 bg-white rounded-lg">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                                            <span className="text-blue-600 font-semibold">M{target.month}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{target.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Financial Projections Table */}
            {project.financialProjections && (
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">5-Year Financial Projections</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                    {project.id === 'kg-nft-api' ? 'Developers' : 'Customers'}
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                    {project.id === 'kg-nft-api' ? 'Revenue' : 'ARPU'}
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                    {project.id === 'kg-nft-api' ? 'Transactions' : 'Revenue'}
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                                    {project.id === 'kg-nft-api' ? 'Burn/Profit' : 'Growth'}
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {project.financialProjections.map((projection, index) => (
                                <tr key={index} className={index === 0 ? "bg-blue-50" : "hover:bg-gray-50"}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{projection.year}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        {projection.customers || projection.developers}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                                        {projection.arpu || projection.revenue}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-center">
                                        {projection.revenue || projection.transactions}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-center">
                                        {projection.growth || projection.burn}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Investment Ask */}
            {project.investmentAsk && (
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>

                    <div className="bg-white rounded-lg p-6 mb-6">
                        <h3 className="text-3xl font-bold text-indigo-600 mb-2">{project.investmentAsk.amount}</h3>
                        <p className="text-lg text-gray-700 mb-2">{project.investmentAsk.valuation}</p>
                        <p className="text-gray-600 mb-4">{project.investmentAsk.timeline}</p>
                        <p className="text-lg font-medium text-purple-600">{project.investmentAsk.vision}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>
                </div>
            )}

            {/* Main Sections */}
            <div className="space-y-8">
                {project.sections && project.sections.map((section, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.title}</h2>

                        {section.content && section.content.map((item, itemIndex) => {
                            if (item.type === 'text') {
                                return (
                                    <div key={itemIndex} className="mb-4">
                                        <p className="text-gray-700 leading-relaxed">{item.content}</p>
                                    </div>
                                )
                            }

                            if (item.type === 'subsection') {
                                // Special styling for Go/No-Go Decision sections
                                const isGoNoGo = section.title.includes('Go/No-Go') || section.title.includes('Decision Framework')
                                const getGoNoGoColor = (title) => {
                                    if (title.includes('Green')) return 'from-green-50 to-green-100 border-green-200'
                                    if (title.includes('Yellow')) return 'from-yellow-50 to-yellow-100 border-yellow-200'
                                    if (title.includes('Red')) return 'from-red-50 to-red-100 border-red-200'
                                    return 'from-gray-50 to-gray-100 border-gray-200'
                                }

                                // Special styling for Partnership Strategy sections
                                const isPartnership = section.title.includes('Partnership Strategy')
                                const getPartnershipColor = (title) => {
                                    if (title.includes('Immediate')) return 'from-blue-50 to-blue-100 border-blue-200'
                                    if (title.includes('Technology')) return 'from-purple-50 to-purple-100 border-purple-200'
                                    if (title.includes('Industry')) return 'from-green-50 to-green-100 border-green-200'
                                    if (title.includes('Global')) return 'from-indigo-50 to-indigo-100 border-indigo-200'
                                    return 'from-gray-50 to-gray-100 border-gray-200'
                                }

                                return (
                                    <div key={itemIndex} className="mb-6">
                                        <div className={`p-6 rounded-lg border-2 ${
                                            isGoNoGo ? `bg-gradient-to-r ${getGoNoGoColor(item.title)}` :
                                                isPartnership ? `bg-gradient-to-r ${getPartnershipColor(item.title)}` :
                                                    'bg-gray-50 border-gray-200'
                                        }`}>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                                {isGoNoGo && item.title.includes('Green') && (
                                                    <span className="text-green-600 text-2xl mr-3">✅</span>
                                                )}
                                                {isGoNoGo && item.title.includes('Yellow') && (
                                                    <span className="text-yellow-600 text-2xl mr-3">⚠️</span>
                                                )}
                                                {isGoNoGo && item.title.includes('Red') && (
                                                    <span className="text-red-600 text-2xl mr-3">🛑</span>
                                                )}
                                                {isPartnership && (
                                                    <span className="text-blue-600 text-2xl mr-3">🤝</span>
                                                )}
                                                {item.title}
                                            </h3>
                                            {item.content && item.content.map((subItem, subIndex) => (
                                                <div key={subIndex} className="mb-3">
                                                    {subItem.type === 'text' && (
                                                        <p className="text-gray-700 leading-relaxed font-medium">{subItem.content}</p>
                                                    )}
                                                    {subItem.type === 'list' && subItem.items && (
                                                        <ul className="space-y-3">
                                                            {subItem.items.map((listItem, listIndex) => (
                                                                <li key={listIndex} className="flex items-start">
                                  <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                      isGoNoGo && item.title.includes('Green') ? 'bg-green-500' :
                                          isGoNoGo && item.title.includes('Yellow') ? 'bg-yellow-500' :
                                              isGoNoGo && item.title.includes('Red') ? 'bg-red-500' :
                                                  'bg-blue-500'
                                  }`}></span>
                                                                    <span className="text-gray-700">{listItem}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                    {subItem.type === 'bullet' && (
                                                        <div className="p-4 bg-white rounded-lg mb-3 shadow-sm">
                                                            <strong className="text-gray-800">{subItem.title}:</strong>
                                                            <span className="text-gray-700 ml-2">{subItem.content}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            }

                            if (item.type === 'table' && item.component === 'MetricsTable') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <MetricsTable data={item.data || []} />
                                    </div>
                                )
                            }

                            if (item.type === 'timeline' && item.component === 'RoadmapTimeline') {
                                return (
                                    <div key={itemIndex} className="mb-8">
                                        <RoadmapTimeline roadmapData={item.data || []} />
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
                                            onError={(e) => {
                                                e.target.style.display = 'none'
                                            }}
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
                                            code={item.code || ''}
                                            language={item.language || 'javascript'}
                                            title={item.title}
                                        />
                                    </div>
                                )
                            }

                            if (item.type === 'list' && item.items) {
                                return (
                                    <ul key={itemIndex} className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                                        {item.items.map((listItem, listIndex) => (
                                            <li key={listIndex}>{listItem}</li>
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
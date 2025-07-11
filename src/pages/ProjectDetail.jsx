import React from 'react'
import { useParams, Link } from 'react-router-dom'

// Complete project data from the first attachment
const projectData = {
    "knowledge-graph-nft-api": {
        id: "knowledge-graph-nft-api",
        title: "Knowledge Graph NFT API",
        subtitle: "MVP Feasibility & Strategic Roadmap",
        description: "API-first platform that enables personal knowledge graphs with NFT ownership model, targeting publishers and EdTech partners.",
        status: "MVP Development",
        technologies: ["Java 17", "Spring Boot", "PostgreSQL", "Redis", "Polygon", "IPFS"],
        metrics: {
            label: "Monthly Burn",
            value: "₹55k"
        },
        timeline: "90 Days",
        team: "2 Core",
        domain: "Web3 • EdTech • API Platform",
        market: "$6.94B by 2030",
        summary: "Building the \"Stripe for Knowledge NFTs\" - an API-first platform that enables personal knowledge ownership through blockchain technology.",
        highlights: [
            "API-first approach differentiating from embedded publisher solutions",
            "Personal knowledge focus vs enterprise/public knowledge",
            "Cross-platform by design for seamless integration",
            "B2B SaaS model complementing existing publishers"
        ],
        burnRate: {
            monthly: "₹55,000",
            monthlyUSD: "$660 USD equivalent",
            runway6Month: "₹3,30,000",
            runway6MonthUSD: "$4,000 USD equivalent"
        },
        revenueTargets: [
            { month: 3, description: "First pilot customer (₹50,000/month)" },
            { month: 6, description: "3 customers (₹1,50,000/month)" },
            { month: 9, description: "Break-even (₹3,00,000/month)" }
        ],
        competitiveLandscape: [
            {
                name: "OriginTrail (TRAC)",
                description: "Enterprise-focused decentralized knowledge graph for supply chains",
                strengths: "Mature protocol, multi-chain support, real adoption",
                gap: "Not designed for personal knowledge management or bookmarking"
            },
            {
                name: "Golden Protocol",
                description: "Web3 Wikipedia - public facts with token incentives",
                strengths: "$40M funding, 35K community members, a16z backing",
                gap: "Public knowledge only, not personal learning paths"
            },
            {
                name: "The Graph Protocol",
                description: "Google of Web3 - blockchain data indexing",
                strengths: "GRC-20 standard, massive adoption, $50M funding",
                gap: "Blockchain data only, not general knowledge"
            },
            {
                name: "Atypon (Wiley)",
                description: "Publication Knowledge Graph embedded in CONNECT platform",
                strengths: "Auto-tagger, taxonomy services, user profile enrichment",
                gap: "Not API-first, publisher-centric, no personal knowledge ownership"
            }
        ],
        riceFramework: [
            {
                feature: "Basic Node Creation API",
                reach: 100,
                impact: 10,
                confidence: 100,
                effort: 1,
                score: 100,
                priority: "P0"
            },
            {
                feature: "Basic Auth/API Keys",
                reach: 100,
                impact: 10,
                confidence: 100,
                effort: 0.6,
                score: 133,
                priority: "P0"
            },
            {
                feature: "Simple Graph Query",
                reach: 100,
                impact: 8,
                confidence: 100,
                effort: 1,
                score: 80,
                priority: "P0"
            },
            {
                feature: "Connection NFT API",
                reach: 80,
                impact: 10,
                confidence: 90,
                effort: 1,
                score: 72,
                priority: "P0"
            },
            {
                feature: "IPFS Integration",
                reach: 100,
                impact: 9,
                confidence: 90,
                effort: 2,
                score: 40.5,
                priority: "P0"
            },
            {
                feature: "Polygon Integration",
                reach: 90,
                impact: 9,
                confidence: 80,
                effort: 2,
                score: 32.4,
                priority: "P1"
            },
            {
                feature: "AI Suggestions",
                reach: 60,
                impact: 8,
                confidence: 70,
                effort: 3,
                score: 11.2,
                priority: "P1"
            },
            {
                feature: "Advanced Analytics",
                reach: 70,
                impact: 7,
                confidence: 60,
                effort: 3,
                score: 9.8,
                priority: "P2"
            },
            {
                feature: "Multi-language Support",
                reach: 40,
                impact: 6,
                confidence: 80,
                effort: 4,
                score: 4.8,
                priority: "P2"
            },
            {
                feature: "Mobile SDK",
                reach: 50,
                impact: 5,
                confidence: 70,
                effort: 5,
                score: 3.5,
                priority: "P3"
            }
        ],
        roadmap: [
            {
                phase: "Week 1-2: Foundation",
                effort: "80 hours",
                tasks: ["Spring Boot setup", "PostgreSQL configuration", "Basic REST API", "Wallet authentication", "API key generation"],
                deliverable: "Auth-protected 'Hello World' API"
            },
            {
                phase: "Week 3-4: Core NFT APIs",
                effort: "80 hours",
                tasks: ["Knowledge Node creation", "IPFS integration", "Basic metadata structure", "Polygon testnet deployment"],
                deliverable: "Can mint basic Knowledge NFTs"
            },
            {
                phase: "Week 5-6: Graph Functionality",
                effort: "80 hours",
                tasks: ["Connection NFT endpoints", "PostgreSQL graph queries", "Basic traversal algorithms", "Simple recommendation engine"],
                deliverable: "Functional knowledge graph"
            },
            {
                phase: "Week 7-8: Developer Experience",
                effort: "60 hours",
                tasks: ["API documentation", "JavaScript SDK", "Example applications", "Error handling"],
                deliverable: "Developer-ready API"
            },
            {
                phase: "Week 9-10: Pilot Integration",
                effort: "60 hours",
                tasks: ["First customer onboarding", "Custom features", "Performance optimization", "Bug fixes"],
                deliverable: "Live pilot with 1 customer"
            },
            {
                phase: "Week 11-12: Polish & Scale",
                effort: "60 hours",
                tasks: ["Analytics dashboard", "Monitoring & alerts", "CI/CD pipeline", "Security audit"],
                deliverable: "Production-ready MVP"
            }
        ],
        technicalArchitecture: {
            layers: [
                { name: "Partner Apps", components: ["JioCoin/BYJU's", "Kutumb/Web3India"] },
                { name: "API Gateway", components: ["Kong/Nginx", "Rate Limiting"] },
                { name: "Application Layer", components: ["Spring Boot API", "Redis Cache"] },
                { name: "Data Storage", components: ["PostgreSQL", "IPFS", "Polygon RPC"] }
            ],
            designPrinciples: ["API-first design", "Stateless APIs", "Multi-tenant", "Rate limiting", "Versioned endpoints"]
        },
        integrationStrategies: [
            {
                partner: "JioCoin Integration",
                description: "Attention tracking and engagement scoring",
                features: ["URL checking", "Engagement recording", "Knowledge scoring"],
                value: "Knowledge-based reward multipliers"
            },
            {
                partner: "Kutumb Communities",
                description: "Content analysis and knowledge connections",
                features: ["Content analysis", "Topic extraction", "Community insights"],
                value: "Automatic knowledge graph building"
            },
            {
                partner: "BYJU's EdTech",
                description: "Adaptive learning paths",
                features: ["Path generation", "Progress tracking", "Batch analytics"],
                value: "Personalized education experiences"
            }
        ],
        successMetrics: {
            technical: [
                { metric: "API Uptime", target: ">99.5%" },
                { metric: "Response Time", target: "<200ms" },
                { metric: "Daily API Calls", target: "10,000+" },
                { metric: "Nodes Created", target: "1,000+" },
                { metric: "Connections Made", target: "5,000+" }
            ],
            business: [
                { metric: "Pilot Customers", target: "3" },
                { metric: "MRR", target: "₹1,50,000" },
                { metric: "Developer Signups", target: "50" },
                { metric: "Documentation Views", target: "500+" },
                { metric: "SDK Downloads", target: "100+" }
            ]
        },
        goNoGoDecision: {
            greenLights: [
                "2 committed pilot customers pre-launch",
                "Technical POC in 2 weeks",
                "₹5 lakh personal runway",
                "Co-founder with blockchain experience",
                "Clear differentiation from competitors"
            ],
            yellowLights: [
                "Only 1 pilot customer",
                "₹3 lakh runway",
                "Part-time commitment initially"
            ],
            redLights: [
                "No customer interest after 50 conversations",
                "Technical complexity beyond team capability",
                "Less than ₹2 lakh runway"
            ]
        },
        partnershipStrategy: {
            immediate: "Atypon, O'Reilly, Indian publishers for quick market entry",
            protocol: "The Graph, OriginTrail, IPFS for technical integration",
            global: "Springer, Elsevier, Academic publishers for scale"
        }
    }
}

const ProjectDetail = () => {
    const { id } = useParams()
    const project = projectData[id]

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

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'P0': return 'bg-red-100 text-red-800'
            case 'P1': return 'bg-orange-100 text-orange-800'
            case 'P2': return 'bg-yellow-100 text-yellow-800'
            case 'P3': return 'bg-green-100 text-green-800'
            default: return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 mr-2">Domain:</span>
                            <span className="text-gray-600">{project.domain}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 mr-2">Timeline:</span>
                            <span className="text-gray-600">{project.timeline}</span>
                        </div>
                        <div className="flex items-center">
                            <span className="font-semibold text-gray-700 mr-2">Market:</span>
                            <span className="text-gray-600">{project.market}</span>
                        </div>
                    </div>
                </div>

                {/* Executive Summary */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                    <p className="text-gray-700 mb-6 text-lg">{project.summary}</p>
                    <ul className="space-y-2">
                        {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Competitive Landscape */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitive Landscape Analysis</h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {project.competitiveLandscape.map((competitor, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{competitor.name}</h3>
                                <p className="text-gray-600 mb-3 italic">{competitor.description}</p>
                                <div className="space-y-2">
                                    <div>
                                        <span className="font-medium text-gray-700">Strengths:</span>
                                        <p className="text-gray-600 text-sm">{competitor.strengths}</p>
                                    </div>
                                    <div>
                                        <span className="font-medium text-gray-700">Gap:</span>
                                        <p className="text-red-600 text-sm">{competitor.gap}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <p className="text-gray-700">
                            <span className="font-semibold">Market Validation:</span> Knowledge graph market growing from $1.06B (2023) to <span className="font-bold text-blue-600">{project.market}</span> at 36.6% CAGR
                        </p>
                    </div>
                </section>

                {/* Bootstrap Burn Analysis */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Bootstrap Burn Analysis</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Monthly Burn Rate</h3>
                            <div className="text-3xl font-bold text-blue-600">{project.burnRate.monthly}</div>
                            <div className="text-sm text-gray-500">({project.burnRate.monthlyUSD})</div>
                        </div>
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">6-Month Runway</h3>
                            <div className="text-3xl font-bold text-green-600">{project.burnRate.runway6Month}</div>
                            <div className="text-sm text-gray-500">({project.burnRate.runway6MonthUSD})</div>
                        </div>
                    </div>

                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Targets</h3>
                        <div className="space-y-3">
                            {project.revenueTargets.map((target, index) => (
                                <div key={index} className="flex items-center">
                                    <span className="font-medium text-blue-600 mr-3">Month {target.month}:</span>
                                    <span className="text-gray-700">{target.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RICE Framework Prioritization */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">RICE Framework Prioritization</h2>
                    <p className="text-gray-600 mb-6">Formula: (Reach × Impact × Confidence) / Effort</p>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Effort</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {project.riceFramework.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.feature}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.reach}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.impact}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.confidence}%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{item.effort}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-center">{item.score}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 90-Day MVP Roadmap */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">90-Day MVP Roadmap</h2>
                    <div className="space-y-8">
                        {project.roadmap.map((phase, index) => (
                            <div key={index} className="relative">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">{index + 1}</span>
                                    </div>
                                    <div className="ml-6 flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                                        <p className="text-sm text-gray-500 mb-3">{phase.effort}</p>

                                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                                            <div className="flex flex-wrap gap-2">
                                                {phase.tasks.map((task, taskIndex) => (
                                                    <span key={taskIndex} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-700">
                            {task}
                          </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <span className="font-medium text-gray-700">Deliverable:</span>
                                            <span className="ml-2 text-green-600 font-medium">{phase.deliverable}</span>
                                        </div>
                                    </div>
                                </div>
                                {index < project.roadmap.length - 1 && (
                                    <div className="absolute left-5 top-12 w-0.5 h-20 bg-gray-300"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technical Architecture */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Architecture</h2>
                    <div className="space-y-4 mb-6">
                        {project.technicalArchitecture.layers.map((layer, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">{layer.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {layer.components.map((component, compIndex) => (
                                        <span key={compIndex} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-700">
                      {component}
                    </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-gray-900 mb-3">Design Principles</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technicalArchitecture.designPrinciples.map((principle, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">
                  {principle}
                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration Strategies */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Strategies</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {project.integrationStrategies.map((strategy, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-blue-600 mb-2">{strategy.partner}</h3>
                                <p className="text-gray-600 mb-4">{strategy.description}</p>
                                <div className="space-y-2 mb-4">
                                    {strategy.features.map((feature, featIndex) => (
                                        <div key={featIndex} className="flex items-center text-sm text-gray-700">
                                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <div className="pt-4 border-t">
                                    <span className="text-sm font-medium text-gray-700">Value: </span>
                                    <span className="text-sm text-gray-600">{strategy.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Success Metrics */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Metrics</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-blue-600 mb-4">Technical KPIs</h3>
                            <div className="space-y-3">
                                {project.successMetrics.technical.map((metric, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-gray-700">{metric.metric}:</span>
                                        <span className="font-medium text-gray-900">{metric.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-green-600 mb-4">Business KPIs</h3>
                            <div className="space-y-3">
                                {project.successMetrics.business.map((metric, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-gray-700">{metric.metric}:</span>
                                        <span className="font-medium text-gray-900">{metric.target}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Go/No-Go Decision Framework */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Go/No-Go Decision Framework</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-green-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                Green Lights
                            </h3>
                            <ul className="space-y-2">
                                {project.goNoGoDecision.greenLights.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700">• {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                                Yellow Lights
                            </h3>
                            <ul className="space-y-2">
                                {project.goNoGoDecision.yellowLights.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700">• {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                Red Lights
                            </h3>
                            <ul className="space-y-2">
                                {project.goNoGoDecision.redLights.map((item, index) => (
                                    <li key={index} className="text-sm text-gray-700">• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Partnership Strategy */}
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Partnership Strategy</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-gray-900">Immediate Opportunities</h3>
                            <p className="text-gray-600">{project.partnershipStrategy.immediate}</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="font-semibold text-gray-900">Protocol Partners</h3>
                            <p className="text-gray-600">{project.partnershipStrategy.protocol}</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="font-semibold text-gray-900">Global Expansion</h3>
                            <p className="text-gray-600">{project.partnershipStrategy.global}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProjectDetail
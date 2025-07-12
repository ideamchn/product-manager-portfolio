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
    },
    "guidemate": {
        id: "guidemate",
        title: "GuideMate",
        subtitle: "MVP Feasibility & Strategic Roadmap",
        description: "Mobile-first Digital Adoption Platform (DAP) for Indian enterprises",
        status: "MVP Development",
        technologies: ["Android SDK", "Spring Boot", "PostgreSQL", "Redis", "MongoDB", "Kotlin"],
        metrics: {
            label: "Monthly Revenue",
            value: "₹30L"
        },
        timeline: "90 Days",
        team: "25 Active Customers",
        domain: "Enterprise Software • Digital Adoption • Mobile-First Training",
        market: "₹37,500 Crore by 2030",
        summary: "Building the first mobile-native Digital Adoption Platform (DAP) designed specifically for Indian enterprises, making software training 10x faster and 80% cheaper.",
        originStory: "Started with a simple question - \"Beta, where can I find my UPI ID in PhonePe?\" This revealed a universal truth: if educated Indians struggle with simple apps, imagine 10 million employees battling complex enterprise software daily. The real crisis? 80% of Indian workforce is mobile-first, but all enterprise training is desktop-first.",
        highlights: [
            "Mobile-first approach differentiating from desktop-centric traditional solutions",
            "Indian enterprise focus vs global one-size-fits-all approaches",
            "Cross-platform by design for seamless integration with any enterprise software",
            "B2B SaaS model with rapid deployment and immediate ROI",
            "Offline-first design addressing India's connectivity challenges"
        ],
        currentTraction: {
            customers: "25 Enterprise Customers across 5 industries",
            revenue: "₹30 Lakhs Monthly Revenue growing 40% MoM",
            users: "15,000+ Active Users with 85% daily usage",
            deployment: "2 Days Deployment Time vs 60 days average"
        },
        burnRate: {
            monthly: "₹8,50,000",
            monthlyUSD: "$10,200 USD equivalent",
            runway18Month: "₹15,30,000",
            runway18MonthUSD: "$18,400 USD equivalent"
        },
        revenueTargets: [
            { month: 6, description: "Break-even (₹8,50,000/month)" },
            { month: 12, description: "600 customers (₹1,80,00,000/month)" },
            { month: 18, description: "1,200 customers (₹3,60,00,000/month)" }
        ],
        competitiveLandscape: [
            {
                name: "Whatfix",
                description: "Global DAP leader with enterprise focus",
                strengths: "Mature platform, enterprise adoption, $90M funding",
                gap: "Limited mobile support, 2-3 month deployment, ₹2,00,000/month starting price"
            },
            {
                name: "Traditional Enterprise Training",
                description: "Classroom and e-learning solutions",
                strengths: "Established market, comprehensive content",
                gap: "3-6 month deployment, no mobile support, minimal ROI tracking"
            },
            {
                name: "WalkMe",
                description: "Enterprise-focused digital adoption platform",
                strengths: "Market leader, advanced analytics, global presence",
                gap: "Desktop-first, expensive, not designed for Indian market needs"
            },
            {
                name: "Apty",
                description: "Employee onboarding and training platform",
                strengths: "Good UI/UX, workflow automation",
                gap: "Limited mobile capabilities, high cost, English-only"
            }
        ],
        riceFramework: [
            {
                feature: "Mobile SDK Core",
                reach: 100,
                impact: 10,
                confidence: 100,
                effort: 1,
                score: 100,
                priority: "P0"
            },
            {
                feature: "Android Accessibility API",
                reach: 100,
                impact: 10,
                confidence: 95,
                effort: 1.2,
                score: 79,
                priority: "P0"
            },
            {
                feature: "Multi-language Support",
                reach: 90,
                impact: 9,
                confidence: 90,
                effort: 1.5,
                score: 54,
                priority: "P0"
            },
            {
                feature: "Offline Mode",
                reach: 80,
                impact: 9,
                confidence: 85,
                effort: 2,
                score: 31,
                priority: "P0"
            },
            {
                feature: "Voice Guidance",
                reach: 70,
                impact: 8,
                confidence: 80,
                effort: 2.5,
                score: 18,
                priority: "P1"
            },
            {
                feature: "AI-Powered Recommendations",
                reach: 60,
                impact: 8,
                confidence: 70,
                effort: 3,
                score: 11,
                priority: "P1"
            },
            {
                feature: "Advanced Analytics",
                reach: 70,
                impact: 7,
                confidence: 60,
                effort: 3,
                score: 10,
                priority: "P2"
            },
            {
                feature: "API Marketplace",
                reach: 50,
                impact: 6,
                confidence: 70,
                effort: 4,
                score: 5,
                priority: "P2"
            },
            {
                feature: "White-label Solution",
                reach: 40,
                impact: 5,
                confidence: 80,
                effort: 5,
                score: 3,
                priority: "P3"
            }
        ],
        roadmap: [
            {
                phase: "Week 1-2: Foundation",
                effort: "80 hours",
                tasks: [
                    "Android SDK setup and architecture",
                    "Core accessibility API integration",
                    "Basic user authentication",
                    "PostgreSQL database configuration",
                    "REST API framework"
                ],
                deliverable: "Functional mobile SDK with basic app detection"
            },
            {
                phase: "Week 3-4: Core Training APIs",
                effort: "80 hours",
                tasks: [
                    "Step-by-step guide creation engine",
                    "Screen overlay and highlighting system",
                    "Voice guidance integration",
                    "Basic workflow recording",
                    "Multi-language text support"
                ],
                deliverable: "Can create and deliver basic training guides"
            },
            {
                phase: "Week 5-6: Enterprise Integration",
                effort: "80 hours",
                tasks: [
                    "ERP system connectors (Tally, SAP)",
                    "CRM platform integration (Salesforce, Zoho)",
                    "Custom app integration framework",
                    "Progress tracking and analytics",
                    "Admin dashboard"
                ],
                deliverable: "Functional enterprise-ready platform"
            },
            {
                phase: "Week 7-8: Advanced Features",
                effort: "60 hours",
                tasks: [
                    "Offline mode implementation",
                    "AI-powered task suggestions",
                    "Performance optimization",
                    "Security and compliance features",
                    "Error handling and recovery"
                ],
                deliverable: "Production-ready core features"
            },
            {
                phase: "Week 9-10: Pilot Deployment",
                effort: "60 hours",
                tasks: [
                    "First customer onboarding",
                    "Custom feature development",
                    "Performance monitoring",
                    "User feedback integration",
                    "Bug fixes and optimization"
                ],
                deliverable: "Live pilot with 3 enterprise customers"
            },
            {
                phase: "Week 11-12: Scale & Polish",
                effort: "60 hours",
                tasks: [
                    "Analytics dashboard enhancement",
                    "Monitoring and alerting system",
                    "CI/CD pipeline setup",
                    "Security audit and compliance",
                    "Documentation and training materials"
                ],
                deliverable: "Scalable, production-ready MVP"
            }
        ],
        technicalArchitecture: {
            layers: [
                { name: "Enterprise Apps Layer", components: ["Tally", "SAP", "Salesforce", "Zoho", "Custom Apps"] },
                { name: "API Gateway", components: ["Kong/Nginx", "Rate Limiting", "Authentication"] },
                { name: "Application Layer", components: ["Spring Boot API", "Redis Cache", "Mobile SDK"] },
                { name: "Data Storage", components: ["PostgreSQL", "MongoDB", "File Storage"] }
            ],
            designPrinciples: [
                "Mobile-first design with Android SDK priority",
                "Offline-first architecture for poor connectivity",
                "Multi-tenant SaaS with enterprise security",
                "API-first approach for seamless integrations",
                "Microservices architecture for scalability"
            ]
        },
        integrationStrategies: [
            {
                partner: "Tally Integration",
                description: "ERP and accounting software guidance",
                features: [
                    "Workflow automation and step-by-step guidance",
                    "Error prevention and validation",
                    "GST compliance training",
                    "Financial reporting assistance"
                ],
                value: "70% reduction in training time, 95% accuracy improvement"
            },
            {
                partner: "Salesforce Integration",
                description: "CRM adoption and field sales enablement",
                features: [
                    "Mobile-first sales process training",
                    "Lead management workflow guidance",
                    "Pipeline management automation",
                    "Performance analytics integration"
                ],
                value: "3x faster adoption, 60% increase in CRM usage"
            },
            {
                partner: "Custom Enterprise Apps",
                description: "Proprietary software training and support",
                features: [
                    "Automated guide generation",
                    "User behavior analytics",
                    "Performance optimization",
                    "Custom workflow creation"
                ],
                value: "2-day deployment vs 2-3 month traditional training"
            }
        ],
        successMetrics: {
            technical: [
                { metric: "Platform Uptime", target: "99.9%" },
                { metric: "Response Time", target: "100ms" },
                { metric: "Daily Active Users", target: "15,000+" },
                { metric: "Guides Created", target: "5,000+" },
                { metric: "Task Completion Rate", target: "87%" }
            ],
            business: [
                { metric: "Enterprise Customers", target: "25 (Current), 3,300 (Year 5)" },
                { metric: "Monthly Revenue", target: "₹30L (Current), ₹16.5 Cr (Year 5)" },
                { metric: "Customer Acquisition Cost", target: "₹75,000" },
                { metric: "Customer Lifetime Value", target: "₹30 Lakhs" },
                { metric: "Monthly Churn Rate", target: "2%" }
            ],
            customerSuccess: [
                { metric: "Training Time Reduction", target: "70%" },
                { metric: "Task Success Rate", target: "87%" },
                { metric: "Customer ROI", target: "30 days payback" },
                { metric: "User Satisfaction", target: "4.8/5 NPS Score" },
                { metric: "Deployment Success", target: "100% (vs 70% industry average)" }
            ]
        },
        goNoGoDecision: {
            greenLights: [
                "3+ committed pilot customers pre-launch confirmed",
                "Technical POC completed in 2 weeks with core features",
                "₹10 Cr funding secured for 18-month runway",
                "Experienced founder with 17+ years product experience",
                "Clear market differentiation as only mobile-first DAP for Indian enterprises",
                "Proven traction with 25 customers and 40% MoM growth"
            ],
            yellowLights: [
                "Only 1-2 pilot customers committed",
                "₹5 Cr funding with 12-month runway",
                "Technical complexity requiring extended development",
                "Competitive pressure from global players entering Indian market"
            ],
            redLights: [
                "No customer interest after 100+ enterprise conversations",
                "Technical barriers beyond team capability",
                "Less than ₹3 Cr funding available",
                "Regulatory compliance issues in target industries",
                "Key talent acquisition challenges"
            ]
        },
        partnershipStrategy: {
            immediate: "TCS, Infosys, Wipro subsidiaries for enterprise reach\nRegional IT consultants for SMB market penetration\nTraining companies for channel partnerships",
            technology: "Tally Solutions for accounting software integration\nZoho for CRM and business app ecosystem\nMicrosoft for Office 365 and Teams integration",
            industry: "Manufacturing associations for ERP adoption\nHealthcare technology providers for compliance training\nBFSI technology vendors for regulatory training",
            global: "Southeast Asian system integrators\nMiddle Eastern enterprise software distributors\nAfrican mobile technology partners"
        },
        financialProjections: [
            { year: "Current", customers: 25, arpu: "₹30k", revenue: "₹3.6 Cr", growth: "40% MoM" },
            { year: "Year 1", customers: 200, arpu: "₹30k", revenue: "₹10 Cr", growth: "-" },
            { year: "Year 2", customers: 600, arpu: "₹35k", revenue: "₹30 Cr", growth: "3x" },
            { year: "Year 3", customers: 1200, arpu: "₹40k", revenue: "₹65 Cr", growth: "2.2x" },
            { year: "Year 4", customers: 2100, arpu: "₹42k", revenue: "₹125 Cr", growth: "1.9x" },
            { year: "Year 5", customers: 3300, arpu: "₹45k", revenue: "₹200 Cr", growth: "1.6x" }
        ],
        investmentAsk: {
            amount: "₹10 Crores Pre-Seed Investment",
            valuation: "₹50 Cr (20% equity)",
            timeline: "Transform enterprise training in 90 days",
            vision: "Making 10 million Indian employees productive from Day 1",
            useOfFunds: [
                { category: "Product Development", percentage: "40%", amount: "₹4 Cr", description: "Mobile SDK, core platform, 50+ app integrations" },
                { category: "Sales & Marketing", percentage: "35%", amount: "₹3.5 Cr", description: "Enterprise sales team, channel partnerships" },
                { category: "Customer Success", percentage: "15%", amount: "₹1.5 Cr", description: "Ensure 100% deployment success" },
                { category: "Operations", percentage: "10%", amount: "₹1 Cr", description: "18-month operational runway" }
            ],
            returns: [
                { scenario: "Conservative Exit (3x Revenue)", valuation: "₹600 Cr", investorReturn: "₹120 Cr", multiple: "12x" },
                { scenario: "Base Case Exit (4x Revenue)", valuation: "₹800 Cr", investorReturn: "₹160 Cr", multiple: "16x" },
                { scenario: "Aggressive Exit (5x Revenue)", valuation: "₹1,000 Cr", investorReturn: "₹200 Cr", multiple: "20x" }
            ]
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

                // Add these sections to ProjectDetail.jsx after the Partnership Strategy section
                // Only render these for the GuideMate project:

                {project.id === "guidemate" && (
                    <>
                        {/* Origin Story */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Origin Story</h2>
                            <p className="text-gray-700 text-lg italic">{project.originStory}</p>
                        </section>

                        {/* Current Traction */}
                        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Traction</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-4">Business Metrics</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{project.currentTraction.customers}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{project.currentTraction.revenue}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Product Metrics</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{project.currentTraction.users}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{project.currentTraction.deployment}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Customer Success Metrics */}
                        {project.successMetrics.customerSuccess && (
                            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Success Metrics</h2>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {project.successMetrics.customerSuccess.map((metric, index) => (
                                        <div key={index} className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-600 mb-2">{metric.target}</div>
                                            <div className="text-sm text-gray-700">{metric.metric}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Financial Projections */}
                        {project.financialProjections && (
                            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Year Financial Projections</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full border border-gray-200">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Customers</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">ARPU</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Revenue</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Growth</th>
                                        </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                        {project.financialProjections.map((projection, index) => (
                                            <tr key={index} className={index === 0 ? "bg-blue-50" : "hover:bg-gray-50"}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{projection.year}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{projection.customers}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{projection.arpu}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-center">{projection.revenue}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium text-center">{projection.growth}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        )}

                        {/* Investment Ask */}
                        {project.investmentAsk && (
                            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-md p-8 mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>

                                <div className="bg-white rounded-lg p-6 mb-6">
                                    <h3 className="text-3xl font-bold text-indigo-600 mb-2">{project.investmentAsk.amount}</h3>
                                    <p className="text-lg text-gray-700 mb-2">{project.investmentAsk.valuation}</p>
                                    <p className="text-gray-600">{project.investmentAsk.timeline}</p>
                                    <p className="text-lg font-medium text-purple-600 mt-4">{project.investmentAsk.vision}</p>
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

                                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                                    <p className="text-gray-700 font-medium">Why Invest Now:</p>
                                    <ul className="mt-2 space-y-1">
                                        <li className="flex items-center text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">✅</span>
                                            Category Creator: First mobile-native DAP for Indian enterprises
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">✅</span>
                                            Proven Traction: 25 customers, ₹30L MRR, 40% MoM growth
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">✅</span>
                                            Exceptional Unit Economics: 40:1 LTV:CAC, 2.5 month payback
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">✅</span>
                                            Massive Market: ₹37,500 Cr addressable market
                                        </li>
                                        <li className="flex items-center text-sm text-gray-700">
                                            <span className="text-green-500 mr-2">✅</span>
                                            Experienced Founder: 17+ years product leadership at Fiserv, Sigma Computing
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        )}
                    </>
                )}




            </div>
        </div>
    )
}

export default ProjectDetail
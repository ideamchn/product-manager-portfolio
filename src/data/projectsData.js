// Projects data as a JavaScript module
const projects = [
    {
        "id": "kg-nft-api",
        "title": "Knowledge Graph NFT API",
        "description": "API-first platform that enables personal knowledge graphs with NFT ownership model, targeting publishers and EdTech partners.",
        "status": "MVP Development",
        "technologies": [
            "Java 17",
            "Spring Boot",
            "PostgreSQL",
            "Redis",
            "Polygon",
            "IPFS"
        ],
        "metrics": {
            "label": "Monthly Burn",
            "value": "₹55k"
        },
        "timeline": "90 Days",
        "team": "2 Core",
        "domain": "Web3 • EdTech • Knowledge Management • Blockchain",
        "market": "$6.94B by 2030",
        "summary": "Positioned as 'Stripe for Knowledge NFTs', providing API-first personal knowledge graphs with blockchain-backed ownership.",
        "originStory": "Born from frustration watching YouTube tutorials repeatedly to remember complex concepts. We realized knowledge should be owned, not rented. If you spend 100 hours learning something, why shouldn't you own that knowledge graph? Traditional learning platforms delete your progress when you stop paying. We're building knowledge as a permanent asset.",
        "currentTraction": {
            "partnerships": "3 EdTech platforms committed to pilot",
            "developers": "150+ developers on waitlist",
            "content": "10,000+ knowledge nodes ready for migration",
            "funding": "₹50L angel round closed"
        },
        "burnRate": {
            "monthly": "₹4,50,000",
            "monthlyUSD": "$5,400 USD equivalent",
            "runway18Month": "₹81,00,000",
            "runway18MonthUSD": "$97,200 USD equivalent"
        },
        "revenueTargets": [
            { "month": 6, "description": "First revenue (₹5,00,000/month)" },
            { "month": 12, "description": "Break-even (₹45,00,000/month)" },
            { "month": 18, "description": "Profitability (₹1,20,00,000/month)" }
        ],
        "competitiveLandscape": [
            {
                "name": "OriginTrail (TRAC)",
                "description": "Enterprise-focused decentralized knowledge graph",
                "strengths": "Strong blockchain infrastructure, enterprise adoption",
                "gap": "Not designed for personal knowledge management, complex for individual users"
            },
            {
                "name": "Golden Protocol",
                "description": "Web3 Wikipedia for public knowledge",
                "strengths": "Community-driven, decentralized verification",
                "gap": "Public knowledge only, no personal learning paths or ownership model"
            },
            {
                "name": "The Graph Protocol",
                "description": "Blockchain data indexing service",
                "strengths": "Robust indexing infrastructure, developer tools",
                "gap": "Blockchain data only, not general knowledge graphs"
            },
            {
                "name": "Mirror.xyz",
                "description": "Web3 publishing platform",
                "strengths": "NFT-based content ownership, creator economy",
                "gap": "Publishing focused, no knowledge graph structure or learning paths"
            }
        ],
        "riceFramework": [
            {
                "feature": "Basic Node Creation API",
                "reach": 100,
                "impact": 10,
                "confidence": 100,
                "effort": 1,
                "score": 100,
                "priority": "P0"
            },
            {
                "feature": "IPFS Integration",
                "reach": 100,
                "impact": 9,
                "confidence": 90,
                "effort": 2,
                "score": 40.5,
                "priority": "P0"
            },
            {
                "feature": "Graph Query Engine",
                "reach": 90,
                "impact": 9,
                "confidence": 85,
                "effort": 3,
                "score": 25.5,
                "priority": "P0"
            },
            {
                "feature": "NFT Minting Service",
                "reach": 80,
                "impact": 8,
                "confidence": 80,
                "effort": 2.5,
                "score": 20.5,
                "priority": "P0"
            },
            {
                "feature": "Knowledge Marketplace",
                "reach": 70,
                "impact": 9,
                "confidence": 75,
                "effort": 4,
                "score": 11.8,
                "priority": "P1"
            },
            {
                "feature": "AI-Powered Recommendations",
                "reach": 60,
                "impact": 7,
                "confidence": 70,
                "effort": 3.5,
                "score": 8.4,
                "priority": "P1"
            },
            {
                "feature": "Advanced Analytics Dashboard",
                "reach": 50,
                "impact": 6,
                "confidence": 80,
                "effort": 3,
                "score": 8.0,
                "priority": "P2"
            },
            {
                "feature": "Social Learning Features",
                "reach": 40,
                "impact": 7,
                "confidence": 60,
                "effort": 4,
                "score": 4.2,
                "priority": "P2"
            },
            {
                "feature": "Mobile SDK",
                "reach": 30,
                "impact": 6,
                "confidence": 70,
                "effort": 5,
                "score": 2.5,
                "priority": "P3"
            }
        ],
        "roadmap": [
            {
                "phase": "Week 1-2: Foundation",
                "effort": "80 hours",
                "tasks": [
                    "Setup Spring Boot microservices architecture",
                    "PostgreSQL database schema design",
                    "Wallet authentication (MetaMask integration)",
                    "Basic REST API framework",
                    "Redis caching layer setup"
                ],
                "deliverable": "Auth-protected API with wallet integration"
            },
            {
                "phase": "Week 3-4: Core Graph APIs",
                "effort": "80 hours",
                "tasks": [
                    "Node creation and management APIs",
                    "Graph relationship modeling",
                    "Knowledge graph query engine",
                    "Basic CRUD operations for knowledge nodes",
                    "GraphQL API implementation"
                ],
                "deliverable": "Functional knowledge graph creation and querying"
            },
            {
                "phase": "Week 5-6: IPFS Integration",
                "effort": "80 hours",
                "tasks": [
                    "IPFS node setup and configuration",
                    "Content addressing and storage",
                    "Decentralized content retrieval",
                    "Content versioning and history",
                    "Pinning service integration"
                ],
                "deliverable": "Decentralized content storage system"
            },
            {
                "phase": "Week 7-8: NFT Minting Service",
                "effort": "80 hours",
                "tasks": [
                    "Polygon blockchain integration",
                    "Smart contract deployment (ERC-1155)",
                    "NFT metadata standards",
                    "Ownership verification system",
                    "Gas optimization strategies"
                ],
                "deliverable": "Working NFT minting for knowledge graphs"
            },
            {
                "phase": "Week 9-10: API Documentation & Testing",
                "effort": "60 hours",
                "tasks": [
                    "Swagger/OpenAPI documentation",
                    "Integration testing suite",
                    "Performance optimization",
                    "Security audit and fixes",
                    "Rate limiting implementation"
                ],
                "deliverable": "Production-ready API with documentation"
            },
            {
                "phase": "Week 11-12: Partner Integration",
                "effort": "60 hours",
                "tasks": [
                    "EdTech platform integrations",
                    "Publisher API connectors",
                    "Usage analytics and monitoring",
                    "Customer onboarding flow",
                    "Developer portal launch"
                ],
                "deliverable": "Live integrations with 3 pilot partners"
            }
        ],
        "technicalArchitecture": {
            "layers": [
                { "name": "Client Layer", "components": ["Web App", "Mobile SDK", "Developer Portal", "API Explorer"] },
                { "name": "API Gateway", "components": ["Kong Gateway", "Rate Limiting", "JWT Auth", "WebSocket Support"] },
                { "name": "Application Layer", "components": ["Spring Boot APIs", "GraphQL Server", "Redis Cache", "Event Bus"] },
                { "name": "Blockchain Layer", "components": ["Polygon Network", "Smart Contracts", "IPFS Storage", "The Graph Protocol"] },
                { "name": "Data Layer", "components": ["PostgreSQL", "Neo4j Graph DB", "Elasticsearch", "S3 Backup"] }
            ],
            "designPrinciples": [
                "API-first design for maximum developer adoption",
                "Decentralized storage with centralized indexing for performance",
                "Multi-chain ready architecture for future expansion",
                "Event-driven architecture for real-time updates",
                "GraphQL for flexible data querying"
            ]
        },
        "integrationStrategies": [
            {
                "partner": "Coursera Integration",
                "description": "Course completion certificates as knowledge NFTs",
                "features": [
                    "Automated knowledge graph generation from courses",
                    "Learning path visualization",
                    "Skill verification on blockchain",
                    "Portable credentials across platforms"
                ],
                "value": "100% ownership of completed courses, lifetime access to knowledge"
            },
            {
                "partner": "O'Reilly Media Integration",
                "description": "Technical books and tutorials as structured knowledge",
                "features": [
                    "Chapter-wise knowledge nodes",
                    "Code snippet preservation",
                    "Interactive knowledge maps",
                    "Community annotations"
                ],
                "value": "Transform reading into permanent, queryable knowledge assets"
            },
            {
                "partner": "YouTube Education Channels",
                "description": "Video learning converted to knowledge graphs",
                "features": [
                    "Automatic transcript processing",
                    "Concept extraction and linking",
                    "Visual knowledge representation",
                    "Creator revenue sharing"
                ],
                "value": "Never lose learning from watched videos, creators earn from knowledge NFTs"
            }
        ],
        "goNoGoDecision": {
            "greenLights": [
                "3+ EdTech platforms committed to integration",
                "Working prototype with 1000+ nodes created",
                "₹1 Cr seed funding secured",
                "Legal clarity on NFT ownership in target markets",
                "Core team with blockchain and education expertise",
                "150+ developers on beta waitlist"
            ],
            "yellowLights": [
                "Only 1-2 platform partnerships confirmed",
                "₹50L funding with 12-month runway",
                "Regulatory uncertainty in some markets",
                "Technical complexity in cross-chain compatibility"
            ],
            "redLights": [
                "No platform interest after pitching to 20+ companies",
                "Major security vulnerabilities in smart contracts",
                "Less than ₹30L funding available",
                "Regulatory ban on educational NFTs",
                "Core technical team departure"
            ]
        },
        "partnershipStrategy": {
            "immediate": "Udemy, Coursera, and Khan Academy for course integrations\nAnkiDroid and RemNote for spaced repetition\nNotion and Obsidian for knowledge management",
            "technology": "Polygon for low-cost NFT minting\nIPFS and Filecoin for decentralized storage\nThe Graph for blockchain indexing\nChainlink for oracle services",
            "content": "O'Reilly, Packt, and Manning for technical content\nSpringer and Elsevier for academic content\nMedium and Substack for creator content",
            "ecosystem": "MetaMask and WalletConnect for authentication\nOpenSea and Rarible for NFT marketplace\nLens Protocol for social features\nGitcoin for grants and funding"
        },
        "successMetrics": {
            "technical": [
                { "metric": "API Uptime", "target": "99.9%" },
                { "metric": "Response Time", "target": "200ms" },
                { "metric": "Knowledge Nodes Created", "target": "1M+" },
                { "metric": "NFTs Minted", "target": "100K+" },
                { "metric": "API Calls/Month", "target": "10M+" }
            ],
            "business": [
                { "metric": "Developer Adoption", "target": "1,000 active developers" },
                { "metric": "Monthly Revenue", "target": "₹1.2 Cr by Month 18" },
                { "metric": "Platform Integrations", "target": "25 major platforms" },
                { "metric": "Transaction Volume", "target": "₹50 Cr annually" },
                { "metric": "API Revenue Share", "target": "2.5% per transaction" }
            ],
            "ecosystem": [
                { "metric": "Knowledge NFTs Created", "target": "100,000" },
                { "metric": "Active Learners", "target": "50,000" },
                { "metric": "Knowledge Marketplace GMV", "target": "₹10 Cr" },
                { "metric": "Creator Earnings", "target": "₹5 Cr distributed" },
                { "metric": "Cross-platform Transfers", "target": "25,000/month" }
            ]
        },
        "financialProjections": [
            { "year": "Year 0", "developers": 10, "revenue": "₹0", "transactions": "0", "burn": "₹54L" },
            { "year": "Year 1", "developers": 500, "revenue": "₹3 Cr", "transactions": "100K", "burn": "₹48L" },
            { "year": "Year 2", "developers": 2000, "revenue": "₹15 Cr", "transactions": "1M", "burn": "Profitable" },
            { "year": "Year 3", "developers": 5000, "revenue": "₹45 Cr", "transactions": "5M", "burn": "₹25 Cr profit" },
            { "year": "Year 4", "developers": 10000, "revenue": "₹120 Cr", "transactions": "15M", "burn": "₹75 Cr profit" },
            { "year": "Year 5", "developers": 20000, "revenue": "₹300 Cr", "transactions": "50M", "burn": "₹200 Cr profit" }
        ],
        "investmentAsk": {
            "amount": "₹5 Crores Seed Investment",
            "valuation": "₹25 Cr (20% equity)",
            "timeline": "Build the knowledge ownership layer of Web3",
            "vision": "Making knowledge a permanent, tradeable asset for 1 billion learners",
            "useOfFunds": [
                { "category": "Product Development", "percentage": "45%", "amount": "₹2.25 Cr", "description": "Core API, smart contracts, developer tools" },
                { "category": "Developer Relations", "percentage": "25%", "amount": "₹1.25 Cr", "description": "Documentation, SDKs, hackathons, community" },
                { "category": "Partnerships", "percentage": "20%", "amount": "₹1 Cr", "description": "EdTech integrations, content partnerships" },
                { "category": "Operations", "percentage": "10%", "amount": "₹50L", "description": "18-month runway, legal, compliance" }
            ],
            "returns": [
                { "scenario": "Conservative Exit (10x Revenue)", "valuation": "₹3,000 Cr", "investorReturn": "₹600 Cr", "multiple": "120x" },
                { "scenario": "Base Case Exit (15x Revenue)", "valuation": "₹4,500 Cr", "investorReturn": "₹900 Cr", "multiple": "180x" },
                { "scenario": "Aggressive Exit (20x Revenue)", "valuation": "₹6,000 Cr", "investorReturn": "₹1,200 Cr", "multiple": "240x" }
            ]
        },
        "sections": [
            {
                "title": "Competitive Landscape Analysis",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Existing Players & What They're Missing",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "OriginTrail (TRAC)",
                                "content": "Enterprise-focused decentralized knowledge graph for supply chains. Gap: Not designed for personal knowledge management."
                            },
                            {
                                "type": "bullet",
                                "title": "Golden Protocol",
                                "content": "Web3 Wikipedia. Gap: Public knowledge only, not personal learning paths."
                            },
                            {
                                "type": "bullet",
                                "title": "The Graph Protocol",
                                "content": "Blockchain data indexing. Gap: Blockchain data only, not general knowledge."
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "content": "Knowledge graph market projected to grow from $1.06B (2023) to $6.94B (2030) at 36.6% CAGR."
                    }
                ]
            },
            {
                "title": "RICE Framework Analysis",
                "content": [
                    {
                        "type": "table",
                        "component": "MetricsTable",
                        "data": [
                            {
                                "feature": "Basic Node Creation API",
                                "reach": "100%",
                                "impact": "10",
                                "confidence": "100%",
                                "effort": "1",
                                "riceScore": "100",
                                "priority": "P0"
                            },
                            {
                                "feature": "IPFS Integration",
                                "reach": "100%",
                                "impact": "9",
                                "confidence": "90%",
                                "effort": "2",
                                "riceScore": "40.5",
                                "priority": "P0"
                            },
                            {
                                "feature": "Graph Query Engine",
                                "reach": "90%",
                                "impact": "9",
                                "confidence": "85%",
                                "effort": "3",
                                "riceScore": "25.5",
                                "priority": "P0"
                            },
                            {
                                "feature": "NFT Minting Service",
                                "reach": "80%",
                                "impact": "8",
                                "confidence": "80%",
                                "effort": "2.5",
                                "riceScore": "20.5",
                                "priority": "P0"
                            },
                            {
                                "feature": "Knowledge Marketplace",
                                "reach": "70%",
                                "impact": "9",
                                "confidence": "75%",
                                "effort": "4",
                                "riceScore": "11.8",
                                "priority": "P1"
                            },
                            {
                                "feature": "AI-Powered Recommendations",
                                "reach": "60%",
                                "impact": "7",
                                "confidence": "70%",
                                "effort": "3.5",
                                "riceScore": "8.4",
                                "priority": "P1"
                            },
                            {
                                "feature": "Advanced Analytics Dashboard",
                                "reach": "50%",
                                "impact": "6",
                                "confidence": "80%",
                                "effort": "3",
                                "riceScore": "8.0",
                                "priority": "P2"
                            },
                            {
                                "feature": "Social Learning Features",
                                "reach": "40%",
                                "impact": "7",
                                "confidence": "60%",
                                "effort": "4",
                                "riceScore": "4.2",
                                "priority": "P2"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "90-Day MVP Roadmap",
                "content": [
                    {
                        "type": "timeline",
                        "component": "RoadmapTimeline",
                        "data": [
                            {
                                "title": "Foundation",
                                "duration": "Week 1-2",
                                "effort": "80 hours",
                                "tasks": [
                                    "Setup Spring Boot microservices architecture",
                                    "PostgreSQL database schema design",
                                    "Wallet authentication (MetaMask integration)",
                                    "Basic REST API framework",
                                    "Redis caching layer setup"
                                ],
                                "deliverable": "Auth-protected API with wallet integration"
                            },
                            {
                                "title": "Core Graph APIs",
                                "duration": "Week 3-4",
                                "effort": "80 hours",
                                "tasks": [
                                    "Node creation and management APIs",
                                    "Graph relationship modeling",
                                    "Knowledge graph query engine",
                                    "Basic CRUD operations for knowledge nodes",
                                    "GraphQL API implementation"
                                ],
                                "deliverable": "Functional knowledge graph creation and querying"
                            },
                            {
                                "title": "IPFS Integration",
                                "duration": "Week 5-6",
                                "effort": "80 hours",
                                "tasks": [
                                    "IPFS node setup and configuration",
                                    "Content addressing and storage",
                                    "Decentralized content retrieval",
                                    "Content versioning and history",
                                    "Pinning service integration"
                                ],
                                "deliverable": "Decentralized content storage system"
                            },
                            {
                                "title": "NFT Minting Service",
                                "duration": "Week 7-8",
                                "effort": "80 hours",
                                "tasks": [
                                    "Polygon blockchain integration",
                                    "Smart contract deployment (ERC-1155)",
                                    "NFT metadata standards",
                                    "Ownership verification system",
                                    "Gas optimization strategies"
                                ],
                                "deliverable": "Working NFT minting for knowledge graphs"
                            },
                            {
                                "title": "API Documentation & Testing",
                                "duration": "Week 9-10",
                                "effort": "60 hours",
                                "tasks": [
                                    "Swagger/OpenAPI documentation",
                                    "Integration testing suite",
                                    "Performance optimization",
                                    "Security audit and fixes",
                                    "Rate limiting implementation"
                                ],
                                "deliverable": "Production-ready API with documentation"
                            },
                            {
                                "title": "Partner Integration",
                                "duration": "Week 11-12",
                                "effort": "60 hours",
                                "tasks": [
                                    "EdTech platform integrations",
                                    "Publisher API connectors",
                                    "Usage analytics and monitoring",
                                    "Customer onboarding flow",
                                    "Developer portal launch"
                                ],
                                "deliverable": "Live integrations with 3 pilot partners"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Technical Architecture",
                "content": [
                    {
                        "type": "text",
                        "content": "API-first architecture designed for scalability and decentralization, enabling seamless integration with existing EdTech and publishing platforms."
                    },
                    {
                        "type": "subsection",
                        "title": "Core Components",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "API Gateway Layer",
                                "content": "Spring Boot microservices with JWT authentication and rate limiting for secure API access"
                            },
                            {
                                "type": "bullet",
                                "title": "Knowledge Graph Engine",
                                "content": "PostgreSQL with graph extensions for efficient knowledge relationship storage and querying"
                            },
                            {
                                "type": "bullet",
                                "title": "Decentralized Storage",
                                "content": "IPFS integration for content addressing and distributed storage of knowledge assets"
                            },
                            {
                                "type": "bullet",
                                "title": "Blockchain Layer",
                                "content": "Polygon integration for NFT minting, ownership verification, and transaction processing"
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Integration Strategy",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Publisher APIs",
                                "content": "RESTful APIs for content ingestion, knowledge graph generation, and revenue sharing"
                            },
                            {
                                "type": "bullet",
                                "title": "EdTech Platforms",
                                "content": "Learning Management System integrations for personalized learning path creation"
                            },
                            {
                                "type": "bullet",
                                "title": "Developer SDK",
                                "content": "JavaScript and Python SDKs for rapid integration with existing educational tools"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Burn Rate Analysis",
                "content": [
                    {
                        "type": "text",
                        "content": "Current monthly burn rate of ₹4,50,000 ($5,400 USD) provides 18-month runway with ₹81,00,000 initial funding requirement."
                    },
                    {
                        "type": "subsection",
                        "title": "Revenue Model",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "API Transaction Fees",
                                "content": "2.5% fee on all NFT minting and trading transactions through the platform"
                            },
                            {
                                "type": "bullet",
                                "title": "Developer Subscriptions",
                                "content": "Tiered pricing from free (1K API calls) to enterprise (unlimited calls + SLA)"
                            },
                            {
                                "type": "bullet",
                                "title": "Knowledge Marketplace",
                                "content": "10% commission on peer-to-peer knowledge graph sales and licensing"
                            },
                            {
                                "type": "bullet",
                                "title": "Enterprise Licensing",
                                "content": "White-label solutions for universities and corporate training programs"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Integration Strategies",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Phase 1: EdTech Platforms",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Coursera & Udemy",
                                "content": "Convert course completions into verifiable knowledge NFTs with full course structure preserved"
                            },
                            {
                                "type": "bullet",
                                "title": "Khan Academy",
                                "content": "Free education transformed into owned knowledge assets for underserved communities"
                            },
                            {
                                "type": "bullet",
                                "title": "Duolingo",
                                "content": "Language learning progress as tradeable skill NFTs with proficiency levels"
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Phase 2: Content Publishers",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "O'Reilly & Packt",
                                "content": "Technical books converted to interactive knowledge graphs with code snippets"
                            },
                            {
                                "type": "bullet",
                                "title": "Academic Publishers",
                                "content": "Research papers and textbooks as citable, versioned knowledge assets"
                            },
                            {
                                "type": "bullet",
                                "title": "Creator Platforms",
                                "content": "Medium, Substack content transformed into permanent knowledge collections"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Go/No-Go Decision Framework",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Green Lights (Proceed)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "3+ EdTech platforms committed to integration",
                                    "Working prototype with 1000+ nodes created",
                                    "₹1 Cr seed funding secured",
                                    "Legal clarity on NFT ownership in target markets",
                                    "Core team with blockchain and education expertise",
                                    "150+ developers on beta waitlist"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Yellow Lights (Caution)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "Only 1-2 platform partnerships confirmed",
                                    "₹50L funding with 12-month runway",
                                    "Regulatory uncertainty in some markets",
                                    "Technical complexity in cross-chain compatibility"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Red Lights (Stop)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "No platform interest after pitching to 20+ companies",
                                    "Major security vulnerabilities in smart contracts",
                                    "Less than ₹30L funding available",
                                    "Regulatory ban on educational NFTs",
                                    "Core technical team departure"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Partnership Strategy",
                "content": [
                    {
                        "type": "subsection",
                        "title": "EdTech Partnerships",
                        "content": [
                            {
                                "type": "text",
                                "content": "Udemy, Coursera, Khan Academy for course integrations. AnkiDroid and RemNote for spaced repetition. Notion and Obsidian for knowledge management tools."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Blockchain Ecosystem",
                        "content": [
                            {
                                "type": "text",
                                "content": "Polygon for low-cost NFT minting. IPFS and Filecoin for decentralized storage. The Graph for blockchain indexing. Chainlink for oracle services."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Content Partners",
                        "content": [
                            {
                                "type": "text",
                                "content": "O'Reilly, Packt, Manning for technical content. Springer and Elsevier for academic content. Medium and Substack for creator content."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Web3 Infrastructure",
                        "content": [
                            {
                                "type": "text",
                                "content": "MetaMask and WalletConnect for authentication. OpenSea and Rarible for NFT marketplace. Lens Protocol for social features. Gitcoin for grants and funding."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "guidemate",
        "title": "GuideMate",
        "description": "Mobile-first Digital Adoption Platform (DAP) for Indian enterprises, making software training 10x faster and 80% cheaper through in-app guidance.",
        "status": "Launched",
        "technologies": ["Android SDK", "Spring Boot", "PostgreSQL", "Redis", "MongoDB", "Kotlin"],
        "metrics": {
            "label": "Monthly Revenue",
            "value": "₹30L"
        },
        "timeline": "90 Days",
        "team": "25 Active Customers",
        "summary": "Building the \"Stripe for Enterprise Training\" - the first mobile-native Digital Adoption Platform (DAP) designed specifically for Indian enterprises, making software training 10x faster and 80% cheaper.",
        "originStory": "Started with a simple question - \"Beta, where can I find my UPI ID in PhonePe?\" This revealed a universal truth: if educated Indians struggle with simple apps, imagine 10 million employees battling complex enterprise software daily. The real crisis? 80% of Indian workforce is mobile-first, but all enterprise training is desktop-first.",
        "currentTraction": {
            "customers": "25 Enterprise Customers across 5 industries",
            "revenue": "₹30 Lakhs Monthly Revenue growing 40% MoM",
            "users": "15,000+ Active Users with 85% daily usage",
            "deployment": "2 Days Deployment Time vs 60 days average"
        },
        "burnRate": {
            "monthly": "₹8,50,000",
            "monthlyUSD": "$10,200 USD equivalent",
            "runway18Month": "₹15,30,000",
            "runway18MonthUSD": "$18,400 USD equivalent"
        },
        "revenueTargets": [
            { "month": 6, "description": "Break-even (₹8,50,000/month)" },
            { "month": 12, "description": "600 customers (₹1,80,00,000/month)" },
            { "month": 18, "description": "1,200 customers (₹3,60,00,000/month)" }
        ],
        "integrationStrategies": [
            {
                "partner": "Tally Integration",
                "description": "ERP and accounting software guidance",
                "features": [
                    "Workflow automation and step-by-step guidance",
                    "Error prevention and validation",
                    "GST compliance training",
                    "Financial reporting assistance"
                ],
                "value": "70% reduction in training time, 95% accuracy improvement"
            },
            {
                "partner": "Salesforce Integration",
                "description": "CRM adoption and field sales enablement",
                "features": [
                    "Mobile-first sales process training",
                    "Lead management workflow guidance",
                    "Pipeline management automation",
                    "Performance analytics integration"
                ],
                "value": "3x faster adoption, 60% increase in CRM usage"
            },
            {
                "partner": "Custom Enterprise Apps",
                "description": "Proprietary software training and support",
                "features": [
                    "Automated guide generation",
                    "User behavior analytics",
                    "Performance optimization",
                    "Custom workflow creation"
                ],
                "value": "2-day deployment vs 2-3 month traditional training"
            }
        ],
        "goNoGoDecision": {
            "greenLights": [
                "3+ committed pilot customers pre-launch confirmed",
                "Technical POC completed in 2 weeks with core features",
                "₹10 Cr funding secured for 18-month runway",
                "Experienced founder with 17+ years product experience",
                "Clear market differentiation as only mobile-first DAP for Indian enterprises",
                "Proven traction with 25 customers and 40% MoM growth"
            ],
            "yellowLights": [
                "Only 1-2 pilot customers committed",
                "₹5 Cr funding with 12-month runway",
                "Technical complexity requiring extended development",
                "Competitive pressure from global players entering Indian market"
            ],
            "redLights": [
                "No customer interest after 100+ enterprise conversations",
                "Technical barriers beyond team capability",
                "Less than ₹3 Cr funding available",
                "Regulatory compliance issues in target industries",
                "Key talent acquisition challenges"
            ]
        },
        "partnershipStrategy": {
            "immediate": "TCS, Infosys, Wipro subsidiaries for enterprise reach\nRegional IT consultants for SMB market penetration\nTraining companies for channel partnerships",
            "technology": "Tally Solutions for accounting software integration\nZoho for CRM and business app ecosystem\nMicrosoft for Office 365 and Teams integration",
            "industry": "Manufacturing associations for ERP adoption\nHealthcare technology providers for compliance training\nBFSI technology vendors for regulatory training",
            "global": "Southeast Asian system integrators\nMiddle Eastern enterprise software distributors\nAfrican mobile technology partners"
        },
        "successMetrics": {
            "technical": [
                { "metric": "Platform Uptime", "target": "99.9%" },
                { "metric": "Response Time", "target": "100ms" },
                { "metric": "Daily Active Users", "target": "15,000+" },
                { "metric": "Guides Created", "target": "5,000+" },
                { "metric": "Task Completion Rate", "target": "87%" }
            ],
            "business": [
                { "metric": "Enterprise Customers", "target": "25 (Current), 3,300 (Year 5)" },
                { "metric": "Monthly Revenue", "target": "₹30L (Current), ₹16.5 Cr (Year 5)" },
                { "metric": "Customer Acquisition Cost", "target": "₹75,000" },
                { "metric": "Customer Lifetime Value", "target": "₹30 Lakhs" },
                { "metric": "Monthly Churn Rate", "target": "2%" }
            ],
            "customerSuccess": [
                { "metric": "Training Time Reduction", "target": "70%" },
                { "metric": "Task Success Rate", "target": "87%" },
                { "metric": "Customer ROI", "target": "30 days payback" },
                { "metric": "User Satisfaction", "target": "4.8/5 NPS Score" },
                { "metric": "Deployment Success", "target": "100% (vs 70% industry average)" }
            ]
        },
        "financialProjections": [
            { "year": "Current", "customers": 25, "arpu": "₹30k", "revenue": "₹3.6 Cr", "growth": "40% MoM" },
            { "year": "Year 1", "customers": 200, "arpu": "₹30k", "revenue": "₹10 Cr", "growth": "-" },
            { "year": "Year 2", "customers": 600, "arpu": "₹35k", "revenue": "₹30 Cr", "growth": "3x" },
            { "year": "Year 3", "customers": 1200, "arpu": "₹40k", "revenue": "₹65 Cr", "growth": "2.2x" },
            { "year": "Year 4", "customers": 2100, "arpu": "₹42k", "revenue": "₹125 Cr", "growth": "1.9x" },
            { "year": "Year 5", "customers": 3300, "arpu": "₹45k", "revenue": "₹200 Cr", "growth": "1.6x" }
        ],
        "investmentAsk": {
            "amount": "₹10 Crores Pre-Seed Investment",
            "valuation": "₹50 Cr (20% equity)",
            "timeline": "Transform enterprise training in 90 days",
            "vision": "Making 10 million Indian employees productive from Day 1",
            "useOfFunds": [
                { "category": "Product Development", "percentage": "40%", "amount": "₹4 Cr", "description": "Mobile SDK, core platform, 50+ app integrations" },
                { "category": "Sales & Marketing", "percentage": "35%", "amount": "₹3.5 Cr", "description": "Enterprise sales team, channel partnerships" },
                { "category": "Customer Success", "percentage": "15%", "amount": "₹1.5 Cr", "description": "Ensure 100% deployment success" },
                { "category": "Operations", "percentage": "10%", "amount": "₹1 Cr", "description": "18-month operational runway" }
            ],
            "returns": [
                { "scenario": "Conservative Exit (3x Revenue)", "valuation": "₹600 Cr", "investorReturn": "₹120 Cr", "multiple": "12x" },
                { "scenario": "Base Case Exit (4x Revenue)", "valuation": "₹800 Cr", "investorReturn": "₹160 Cr", "multiple": "16x" },
                { "scenario": "Aggressive Exit (5x Revenue)", "valuation": "₹1,000 Cr", "investorReturn": "₹200 Cr", "multiple": "20x" }
            ]
        },
        "sections": [
            {
                "title": "Competitive Landscape Analysis",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Traditional Digital Adoption Platforms",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Whatfix",
                                "content": "Global DAP leader with enterprise focus. Gap: Limited mobile support, 2-3 month deployment, ₹2,00,000/month starting price"
                            },
                            {
                                "type": "bullet",
                                "title": "WalkMe",
                                "content": "Enterprise-focused digital adoption platform. Gap: Desktop-first, expensive, not designed for Indian market needs"
                            },
                            {
                                "type": "bullet",
                                "title": "Apty",
                                "content": "Employee onboarding and training platform. Gap: Limited mobile capabilities, high cost, English-only"
                            },
                            {
                                "type": "bullet",
                                "title": "Traditional Enterprise Training",
                                "content": "Classroom and e-learning solutions. Gap: 3-6 month deployment, no mobile support, minimal ROI tracking"
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "content": "Digital Adoption Platform market projected to grow from ₹15,000 Cr (2023) to ₹37,500 Cr (2030) at 35% CAGR in India."
                    }
                ]
            },
            {
                "title": "RICE Framework Analysis",
                "content": [
                    {
                        "type": "table",
                        "component": "MetricsTable",
                        "data": [
                            {
                                "feature": "Mobile SDK Core",
                                "reach": "100%",
                                "impact": "10",
                                "confidence": "100%",
                                "effort": "1",
                                "riceScore": "100",
                                "priority": "P0"
                            },
                            {
                                "feature": "Android Accessibility API",
                                "reach": "100%",
                                "impact": "10",
                                "confidence": "95%",
                                "effort": "1.2",
                                "riceScore": "79",
                                "priority": "P0"
                            },
                            {
                                "feature": "Multi-language Support",
                                "reach": "90%",
                                "impact": "9",
                                "confidence": "90%",
                                "effort": "1.5",
                                "riceScore": "54",
                                "priority": "P0"
                            },
                            {
                                "feature": "Offline Mode",
                                "reach": "80%",
                                "impact": "9",
                                "confidence": "85%",
                                "effort": "2",
                                "riceScore": "31",
                                "priority": "P0"
                            },
                            {
                                "feature": "Voice Guidance",
                                "reach": "70%",
                                "impact": "8",
                                "confidence": "80%",
                                "effort": "2.5",
                                "riceScore": "18",
                                "priority": "P1"
                            },
                            {
                                "feature": "AI-Powered Recommendations",
                                "reach": "60%",
                                "impact": "8",
                                "confidence": "70%",
                                "effort": "3",
                                "riceScore": "11",
                                "priority": "P1"
                            },
                            {
                                "feature": "Advanced Analytics",
                                "reach": "70%",
                                "impact": "7",
                                "confidence": "60%",
                                "effort": "3",
                                "riceScore": "10",
                                "priority": "P2"
                            },
                            {
                                "feature": "API Marketplace",
                                "reach": "50%",
                                "impact": "6",
                                "confidence": "70%",
                                "effort": "4",
                                "riceScore": "5",
                                "priority": "P2"
                            },
                            {
                                "feature": "White-label Solution",
                                "reach": "40%",
                                "impact": "5",
                                "confidence": "80%",
                                "effort": "5",
                                "riceScore": "3",
                                "priority": "P3"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "90-Day MVP Roadmap",
                "content": [
                    {
                        "type": "timeline",
                        "component": "RoadmapTimeline",
                        "data": [
                            {
                                "title": "Foundation",
                                "duration": "Week 1-2",
                                "effort": "80 hours",
                                "tasks": [
                                    "Android SDK setup and architecture",
                                    "Core accessibility API integration",
                                    "Basic user authentication",
                                    "PostgreSQL database configuration",
                                    "REST API framework"
                                ],
                                "deliverable": "Functional mobile SDK with basic app detection"
                            },
                            {
                                "title": "Core Training APIs",
                                "duration": "Week 3-4",
                                "effort": "80 hours",
                                "tasks": [
                                    "Step-by-step guide creation engine",
                                    "Screen overlay and highlighting system",
                                    "Voice guidance integration",
                                    "Basic workflow recording",
                                    "Multi-language text support"
                                ],
                                "deliverable": "Can create and deliver basic training guides"
                            },
                            {
                                "title": "Enterprise Integration",
                                "duration": "Week 5-6",
                                "effort": "80 hours",
                                "tasks": [
                                    "ERP system connectors (Tally, SAP)",
                                    "CRM platform integration (Salesforce, Zoho)",
                                    "Custom app integration framework",
                                    "Progress tracking and analytics",
                                    "Admin dashboard"
                                ],
                                "deliverable": "Functional enterprise-ready platform"
                            },
                            {
                                "title": "Advanced Features",
                                "duration": "Week 7-8",
                                "effort": "60 hours",
                                "tasks": [
                                    "Offline mode implementation",
                                    "AI-powered task suggestions",
                                    "Performance optimization",
                                    "Security and compliance features",
                                    "Error handling and recovery"
                                ],
                                "deliverable": "Production-ready core features"
                            },
                            {
                                "title": "Pilot Deployment",
                                "duration": "Week 9-10",
                                "effort": "60 hours",
                                "tasks": [
                                    "First customer onboarding",
                                    "Custom feature development",
                                    "Performance monitoring",
                                    "User feedback integration",
                                    "Bug fixes and optimization"
                                ],
                                "deliverable": "Live pilot with 3 enterprise customers"
                            },
                            {
                                "title": "Scale & Polish",
                                "duration": "Week 11-12",
                                "effort": "60 hours",
                                "tasks": [
                                    "Analytics dashboard enhancement",
                                    "Monitoring and alerting system",
                                    "CI/CD pipeline setup",
                                    "Security audit and compliance",
                                    "Documentation and training materials"
                                ],
                                "deliverable": "Scalable, production-ready MVP"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Technical Architecture",
                "content": [
                    {
                        "type": "text",
                        "content": "Mobile-first architecture designed for Indian enterprise requirements with offline-first capabilities and multi-language support."
                    },
                    {
                        "type": "subsection",
                        "title": "Core Components",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Android SDK",
                                "content": "Native mobile SDK with accessibility API integration for seamless app guidance"
                            },
                            {
                                "type": "bullet",
                                "title": "API Gateway",
                                "content": "Spring Boot microservices with Redis caching for high-performance guide delivery"
                            },
                            {
                                "type": "bullet",
                                "title": "Data Layer",
                                "content": "PostgreSQL for transactional data, MongoDB for guide content and analytics"
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Design Principles",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Mobile-first Design",
                                "content": "Android SDK priority with offline-first architecture for poor connectivity"
                            },
                            {
                                "type": "bullet",
                                "title": "Multi-tenant SaaS",
                                "content": "Enterprise security with API-first approach for seamless integrations"
                            },
                            {
                                "type": "bullet",
                                "title": "Microservices Architecture",
                                "content": "Scalable, maintainable services for enterprise-grade performance"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Burn Rate Analysis",
                "content": [
                    {
                        "type": "text",
                        "content": "Current monthly burn rate of ₹8,50,000 ($10,200 USD) provides 18-month runway with ₹15,30,000 initial funding."
                    },
                    {
                        "type": "subsection",
                        "title": "Revenue Targets",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Month 6 - Break-even",
                                "content": "Achieve monthly revenue of ₹8,50,000 to match current burn rate"
                            },
                            {
                                "type": "bullet",
                                "title": "Month 12 - Scale",
                                "content": "600 customers generating ₹1,80,00,000 monthly revenue"
                            },
                            {
                                "type": "bullet",
                                "title": "Month 18 - Growth",
                                "content": "1,200 customers generating ₹3,60,00,000 monthly revenue"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Integration Strategies",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Key Platform Integrations",
                        "content": [
                            {
                                "type": "bullet",
                                "title": "Tally Integration",
                                "content": "ERP and accounting software guidance with 70% training time reduction and 95% accuracy improvement"
                            },
                            {
                                "type": "bullet",
                                "title": "Salesforce Integration",
                                "content": "CRM adoption and field sales enablement with 3x faster adoption and 60% increase in usage"
                            },
                            {
                                "type": "bullet",
                                "title": "Custom Enterprise Apps",
                                "content": "Proprietary software training with 2-day deployment vs 2-3 month traditional training"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Go/No-Go Decision Framework",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Green Lights (Proceed)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "3+ committed pilot customers pre-launch confirmed",
                                    "Technical POC completed in 2 weeks with core features",
                                    "₹10 Cr funding secured for 18-month runway",
                                    "Experienced founder with 17+ years product experience",
                                    "Clear market differentiation as only mobile-first DAP for Indian enterprises",
                                    "Proven traction with 25 customers and 40% MoM growth"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Yellow Lights (Caution)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "Only 1-2 pilot customers committed",
                                    "₹5 Cr funding with 12-month runway",
                                    "Technical complexity requiring extended development",
                                    "Competitive pressure from global players entering Indian market"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Red Lights (Stop)",
                        "content": [
                            {
                                "type": "list",
                                "items": [
                                    "No customer interest after 100+ enterprise conversations",
                                    "Technical barriers beyond team capability",
                                    "Less than ₹3 Cr funding available",
                                    "Regulatory compliance issues in target industries",
                                    "Key talent acquisition challenges"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Partnership Strategy",
                "content": [
                    {
                        "type": "subsection",
                        "title": "Immediate Partnerships",
                        "content": [
                            {
                                "type": "text",
                                "content": "TCS, Infosys, Wipro subsidiaries for enterprise reach. Regional IT consultants for SMB market penetration. Training companies for channel partnerships."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Technology Partnerships",
                        "content": [
                            {
                                "type": "text",
                                "content": "Tally Solutions for accounting software integration. Zoho for CRM and business app ecosystem. Microsoft for Office 365 and Teams integration."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Industry Partnerships",
                        "content": [
                            {
                                "type": "text",
                                "content": "Manufacturing associations for ERP adoption. Healthcare technology providers for compliance training. BFSI technology vendors for regulatory training."
                            }
                        ]
                    },
                    {
                        "type": "subsection",
                        "title": "Global Expansion",
                        "content": [
                            {
                                "type": "text",
                                "content": "Southeast Asian system integrators. Middle Eastern enterprise software distributors. African mobile technology partners."
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default projects;
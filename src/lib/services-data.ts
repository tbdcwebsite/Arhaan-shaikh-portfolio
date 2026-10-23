export interface ServiceSpec {
  timeline: string;
  cadence: string;
  idealFor: string;
  leadTier: string;
}

export interface PhaseItem {
  phase: string;
  title: string;
  focus: string;
  output: string;
}

export interface DeliverableArtifact {
  title: string;
  format: string;
  scope: string;
}

export interface MetricComparison {
  metric: string;
  industryAvg: string;
  engineeredBenchmark: string;
  impactNote: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortLabel: string;
  headlineLead: string;
  italicPunch: string;
  executiveSummary: string;
  specs: ServiceSpec;
  marketFriction: {
    heading: string;
    points: string[];
  };
  strategicThesis: {
    heading: string;
    description: string;
  };
  roadmapPhases: PhaseItem[];
  artifactsLedger: DeliverableArtifact[];
  telemetryMetrics: MetricComparison[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: "go-to-market-strategy",
    title: "Go-to-market strategy",
    shortLabel: "GTM Architecture",
    headlineLead: "De-risking commercial entry and engineering",
    italicPunch: "category leadership from day zero.",
    executiveSummary:
      "Launching a breakthrough product or entering an adjacent territory requires far more than surface-level marketing campaigns; it demands an ironclad commercial distribution engine, verified product-market fit, and precision audience targeting. We build custom GTM frameworks that compress sales cycles, eliminate speculative capital burn, and establish immediate defensible traction in crowded enterprise and consumer spaces.",
    specs: {
      timeline: "6 - 8 Weeks",
      cadence: "Weekly Sprints & Daily Standups",
      idealFor: "Seed to Series B Founders & Scaling Enterprises",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "Where Legacy GTM Playbooks Break",
      points: [
        "Premature paid media scaling before ICP (Ideal Customer Profile) message validation is mathematically proven.",
        "Engineering teams building features without real customer willingness-to-pay telemetry.",
        "Siloed handoffs between brand marketing, lead generation, and closed-won sales enablement.",
      ],
    },
    strategicThesis: {
      heading: "The Engineered GTM Engine",
      description:
        "We construct GTM not as an advertising campaign, but as a coordinated commercial ecosystem. By deconstructing buyer objection vectors, stress-testing positioning against tier-one competitors, and establishing validated multi-touch attribution loops, we transform speculative product launches into deterministic revenue engines.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Forensics & TAM Deconstruction",
        focus: "Qualitative buyer interviews, total addressable market mapping, and competitor moat deconstruction.",
        output: "ICP Definition Matrix & Competitive Whitespace Map",
      },
      {
        phase: "02",
        title: "Value Proposition Stacking",
        focus: "Codifying core positioning narratives that reframe buyer purchasing criteria in your favor.",
        output: "Core Narrative Deck & Sales Objection Battlecards",
      },
      {
        phase: "03",
        title: "Channel Activation & Inbound Infrastructure",
        focus: "Deploying high-intent acquisition funnels across synchronous outbound, search, and strategic creator channels.",
        output: "Live Multi-Touch Attribution Engine & Inbound Funnel",
      },
      {
        phase: "04",
        title: "Closed-Loop Launch Telemetry",
        focus: "Tracking granular pipeline conversion velocity and cohort activation to optimize unit economics in real time.",
        output: "90-Day Continuous Growth Playbook & Board Telemetry Dashboard",
      },
    ],
    artifactsLedger: [
      {
        title: "Commercial GTM Master Playbook",
        format: "Comprehensive Executive Document (40+ Pages)",
        scope: "Full-Funnel Distribution Architecture",
      },
      {
        title: "ICP Archetypes & Pricing Elasticity Model",
        format: "Financial Model & Quantitative Telemetry Sheet",
        scope: "Unit Economics & Monetization",
      },
      {
        title: "Enterprise Sales Enablement Deck & Battlecards",
        format: "Interactive Figma & Presentation Systems",
        scope: "Direct Sales & Commercial Conversion",
      },
      {
        title: "First-Party Attribution Infrastructure",
        format: "Tracking Architecture & Server-Side Setup",
        scope: "Revenue & Pipeline Visibility",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Pipeline Ramp Velocity",
        industryAvg: "18 - 24 Weeks",
        engineeredBenchmark: "6 - 8 Weeks",
        impactNote: "Compressed enterprise evaluation and contracting cycles",
      },
      {
        metric: "Blended Customer Acquisition Cost",
        industryAvg: "Baseline Market Cost",
        engineeredBenchmark: "-48% Reduction",
        impactNote: "Driven by high-intent organic validation before paid scaling",
      },
      {
        metric: "First-Year Net Pipeline Creation",
        industryAvg: "Unpredictable / Stalled",
        engineeredBenchmark: "$12M+ Verified Pipeline",
        impactNote: "Aggregate volume across audited advisory cohorts",
      },
    ],
  },
  {
    slug: "growth-strategy",
    title: "Growth strategy",
    shortLabel: "Growth Architecture",
    headlineLead: "Dismantling churn vectors and engineering",
    italicPunch: "compounding revenue flywheels.",
    executiveSummary:
      "Sustainable enterprise expansion is not engineered through erratic growth hacks or unsustainable ad subsidies; it is built on disciplined cohort retention, systematic conversion rate optimization, and cohesive full-funnel economics. We analyze your entire customer journey from initial discovery to multi-year renewal, dismantling friction points and building compounding self-reinforcing acquisition flywheels.",
    specs: {
      timeline: "8 - 12 Weeks",
      cadence: "Bi-Weekly Experimentation Cadence",
      idealFor: "Post-PMF Scaleups & High-Volume D2C Operators",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "The Churn-and-Burn Trap",
      points: [
        "Over-indexing on top-of-funnel ad spend while bottom-funnel cohorts churn out within 60 days.",
        "Uncoordinated experimentation backlogs lacking statistical rigor and clear unit economic priorities.",
        "Treating customer retention as an afterthought rather than the primary driver of enterprise valuation.",
      ],
    },
    strategicThesis: {
      heading: "Full-Funnel Compounding Architecture",
      description:
        "We build growth systems that maximize Net Revenue Retention (NRR) and LTV:CAC ratios. By engineering product-led growth loops, automated onboarding activation triggers, and disciplined cohort stabilization, we turn one-time buyers into multi-seat enterprise expansion accounts.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Funnel Leakage & Forensic Audit",
        focus: "Full-stack conversion diagnostics identifying exact friction nodes across signup, onboarding, and activation stages.",
        output: "Comprehensive Churn Diagnostic & Leakage Report",
      },
      {
        phase: "02",
        title: "Product-Led Growth (PLG) Loop Design",
        focus: "Architecting in-product viral and expansion mechanics where daily customer usage creates net-new pipeline.",
        output: "PLG Interaction Architecture & Referral Mechanism",
      },
      {
        phase: "03",
        title: "Cohort Stabilization & Automation",
        focus: "Deploying multi-channel behavioral lifecycle triggers (Email, SMS, In-App) that rescue at-risk user cohorts.",
        output: "Predictive Churn Engine & Automated Lifecycle Workflows",
      },
      {
        phase: "04",
        title: "Unit Economic Scale Modeling",
        focus: "Stress-testing CAC payback periods against multi-year cohort margins to establish scalable capital deployment rules.",
        output: "Capital Allocation Framework & Growth Experimentation Backlog",
      },
    ],
    artifactsLedger: [
      {
        title: "Full-Funnel Growth Diagnostic Blueprint",
        format: "Technical Audit & Funnel Mapping Documentation",
        scope: "End-to-End Customer Lifecycle",
      },
      {
        title: "Cohort Retention & Churn Prevention Matrix",
        format: "Predictive Telemetry Model & Dashboard",
        scope: "Net Revenue Retention Engineering",
      },
      {
        title: "Prioritized Experimentation Backlog (100+ Tests)",
        format: "Ranked ICE/RICE Framework Sheet",
        scope: "Continuous Conversion Optimization",
      },
      {
        title: "Automated Lifecycle Communication Engine",
        format: "Behavior-Triggered Sequence Architecture",
        scope: "User Activation & Cross-Sell",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Average ARR Compound Lift",
        industryAvg: "+22% YoY",
        engineeredBenchmark: "+248% Sustained",
        impactNote: "Driven by cohort retention expansion and organic viral loops",
      },
      {
        metric: "Customer Lifetime Value to CAC",
        industryAvg: "1.8x - 2.2x",
        engineeredBenchmark: "4.1x Optimized",
        impactNote: "Drastic payback compression via automated onboarding flows",
      },
      {
        metric: "90-Day Cohort Retention Stability",
        industryAvg: "35% - 42%",
        engineeredBenchmark: "76%+ Retained",
        impactNote: "Stabilized through behavioral milestone activation hooks",
      },
    ],
  },
  {
    slug: "ecommerce-quick-commerce",
    title: "E-commerce strategy | Quick commerce",
    shortLabel: "Commerce Engineering",
    headlineLead: "Sub-second storefront conversions meet",
    italicPunch: "hyper-local micro-fulfillment velocity.",
    executiveSummary:
      "Modern digital commerce demands flawless execution—from sub-second mobile page loads to lightning-fast 15-minute last-mile delivery. We architect high-velocity e-commerce and quick-commerce ecosystems that systematically turn casual digital browsers into high-LTV repeat buyers. By synchronizing headless storefront UX, algorithmic basket-building logic, and distributed dark store operations, we help digital brands dominate unit economics.",
    specs: {
      timeline: "6 - 10 Weeks",
      cadence: "Sprint-Based Engineering & Ops Alignment",
      idealFor: "Omnichannel Brands & Rapid Delivery Networks",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "The Modern Commerce Squeeze",
      points: [
        "Bloated legacy themes causing 3+ second mobile load times and 40%+ checkout abandonment.",
        "High customer acquisition costs offset by razor-thin product margins and excessive return rates.",
        "Disjointed micro-fulfillment inventory systems creating costly out-of-stock cancellations.",
      ],
    },
    strategicThesis: {
      heading: "Frictionless Storefronts & Agile Distribution",
      description:
        "We unite digital UX perfection with physical logistics precision. Our storefronts are engineered with single-click checkout paths and predictive cart cross-sells, while our quick-commerce logistics frameworks ensure optimal stock allocation and sub-15-minute picking-and-packing SLAs.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Storefront UX & Conversion Diagnostics",
        focus: "Auditing page speed, mobile checkout friction, cart abandonment drop-offs, and micro-interactions.",
        output: "UX Performance Benchmark & Checkout Redesign Spec",
      },
      {
        phase: "02",
        title: "Basket-Building & AOV Expansion Logic",
        focus: "Structuring threshold-based rewards, automated bundling, and post-purchase one-click upsells.",
        output: "AOV Optimization Playbook & Dynamic Bundling Rules",
      },
      {
        phase: "03",
        title: "Micro-Fulfillment & Dark Store Logistics",
        focus: "Optimizing dark store layout, SKU velocity sorting, picking routes, and rider dispatch telemetry.",
        output: "Quick-Commerce Micro-Hub Operational Blueprint",
      },
      {
        phase: "04",
        title: "Unified Inventory & ERP Telemetry",
        focus: "Synchronizing physical warehouse feeds with digital storefront availability to eliminate stockouts.",
        output: "Real-Time Inventory Integration Map & Ops Dashboard",
      },
    ],
    artifactsLedger: [
      {
        title: "High-Conversion Mobile Storefront Architecture",
        format: "Production-Ready UI/UX System & Spec",
        scope: "Sub-Second Conversion Performance",
      },
      {
        title: "Quick-Commerce Dark Store Standard Operating Procedure",
        format: "Operational Blueprint & SLA Manual",
        scope: "15-Minute Hyper-Local Fulfillment",
      },
      {
        title: "Dynamic AOV Expansion & Cross-Sell Logic Matrix",
        format: "Algorithmic Pricing & Bundling Model",
        scope: "Basket Size Maximization",
      },
      {
        title: "Omnichannel Returns Mitigation Framework",
        format: "Customer Service & Logistics Policy Protocol",
        scope: "Margin Preservation & Reverse Logistics",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Mobile Storefront Conversion Rate",
        industryAvg: "1.6% - 2.1%",
        engineeredBenchmark: "4.2% Sustained",
        impactNote: "Achieved via frictionless single-page checkout engineering",
      },
      {
        metric: "Repeat Order Frequency (90 Days)",
        industryAvg: "18% - 22%",
        engineeredBenchmark: "+64% Lift",
        impactNote: "Driven by automated post-delivery replenishment loops",
      },
      {
        metric: "Order-to-Dispatch SLA (Q-Commerce)",
        industryAvg: "25 - 35 Minutes",
        engineeredBenchmark: "< 15 Minutes",
        impactNote: "Optimized pick-and-pack routing inside dark store micro-hubs",
      },
    ],
  },
  {
    slug: "marketing-strategy",
    title: "Marketing strategy",
    shortLabel: "Marketing Systems",
    headlineLead: "Unifying high-impact brand creative with",
    italicPunch: "algorithmic performance rigor.",
    executiveSummary:
      "Modern marketing cannot survive in silos where brand storytelling and direct response live in opposition. We build integrated marketing ecosystems where creative storytelling actively fuels algorithmic ad performance, while real-time attribution telemetry guides narrative development. Our approach coordinates programmatic acquisition, hyper-relevant content pipelines, and executive thought leadership into a cohesive commercial pipeline.",
    specs: {
      timeline: "6 - 8 Weeks",
      cadence: "Weekly Creative Testing Sprints",
      idealFor: "High-Growth Brands & Enterprise B2B Market Leaders",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "The Creative vs. Performance Rift",
      points: [
        "Performance teams running repetitive discount ads that degrade brand equity and attract low-LTV buyers.",
        "Brand marketing producing vanity videos that generate engagement but zero trackable pipeline.",
        "Third-party tracking collapse leading to inaccurate attribution and wasted ad spend.",
      ],
    },
    strategicThesis: {
      heading: "Attribution-Engineered Brand Acceleration",
      description:
        "We engineer marketing operations where high-taste creative narrative drives algorithmic bidding efficiencies. By combining first-party data capture with agile content flywheels, we build marketing engines that scale efficiently across iOS updates and platform changes.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Media Forensics & Tracking Audit",
        focus: "Auditing multi-touch attribution, ad account structures, bidding strategies, and audience exclusions.",
        output: "Attribution Infrastructure Audit & Media Waste Report",
      },
      {
        phase: "02",
        title: "Creative Production Flywheel Setup",
        focus: "Developing rapid asset production pipelines capable of generating and testing dozens of high-taste hooks weekly.",
        output: "Creative Sprint Operating System & Hook Database",
      },
      {
        phase: "03",
        title: "Omnichannel Acquisition Scaling",
        focus: "Restructuring paid channels (Meta, Google, YouTube, LinkedIn) around consolidated broad targeting architectures.",
        output: "Paid Media Restructuring Blueprint & Budget Model",
      },
      {
        phase: "04",
        title: "Executive Thought Leadership & Organic Engine",
        focus: "Transforming founder and executive perspectives into authoritative industry commentary that drives organic inbound.",
        output: "Executive Content Roadmap & Strategic PR Playbook",
      },
    ],
    artifactsLedger: [
      {
        title: "Omnichannel Marketing Strategy & Budget Allocation",
        format: "Master Commercial Strategy Document",
        scope: "Annual Customer Acquisition Framework",
      },
      {
        title: "Creative Testing Matrix & Video Hook Database",
        format: "Dynamic Airtable / Notion Operating Hub",
        scope: "High-Volume Creative Ideation & Testing",
      },
      {
        title: "First-Party Server-Side Attribution Architecture",
        format: "Technical Setup Protocol (CAPI & Analytics)",
        scope: "Privacy-Resilient Revenue Telemetry",
      },
      {
        title: "Creator & Strategic Co-Marketing Playbook",
        format: "Contractual Terms & Performance Guidelines",
        scope: "High-ROI Performance Partnerships",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Blended Return On Ad Spend (ROAS)",
        industryAvg: "1.8x - 2.2x",
        engineeredBenchmark: "3.1x Blended",
        impactNote: "Calculated across total marketing investment including creative",
      },
      {
        metric: "Unpaid Organic Inbound Reach",
        industryAvg: "< 5% of Pipeline",
        engineeredBenchmark: "38% of Qualified Pipe",
        impactNote: "Driven by executive thought leadership and viral narrative positioning",
      },
      {
        metric: "Attribution Accuracy & Tracking Integrity",
        industryAvg: "55% - 65% Signal Loss",
        engineeredBenchmark: "96% Signal Match",
        impactNote: "Achieved via first-party server-side tracking pipelines",
      },
    ],
  },
  {
    slug: "brand-positioning",
    title: "Brand positioning",
    shortLabel: "Brand Moats",
    headlineLead: "Carving out distinct category ownership and",
    italicPunch: "uncontested market pricing power.",
    executiveSummary:
      "When you compete on price concessions or incremental feature comparisons, your business becomes an interchangeable commodity. Brand positioning is the deliberate discipline of carving out an uncontested market territory where you set the standards, command premium pricing, and render competitors irrelevant. We deconstruct crowded competitive landscapes to formulate razor-sharp strategic narratives, executive tone of voice, and emotional trust anchors.",
    specs: {
      timeline: "4 - 6 Weeks",
      cadence: "Executive Stakeholder Alignment Sessions",
      idealFor: "Category Pioneers & Maturing Enterprise Leaders",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "The Commodity Pitfall",
      points: [
        "Mimicking competitor messaging leading to immediate price erosion during enterprise procurement.",
        "Unclear value articulation forcing sales reps to over-discount to close deals.",
        "Fragmented brand touchpoints confusing high-ticket executive buyers.",
      ],
    },
    strategicThesis: {
      heading: "Unapologetic Category Framing",
      description:
        "We establish positioning that redefines how buyers evaluate your entire industry. By aligning proprietary point-of-view messaging with unmistakable visual discipline, we build emotional and logical moats that guarantee premium pricing elasticity.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Competitive Landscape Forensics",
        focus: "Auditing competitive positioning, narrative clichés, customer perception gaps, and market white space.",
        output: "Category Whitespace Map & Competitor Moat Audit",
      },
      {
        phase: "02",
        title: "Proprietary Point-Of-View Formulation",
        focus: "Crafting a defensible contrarian thesis that challenges industry assumptions and establishes authority.",
        output: "Brand Positioning Manifesto & Core Narrative Guide",
      },
      {
        phase: "03",
        title: "Executive Tone & Verbal Identity System",
        focus: "Codifying language standards, executive lexicon, and key messaging pillars for sales and marketing.",
        output: "Executive Tone of Voice & Lexicon Standard",
      },
      {
        phase: "04",
        title: "Internal Alignment & Market Rollout",
        focus: "Training sales leadership and executive spokespeople to articulate the brand story with conviction.",
        output: "Leadership Keynote & All-Hands Rollout Blueprint",
      },
    ],
    artifactsLedger: [
      {
        title: "Brand Positioning Manifesto & Strategic Playbook",
        format: "Master Narrative Monograph (35+ Pages)",
        scope: "Enterprise Category Leadership",
      },
      {
        title: "Executive Tone of Voice & Lexicon Guide",
        format: "Comprehensive Communication System",
        scope: "Internal & External Verbal Identity",
      },
      {
        title: "Competitive Moat & Whitespace Audit",
        format: "Strategic Analysis & Perceptual Positioning Map",
        scope: "Competitive Strategy & De-positioning",
      },
      {
        title: "Executive Keynote Presentation & Sales Deck",
        format: "High-Fidelity Presentation Architecture",
        scope: "C-Level Commercial Pitch Collateral",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Price Elasticity Premium",
        industryAvg: "1.0x (Market Parity)",
        engineeredBenchmark: "2.4x Command",
        impactNote: "Ability to close enterprise contracts without pricing concessions",
      },
      {
        metric: "Unassisted Category Brand Recall",
        industryAvg: "12% - 18%",
        engineeredBenchmark: "94% Among Target ICP",
        impactNote: "Verified within target enterprise procurement committees",
      },
      {
        metric: "Sales Cycle Velocity on First Pitch",
        industryAvg: "4 - 6 Months",
        engineeredBenchmark: "45 Days Average",
        impactNote: "Instant clarity on value proposition eliminates prolonged evaluations",
      },
    ],
  },
  {
    slug: "digital-strategy",
    title: "Digital strategy",
    shortLabel: "Digital Systems",
    headlineLead: "Modernizing enterprise systems and technical",
    italicPunch: "ecosystem operational synergy.",
    executiveSummary:
      "True digital transformation is not about accumulating fragmented software subscriptions; it is about building unified, agile technological architectures that eliminate operational friction and accelerate strategic velocity. We craft holistic digital roadmaps that modernize legacy architectures, unify disparate enterprise data silos, and deploy intelligent automation across customer and internal workflows.",
    specs: {
      timeline: "8 - 12 Weeks",
      cadence: "Bi-Weekly Engineering Sprints & Architecture Reviews",
      idealFor: "Enterprise Organizations & Tech-Forward Scaleups",
      leadTier: "Direct Principal Advisory",
    },
    marketFriction: {
      heading: "The Bloated Tech Stack Problem",
      points: [
        "Departments adopting disjointed SaaS tools creating isolated data silos and manual spreadsheet bottlenecks.",
        "Legacy monolith architectures paralyzing deployment speed and introducing catastrophic points of failure.",
        "Overpaying for redundant enterprise software with less than 20% actual feature utilization.",
      ],
    },
    strategicThesis: {
      heading: "Composable & Resilient Architecture",
      description:
        "We architect modular, cloud-native digital ecosystems. By connecting mission-critical data pipelines through reliable API middleware and deploying targeted workflow automation, we turn IT infrastructure into a revenue-accelerating strategic asset.",
    },
    roadmapPhases: [
      {
        phase: "01",
        title: "Digital Ecosystem & Tech Stack Forensics",
        focus: "Auditing software licenses, data flow bottlenecks, API architectures, and security vulnerabilities.",
        output: "Enterprise Architecture Audit & Technical Debt Report",
      },
      {
        phase: "02",
        title: "Composable Infrastructure Design",
        focus: "Designing modular, headless architectures that allow rapid feature iteration without breaking core databases.",
        output: "System Integration Blueprint & Data Flow Schematics",
      },
      {
        phase: "03",
        title: "Workflow Automation & AI Deployment",
        focus: "Implementing automated data handoffs, predictive CRM updates, and intelligent customer routing.",
        output: "Production Automation Pipelines & Service Connectors",
      },
      {
        phase: "04",
        title: "Governance, Security & Scale Engineering",
        focus: "Establishing rigorous CI/CD protocols, cloud backup redundancies, and role-based access security controls.",
        output: "Enterprise Security Protocol & Operational Runbook",
      },
    ],
    artifactsLedger: [
      {
        title: "Enterprise Digital Ecosystem Master Blueprint",
        format: "Technical Architecture Schematics & Systems Spec",
        scope: "End-to-End Enterprise Software Roadmap",
      },
      {
        title: "Composable API & Data Integration Architecture",
        format: "Middleware Specifications & API Documentation",
        scope: "Inter-System Real-Time Data Synchronization",
      },
      {
        title: "Automation & AI Workflow Runbooks",
        format: "Operational Deployment Guides & Trigger Logic",
        scope: "Operational Productivity & Error Reduction",
      },
      {
        title: "SaaS Rationalization & TCO Reduction Plan",
        format: "Financial Optimization & Vendor Consolidation Matrix",
        scope: "OpEx Efficiency & Capital Optimization",
      },
    ],
    telemetryMetrics: [
      {
        metric: "Operational OpEx Reduction",
        industryAvg: "< 10% Efficiency",
        engineeredBenchmark: "65% Task Reduction",
        impactNote: "Manual reconciliation and cross-system data entry eliminated",
      },
      {
        metric: "Uptime & System Resilience SLA",
        industryAvg: "99.2% Standard",
        engineeredBenchmark: "99.99% Cloud-Native",
        impactNote: "Failover protection and automated redundancy routing",
      },
      {
        metric: "Feature Iteration Velocity",
        industryAvg: "6 - 8 Week Release Cycles",
        engineeredBenchmark: "Weekly Continuous Deploys",
        impactNote: "Enabled by composable, decoupled frontend and backend architectures",
      },
    ],
  },
];

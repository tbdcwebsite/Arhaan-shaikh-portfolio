export type RowIcon = "chart" | "layers" | "clock" | "target" | "tag";

export interface HeroCardRow {
  icon: RowIcon;
  text: string;
  sub: string;
}

export interface HeroCardMetric {
  value: string;
  label: string;
}

export interface Deliverable {
  title: string;
  desc: string;
}

export interface Step {
  title: string;
  desc: string;
}

export interface Package {
  name: string;
  price: string;
  desc: string;
  cta: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  label: string;
  metaDescription: string;
  hero: {
    lead: string;
    em: string;
    sub: string;
  };
  heroCard: {
    title: string;
    rows: HeroCardRow[];
    metrics: HeroCardMetric[];
  };
  pains: string[];
  fit: {
    yes: string[];
    no: string[];
  };
  deliverables: Deliverable[];
  steps: Step[];
  result: {
    quote: string;
    who: string;
    situation: string;
    did: string;
    outcome: string;
  };
  packages: Package[];
  faqs: Faq[];
  finalCta: {
    lead: string;
    em: string;
  };
}

export const services: Record<string, Service> = {
  // =========================================================================
  // PAGE 1: GO-TO-MARKET STRATEGY
  // =========================================================================
  "go-to-market": {
    slug: "go-to-market",
    label: "Go-to-Market Strategy",
    metaDescription:
      "A launch plan that puts your product in front of the right customers, on the right platforms, from day one.",
    hero: {
      lead: "A launch plan that puts your product in front of the",
      em: "right customers.",
      sub: "I help new brands and products plan how to enter the market: who to sell to, where to sell, how to launch, and what to spend.",
    },
    heroCard: {
      title: "Launch Blueprint",
      rows: [
        {
          icon: "target",
          text: "Target Customer & Market",
          sub: "Who to win first and where to launch",
        },
        {
          icon: "layers",
          text: "Multi-Channel Rollout",
          sub: "D2C, Marketplaces, Q-Commerce & Modern Trade",
        },
        {
          icon: "clock",
          text: "90-Day Roadmap",
          sub: "Clear 30/60/90-day commercial milestones",
        },
      ],
      metrics: [
        { value: "3-4 Wks", label: "DELIVERY" },
        { value: "90 Days", label: "ROADMAP" },
        { value: "100%", label: "CHANNEL FIT" },
      ],
    },
    pains: [
      "You have a product ready but no clear plan for how to launch it.",
      "You're not sure whether to start online, offline, on marketplaces or in modern trade.",
      "You don't know which city, customer or channel to start with.",
      "Previous launches got initial attention but not repeat customer sales.",
      "Your launch budget is limited, and you can't afford trial-and-error guessing.",
    ],
    fit: {
      yes: [
        "You're launching a new brand, a new product line, or entering a new city or category.",
        "You're a product or service business in any consumer or B2B industry.",
        "You want a structured, data-led launch instead of an expensive trial-and-error one.",
      ],
      no: [
        "You already sell steadily and want to scale existing revenue (see Growth Strategy).",
        "You haven't defined who your product is for or why it matters (start with Brand Positioning).",
      ],
    },
    deliverables: [
      {
        title: "Market & Competitor Scan",
        desc: "Who else is selling in your space, at what price points, and where the category gaps are.",
      },
      {
        title: "Target Customer & Launch Market Selection",
        desc: "Clarity on who to win first, which geographic regions to enter, and why.",
      },
      {
        title: "Pricing & Margin Architecture",
        desc: "A unit economic structure that works profitably for you, distributors, trade, and the customer.",
      },
      {
        title: "Channel & Distribution Roadmap",
        desc: "Which of your own website, marketplaces, quick commerce, modern trade, and general trade to use, and in what order.",
      },
      {
        title: "Integrated Launch Plan",
        desc: "Online and offline activities, an actionable execution launch calendar, and allocated budgets.",
      },
      {
        title: "30/60/90-Day Success Metrics",
        desc: "Clear scorecard targets and KPIs so you know if your launch is gaining real commercial traction.",
      },
    ],
    steps: [
      {
        title: "Discovery Call",
        desc: "Unpacking your product, commercial goals, unit economics, budget, and timeline.",
      },
      {
        title: "Research & Audit",
        desc: "In-depth competitor analysis, customer segment profiling, and category pricing scans.",
      },
      {
        title: "Strategy Session",
        desc: "Presentation of the tailored launch roadmap, pressure-testing assumptions, and agreeing on priorities.",
      },
      {
        title: "Launch Steering (Optional)",
        desc: "Hands-on check-ins and advisory through the first 90 days to solve platform friction.",
      },
    ],
    result: {
      quote:
        "We launched across 3 quick commerce platforms and hit our monthly volume target in 3 weeks.",
      who: "D2C Personal Care Founder",
      situation: "New product ready with limited budget and no clear retail sequence.",
      did: "Narrowed customer profile, prioritized quick-commerce over general trade, and set 90-day spend guardrails.",
      outcome: "1,800+ units moved in month 1; zero wasted ad budget.",
    },
    packages: [
      {
        name: "Go-to-Market Project",
        price: "Custom Scope",
        desc: "Complete market research, channel roadmap, pricing architecture, and launch plan delivered in 3–4 weeks.",
        cta: "Get launch plan",
      },
      {
        name: "Launch Advisory",
        price: "Monthly Retainer",
        desc: "The complete project plus active bi-weekly steering calls through your first 90 days of execution.",
        cta: "Book advisory",
      },
    ],
    faqs: [
      {
        q: "Do you only work with new brands?",
        a: "No. I also work with established businesses launching a new product, expanding into a new city, or entering a new category.",
      },
      {
        q: "Do you cover offline and modern trade?",
        a: "Yes. The plan covers direct-to-consumer online, marketplaces, quick commerce, modern trade, and general trade based on your product category and unit economics.",
      },
      {
        q: "Do you execute the launch?",
        a: "I plan and guide the strategy. Your in-house team or agency executes, and I help brief, align, and review their delivery.",
      },
      {
        q: "How long does a go-to-market plan take?",
        a: "Usually 3 to 4 weeks from discovery to final delivery, depending on scope and how quickly required data is provided.",
      },
    ],
    finalCta: {
      lead: "Launching something new?",
      em: "Let's plan it properly.",
    },
  },

  // =========================================================================
  // PAGE 2: BRAND POSITIONING
  // =========================================================================
  "brand-positioning": {
    slug: "brand-positioning",
    label: "Brand Positioning",
    metaDescription:
      "Be the obvious choice, not one of fifty similar options. Define your audience, differentiator, and brand narrative.",
    hero: {
      lead: "Be the obvious choice, not one of",
      em: "fifty similar options.",
      sub: "I help founders and businesses decide who they're for, how they stand apart, and how they show up, so the right customers pick them.",
    },
    heroCard: {
      title: "Positioning Matrix",
      rows: [
        {
          icon: "target",
          text: "Target Audience Definition",
          sub: "Who your brand exists for & what they value",
        },
        {
          icon: "tag",
          text: "Messaging Pillars",
          sub: "One clear promise & proof behind it",
        },
        {
          icon: "layers",
          text: "Range Architecture",
          sub: "Product hierarchy & pricing tiers",
        },
      ],
      metrics: [
        { value: "3-4 Wks", label: "TURNAROUND" },
        { value: "1 Promise", label: "CORE FOCUS" },
        { value: "100%", label: "CLARITY" },
      ],
    },
    pains: [
      "Customers can't tell how you're different from competitors.",
      "You're targeting 'everyone,' and your marketing feels scattered.",
      "Your products sit on the shelf or the page without getting picked.",
      "Your packaging and brand look don't match the price or the audience.",
      "You're not sure which market or category to enter first.",
    ],
    fit: {
      yes: [
        "You're at an early stage and need to define your audience, voice, and core differentiator.",
        "You're an existing brand that's not getting picked up, or needs to reposition for higher margins.",
        "You're a product or service business looking for a defensible commercial moat.",
      ],
      no: [
        "You already know your audience and position, and solely need a tactical channel plan (see Go-to-Market Strategy).",
        "You're looking for cheap logo design or packaging production without strategy (I provide the direction, designers execute).",
      ],
    },
    deliverables: [
      {
        title: "Target Audience Definition",
        desc: "Who your best customer is, what they care about, and where they make purchasing decisions.",
      },
      {
        title: "Market & Category Selection",
        desc: "Which markets and categories to enter first, and which competitive traps to avoid.",
      },
      {
        title: "Competitor Mapping",
        desc: "Where category competitors stand, and exactly where your brand can carve out clear whitespace.",
      },
      {
        title: "Positioning Statement & Messaging Pillars",
        desc: "One razor-sharp promise and the non-negotiable proof points that validate it.",
      },
      {
        title: "Range & Pricing Architecture",
        desc: "How to structure your products so halo SKUs drive margins and entry products drive trial.",
      },
      {
        title: "Brand Guidelines & Packaging Brief",
        desc: "Tone of voice, visual direction, and the exact creative brief for your packaging designers.",
      },
      {
        title: "Brand Vision Workshop",
        desc: "A hands-on working session to align you and your core leadership team on brand trajectory.",
      },
    ],
    steps: [
      {
        title: "Discovery Call",
        desc: "Unpacking your business history, customer feedback, and commercial ambition.",
      },
      {
        title: "Research & Audit",
        desc: "Reviewing customer sentiments, category competitor messaging, and price elasticity.",
      },
      {
        title: "Alignment Workshop",
        desc: "Interactive session to define audience, differentiation, and core brand narrative together.",
      },
      {
        title: "Delivery & Rollout",
        desc: "Complete positioning document, messaging pillars, and designer-ready creative briefs.",
      },
    ],
    result: {
      quote:
        "We restructured our range and saw checkout conversion jump 28% without discounting.",
      who: "Apparel Brand Founder",
      situation: "Broad audience, confused SKU hierarchy, products sitting unnoticed.",
      did: "Narrowed customer target, re-tiered hero products, and refreshed packaging direction.",
      outcome: "Higher pickup rates, improved margins, and 2.4x repeat purchase lift.",
    },
    packages: [
      {
        name: "Positioning Project",
        price: "Custom Scope",
        desc: "Research, workshop, positioning document, and complete brand direction delivered in 3–4 weeks.",
        cta: "Define position",
      },
      {
        name: "Positioning + Rollout Support",
        price: "Retainer Option",
        desc: "The complete project plus active review of packaging designs, website copy, and launch campaigns.",
        cta: "Book rollout",
      },
    ],
    faqs: [
      {
        q: "Is this only for new brands?",
        a: "No. It equally suits early-stage brands and established businesses that have plateaued and need to reposition.",
      },
      {
        q: "Do you design the logo and packaging?",
        a: "I provide the strategy, tone of voice, and the creative brief. Your designers or agency produce the assets, and I review them against the positioning.",
      },
      {
        q: "How is this different from marketing?",
        a: "Positioning decides who you're for and why they should choose you. Marketing is how you amplify and communicate that.",
      },
      {
        q: "Will this help if my products aren't selling?",
        a: "Often, yes. Many pickup and conversion problems stem from an unclear audience, confusing pricing, or cluttered range structure.",
      },
    ],
    finalCta: {
      lead: "Ready to stand apart?",
      em: "Let's define how.",
    },
  },

  // =========================================================================
  // PAGE 3: E-COMMERCE & QUICK COMMERCE STRATEGY
  // =========================================================================
  ecommerce: {
    slug: "ecommerce",
    label: "E-commerce & Quick Commerce",
    metaDescription:
      "Win your category on e-commerce and quick commerce: platform fit, brand onboarding and scale.",
    hero: {
      lead: "Win your category on e-commerce &",
      em: "quick commerce.",
      sub: "I help brands choose the marketplaces and quick commerce platforms that fit them, get onboarded and listed, and grow sales on them.",
    },
    heroCard: {
      title: "Commerce Engine",
      rows: [
        {
          icon: "layers",
          text: "Platform Selection",
          sub: "Amazon, Blinkit, Zepto, Nykaa, Myntra, etc.",
        },
        {
          icon: "tag",
          text: "Listing Optimization",
          sub: "Search titles, high-converting images & A+",
        },
        {
          icon: "chart",
          text: "Platform Ads Strategy",
          sub: "Profitable bidding & margin preservation",
        },
      ],
      metrics: [
        { value: "4-6 Wks", label: "ONBOARDING" },
        { value: "Top 1%", label: "VISIBILITY" },
        { value: "Profitable", label: "ROAS FOCUS" },
      ],
    },
    pains: [
      "There are too many platforms, and you don't know which ones suit your product margins.",
      "Onboarding feels confusing, and you're unsure what each platform requires for approval.",
      "You're listed, but sales are low and you're invisible in category search.",
      "Ad spend on platforms isn't turning into profitable contribution margin.",
      "You don't know how to scale dark-store replenishment after the first few orders.",
    ],
    fit: {
      yes: [
        "You sell physical products and want to launch or scale across marketplaces and quick commerce.",
        "You're a brand in categories like fashion, beauty, food, home, FMCG, and accessories.",
        "You want hands-on help with onboarding, documentation, and listing setup, not just advice.",
      ],
      no: [
        "You're only looking to grow your proprietary Shopify website (see Growth Strategy).",
        "You don't have manufactured inventory ready to sell yet (start with Go-to-Market Strategy).",
      ],
    },
    deliverables: [
      {
        title: "Platform Selection & Phasing Plan",
        desc: "Which of Amazon, Flipkart, Myntra, Nykaa, Blinkit, Zepto, Swiggy Instamart, and CRED suit your margins and budget, and in what order.",
      },
      {
        title: "Hands-on Onboarding & Listing",
        desc: "End-to-end guidance to get registered, brand-gated, approved, and listed across your chosen platforms.",
      },
      {
        title: "Listing & Content Optimisation",
        desc: "Search-ranked titles, benefit-led bullet points, optimized lifestyle images, and A+ content modules built to convert.",
      },
      {
        title: "Platform Ads & Promotions Plan",
        desc: "Where to allocate advertising spend and how to run flash promotions without killing your bottom line.",
      },
      {
        title: "Category & Sales Growth Playbook",
        desc: "A recurring monthly plan to build review volume, rank on primary search keywords, and secure repeat customer orders.",
      },
    ],
    steps: [
      {
        title: "Catalog & Margin Audit",
        desc: "Evaluating your product SKUs, commission models, dark-store economics, and commercial targets.",
      },
      {
        title: "Platform Fit & Phasing",
        desc: "Selecting the highest-probability platforms and defining the exact sequence to roll them out.",
      },
      {
        title: "Onboarding & Listing Setup",
        desc: "Hands-on execution: registration, documentation clearance, catalog upload, and content optimization.",
      },
      {
        title: "Scale & Growth Steering",
        desc: "Ongoing review of weekly sell-through rates, advertising returns, and inventory allocation.",
      },
    ],
    result: {
      quote:
        "We expanded onto Blinkit and Zepto in 3 weeks, and quick commerce now accounts for 42% of revenue.",
      who: "Packaged Foods Brand",
      situation: "Not listed on dark-store apps, heavy reliance on expensive D2C shipping.",
      did: "Optimized multi-pack pricing, secured 4 regional dark store hubs, and ran targeted search ads.",
      outcome: "Scalable category presence with healthy margins and 42% revenue contribution.",
    },
    packages: [
      {
        name: "Platform Strategy & Onboarding",
        price: "Custom Scope",
        desc: "Platform selection, documentation guidance, account setup, and catalog listing in 4–6 weeks.",
        cta: "Start onboarding",
      },
      {
        name: "Monthly Scale Support",
        price: "Monthly Retainer",
        desc: "Ongoing listing optimization, ad spend allocation, and promotion planning to scale sales.",
        cta: "Scale platforms",
      },
    ],
    faqs: [
      {
        q: "Do you actually get us onboarded?",
        a: "Yes. I help with registration, platform documentation, category approval, listing, and initial catalog setup—not just high-level advice.",
      },
      {
        q: "Which platform should I start with?",
        a: "It depends entirely on your category, price point, gross margins, and logistics readiness. The platform selection phase solves this specifically for your brand.",
      },
      {
        q: "Do you manage platform ads?",
        a: "I architect the campaign structure, keyword clusters, and budget guardrails. Your internal team or specialist runs daily bid adjustments under my guidance.",
      },
      {
        q: "How soon can we be live and selling?",
        a: "Typically 3 to 5 weeks, depending on platform approval timelines and how quickly documentation and product images are ready.",
      },
    ],
    finalCta: {
      lead: "Ready to sell where customers shop?",
      em: "Let's build your channels.",
    },
  },

  // =========================================================================
  // PAGE 4: GROWTH STRATEGY
  // =========================================================================
  "growth-strategy": {
    slug: "growth-strategy",
    label: "Growth Strategy",
    metaDescription:
      "A clear plan to grow your revenue, across every channel that can move your business.",
    hero: {
      lead: "A clear plan to grow your revenue,",
      em: "across every channel.",
      sub: "I help established businesses find the fastest, most profitable routes to growth, online and offline, and turn them into a 90-day roadmap.",
    },
    heroCard: {
      title: "Revenue Engine",
      rows: [
        {
          icon: "chart",
          text: "Channel Diagnostics",
          sub: "Auditing CAC leaks & identifying ROI levers",
        },
        {
          icon: "layers",
          text: "Omnichannel Mix",
          sub: "Digital, OOH, B2B Partnerships & Direct Sales",
        },
        {
          icon: "clock",
          text: "90-Day Roadmap",
          sub: "Weekly milestones & accountable KPI dashboard",
        },
      ],
      metrics: [
        { value: "2-3 Wks", label: "DIAGNOSIS" },
        { value: "5-7 KPIs", label: "METRIC DASHBOARD" },
        { value: "Omnichannel", label: "PERSPECTIVE" },
      ],
    },
    pains: [
      "Revenue has plateaued, and you're not sure which lever to pull next.",
      "You're spending heavily on marketing, but can't tell what's bringing in profitable business.",
      "Most of your sales or customer enquiries come from a single vulnerable channel.",
      "You've never tested channels like outdoor, programmatic, B2B partnerships, or outbound.",
      "Customers buy once and don't return, or referrals are your only inconsistent pipeline.",
    ],
    fit: {
      yes: [
        "You run a product or service business with existing steady revenue seeking structured scale.",
        "You want to scale in a predictable way and are open to disciplined data and unit economics.",
        "You're willing to test high-performing channels beyond what you're using today.",
      ],
      no: [
        "You haven't launched your product yet (see Go-to-Market Strategy).",
        "You want an execution agency to handle day-to-day graphic posting (I plan and guide, your team executes).",
      ],
    },
    deliverables: [
      {
        title: "Revenue & Customer Diagnosis",
        desc: "Where sales come from, what each customer cohort is worth, and where commercial growth is leaking.",
      },
      {
        title: "Channel & Media Strategy",
        desc: "What to scale, test, or drop, with balanced budget allocations across online performance and offline media.",
      },
      {
        title: "Acquisition & Retention Engine",
        desc: "How to bring in customers at an acceptable CAC and build repeat purchase loops that drive LTV.",
      },
      {
        title: "Unit Economics Review",
        desc: "Detailed evaluation of gross margins, customer acquisition cost, and capital payback periods.",
      },
      {
        title: "Offline & Attribution Tracking Plan",
        desc: "How to measure results across non-digital channels (unique promo codes, QR tracking, and geo-lift analysis).",
      },
      {
        title: "90-Day Growth Roadmap & KPI Dashboard",
        desc: "Monthly priorities, weekly milestones, team owners, and the 5–7 executive numbers worth tracking.",
      },
    ],
    steps: [
      {
        title: "Discovery Call",
        desc: "Aligning on commercial targets, financial numbers, margins, and operational constraints.",
      },
      {
        title: "Deep Diagnosis",
        desc: "Auditing channel data, past campaign performance, customer retention, and competitor moves.",
      },
      {
        title: "Strategy Session",
        desc: "Presenting the diagnosis and the 90-day growth roadmap, locking in priorities together.",
      },
      {
        title: "Ongoing Steering (Optional)",
        desc: "Monthly executive review calls to track KPI progress and calibrate channel spend.",
      },
    ],
    result: {
      quote:
        "We unlocked our first non-digital channel and dropped our customer acquisition cost by 31%.",
      who: "Fintech & Services Founder",
      situation: "Flat revenue with 90% reliance on climbing Meta ad costs.",
      did: "Rebalanced channel mix, launched targeted B2B partnerships, and structured retention tracking.",
      outcome: "Revenue scaled within 90 days with a 31% reduction in blended CAC.",
    },
    packages: [
      {
        name: "Growth Roadmap (One-Off)",
        price: "Custom Scope",
        desc: "Comprehensive diagnosis, omnichannel strategy, and 90-day execution roadmap delivered in 2–3 weeks.",
        cta: "Build roadmap",
      },
      {
        name: "Monthly Advisory",
        price: "Monthly Retainer",
        desc: "The roadmap plus ongoing executive strategy calls, performance reviews, and team guidance.",
        cta: "Retain advisory",
      },
    ],
    faqs: [
      {
        q: "Do you only focus on digital channels?",
        a: "No. I plan across digital performance, programmatic, offline OOH, transit, and direct partnerships, recommending whatever fits your unit economics.",
      },
      {
        q: "Do you work with service businesses as well as brands?",
        a: "Yes. I work with both product and service businesses. The principles of funnel velocity and unit economics apply equally.",
      },
      {
        q: "Do you execute or only advise?",
        a: "I focus on strategy, channel architecture, and guidance. Your team or agency executes, and I help brief and align them.",
      },
      {
        q: "How do you measure offline channels?",
        a: "Through tracking systems built into the creative: dedicated phone lines, QR codes, promo tiers, and pre/post lift analysis.",
      },
    ],
    finalCta: {
      lead: "Ready to know where your next growth comes from?",
      em: "Let's build your roadmap.",
    },
  },

  // =========================================================================
  // PAGE 5: MARKETING AND CONTENT STRATEGY
  // =========================================================================
  "marketing-and-content-strategy": {
    slug: "marketing-and-content-strategy",
    label: "Marketing and Content Strategy",
    metaDescription:
      "Campaigns and content people notice, and act on. Creative direction, messaging pillars, and 90-day calendar.",
    hero: {
      lead: "Campaigns and content people notice,",
      em: "and act on.",
      sub: "I help businesses decide what to say, how to say it, and what to create, so the right channels turn attention into enquiries and sales.",
    },
    heroCard: {
      title: "Content Engine",
      rows: [
        {
          icon: "target",
          text: "Campaign Concepts",
          sub: "Umbrella creative themes & TVC/video storyboards",
        },
        {
          icon: "layers",
          text: "Content Pillars & Formats",
          sub: "Reels, founder stories, UGC & explainers",
        },
        {
          icon: "clock",
          text: "90-Day Content Plan",
          sub: "Actionable production calendar & briefs",
        },
      ],
      metrics: [
        { value: "2-3 Wks", label: "DELIVERY" },
        { value: "High ROI", label: "CREATIVE HOOK" },
        { value: "Full Funnel", label: "MESSAGING" },
      ],
    },
    pains: [
      "You post regularly, but nothing ties back to real customer enquiries or sales.",
      "Your content looks like everyone else's in your category.",
      "You have a good product or service, but your core message isn't landing with viewers.",
      "You've never planned a proper campaign narrative, only disconnected posts and ads.",
      "Your agency or team makes content without a clear brief or strategic direction.",
    ],
    fit: {
      yes: [
        "You have a growth plan or marketing budget, but weak or inconsistent demand creation.",
        "You're a product or service business looking for distinctive brand salience.",
        "You want a clear creative direction that your in-house team or agency can execute effortlessly.",
      ],
      no: [
        "You still need to decide your core channels and media budgets (see Growth Strategy).",
        "You need to define your audience and core differentiator first (see Brand Positioning).",
        "You want ready-made graphic production by me (I deliver the strategy and briefs; your team produces).",
      ],
    },
    deliverables: [
      {
        title: "Campaign Ideas & Creative Direction",
        desc: "Umbrella concepts and narrative hooks that cut through noise, including video and TVC storyboards.",
      },
      {
        title: "Content Pillars & Formats",
        desc: "What to talk about and in what formats (reels, UGC, testimonials, founder perspective, and explainers).",
      },
      {
        title: "Social Media & Creator Strategy",
        desc: "Platform roles, posting rhythms, and specific creative guidelines for influencer partnerships.",
      },
      {
        title: "Messaging by Funnel Stage",
        desc: "What to communicate to cold prospects who have never heard of you versus warm prospects ready to buy.",
      },
      {
        title: "Actionable Content Calendar",
        desc: "A structured monthly roadmap with ready-to-shoot briefs your internal team or agency can execute.",
      },
      {
        title: "Commercial Measurement Playbook",
        desc: "Metrics that track whether your content is driving genuine business pipeline, not just vanity likes.",
      },
    ],
    steps: [
      {
        title: "Discovery Call",
        desc: "Reviewing your brand guidelines, audience data, goals, and current content library.",
      },
      {
        title: "Content & Competitor Audit",
        desc: "Evaluating what is resonating, what's falling flat, and where category fatigue exists.",
      },
      {
        title: "Strategy Session",
        desc: "Presenting campaign concepts, content pillar breakdowns, and the 90-day calendar.",
      },
      {
        title: "Brief & Review (Optional)",
        desc: "Briefing your production agency and reviewing creative cuts against the strategic plan.",
      },
    ],
    result: {
      quote:
        "Our new campaign doubled our inbound qualified inquiries while cutting ad spend by 20%.",
      who: "D2C Lifestyle Founder",
      situation: "Consistent posting, high agency fees, low engagement, and minimal sales.",
      did: "Reset content pillars around consumer pain hooks and scripted an integrated 4-part video campaign.",
      outcome: "2.8x lift in organic shares and 40% improvement in customer acquisition cost.",
    },
    packages: [
      {
        name: "Campaign & Content Project",
        price: "Custom Scope",
        desc: "Umbrella campaign concepts, content pillars, format playbook, and 90-day plan in 2–3 weeks.",
        cta: "Plan campaign",
      },
      {
        name: "Monthly Creative Advisory",
        price: "Monthly Retainer",
        desc: "Ongoing monthly campaign planning, script reviews, and creative quality control of agency output.",
        cta: "Retain advisory",
      },
    ],
    faqs: [
      {
        q: "Do you create the content yourself?",
        a: "I provide the strategy, concepts, script outlines, and creative briefs. Your team or video agency produces the content.",
      },
      {
        q: "Can you plan TVC or video campaigns?",
        a: "Yes. I develop the overarching concept, script direction, narrative hooks, and brief the production team.",
      },
      {
        q: "How is this different from Growth Strategy?",
        a: "Growth Strategy decides where your money and effort go. Campaign Strategy decides exactly what you say and create there.",
      },
      {
        q: "Will you work with our existing creative agency?",
        a: "Yes. I can brief them, align them to a single strategic plan, and review their work against quality standards.",
      },
    ],
    finalCta: {
      lead: "Ready for content that actually drives business?",
      em: "Let's build your campaign.",
    },
  },
};

// Backwards-compatible aliases
services["marketing-strategy"] = services["marketing-and-content-strategy"];
services["go-to-market-strategy"] = services["go-to-market"];
services["ecommerce-quick-commerce"] = services["ecommerce"];

export const serviceSlugs = [
  "go-to-market",
  "brand-positioning",
  "ecommerce",
  "growth-strategy",
  "marketing-and-content-strategy",
];

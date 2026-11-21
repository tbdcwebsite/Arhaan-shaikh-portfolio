export interface BlogCategory {
  slug: string;
  label: string;
  title: string;
  titleAccent: string;
  kicker: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "disrupt-the-market",
    label: "Disrupt The Market",
    title: "Disrupt The",
    titleAccent: "Market",
    kicker: "CATEGORY 01",
    description:
      "Unconventional playbooks, counter-intuitive positioning, and structural category creation. How challenger brands break through incumbent fatigue without matching billion-dollar marketing budgets.",
    seoTitle: "Disrupt The Market — Strategic Growth Playbooks | Arhaan Shaikh",
    seoDescription:
      "Strategic frameworks for challenger brands and category disruptors looking to rewrite market dynamics, exploit competitor inertia, and dislodge entrenched incumbents.",
  },
  {
    slug: "clarity-before-channels",
    label: "Clarity Before Channels",
    title: "Clarity Before",
    titleAccent: "Channels",
    kicker: "CATEGORY 02",
    description:
      "Why premature distribution scaling kills more startups than lack of capital. Why absolute value proposition clarity, message-market fit, and buyer psychology must precede every single ad dollar spent.",
    seoTitle: "Clarity Before Channels — Growth & Positioning | Arhaan Shaikh",
    seoDescription:
      "Diagnosing core offer positioning, unit resonance, and message-market fit before turning on paid channels and scaling customer acquisition spend.",
  },
  {
    slug: "bad-positioning-is-expensive",
    label: "Bad Positioning Is Expensive",
    title: "Bad Positioning Is",
    titleAccent: "Expensive",
    kicker: "CATEGORY 03",
    description:
      "The hidden tax on weak positioning: skyrocketing customer acquisition costs, protracted sales cycles, and defensive discount spirals. How to architect positioning for durable pricing power.",
    seoTitle: "Bad Positioning Is Expensive — Brand Strategy | Arhaan Shaikh",
    seoDescription:
      "Explore how weak brand positioning compounds customer acquisition cost and how premium narrative architecture establishes defensive pricing power.",
  },
  {
    slug: "virality-is-a-piece-of-art",
    label: "Virality Is A Piece Of Art",
    title: "Virality Is A Piece Of",
    titleAccent: "Art",
    kicker: "CATEGORY 04",
    description:
      "Deconstructing organic cultural velocity, earned media loops, and algorithmic resonance. Why true virality is never random luck—it is engineered cultural tension and narrative architecture.",
    seoTitle: "Virality Is A Piece Of Art — Organic Distribution | Arhaan Shaikh",
    seoDescription:
      "Deconstructing organic reach, algorithmic resonance, and earned cultural momentum into repeatable, high-leverage distribution playbooks.",
  },
  {
    slug: "conversion-is-a-context-problem",
    label: "Conversion Is A Context Problem",
    title: "Conversion Is A Context",
    titleAccent: "Problem",
    kicker: "CATEGORY 05",
    description:
      "Button colors and cosmetic tweaks don't fix broken trust. How audience intent mapping, contextual framing, and cognitive friction dictate commercial conversion rates and customer lifetime value.",
    seoTitle: "Conversion Is A Context Problem — CRO & Funnel Strategy | Arhaan Shaikh",
    seoDescription:
      "Why conversion rate optimization is a psychological alignment problem rather than a UI tweaks issue. Frameworks for high-intent customer journeys.",
  },
];


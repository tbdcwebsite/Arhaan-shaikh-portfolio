export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string; role?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | {
    type: "callout";
    title?: string;
    text: string;
    linkText?: string;
    linkHref?: string;
  };

export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string; // matches category slug
  excerpt: string;
  featuredImage: string;
  publishedAt: string; // ISO format e.g. "2026-11-21"
  intro: string;
  content: ContentBlock[];
  relatedBlogs?: string[]; // IDs of related blogs
  seoTitle: string;
  seoDescription: string;
  titleEmphasis?: string;
}

export const BLOGS: Blog[] = [
  // =========================================================================
  // 1. CLARITY BEFORE CHANNELS
  // =========================================================================
  {
    id: "how-to-get-your-brand-on-myntra",
    title: "How to Get Your Brand on Myntra: A Complete Seller Onboarding and Growth Guide",
    titleEmphasis: "Myntra",
    slug: "how-to-get-your-brand-on-myntra",
    category: "clarity-before-channels",
    excerpt:
      "For fashion, beauty and lifestyle brands, Myntra presents an important opportunity to reach ready-to-buy shoppers. Learn the onboarding process, brand eligibility, common rejection reasons, and key post-approval metrics.",
    featuredImage: "/Blog images/Myntra Seller Onboarding Guide.png",
    publishedAt: "2026-11-21",
    seoTitle: "How to Get Your Brand on Myntra: Seller Onboarding Guide",
    seoDescription:
      "Learn how to get your brand on Myntra, understand seller eligibility, required documents, onboarding steps, application rejection reasons and marketplace growth strategies.",
    intro:
      "For fashion, beauty and lifestyle brands, Myntra presents an important opportunity to reach shoppers that are already shopping for these categories. But there is a lot that goes into getting a brand listed on the platform other than filling a registration form. Brands should meet Myntra's standards, have the documentation in order, build up their brand credentials and catalogue, and plan their operations accordingly.",
    content: [
      {
        type: "paragraph",
        text: "With my consulting, I show entrepreneurs what to expect from marketplace entry like Myntra and help them plan the right decisions on how to start onboarding.",
      },
      {
        type: "paragraph",
        text: "As a consultant, Arhaan Shaikh assists brands in identifying what is needed and avoiding onboarding errors in preparation for the commercial and operational aspects of marketplace growth.",
      },
      {
        type: "paragraph",
        text: "Learn the Myntra onboarding process, what brands need to be ready with, possible reasons for rejection in applications, and what businesses should take care of after getting approval.",
      },
      {
        type: "heading2",
        text: "Why Should Fashion and D2C Brands Consider Selling on Myntra?",
      },
      {
        type: "paragraph",
        text: "Myntra offers brands an already existing customer base shopping for fashion, beauty and lifestyle products. For brands who want to reach people beyond their own website or social channels, a standalone selling and distribution channel can be created on Myntra.",
      },
      {
        type: "paragraph",
        text: "Reasons why brands want to sell on Myntra:",
      },
      {
        type: "list",
        items: [
          "Reach the right audience: Myntra has customers who are already into shopping for fashion, footwear, beauty & lifestyle products.",
          "Brand Discovery: Having a presence on a mature marketplace allows newer brands to find customers that wouldn't have otherwise encountered them.",
          "Marketplace Infrastructure: Sellers can leverage the marketplace fulfilment and order management facilities available to them.",
          "Customer Trust: Presence on a recognised shopping platform can put brands in front of customers who like to shop through recognised marketplaces.",
          "Market Expansion: For brands that want to expand on the online front and tap more markets, Myntra can be an effective additional channel to sell.",
        ],
      },
      {
        type: "paragraph",
        text: "But standing out in the marketplace isn't always enough to secure sales. Other factors such as product demand, pricing, catalogue strength, availability and operations performance are also important to consider.",
      },
      {
        type: "heading2",
        text: "Who Can Sell on Myntra? Understanding Brand Eligibility",
      },
      {
        type: "paragraph",
        text: "Myntra follows a brand-led onboarding process. It is important for businesses to know if their products, category and brand credentials are aligned before proceeding with registration.",
      },
      {
        type: "paragraph",
        text: "During the initial consultation, I recommend reviewing the following:",
      },
      {
        type: "list",
        items: [
          "Legal & Tax Compliance: Business has the requisite legal and tax registrations.",
          "Brand Ownership: Applicant has a company that owns the brand or is authorised to sell products of another brand.",
          "Trademark Status: You need to know if there is a registered trademark or trademark application details.",
          "Product Category: Whether the product belongs to an in-scope category.",
          "Catalogue Readiness: Whether the brand has complete product info, photos, sizing info and inventory.",
          "Brand Presentation: The extent to which a brand has a distinct identity and product portfolio presented appropriately.",
        ],
      },
      {
        type: "paragraph",
        text: "The intention of this evaluation is to gauge whether there are any issues pre-application. It is always preferable to find out that a requirement is not met before applying.",
      },
      {
        type: "heading2",
        text: "Why Do Myntra Seller Applications Get Rejected or Delayed?",
      },
      {
        type: "paragraph",
        text: "If your brand's application is not complete or aligned with the platform, it will be difficult to onboard—even if you have quality products.",
      },
      {
        type: "paragraph",
        text: "Some typical areas worth highlighting are:",
      },
      {
        type: "list",
        items: [
          "Inadequate Record Keeping / Documentation: Lack of business, tax and brand ownership documentation.",
          "Verification Gaps: Mismatched information or inadequate evidence of authorisation.",
          "Category Mismatch: Products that do not belong in the correct category of the platform.",
          "Incomplete Listings: Lack of descriptions—just images with no sizing or product specifications.",
          "Weak Brand Positioning: A product or brand that lacks a clearly communicated identity or value statement.",
          "Operational Gaps: Constraints in pre-defined inventory, fulfilment, packaging and order dispatch.",
        ],
      },
      {
        type: "paragraph",
        text: "These potential issues are what the team at Arhaan Shaikh's consultancy works to recognize well before one applies to launch on the Myntra platform. It enables the brand to be well prepared for onboarding—though at the end of the day, Myntra has the final call.",
      },
      {
        type: "heading2",
        text: "Which Account Metrics Should Myntra Sellers Monitor?",
      },
      {
        type: "paragraph",
        text: "Being listed does not equate to building a successful marketplace business. Brands need to constantly track how their products are performing.",
      },
      {
        type: "paragraph",
        text: "Some important metrics to monitor include:",
      },
      {
        type: "list",
        items: [
          "Product Views: How many customers are viewing individual listings.",
          "Conversion Rate: What percentage of visitors are placing orders.",
          "Returns: Which products are being returned more frequently and why.",
          "Stock Availability: Whether best-selling sizes, colours and options are always in stock.",
          "Sales Performance: Which products and categories are generating revenue.",
          "Listing Effectiveness: Whether images, pricing and product information help customers make buying decisions.",
        ],
      },
      {
        type: "paragraph",
        text: "I encourage my clients to look at these measurements at regular intervals rather than determine marketplace success solely by looking at gross sales. They indicate whether the underlying issue is product demand, pricing, inventory, or catalogue quality.",
      },
      {
        type: "heading2",
        text: "How We Help Brands Prepare for Myntra Onboarding",
      },
      {
        type: "list",
        items: [
          "Strategic Decision-Making: The goal of any consultation with Arhaan Shaikh is not just to get registered on a marketplace, but to help your brand make smarter commercial decisions.",
          "Core Consulting Areas: Brand eligibility, qualification readiness, suitable category mapping, the right commercial pitch, and onboarding considerations.",
          "End-to-End Coordination: Our team assists with assembling and coordinating documentation, catalogue planning, product details, and operational readiness.",
          "Pre-Application Clarity: The goal is to help brands understand what is needed prior to applying, eliminate unnecessary onboarding gaps, and prepare for post-approval responsibilities.",
          "Structured Scale: Growing on a marketplace requires both planning and execution. Early guidance makes the process smoother, structured, and built for sustainable growth.",
        ],
      },
      {
        type: "heading2",
        text: "Frequently Asked Questions",
      },
      {
        type: "heading3",
        text: "How do I register my brand on Myntra?",
      },
      {
        type: "paragraph",
        text: "You can begin through the official Myntra Partner Portal at [partners.myntrainfo.com](https://partners.myntrainfo.com/). The process involves submitting business and brand details, completing verification and meeting the platform's onboarding requirements.",
      },
      {
        type: "heading3",
        text: "What documents are required to sell on Myntra?",
      },
      {
        type: "paragraph",
        text: "Commonly required documents include GST registration, business PAN, bank details, a cancelled cheque, trademark documentation or brand authorisation, and authorised signatory details. The exact requirements should be confirmed through Myntra.",
      },
      {
        type: "heading3",
        text: "Does Myntra accept new D2C brands?",
      },
      {
        type: "paragraph",
        text: "New D2C brands can explore Myntra's onboarding programmes, including initiatives designed for homegrown brands. Eligibility depends on the programme conditions, brand credentials and platform approval.",
      },
      {
        type: "heading3",
        text: "How long does Myntra seller approval take?",
      },
      {
        type: "paragraph",
        text: "Myntra indicates that qualifying brands may be onboarded within 15 business days. During major sale periods, the process can take up to 45 business days.",
      },
      {
        type: "heading3",
        text: "Can I sell on Myntra without owning a trademark?",
      },
      {
        type: "paragraph",
        text: "If you are selling another brand's products, you may need a brand authorisation letter or NOC. If you own the brand, trademark documentation may be required. Confirm the exact requirements with Myntra before applying.",
      },
      {
        type: "heading3",
        text: "Does Myntra charge sellers a commission?",
      },
      {
        type: "paragraph",
        text: "Myntra's commercial terms depend on the seller, category and applicable arrangement. Brands should obtain and review their specific commercial terms before agreeing to sell on the platform.",
      },
      {
        type: "heading3",
        text: "What should I do after getting Myntra approval?",
      },
      {
        type: "paragraph",
        text: "After approval, you should finalise commercial terms, prepare your catalogue, complete product image and information requirements, configure inventory and fulfilment processes, and prepare for order management and payment reconciliation.",
      },
    ],
  },

  // =========================================================================
  // 2. CONVERSION IS A CONTEXT PROBLEM
  // =========================================================================
  {
    id: "d2c-website-traffic-but-no-sales",
    title: "Why Your D2C Website Gets Traffic but No Sales",
    titleEmphasis: "No Sales",
    slug: "d2c-website-traffic-but-no-sales",
    category: "conversion-is-a-context-problem",
    excerpt:
      "Traffic alone does not guarantee revenue. Discover why D2C websites struggle to convert visitors—from audience targeting and mobile UX to retargeting—and how to turn clicks into consistent sales.",
    featuredImage: "/Blog images/Traffic Without Sales_ D2C Growth Puzzle.webp",
    publishedAt: "2026-11-23",
    seoTitle: "Why Your D2C Website Gets Traffic but No Sales",
    seoDescription:
      "Getting traffic but no sales on your D2C website? Discover how to improve website conversions, attract the right audience and increase eCommerce sales.",
    intro:
      "When traffic comes to your D2C website, it's a positive thing. People are finding your brand on an ad, social media, Google search, or through another marketing avenue. But traffic does not always convert to sales. Hundreds or thousands of people visit their websites, and many D2C brands invest in marketing, but still can't convert that to consistent revenue. This can be frustrating, particularly if you have been campaigning through advertising and your website statistics reveal that people are visiting your site, but not clicking your links. Sometimes it's not the fault of your marketing campaigns. In some instances, visitors come to your website and simply don't see enough to buy, but in other instances, it's the website experience, pricing, product presentation or checkout process that's influencing their buying decision.",
    content: [
      {
        type: "heading2",
        text: "Attracting the Right Audience Through Your Marketing Campaigns",
      },
      {
        type: "list",
        items: [
          "If all of a company's web traffic fails to get them sales, some of the first things to check are the quality of the visitors to a website. A high number of clicks may look impressive, but they don't necessarily mean that people are interested in purchasing the products.",
          "A fashion company, for example, could be advertising using beautiful product pictures and overall promotional content. The advertising can get a large number of clicks as the creative is interesting to people. If the campaign is attracting users who are just browsing or not interested in the product category, however, they will not purchase on the website.",
          "That's why it's crucial to reach the right person when it comes to performance marketing. Campaigns need to target those who are more likely to be interested in the products through their interests, behaviour, demographics, and buying intent.",
          "Arhaan Shaikh recommends that businesses go beyond clicks and impressions to see if the traffic is relevant to their business or not. Businesses can measure metrics like add-to-cart rate, conversion rate, cost per purchase, and ROAS to see if their campaigns are bringing in people who are interested in their business or just visiting their website. He advises optimising the targeting of the audience, running a few different creatives and tweaking the messaging in campaigns to draw in more potential customers.",
        ],
      },
      {
        type: "heading2",
        text: "Creating a Smooth and Engaging Website Experience",
      },
      {
        type: "list",
        items: [
          "The visitor-to-website experience is a key factor in converting visitors into customers. Even when the target audience is successfully reached through advertisements, a bad website user experience can cause the audience to leave before they make a purchase.",
          "When it comes to shopping for products on a mobile device, users want it to be easy to navigate websites, load quickly and be simple to use. Visitors will lose interest if it is difficult to locate products, they don't grasp what is being offered or they're not able to navigate from one page to another.",
          "A few key factors that companies can consider are: Website loading speed, Mobile friendliness, Navigation and product categories, Product searching and discovery, Clear product information, Easy access to important pages, and an Easy checkout process.",
          "Mobile experience is an important touchpoint and a lot of D2C customers use their mobile devices to browse and make purchases. If a website is optimized for desktop but does not feature legible text, easy navigation or buttons placed in the right spot, it can impact the shopping experience on the mobile device.",
          "Arhaan Shaikh recommends that companies consider their website from a customer's perspective and evaluate what can be done to enhance the customer shopping experience. The goal should be to enable visitors to find a product, comprehend what it has to offer and make a purchase with little hassle.",
        ],
      },
      {
        type: "heading2",
        text: "Retargeting Visitors Who Showed Interest",
      },
      {
        type: "list",
        items: [
          "Not all customers buy upon their first visit to a D2C site. They may read about products, do comparisons, look at reviews or wait for a better deal before buying.",
          "This doesn't necessarily mean that they are not interested in your brand. It might just be a matter of time or another encounter before they make their purchase.",
          "Brands can reconnect with these visitors through ads on platforms like Meta and Google via retargeting.",
          "For instance, when a visitor to a website sees a certain item but does not buy it, the brand can display ads to the visitor for that product or for a similar product. Even those who add products to their cart but do not make a purchase can be targeted in reminder campaigns.",
        ],
      },
      {
        type: "heading2",
        text: "How Arhaan Shaikh Advises D2C Brands on Improving Website Conversions",
      },
      {
        type: "paragraph",
        text: "Getting traffic to a website is just one stage of digital marketing. The true test lies in knowing what happens once the visitors arrive at the website, and knowing what holds them back from making a purchase. If you are a D2C brand, your marketing and website optimisation efforts need to be coordinated to increase conversions. Advertising campaigns can drive traffic to the website, but the website experience should help the potential customer easily navigate the site to better understand the product, increase their trust in the brand and complete the purchase.",
      },
      {
        type: "heading2",
        text: "Frequently Asked Questions",
      },
      {
        type: "heading3",
        text: "Why does my D2C website get traffic but no sales?",
      },
      {
        type: "paragraph",
        text: "A D2C website may receive traffic but generate very few sales because of poor audience targeting, unclear product information, high pricing, lack of trust, slow loading speed, complicated checkout processes or an unsuitable website experience. Analysing customer behaviour and conversion data can help identify the specific problem.",
      },
      {
        type: "heading3",
        text: "How can I increase conversions on my D2C website?",
      },
      {
        type: "paragraph",
        text: "You can improve conversions by optimising product pages, improving mobile experience, simplifying checkout, displaying customer reviews, communicating offers clearly, improving website speed and targeting the right audience through marketing campaigns.",
      },
      {
        type: "heading3",
        text: "Is website traffic important for D2C brands?",
      },
      {
        type: "paragraph",
        text: "Website traffic is important because it brings potential customers to your online store. However, traffic alone does not guarantee sales. The quality of traffic and the experience customers have on your website play an equally important role in generating conversions.",
      },
      {
        type: "heading3",
        text: "How do I know if my advertising campaigns are bringing the right traffic?",
      },
      {
        type: "paragraph",
        text: "You can evaluate the quality of your advertising traffic by analysing metrics such as add-to-cart rate, conversion rate, cost per purchase, ROAS and customer acquisition cost. These metrics provide a better understanding of whether your campaigns are attracting visitors who are likely to purchase.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  num: string;
  challenge: string;
  decision: string;
  impact: string;
  summary: string;
  ownership?: string;
  constraints?: string;
  platform?: string[];
  client?: string;
  period?: string;
  role?: string;
  tags: string[];
  category: string[];
};

export const projectCategories = [
  "All",
  "Cloud",
  "Full Stack",
  "DevOps",
  "Fintech",
  "E-Commerce",
  "Salesforce",
];

export const projects: Project[] = [
  {
    slug: "asda-digital-transformation",
    title: "Asda Digital Transformation",
    client: "Asda",
    period: "Retail Platform Transformation",
    role: "Solution Architect / Tech Lead",
    summary:
      "Led technical direction across Asda's ecommerce platform, covering architecture, delivery guidance, integrations, platform evolution, and major incident support across a complex retail ecosystem.",
    challenge:
      "Asda's ecommerce platform had to evolve within the constraints of an existing architecture, including gaps around SSR, capacity limitations, and the complexity of multiple enterprise integrations across a large retail estate.",
    decision:
      "Defined the technical approach across new features, migrations, integrations, and incident fixes, giving engineering teams clear direction across SFCC, PWA, cloud integrations, operational tooling, and delivery priorities.",
    impact:
      "Helped maintain and evolve a large-scale ecommerce platform by improving technical direction, supporting end-to-end delivery, and resolving high-priority production and architectural issues within tight timelines.",
    ownership:
      "Owned solution design, architectural direction, technical decision-making, integration approach, delivery guidance, and production support during major incidents while teams implemented across multiple workstreams.",
    constraints:
      "Had to balance platform improvement with legacy architecture constraints, missing SSR capability, capacity concerns, delivery timelines, and the operational complexity of a multi-system retail platform.",
    platform: [
      "SFCC",
      "PWA Kit",
      "Cloudflare",
      "AWS Lambda",
      "Azure",
      "Azure DevOps",
      "JSCAPE",
      "New Relic",
      "Blue Yonder",
      "Worldline",
      "Dynamic Yield",
      "Bazaarvoice",
      "Adobe",
      "Amplience",
    ],
    tags: ["SFCC", "PWA Kit", "Cloudflare", "Azure DevOps", "Platform Delivery"],
    category: ["Full Stack", "Cloud", "E-Commerce"],
    num: "01",
  },
  {
    slug: "suncorp-fintech-platform",
    title: "Suncorp Group – Fintech Platform",
    client: "Suncorp Group",
    period: "Fintech Platform Modernisation",
    role: "Tech Lead",
    summary:
      "Technical leadership across fintech platform delivery, with a focus on scalable architecture, cloud efficiency, and operational resilience.",
    challenge:
      "Monolithic financial services platform struggling under peak traffic loads in Australia.",
    decision:
      "Designed serverless architecture with Application Load Balancer for elastic scaling.",
    impact:
      "99.9% uptime, 60% reduction in infrastructure costs during off-peak.",
    ownership:
      "Led the technical approach across frontend, platform integration, and cloud architecture decisions for a high-volume fintech environment.",
    constraints:
      "Needed to improve scale and cost efficiency without compromising reliability during high-demand periods and business-critical customer journeys.",
    platform: ["React", "Node.js", "Serverless", "Application Load Balancer", "Cloud Platform"],
    tags: ["React", "Serverless", "ALB", "Fintech"],
    category: ["Full Stack", "Fintech", "Cloud"],
    num: "02",
  },
  {
    slug: "falabella-ecommerce-platform",
    title: "Falabella – E-Commerce Platform",
    client: "Falabella",
    period: "High-Traffic Commerce Platform",
    role: "Tech Lead",
    summary:
      "Large-scale commerce delivery across frontend performance, cloud platform design, and service integration for a high-traffic retail platform.",
    challenge:
      "Latin America's largest retailer needed a high-traffic web platform handling millions of daily users.",
    decision:
      "Built Next.js SSR platform on GCP with Node.js microservices for catalogue and checkout.",
    impact:
      "3x improvement in page load speed, significant uplift in conversion rates.",
    ownership:
      "Led technical design and delivery across the frontend platform, service integration, and cloud architecture needed to support large-scale commerce traffic.",
    constraints:
      "Performance, scale, and user experience had to be improved while supporting a large and commercially critical retail platform.",
    platform: ["Next.js", "React", "Node.js", "GCP", "Microservices"],
    tags: ["Next.js", "GCP", "Node.js", "React.js"],
    category: ["Full Stack", "E-Commerce", "Cloud", "Salesforce"],
    num: "03",
  },
  {
    slug: "rhinogram-hipaa-healthcare",
    title: "Rhinogram – HIPAA Healthcare",
    client: "Rhinogram",
    period: "Healthcare Platform Delivery",
    role: "Senior Full Stack Engineer",
    summary:
      "HIPAA-compliant product engineering with real-time communications, payments, and operations-focused dashboards.",
    challenge:
      "Healthcare communication platform needed HIPAA compliance with real-time messaging and payments.",
    decision:
      "Built compliant infra with Twilio integration, Fusebill payments, RBAC and analytics dashboard.",
    impact:
      "Full HIPAA certification, 10k+ active healthcare providers onboarded.",
    ownership:
      "Built across frontend, backend, integrations, and infrastructure while supporting compliance, messaging, payments, and dashboard capabilities.",
    constraints:
      "The platform had to support strict healthcare compliance requirements while remaining usable in day-to-day operations.",
    platform: ["React", "Node.js", "Docker", "Kubernetes", "AWS", "Twilio", "Fusebill"],
    tags: ["React", "Node.js", "Docker", "K8s", "AWS", "Twilio"],
    category: ["Full Stack", "DevOps", "Cloud"],
    num: "04",
  },
  {
    slug: "sentinel-ldk-toolkit",
    title: "Sentinel LDK Toolkit",
    client: "Gemalto / Thales",
    period: "Licensing Product Engineering",
    role: "Full Stack Developer",
    summary:
      "Enterprise product engineering across licensing workflows, desktop-web integration, and hardware-connected systems.",
    challenge:
      "License management system required hardware interaction and cross-platform PWA support.",
    decision:
      "Developed Node PWA-kit with Angular frontend and C/C++ hardware layer at Gemalto.",
    impact:
      "Deployed across enterprise clients globally, reducing licence fraud by 80%.",
    ownership:
      "Contributed across application engineering, product tooling, and hardware-connected workflows in a complex enterprise licensing environment.",
    constraints:
      "The solution had to support enterprise-grade licensing controls, cross-platform delivery, and integration with hardware-dependent workflows.",
    platform: ["Node.js", "Angular", "C/C++", "PWA", "Licensing Toolkit"],
    tags: ["Node.js", "Angular", "C/C++", "PWA"],
    category: ["Full Stack"],
    num: "05",
  },
  {
    slug: "sentinel-analytics-dashboard",
    title: "Sentinel Analytics Dashboard",
    client: "Gemalto / Thales",
    period: "Analytics & Licensing Insights",
    role: "Full Stack Developer",
    summary:
      "Internal analytics tooling for licensing visibility, usage reporting, and more informed product decision-making.",
    challenge:
      "No visibility into licence usage patterns — business decisions made on guesswork.",
    decision:
      "Built analytics engine with D3.js visualisations, R-script processing, and AWS backend.",
    impact:
      "Real-time insights for 500+ enterprise accounts, data-driven licensing strategy.",
    ownership:
      "Built analytics-oriented product functionality across data processing, backend services, and dashboard visualisation.",
    constraints:
      "The product needed to convert fragmented licensing data into reporting that was understandable and useful for decision-making.",
    platform: ["D3.js", "React", "Node.js", "AWS", "R"],
    tags: ["D3.js", "React", "Node.js", "AWS", "R"],
    category: ["Full Stack", "Cloud"],
    num: "06",
  },
];

export type Insight = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  published: string;
  readingTime: string;
  tags: string[];
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "sfcc-architecture-principles",
    title: "SFCC Architecture Principles for Large Retail Teams",
    description:
      "Practical architecture principles for scaling Salesforce Commerce Cloud delivery across retail teams, integrations, and platform constraints.",
    excerpt:
      "A short architecture note on keeping SFCC delivery maintainable as retail scope, integrations, and frontend complexity grow.",
    published: "2026-04-03",
    readingTime: "4 min read",
    tags: ["SFCC", "Salesforce Commerce Cloud", "Retail Architecture"],
    body: [
      "Strong SFCC delivery usually breaks down when the platform becomes a dumping ground for every business request. The first principle is to keep clear ownership boundaries between commerce functionality, integrations, content systems, and operational tooling.",
      "The second principle is to design for retail change. Promotions, pricing rules, seasonal content, and third-party dependencies all move quickly, so architecture has to support controlled change rather than one-off fixes.",
      "The third principle is operational visibility. Large retail delivery needs clear observability, incident paths, and enough telemetry to understand where customer journeys are breaking under load or integration failure.",
    ],
  },
  {
    slug: "iam-delivery-principles",
    title: "IAM Delivery Principles for Customer-Facing Platforms",
    description:
      "A practical guide to identity and access delivery for customer-facing ecommerce platforms, including integration, scale, and incident considerations.",
    excerpt:
      "Identity work is rarely just authentication. On real ecommerce platforms it becomes an exercise in delivery, integration, and operational resilience.",
    published: "2026-04-03",
    readingTime: "4 min read",
    tags: ["IAM", "Ecommerce", "Platform Delivery"],
    body: [
      "IAM decisions affect customer experience, security posture, support flows, and release confidence all at once. For customer-facing platforms, identity should be treated as a product capability, not just an integration task.",
      "A practical IAM architecture needs clear ownership of user journeys, fallback behaviour during outages, and alignment between frontend, backend, and support teams. Otherwise even small auth issues become major business incidents.",
      "The most effective IAM delivery balances security with operability. That means clear logging, measured rollout plans, and realistic support for edge cases rather than only designing for the ideal journey.",
    ],
  },
  {
    slug: "pragmatic-ai-for-enterprise-architecture",
    title: "Pragmatic AI for Enterprise Architecture",
    description:
      "How to position AI in enterprise architecture work without hype, with a focus on practical value, delivery constraints, and governance.",
    excerpt:
      "AI is most useful in enterprise settings when it solves a concrete workflow or decision problem rather than being treated as a platform strategy on its own.",
    published: "2026-04-03",
    readingTime: "3 min read",
    tags: ["AI", "Enterprise Architecture", "Delivery"],
    body: [
      "Enterprise teams often over-scope AI by starting with the technology instead of the operating problem. The better approach is to begin with a constrained workflow, define the expected outcome, and then evaluate whether AI meaningfully improves it.",
      "Architecture leadership matters because AI introduces new concerns around data handling, observability, governance, and failure modes. Those concerns should be part of the design from the start rather than patched in later.",
      "The most credible AI work in enterprise environments is usually incremental. Small, useful improvements to workflow, insight, or support often create more value than ambitious but weakly grounded platform narratives.",
    ],
  },
];

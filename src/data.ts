/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CollaborationOption, ExperienceSector, AwardItem } from './types';

export const HERO_TAGLINES = [
  "Founder. Investor. Advisor.",
  "Building & Scaling Tomorrow's Ventures.",
  "Strategic Partnership & Business Growth."
];

export const ABOUT_LEAD = {
  name: "Harry Hussain",
  headline: "Founder, Investor, and Strategic Business Builder",
  description1: "With a track record of launching, scaling, and advising multi-million pound enterprises, I help modern brands, safety-critical companies, and disruptive technology startups transition from vision to high-performance scale.",
  description2: "Based in the UK, I operate globally, actively acquiring businesses, backing ambitious founders with angel investment, and advising executive teams on growth strategies, high-risk security operations, and property ventures."
};

export const COLLABORATION_OPTIONS: CollaborationOption[] = [
  {
    id: "strategic-partnerships",
    title: "Strategic Partnerships",
    description: "Aligning complementary capabilities and assets to co-create value, enter new markets, and construct high-performance joint ventures.",
    iconName: "Handshake"
  },
  {
    id: "advisory-roles",
    title: "Advisory Roles",
    description: "Providing board-level oversight, strategic guidance, and deep problem-solving expertise for high-stakes leadership teams.",
    iconName: "Briefcase"
  },
  {
    id: "angel-investing",
    title: "Angel Investing",
    description: "Backing forward-thinking founders with early-stage capital, mentorship, and access to an extensive global network.",
    iconName: "TrendingUp"
  },
  {
    id: "business-acquisitions",
    title: "Business Acquisitions",
    description: "Actively seeking stable or distressed business acquisitions to inject fresh capital, systemization, and scale.",
    iconName: "Workflow"
  },
  {
    id: "property-opportunities",
    title: "Property Opportunities",
    description: "Investing in commercial real estate developments, portfolio acquisitions, and high-yield regeneration projects.",
    iconName: "Building2"
  },
  {
    id: "startup-mentoring",
    title: "Startup Mentoring",
    description: "Guiding pre-seed and Series-A founders through the complexities of validation, customer acquisition, and fundraising.",
    iconName: "Users"
  },
  {
    id: "shareholder-partner",
    title: "Strategic Shareholding",
    description: "Joining existing high-potential businesses as a strategic partner and shareholder to accelerate enterprise value.",
    iconName: "PieChart"
  },
  {
    id: "growth-scaling",
    title: "Growth & Scaling",
    description: "Architecting bespoke hyper-growth strategies, pricing structures, and systemization playbooks for scaleups.",
    iconName: "Sparkles"
  }
];

export const EXPERIENCE_SECTORS: ExperienceSector[] = [
  {
    id: "security",
    title: "Security & Risk Management",
    role: "Strategic Board Member & Investor",
    description: "Spearheading national-scale security frameworks and consulting on mission-critical safety assets. Operating in high-compliance sectors with a focus on defense, secure logistics, and premium guard operations.",
    highlights: ["Integrated legacy guarding with AI surveillance", "Scaled enterprise compliance architecture", "Advised on multi-million pound secure transport contracts"],
    iconName: "ShieldAlert"
  },
  {
    id: "property",
    title: "Property & Infrastructure",
    role: "Portfolio Principal",
    description: "Acquiring, developing, and managing premium commercial and high-density residential portfolios. Identifying under-valued real estate assets to unlock value through repositioning and strategic management.",
    highlights: ["Sourced high-yield regional developments", "Established long-term institutional leases", "Optimized capital gains via tax-efficient structures"],
    iconName: "Home"
  },
  {
    id: "technology",
    title: "Tech Startups & SaaS",
    role: "Angel Investor & Mentor",
    description: "Backing disruptive software platforms that automate workflows, secure digital identity, and optimize logistical pipelines. Leveraging our operational experience to fast-track market-fit.",
    highlights: ["Seed-invested in logistics SaaS startups", "Structured secondary monetization strategies", "Mentored founders on product-led growth"],
    iconName: "Cpu"
  },
  {
    id: "logistics",
    title: "Logistics & Enterprise Scale",
    role: "Advisory Partner",
    description: "Optimizing supply-chain resilience, commercial fleet operations, and last-mile efficiency. Helping logistics partners capture higher margins through modern ERP integration.",
    highlights: ["Advised on cross-border custom workflows", "Drafted route-efficiency protocol guidelines", "Supported corporate restructuring & buyouts"],
    iconName: "Truck"
  }
];

export const RECOGNITIONS: AwardItem[] = [
  {
    id: "milestone-1",
    year: "2025",
    title: "Enterprise Advisory of the Year",
    issuer: "UK Business Leaders Alliance",
    description: "Recognized for driving strategic growth and scale playbooks across diverse property and security ventures."
  },
  {
    id: "milestone-2",
    year: "2024",
    title: "Keynote Speaker: The Future of Scaling",
    issuer: "Global Founders Summit",
    description: "Delivered the opening keynote on structural systemization and self-managing company strategies."
  },
  {
    id: "milestone-3",
    year: "2023",
    title: "Angel Investor Spotlight",
    issuer: "Tech Ventures Quarterly",
    description: "Featured for early-stage investments in security tech and last-mile delivery SaaS systems."
  },
  {
    id: "milestone-4",
    year: "2022",
    title: "Milestone: £50M+ Cumulative Scale Managed",
    issuer: "Private Equity Portfolio Group",
    description: "Surpassed fifty million pounds in total transaction and management valuation across managed portfolios."
  }
];

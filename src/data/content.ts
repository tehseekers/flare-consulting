import {
  Search,
  Users,
  Briefcase,
  Monitor,
  Cpu,
  DollarSign,
  Wrench,
  Globe,
  ShieldCheck,
  Rocket,
  Award,
  Zap,
  CheckCircle,
  HeadphonesIcon,
  Clock,
  Target,
  Scale,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { value: 500, suffix: '+', label: 'Placements Made' },
  { value: 10, suffix: '+', label: 'Years Expertise' },
  { value: 2, suffix: '', label: 'Countries' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const HERO_FLOAT_CARDS = [
  {
    icon: Search,
    color: '#3b82f6',
    title: 'Executive Search',
    detail: 'VP Engineering placed — FinTech sector',
    badge: 'Placed',
  },
  {
    icon: Users,
    color: '#0F766E',
    title: 'Permanent Hire',
    detail: 'Senior Data Scientist — Regional Bank',
    badge: 'Onboarded',
  },
  {
    icon: Briefcase,
    color: '#f59e0b',
    title: 'Contract Staffing',
    detail: '12-person DevOps team deployed in 8 weeks',
    badge: 'Active',
  },
];

export const SERVICES = [
  {
    icon: Search,
    title: 'Executive Search',
    description:
      'Our Executive Search services focus on identifying and securing senior leadership talent who can drive strategic growth and transformation. We adopt a targeted and confidential approach to source high-calibre executives aligned with your organisation\'s vision and culture.',
    color: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Permanent Placement',
    description:
      'Our Permanent Placement services are focused on identifying and securing high-quality talent aligned with your organisation\'s long-term goals and culture. We leverage structured sourcing and rigorous evaluation to ensure the right fit for sustained success.',
    color: '#0F766E',
  },
  {
    icon: Briefcase,
    title: 'Contract Staffing',
    description:
      'Our Contract Staffing services provide flexible access to skilled professionals, enabling organisations to scale their workforce in line with project demands. We ensure timely deployment of quality talent while maintaining compliance and operational efficiency.',
    color: '#f59e0b',
  },
];

export const INDUSTRIES = [
  {
    icon: Monitor,
    label: 'Information Technology',
    description:
      'High-quality technology talent across enterprise systems, infrastructure, managed services, and application development — helping organisations build and scale robust digital capabilities.',
    color: '#3b82f6',
  },
  {
    icon: Cpu,
    label: 'Digital Transformation',
    description:
      'From cloud and DevOps to AI/ML and data analytics, we connect businesses with the talent needed to accelerate transformation and stay competitive in a rapidly evolving landscape.',
    color: '#0ea5e9',
  },
  {
    icon: DollarSign,
    label: 'FinTech',
    description:
      'Specialised talent across payments, lending, blockchain, compliance, and product engineering — enabling innovation and speed to market in the fast-growing FinTech ecosystem.',
    color: '#0F766E',
  },
  {
    icon: Wrench,
    label: 'Engineering & Technology Services',
    description:
      'Skilled engineering professionals to support complex, large-scale projects, ensuring delivery excellence and operational continuity.',
    color: '#f59e0b',
  },
];

export const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Access to Top Talent, Globally',
    description:
      'Our extensive networks across Asia-Pacific and beyond enable us to quickly identify and deliver high-calibre local and international talent — giving you a competitive edge.',
    color: '#3b82f6',
  },
  {
    icon: CheckCircle,
    title: 'Quality-First, Right-Fit Hiring',
    description:
      'We go beyond resumes. Every candidate is carefully screened for technical expertise, experience, and cultural alignment — ensuring they contribute from day one.',
    color: '#0F766E',
  },
  {
    icon: Zap,
    title: 'Fast, Agile & Scalable Delivery',
    description:
      'Whether you need one specialist or an entire team, we respond quickly and scale seamlessly to meet your business demands.',
    color: '#f59e0b',
  },
  {
    icon: Target,
    title: 'Consultative, Outcome-Driven Approach',
    description:
      'We don\'t just fill roles — we solve hiring challenges. By understanding your business goals, we deliver tailored talent solutions that drive real impact.',
    color: '#0ea5e9',
  },
];

export const APPROACH = [
  {
    icon: HeadphonesIcon,
    title: 'Client-Centric',
    description:
      'We focus on understanding your business needs and delivering tailored talent solutions for every engagement.',
    color: '#3b82f6',
  },
  {
    icon: Clock,
    title: 'Speed & Efficiency',
    description:
      'Quick turnaround times without compromising on quality — responsive delivery from first brief to final placement.',
    color: '#0F766E',
  },
  {
    icon: Award,
    title: 'Quality-Driven',
    description:
      'Rigorous screening processes ensure the right fit for every role, every time.',
    color: '#f59e0b',
  },
  {
    icon: Scale,
    title: 'Scalable Solutions',
    description:
      'Support for both niche, high-value hiring and large-scale workforce ramp-ups with equal precision.',
    color: '#0ea5e9',
  },
];

export const WHY_US = [
  {
    icon: Globe,
    title: 'Singapore-Based, Regional Reach',
    description:
      'Headquartered in Singapore with a strong operational presence in India — combining local expertise with regional scale across Asia-Pacific.',
    color: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Wide & Diverse Talent Pool',
    description:
      'Access to a deep and diverse network of candidates across technology, finance, and engineering disciplines.',
    color: '#0F766E',
  },
  {
    icon: Zap,
    title: 'Agile & Responsive',
    description:
      'Our agile delivery model adapts quickly to your hiring needs — from urgent placements to large-scale workforce ramps.',
    color: '#f59e0b',
  },
  {
    icon: ShieldCheck,
    title: 'Long-Term Partnerships',
    description:
      'We build lasting relationships with clients and candidates alike, anchored by trust, transparency, and results.',
    color: '#0ea5e9',
  },
];

export const ABOUT_BULLETS = [
  { icon: Rocket, text: 'Pure-play staffing firm with precision talent matching across Asia-Pacific', color: '#3b82f6' },
  { icon: Globe, text: 'Dual presence in Singapore and India enabling cost-effective, round-the-clock delivery', color: '#0F766E' },
  { icon: Users, text: 'Consultants with deep market insight and extensive regional talent networks', color: '#0F766E' },
  { icon: Award, text: 'Client-centric and outcome-driven — focused entirely on your business success', color: '#f59e0b' },
];

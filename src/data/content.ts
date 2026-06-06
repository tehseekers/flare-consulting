import {
  Brain,
  Cloud,
  Code2,
  Database,
  FolderKanban,
  Lightbulb,
  Globe,
  ShieldCheck,
  Layers,
  Rocket,
  Users,
  TrendingUp,
  CheckCircle,
  Award,
  Zap,
  HeadphonesIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'AI & Data', href: '#expertise' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 10, suffix: '+', label: 'Years Expertise' },
  { value: 2, suffix: '', label: 'Countries' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
];

export const HERO_FLOAT_CARDS = [
  {
    icon: Brain,
    color: '#3b82f6',
    title: 'AI Engine Deployed',
    detail: 'Credit Risk Model — 94.7% accuracy',
    badge: 'Live',
  },
  {
    icon: Cloud,
    color: '#0ea5e9',
    title: 'Cloud Migration',
    detail: '200+ workloads — 55% cost savings',
    badge: 'Completed',
  },
  {
    icon: Database,
    color: '#10b981',
    title: 'ERP Go-Live',
    detail: 'SAP S/4HANA — 5 entities unified',
    badge: 'Active',
  },
];

export const SERVICES = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'End-to-end AI strategy, model development, and intelligent automation that delivers measurable business outcomes.',
    color: '#3b82f6',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Seamless cloud migration, multi-cloud architecture design, and continuous cost optimisation across AWS, Azure, and GCP.',
    color: '#0ea5e9',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description:
      'Custom enterprise applications, scalable APIs, and digital products built with modern technology stacks.',
    color: '#8b5cf6',
  },
  {
    icon: Database,
    title: 'ERP Implementations',
    description:
      'Full-cycle ERP delivery across SAP, Oracle, and Microsoft Dynamics — from blueprinting to go-live and beyond.',
    color: '#10b981',
  },
  {
    icon: FolderKanban,
    title: 'IT Project Management',
    description:
      'Structured governance and agile delivery for large-scale IT programmes, ensuring on-time, on-budget outcomes.',
    color: '#f59e0b',
  },
  {
    icon: Lightbulb,
    title: 'Digital Transformation',
    description:
      'Holistic consulting to reimagine processes, culture, and technology — turning strategy into enterprise-wide change.',
    color: '#ef4444',
  },
];

export const TECH_STACK = [
  'AWS', 'Azure', 'GCP', 'SAP', 'Oracle', 'Microsoft Dynamics',
  'React', 'Node.js', 'Python', 'TypeScript', 'Java', 'TensorFlow',
  'PyTorch', 'Docker', 'Kubernetes', 'Terraform', 'Power BI',
  'Tableau', 'PostgreSQL', 'MongoDB', 'Snowflake', 'Databricks',
  'Apache Kafka', 'Salesforce',
];

export const AI_CAPABILITY_BARS = [
  { label: 'Predictive Analytics', value: 96 },
  { label: 'Natural Language Processing', value: 94 },
  { label: 'Recommendation Engines', value: 93 },
  { label: 'Anomaly Detection', value: 91 },
  { label: 'Computer Vision', value: 89 },
  { label: 'Process Automation', value: 87 },
];

export const AI_TOP_METRICS = [
  { label: 'Model Accuracy', display: '94.7', suffix: '%', animateTo: 94.7, decimals: 1 },
  { label: 'Processing Speed', display: '10', suffix: 'x', animateTo: 10, decimals: 0 },
  { label: 'Records / Day', display: '2.4', suffix: 'B+', animateTo: 2.4, decimals: 1 },
  { label: 'Cost Reduction', display: '45', suffix: '%', animateTo: 45, decimals: 0 },
];

export const AI_CIRCLE_METRICS = [
  { label: 'Automation Coverage', value: 78, color: '#3b82f6' },
  { label: 'AI ROI Delivery', value: 94, color: '#0F766E' },
];

export const EXPERTISE_PILLARS = [
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Technology roadmaps aligned to your business goals and growth ambitions.',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Disciplined delivery from architecture through production deployment.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'Managed services and hypercare that keep your systems running at peak performance.',
  },
];

export const INDUSTRIES = [
  { icon: TrendingUp, label: 'Banking & Finance' },
  { icon: ShieldCheck, label: 'Healthcare' },
  { icon: Layers, label: 'Manufacturing' },
  { icon: Globe, label: 'Retail' },
  { icon: Award, label: 'Government' },
  { icon: Rocket, label: 'Logistics' },
  { icon: Zap, label: 'Telecommunications' },
  { icon: Users, label: 'Education' },
];

export const PORTFOLIO = [
  {
    tag: 'AI Implementation',
    tagBg: 'rgba(59,130,246,0.1)',
    tagColor: '#3b82f6',
    accentColor: '#3b82f6',
    title: 'Predictive Analytics Platform for Regional Bank',
    description:
      'Designed and deployed a machine-learning-driven credit risk scoring engine, replacing a legacy rules-based system and enabling real-time loan decisioning across 12 branches.',
    metrics: [
      { value: '40%', label: 'Reduction in default rate' },
      { value: '3x', label: 'Faster loan decisioning' },
    ],
  },
  {
    tag: 'Cloud Migration',
    tagBg: 'rgba(14,165,233,0.1)',
    tagColor: '#0ea5e9',
    accentColor: '#0ea5e9',
    title: 'Enterprise Cloud Transformation for Logistics Leader',
    description:
      'Migrated 200+ on-premise workloads to a hybrid AWS / Azure environment, implementing automated CI/CD pipelines and centralised observability across all business units.',
    metrics: [
      { value: '55%', label: 'Infrastructure cost savings' },
      { value: '99.99%', label: 'Uptime achieved' },
    ],
  },
  {
    tag: 'ERP Implementation',
    tagBg: 'rgba(16,185,129,0.1)',
    tagColor: '#10b981',
    accentColor: '#10b981',
    title: 'SAP S/4HANA Rollout for Manufacturing Conglomerate',
    description:
      'Led a 14-month greenfield SAP S/4HANA implementation across 5 legal entities, consolidating finance, procurement, and supply-chain operations onto a single platform.',
    metrics: [
      { value: '60%', label: 'Faster month-end close' },
      { value: '5', label: 'Entities unified' },
    ],
  },
];

export const WHY_US = [
  {
    icon: Globe,
    title: 'Asia-Pacific Expertise',
    description:
      'Deep on-the-ground knowledge of Singapore and India markets, regulatory environments, and enterprise ecosystems.',
    color: '#3b82f6',
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Delivery',
    description:
      'From advisory through implementation to managed support — one partner for the entire project lifecycle.',
    color: '#0F766E',
  },
  {
    icon: Award,
    title: 'Certified Professionals',
    description:
      'Our consultants hold certifications across AWS, Azure, SAP, Oracle, PMP, and leading AI frameworks.',
    color: '#0F766E',
  },
  {
    icon: Zap,
    title: 'Agile & Scalable',
    description:
      'Flexible engagement models and a proven agile delivery framework that adapts to your pace and scale.',
    color: '#f59e0b',
  },
];

export const ABOUT_BULLETS = [
  { icon: Rocket, text: 'Proven track record delivering complex IT programmes on schedule and within budget', color: '#3b82f6' },
  { icon: Globe, text: 'Dual presence in Singapore and India enabling cost-effective, round-the-clock delivery', color: '#0F766E' },
  { icon: Users, text: 'Senior consultants averaging 10+ years of hands-on enterprise experience', color: '#0F766E' },
  { icon: Award, text: 'Technology-agnostic approach focused entirely on your business outcomes', color: '#f59e0b' },
];

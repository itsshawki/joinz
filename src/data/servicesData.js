import { CheckCircle, TrendingUp, Unlock, UserCheck, PenTool, Monitor, Radio, LineChart } from 'lucide-react';

export const services = [
  {
    id: 'verification',
    title: 'Social Media Verification',
    icon: CheckCircle,
    shortDesc: 'Get the coveted blue badge across platforms to establish absolute authority and trust.',
    description: 'Our verification service helps public figures, brands, and businesses secure the verified badge on major social media platforms. Through our direct industry contacts and PR network, we ensure your application meets all stringent criteria, bypassing the usual automated rejection cycles.',
    benefits: [
      'Instant credibility and trust',
      'Protection against impersonation',
      'Higher ranking in search results',
      'Early access to new platform features'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Links to 5-10 high-tier press articles (or we can assist with PR)',
      'A complete, active profile with authentic engagement',
      'Business Registration documents',
      'Wikipedia or strong Google Knowledge Panel (preferred)'
    ],
    platforms: ['Instagram', 'Facebook', 'TikTok', 'X (Twitter)', 'YouTube', 'Snapchat'],
    process: [
      { step: 1, title: 'Eligibility Audit', desc: 'We analyze your current presence and press coverage.' },
      { step: 2, title: 'Profile Optimization', desc: 'We help structure your bio and content for approval.' },
      { step: 3, title: 'Direct Submission', desc: 'We submit your profile through our agency portal.' },
      { step: 4, title: 'Badge Application', desc: 'Successful verification usually within 2 to 15 business days.' }
    ],
    ctaText: 'Get Verified Now'
  },
  {
    id: 'reputation',
    title: 'Reputation Management',
    icon: TrendingUp,
    shortDesc: 'Clean up search results and protect your personal or brand image effectively.',
    description: 'We suppress negative search results and highlight positive content. Whether it is defamatory articles, exposed personal info, or misleading reviews, our strategic approach ensures your digital footprint accurately reflects your desired image.',
    benefits: [
      'Clean Google Search Page 1',
      'Removal or suppression of defamatory links',
      'Enhanced positive PR visibility',
      'Constant monitoring and alerts'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'List of negative links to target',
      'Current positive assets (websites, social media, PR)',
      'Proof of identity or representation',
      'Context behind the negative publications'
    ],
    platforms: ['Google Search', 'News Outlets', 'Review Sites (Trustpilot, Yelp, Google Maps)', 'Social Media'],
    process: [
      { step: 1, title: 'Digital Footprint Analysis', desc: 'Mapping all negative and positive assets.' },
      { step: 2, title: 'Strategy Formulation', desc: 'Planning legal removal vs suppression tactics.' },
      { step: 3, title: 'Execution', desc: 'Publishing high-authority content and issuing takedowns.' },
      { step: 4, title: 'Monitoring', desc: 'Ongoing tracking to ensure sustained clean results.' }
    ],
    ctaText: 'Protect Your Reputation'
  },
  {
    id: 'recovery',
    title: 'Account Recovery',
    icon: Unlock,
    shortDesc: 'Regain access to hacked, disabled, or compromised accounts safely.',
    description: 'Lost access to your primary channel of communication and business? We specialize in recovering disabled, hacked, or banned accounts quickly using internal rep contacts, avoiding the infinite loop of automated support desks.',
    benefits: [
      'Fast turnaround time',
      'No upfront risk (in most cases)',
      'Security audit post-recovery',
      'Direct human support'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Original email / phone number linked to the account',
      'Date the account was lost or disabled',
      'Screenshot of the disable/ban reason (if applicable)'
    ],
    platforms: ['Instagram', 'Facebook', 'TikTok', 'WhatsApp', 'Snapchat', 'YouTube', 'X (Twitter)', 'Telegram'],
    process: [
      { step: 1, title: 'Case Review', desc: 'Assessing the ban status or hack severity.' },
      { step: 2, title: 'Evidence Gathering', desc: 'Collecting necessary proof of ownership.' },
      { step: 3, title: 'Internal Escalation', desc: 'Pushing the case to direct platform reps.' },
      { step: 4, title: 'Account Restoration', desc: 'Access returned and new security measures applied.' }
    ],
    ctaText: 'Recover My Account'
  },
  {
    id: 'username',
    title: 'Username Claim',
    icon: UserCheck,
    shortDesc: 'Secure inactive or desired generic handles for your brand.',
    description: 'Your desired username is taken by an inactive account? Stop using underscores and numbers. We can claim inactive, non-generic usernames matching your legal trademarks or exact brand name natively through our media portals.',
    benefits: [
      'Clean, memorable brand identity',
      'Increased brand equity',
      'Better searchability',
      'Consolidation of brand assets'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Current username',
      'The exact @username desired (must be inactive)',
      'Placeholder account to transfer the handle to'
    ],
    platforms: ['TikTok', 'Instagram', 'X (Twitter)', 'Snapchat', 'YouTube', 'Facebook', 'Kick', 'Twitch', 'LinkedIn', 'Pinterest', 'Tenor'],
    process: [
      { step: 1, title: 'Availability Check', desc: 'Verifying if the target account is truly inactive.' },
      { step: 2, title: 'Trademark Verification', desc: 'Ensuring your legal rights align with platform policies.' },
      { step: 3, title: 'Claim Submission', desc: 'Filing the formal request via our media portal.' },
      { step: 4, title: 'Handle Transfer', desc: 'Merging or migrating the claimed @ onto your profile.' }
    ],
    ctaText: 'Claim Your Username'
  },
  {
    id: 'branding',
    title: 'Graphic Design & Branding',
    icon: PenTool,
    shortDesc: 'Professional graphic design solutions tailored for brands and businesses.',
    description: 'Professional graphic design solutions tailored for brands and businesses. From social media visuals and marketing creatives to full brand identity design  we create visuals that communicate authority and trust.',
    benefits: [
      'Custom visual identity',
      'High-converting social creatives',
      'Brand consistency guidelines',
      'Professional logo design'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Your current brand assets (if any)',
      'Style preferences and references',
      'Target audience details',
      'Project scope and deliverables'
    ],
    platforms: ['Social Media Platforms', 'Websites', 'Print Media'],
    process: [
      { step: 1, title: 'Discovery & Strategy', desc: 'Understanding your brand and goals.' },
      { step: 2, title: 'Concept Creation', desc: 'Developing initial design directions.' },
      { step: 3, title: 'Refinement', desc: 'Perfecting the chosen visual route based on feedback.' },
      { step: 4, title: 'Final Delivery', desc: 'Providing all high-res assets and guidelines.' }
    ],
    ctaText: 'Elevate Your Brand'
  },
  {
    id: 'webdev',
    title: 'Website Development',
    icon: Monitor,
    shortDesc: 'Custom-built websites designed from scratch to reflect your brand and convert visitors.',
    description: 'Custom-built websites designed from scratch to reflect your brand and convert visitors into clients. Fast, modern, and fully responsive across all devices.',
    benefits: [
      'Responsive mobile-first design',
      'High conversion rates',
      'SEO optimized architecture',
      'Fast load times'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Domain name',
      'Brand assets (Logos, Colors)',
      'Sitemap or desired page structure',
      'Content/Copy for the pages'
    ],
    platforms: ['Web', 'Mobile', 'Tablet'],
    process: [
      { step: 1, title: 'UX/UI Wireframing', desc: 'Mapping the user journey and layout.' },
      { step: 2, title: 'High-Fidelity Design', desc: 'Applying brand identity to the wireframes.' },
      { step: 3, title: 'Development', desc: 'Coding the site with modern frameworks.' },
      { step: 4, title: 'Launch & Handoff', desc: 'Final testing and going live.' }
    ],
    ctaText: 'Build Your Website'
  },
  {
    id: 'pr-media',
    title: 'Press & Media Publishing',
    icon: Radio,
    shortDesc: 'Get featured across press platforms, TV, radio, billboards, and digital media.',
    description: 'Get featured across press platforms, TV, radio, billboards, and digital media. We help you build credibility and authority through strategic media exposure.',
    benefits: [
      'Tier 1 publications',
      'Massive brand exposure',
      'SEO backlink authority',
      'Enhanced public credibility'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Newsworthy angles or press releases',
      'High-resolution press photos',
      'Biography and background info',
      'Target publications list'
    ],
    platforms: ['Press Outlets', 'TV & Radio Spots', 'Billboards', 'Digital Media Platforms', 'More Websites'],
    process: [
      { step: 1, title: 'Angle Development', desc: 'Crafting a compelling narrative.' },
      { step: 2, title: 'Pitching', desc: 'Reaching out to our direct journalistic network.' },
      { step: 3, title: 'Drafting & Review', desc: 'Approving the articles before release.' },
      { step: 4, title: 'Live Publication', desc: 'Articles go live across selected networks.' }
    ],
    ctaText: 'Get Featured'
  },
  {
    id: 'growth',
    title: 'Growth & Engagement',
    icon: LineChart,
    shortDesc: 'Boost your online presence with real growth strategies  followers, views, and engagement.',
    description: 'Boost your online presence with real growth strategies  including followers, views, and engagement. We help you scale your influence and reach the right audience.',
    benefits: [
      'Targeted audience growth',
      'Increased engagement rates',
      'Algorithmic boosting',
      'Enhanced social proof'
    ],
    requirementsTitle: 'Requirements',
    requirements: [
      'Current social media handles',
      'Target demographic information',
      'Content strategy (if existing)',
      'Benchmark goals'
    ],
    platforms: ['Instagram', 'TikTok', 'Facebook', 'X (Twitter)', 'YouTube', 'Snapchat', 'LinkedIn', 'Pinterest', 'Telegram', 'Twitch'],
    process: [
      { step: 1, title: 'Audit & Analysis', desc: 'Reviewing current analytics.' },
      { step: 2, title: 'Strategy Deployment', desc: 'Implementing targeted growth mechanisms.' },
      { step: 3, title: 'Optimization', desc: 'Refining targeting based on performance.' },
      { step: 4, title: 'Scaling', desc: 'Multiplying results as engagement compounding occurs.' }
    ],
    ctaText: 'Start Growing'
  }
];

import {
  Rocket,
  Database,
  Code,
  Users,
  Star,
  Zap,
  Award,
  Trophy,
  Target,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  Shield,
  Laptop,
} from "lucide-react";

export const exp = [
  {
    icon: Rocket,
    title: "Engineering Lead",
    company: "Transalliance Holdings",
    duration: "October 2024 - Present",
    desc: "Leading the development of advanced unified web/mobile platforms across financial-technology, travel and hospitality, mining and FX verticals. The platform supports deposits, withdrawals, and peer-to-peer fiat transactions.",
    highlights: [
      "Leading architecture across multiple business verticals",
      "Implementing responsive and accessible design principles",
      "Championing Agile development practices and team guidance",
      "Building secure real-time communication tools",
    ],
    borderClass: "border-green-400/50 hover:border-green-400",
    iconBgClass: "from-green-400/20 to-green-600/20",
    iconClass: "text-green-400",
    titleClass: "text-green-300",
    highlightTextClass: "group-hover/item:text-green-300",
    highlightIcon: Target,
    badge: {
      className: "px-6 py-3 border-cyan-400/30 bg-cyan-500/10",
      textClass: "text-cyan-300 font-bold text-sm",
      text: "CURRENT ROLE",
    },
  },

  {
    icon: Database,
    title: "Senior Front-End Developer",
    company: "Zendwallet",
    duration: "December 2023 - Present",
    desc: "Leading the development of an advanced cryptocurrency platform that offers a wide range of features for seamless financial transactions. The platform empowers users to easily deposit and withdraw funds, swap between different coins effortlessly, and engage in peer-to-peer fiat transactions.",
    features: [
      {
        title: "Achievement",
        desc: "Delivered within budget and timeline",
        icon: Star,
      },
      {
        title: "Impact",
        desc: "Improved code efficiency & reusability",
        icon: Zap,
      },
      { title: "UX", desc: "Enhanced user satisfaction rates", icon: Award },
    ],
    borderClass: "border-orange-400/50 hover:border-orange-400",
    iconBgClass: "from-orange-400/20 to-orange-600/20",
    iconClass: "text-orange-400",
    titleClass: "text-orange-300",
    featureCardClass: "p-6 hover:bg-orange-500/5 border-orange-500/20",
  },

  {
    icon: Code,
    title: "Senior Software Engineer",
    company: "EZPark Limited",
    duration: "June 2023 - February 2024",
    desc: "Spearheaded ParkinSpace development - a comprehensive parking management solution for users, event organizers, and operators with focus on payment processing and subscription management.",
    subcard: {
      className:
        "p-6 bg-gradient-to-r from-red-500/5 to-purple-500/5 border-red-400/20",
      icon: Trophy,
      headingClass: "text-red-300 font-bold text-lg",
      heading: "Key Achievement",
      text: "75% improvement in overall efficiency through innovative parking management solution",
    },
    borderClass: "border-red-400/50 hover:border-red-400",
    iconBgClass: "from-red-400/20 to-red-600/20",
    iconClass: "text-red-400",
    titleClass: "text-red-300",
  },
  {
    icon: Users,
    title: "Frontend Team Lead",
    company: "FastaMoni Technologies",
    duration: "December 2022 - March 2024",
    desc: "Led development of Edupali & BizFlex platforms - revolutionary payment systems for school fees and business management with flexible installment options and scalable architecture.",
    smallCards: [
      {
        title: "Revenue Growth",
        text: "45% increase through platform innovation",
        icon: Award,
        cardClass: "p-4 hover:bg-blue-500/5 border-blue-500/20",
        iconClass: "text-blue-400",
        titleClass: "text-blue-300 font-semibold",
      },
      {
        title: "Client Onboarding",
        text: "100% improvement in efficiency",
        icon: Award,
        cardClass: "p-4 hover:bg-blue-500/5 border-blue-500/20",
        iconClass: "text-blue-400",
        titleClass: "text-blue-300 font-semibold",
      },
    ],
    borderClass: "border-blue-400/50 hover:border-blue-400",
    iconBgClass: "from-blue-400/20 to-blue-600/20",
    iconClass: "text-blue-400",
    titleClass: "text-blue-300",
  },

  {
    icon: Shield,
    title: "Frontend Team Lead",
    company: "Cyberme Studios",
    duration: "May 2022 - Feb 2023",
    desc: "Led the successful development of Brand Protection (a cyber security platform) aimed at addressing business fraudulent incidences",
    highlights: [
      "Delivered Brand Protection & TFAP ahead of schedule",
      "Implemented multilingual support & privacy controls",
      "Recognized at Black Hat Riyadh 2022",
      "Praised by government officials and partners",
    ],
    borderClass: "border-violet-400/50 hover:border-violet-400",
    iconBgClass: "from-violet-400/20 to-violet-600/20",
    iconClass: "text-violet-400",
    titleClass: "text-violet-300",
    highlightTextClass: "group-hover/item:text-violet-300",
    highlightIcon: Target,
  },

  {
    icon: Laptop,
    title: "Frontend Developer",
    company: "Remote Freelancer",
    duration: "Apr 2019 - Aug 2022",
    desc: "Built and optimized web applications for diverse clients across multiple industries.",
    highlights: [
      "Improved load speeds by up to 50%",
      "Maintained 90%+ client satisfaction rate",
      "Achieved 60% repeat business",
      "Delivered scalable, maintainable solutions",
    ],
    borderClass: "border-yellow-400/50 hover:border-yellow-400",
    iconBgClass: "from-yellow-400/20 to-yellow-600/20",
    iconClass: "text-yellow-400",
    titleClass: "text-yellow-300",
    highlightTextClass: "group-hover/item:text-yellow-300",
    highlightIcon: Target,
  },
];

export const recent = [
  {
    title: "ParkinSpace",
    description:
      "Comprehensive parking management solution with customer, client, operator, and admin web applications featuring real-time reservations and payments.",
    tech: ["React", "Chakra UI", "React Query"],
    gradient: "from-cyan-400/20 to-blue-500/20",
    borderColor: "border-cyan-400/20",
    icon: "🅿️",
    textColor: "text-cyan-300",
    link: "https://parkinspace.ng/",
  },
  {
    title: "EZPark Managr",
    description:
      "Comprehensive admin and staff management applications for parking operations with role-based access control and reporting.",
    tech: ["React", "Chakra UI", "React Query"],
    gradient: "from-pink-400/20 to-red-500/20",
    borderColor: "border-pink-400/20",
    icon: "⚙️",
    textColor: "text-pink-300",
  },

  {
    title: "Zendwallet Personal",
    description:
      "Advanced cryptocurrency platform for individuals, enabling seamless deposits, withdrawals, coin swapping, and peer-to-peer fiat transactions. Manage over 20+ cryptocurrencies efficiently with a reliable and user-friendly interface.",
    tech: ["React", "TypeScript", "Next JS", "React Query"],
    gradient: "from-indigo-400/20 to-purple-600/20",
    borderColor: "border-indigo-400/20",
    icon: "₿",
    textColor: "text-indigo-300",
    link: "https://zendwallet.com/auth/login",
  },
  {
    title: "Zendwallet Business",
    description:
      "Enterprise-grade crypto platform designed for businesses. Manage crypto transactions, teams, and directors efficiently, while optimizing workflows and driving growth. Seamless deposits, withdrawals, and coin swapping for smooth operations.",
    tech: ["React", "TypeScript", "Next JS", "React Query"],
    gradient: "from-indigo-400/20 to-purple-600/20",
    borderColor: "border-indigo-400/20",
    icon: "₿",
    textColor: "text-indigo-300",
    link: "https://business.zendwallet.com/login",
  },
  {
    title: "BizFlex",
    description:
      "Business management platform for entrepreneurs with integrated payment solutions and comprehensive financial management tools.",
    tech: ["React", "Chakra UI", "React Query"],
    gradient: "from-yellow-400/20 to-orange-500/20",
    borderColor: "border-yellow-400/20",
    icon: "💼",
    textColor: "text-yellow-300",
    link: "https://www.bizflex.africa/",
  },
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 70 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 & CSS3", level: 90 },
  ],
  uiux: [
    { name: "Tailwind CSS", level: 95 },
    { name: "Chakra UI", level: 95 },
    { name: "Material-UI", level: 80 },
    { name: "Responsive Design", level: 95 },
    { name: "CSS Grid & Flexbox", level: 95 },
    { name: "SASS/SCSS", level: 85 },
  ],
  tools: [
    { name: "React Query", level: 95 },
    { name: "Redux", level: 80 },
    { name: "Git/GitHub", level: 95 },
    { name: "JIRA", level: 85 },
    { name: "Agile/Scrum", level: 95 },
    { name: "Confluence", level: 75 },
  ],
};

export const stats = [
  {
    value: "45%",
    label: "Performance Increase",
    icon: Award,
    color: "cyan",
  },
  {
    value: "100%+",
    label: "Client Onboarding Improvement",
    icon: Users,
    color: "purple",
  },
  {
    value: "75%",
    label: "Efficiency Improvement",
    icon: Target,
    color: "pink",
  },
  {
    value: "85%",
    label: "User Satisfaction Increase",
    icon: Star,
    color: "yellow",
  },
];

export const navItems = [
  { label: "Home", href: "hero" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

export const stat = [
  {
    value: "7+",
    label: "Years of Excellence",
    Icon: Code,
    border: "border-cyan-500/[0.1]",
    iconColor: "text-cyan-400",
    valueColor: "text-cyan-300",
  },
  {
    value: "100%+",
    label: "Revenue Growth",
    Icon: Trophy,
    border: "border-purple-500/[0.1]",
    iconColor: "text-purple-400",
    valueColor: "text-purple-300",
  },
  {
    value: "75%",
    label: "Efficiency Boost",
    Icon: Target,
    border: "border-pink-500/[0.1]",
    iconColor: "text-pink-400",
    valueColor: "text-pink-300",
  },
];

export const journeySections = [
  {
    title: "Professional Journey",
    description:
      "I'm an experienced Frontend Developer with over 5 years of expertise in developing and maintaining dynamic, user-centric web applications. I specialize in React, TypeScript, and modern frontend technologies, with a proven track record in leading teams and delivering innovative solutions.",
    Icon: Sparkles,
    titleColor: "text-cyan-300",
  },
  {
    title: "Current Focus",
    description:
      "Currently serving as Engineering Lead at Transalliance Group, I'm passionate about implementing responsive design principles, optimizing performance, and enhancing user experience across various devices.",
    Icon: Rocket,
    titleColor: "text-purple-300",
  },
];

export const contactItems = [
  {
    value: "ibeomari@gmail.com",
    href: "mailto:ibeomari@gmail.com",
    Icon: Mail,
    hover: "hover:text-cyan-300",
    gradient: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
  },
  {
    value: "+2347061755488",
    href: "tel:+2347061755488",
    Icon: Phone,
    hover: "hover:text-purple-300",
    gradient: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    value: "Lagos, Nigeria",
    href: "https://www.google.com/maps/search/?api=1&query=Lagos,Nigeria",
    Icon: MapPin,
    hover: "hover:text-pink-300",
    gradient: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
  },
];

export const highlights = [
  {
    value: "5+",
    title: "Years Experience",
    Icon: Code,
    border: "border-cyan-500/[0.1]",
    gradient: "from-cyan-400/20 via-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-400",
    textGradient: "from-cyan-300 to-cyan-500",
  },
  {
    value: "Team",
    title: "Leadership",
    Icon: Users,
    border: "border-purple-500/[0.1]",
    gradient: "from-purple-400/20 via-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
    textGradient: "from-purple-300 to-purple-500",
  },
  {
    value: "6+",
    title: "Major Projects",
    Icon: Briefcase,
    border: "border-pink-500/[0.1]",
    gradient: "from-pink-400/20 via-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
    textGradient: "from-pink-300 to-pink-500",
  },
  {
    value: "100%+",
    title: "Growth Impact",
    Icon: Trophy,
    border: "border-yellow-500/[0.1]",
    gradient: "from-yellow-400/20 via-orange-500/20 to-yellow-600/20",
    iconColor: "text-yellow-400",
    textGradient: "from-yellow-300 to-orange-400",
  },
];

export const contacts = [
  {
    title: "Email",
    value: "ibeomari@gmail.com",
    href: "mailto:ibeomari@gmail.com",
    icon: Mail,
    gradient: "from-cyan-400/20 to-cyan-600/20",
    border: "border-cyan-400/20",
    textColor: "text-cyan-300",
  },
  {
    title: "Phone",
    value: "+234 706 175 5488",
    href: "tel:+2347061755488",
    icon: Phone,
    gradient: "from-purple-400/20 to-purple-600/20",
    border: "border-purple-400/20",
    textColor: "text-purple-300",
  },
];

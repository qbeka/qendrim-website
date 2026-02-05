export const SITE = {
  name: 'Qendrim Beka',
  url: 'https://www.qendrimbeka.com',
  title: 'Qendrim Beka',
  description:
    'Portfolio of Qendrim Beka — competitor and builder. Computing Science student at the University of Alberta.',
};

export const SOCIALS = {
  email: 'beka.qendrim1@gmail.com',
  github: 'https://github.com/qbeka',
  linkedin: 'https://www.linkedin.com/in/qendrimbeka/',
  calendly: 'https://calendly.com/beka-qendrim1',
};

export const ABOUT = {
  heading: "Hello, I'm Qendrim Beka.",
  paragraphs: [
    "I'm a 3rd year Computing Science student at the University of Alberta.",
    'I build products and compete in hackathons. Built Philo (25K+ users, $24K ARR), won natHACKS 2024, and currently work at NAT on multi-agent LLM research while leading Index Competitive.',
  ],
  headshot: {
    src: '/headshot.jpg',
    alt: 'Headshot of Qendrim Beka',
    width: 400,
    height: 400,
  },
};

export const EDUCATION = {
  institution: 'University of Alberta',
  degree: 'BSc in Computing Science',
  minor: 'Minor in Philosophy',
  period: '2023 - 2027 (Expected)',
  standing: 'First Class Academic Standing',
};

export const SKILLS = {
  languages: ['Python', 'Java', 'C', 'C#', 'JavaScript/TypeScript', 'SQL', 'Bash'],
  development: ['React', 'Next.js', 'Node.js', 'REST APIs', 'WebSockets', 'Expo', 'Cloud (AWS/Firebase/Supabase)'],
  aiml: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Transformers', 'OpenCV'],
  tools: ['Git', 'Docker', 'CI/CD', 'TDD', 'System design', 'Performance optimization'],
};

export const EXPERIENCE = [
  {
    company: 'Philo - A Thinking Journal',
    role: 'Founder',
    period: 'Oct 2025 - Present',
    description: 'Built and shipped an iOS mobile app serving 25,000+ lifetime users and generating $24K ARR.',
    achievements: [
      'Built iOS app (Expo/React Native/TypeScript) with 1.6% freemium conversion through RevenueCat IAP',
      'Designed vector-based recommendation engine using embedded philosophy quote dataset (20K+ quotes) delivering personalized matches in <500ms',
      'Achieved 58% D7 retention and 6,200+ MAU',
      'Processing 600+ daily user prompts across active user base',
    ],
  },
  {
    company: 'Network For Applied Tech (NAT)',
    role: 'Research & Development Intern',
    period: 'May 2025 - Present (Part-Time)',
    description: 'Analyzing emergent coordination in multi-agent LLM systems and building ecosystem data platforms.',
    achievements: [
      'Analyzed emergent coordination in multi-agent LLM systems with agent-based modeling (ABM)',
      'Built matchmaking software for 1500+ hackathon participants',
      'Contributing developer & data analyst for nat-ETH shared data platform',
      'Tracking funding flow with funders, incubators, and service providers',
    ],
  },
  {
    company: 'Government of Alberta, Ministry of Assisted Living',
    role: 'Data Analyst (Summer Student)',
    period: 'May 2025 - Aug 2025',
    description: 'Engaged with 84 organizations to complete inventory of over 60,000 housing units across province.',
    achievements: [
      'Used Microsoft Dynamics to track data quality and flag abnormalities',
      'Analyzed and visualized trends using Excel and PowerBI',
      'Informed research projects with data-driven insights',
    ],
  },
] satisfies ReadonlyArray<{
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}>;

export const PROJECTS = [
  {
    title: 'Philo - A Thinking Journal',
    description:
      'iOS app with 25K+ users and $24K ARR. Philosophy journaling with vector-based recommendation engine.',
    tags: ['React Native', 'TypeScript', 'Vector embeddings'],
    link: undefined,
  },
  {
    title: 'NeuroNavScore',
    description: "VR-based Alzheimer's detection with EEG integration. Winner at natHACKS 2024.",
    tags: ['Unity', 'C#', 'Python', 'VR', 'EEG'],
    link: 'https://github.com/NeuroNavScore/hackathon2024',
  },
  {
    title: 'Gmail Code Autofill Extension',
    description: 'Privacy-focused Chrome extension for auto-filling verification codes from Gmail.',
    tags: ['JavaScript', 'Gmail API', 'Chrome extension'],
    link: 'https://github.com/qbeka/Code_Autofill_Extension',
  },
  {
    title: 'ASL Hand Sign Recognition',
    description: 'Real-time sign language recognition with 95% accuracy using computer vision.',
    tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV'],
    link: 'https://github.com/qbeka/ASL-Gesture-Recognition',
  },
  {
    title: 'US Election Voting Simulation',
    description: 'Blockchain-inspired voting simulation with live visualization.',
    tags: ['Python', 'Flask', 'React', 'SQL'],
    link: 'https://github.com/qbeka/us-2024-election-sim',
  },
  {
    title: 'ML Rock Paper Scissors',
    description: 'Computer vision game using real-time hand gesture detection.',
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    link: 'https://github.com/qbeka/rockpaperscissors',
  },
] satisfies ReadonlyArray<{
  title: string;
  description: string;
  tags: string[];
  link?: string;
}>;


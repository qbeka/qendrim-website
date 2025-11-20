// All terminal content and data

export interface Project {
  id: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  award?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  year: string;
  minor?: string;
  standing?: string;
}

export interface Involvement {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const personalInfo = {
  name: 'Qendrim Beka',
  role: 'Competitor and Builder',
  email: 'beka.qendrim1@gmail.com',
  location: 'Edmonton, AB, Canada',
  university: 'University of Alberta',
  year: '3rd Year Computing Science',
  minor: 'Philosophy',
  languages: ['English', 'German', 'Albanian'],
  github: 'https://github.com/qbeka',
  linkedin: 'https://www.linkedin.com/in/qendrimbeka/',
  calendly: 'https://calendly.com/beka-qendrim1',
  website: 'www.qendrimbeka.com',
};

export const projects: Project[] = [
  {
    id: 'philo',
    title: 'Philo - A Thinking Journal',
    date: 'October 2025',
    summary: 'iOS mobile app with 25K+ users and $24K ARR',
    description: `Philo is a philosophy-focused journaling app that helps users explore deep questions and discover meaningful quotes.

Key Features:
• Vector-based recommendation engine with 20K+ philosophy quotes
• Personalized matches delivered in <500ms
• 600+ daily user prompts processed
• 58% D7 retention rate, 6,200+ MAU

Business Impact:
• 25,000+ lifetime users
• $24K Annual Recurring Revenue  
• 1.6% freemium conversion rate
• Built with Expo/React Native/TypeScript`,
    tech: ['React Native', 'TypeScript', 'Expo', 'RevenueCat', 'Vector Embeddings', 'iOS'],
    github: '',
    demo: '',
    image: '/images/philo.jpg',
  },
  {
    id: 'neuronavscore',
    title: 'NeuroNavScore: VR Alzheimer\'s Detection',
    date: 'November 2024',
    summary: 'VR-based cognitive test with EEG integration',
    description: `NeuroNavScore is a research-driven project aimed at detecting early cognitive decline using a combination of VR navigation tasks and EEG analysis.

Key Features:
• VR Navigation Tasks - Differentiated between allocentric and egocentric strategies
• EEG Integration - Captured real-time brain activity using OpenBCI and Brainflow  
• Cognitive Assessment - Targeted regions involved in spatial memory

Impact: 🏆 1st Place winner at natHACKS 2024. Recognized for bridging neuroscience and immersive tech in healthcare innovation.`,
    tech: ['Unity', 'C#', 'Python', 'Brainflow', 'OpenBCI', 'VR', 'EEG'],
    github: 'https://github.com/NeuroNavScore/hackathon2024',
    award: '🏆 1st Place - natHACKS 2024',
    image: '/images/nathacks.jpg',
  },
  {
    id: 'gmail-autofill',
    title: 'Gmail Code Autofill Extension',
    date: 'March 2025',
    summary: 'Privacy-focused Chrome extension for verification codes',
    description: `Gmail Code Autofill is a Chrome extension that reads numerical verification codes from your Gmail inbox and fills them into web forms automatically.

Key Features:
• Autofill Verification Codes from Gmail into matching form fields
• Manual Override UI via popup
• No Data Storage or Transmission for maximum privacy
• OAuth-based Gmail access (readonly)

Security: No external servers, tracking, or analytics. Local-only parsing and injection.`,
    tech: ['JavaScript', 'Gmail API', 'Chrome Extension', 'OAuth', 'Manifest V3'],
    github: 'https://github.com/qbeka/Code_Autofill_Extension',
    demo: 'https://chromewebstore.google.com/detail/gmail-code-autofill/bamdheehdjehlediicfmocahpdeegabg',
    image: '/images/gmail-autofill.jpg',
  },
  {
    id: 'asl-recognition',
    title: 'ASL Hand Sign Recognition',
    date: 'October 2024',
    summary: 'Real-time sign language recognition with 95% accuracy',
    description: `A gesture recognition system that translates American Sign Language into text using a Bidirectional LSTM model.

Key Features:
• MediaPipe & OpenCV for landmark detection and video capture
• Letter, Word, and Phrase Modes to scale communication
• Data Augmentation using a 30,000+ sample dataset
• 95% model accuracy

Impact: Designed to support communication for the Deaf and Hard of Hearing community using AI.`,
    tech: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'LSTM', 'Scikit-Learn'],
    github: 'https://github.com/qbeka/ASL-Gesture-Recognition',
    image: '/images/asl.jpg',
  },
  {
    id: 'voting-simulation',
    title: 'US Election Voting Simulation',
    date: 'October 2024',
    summary: 'Blockchain-inspired election simulation system',
    description: `Built a secure, educational simulation of the US electoral process using mock blockchain transactions and dynamic data visualization.

Key Features:
• Immutable Vote Recording using blockchain concepts
• Live Interactive Map showing real-time state results
• Back-End Storage with vote tracking and per-state stats

Impact: Used to demonstrate election security concepts and real-time data handling for learning environments.`,
    tech: ['Python', 'Flask', 'React', 'SQL', 'Blockchain'],
    github: 'https://github.com/qbeka/us-2024-election-sim',
    image: '/images/voting.jpg',
  },
  {
    id: 'rps-ml',
    title: 'ML Rock Paper Scissors',
    date: 'October 2024',
    summary: 'Computer vision-powered game with gesture detection',
    description: `An interactive game built with OpenCV and MediaPipe that recognizes user gestures and matches them against a simple AI opponent.

Key Features:
• Gesture Detection using hand landmarks
• Data Collection & Training Pipeline to improve accuracy
• Real-Time Feedback with countdown-based UI

Impact: Built to explore interactive computer vision and game design using machine learning.`,
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    github: 'https://github.com/qbeka/rockpaperscissors',
    image: '/images/rps.jpg',
  },
  {
    id: 'matrix-calculator',
    title: 'Matrix Calculator Study Tool',
    date: 'March 2024',
    summary: 'Console-based matrix calculator for linear algebra',
    description: `This matrix calculator was built to reinforce concepts in linear algebra and provide a personal tool for solving academic problems.

Key Features:
• Supports REF & RREF Transformations
• Handles Augmented Matrices
• Inverse and Elementary Operations

Impact: Led to exceptional recognition in mathematics and an invitation to pursue a math or stats concentration.`,
    tech: ['Python', 'Linear Algebra', 'Mathematics'],
    github: 'https://github.com/qbeka/Matrix-Calculator',
    image: '/images/matrix.jpg',
  },
];

export const experiences: Experience[] = [
  {
    id: 'philo',
    company: 'Philo - A Thinking Journal',
    role: 'Founder',
    period: 'October 2025 - Present',
    description: 'Built and shipped an iOS mobile app serving 25,000+ lifetime users and generating $24K ARR.',
    achievements: [
      'Built iOS app (Expo/React Native/TypeScript) with 1.6% freemium conversion through RevenueCat IAP',
      'Designed vector-based recommendation engine using embedded philosophy quote dataset (20K+ quotes) delivering personalized matches in <500ms',
      'Achieved 58% D7 retention and 6,200+ MAU',
      'Processing 600+ daily user prompts across active user base',
    ],
  },
  {
    id: 'nat',
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
    id: 'gov-alberta',
    company: 'Government of Alberta, Ministry of Assisted Living',
    role: 'Data Analyst (Summer Student)',
    period: 'May 2025 - August 2025',
    description: 'Engaged with 84 organizations to complete inventory of over 60,000 housing units across province.',
    achievements: [
      'Used Microsoft Dynamics to track data quality and flag abnormalities',
      'Analyzed and visualized trends using Excel and PowerBI',
      'Informed research projects with data-driven insights',
    ],
  },
];

export const education: Education = {
  institution: 'University of Alberta',
  degree: 'Bachelor of Science in Computing Science',
  period: '2023 - 2027 (Expected)',
  year: '3rd Year',
  minor: 'Minor in Philosophy',
  standing: 'First Class Academic Standing',
};

export const skills = {
  languages: [
    'Python',
    'Java',
    'C',
    'C#',
    'JavaScript/TypeScript',
    'SQL',
    'Bash',
  ],
  development: [
    'React',
    'Next.js',
    'Node.js',
    'REST/GraphQL APIs',
    'WebSockets',
    'Microservices',
    'Android (Java)',
    'Cloud (AWS, Firebase, Supabase)',
    'Expo',
  ],
  aiml: [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'Transformers',
    'OpenCV',
  ],
  tools: [
    'Git',
    'Docker',
    'CI/CD (GitHub Actions, GitLab CI)',
    'TDD',
    'System Design',
    'Performance Optimization',
  ],
};

export const involvement = [
  {
    id: 'index-competitive',
    organization: 'Index Competitive',
    role: 'Founder/President',
    period: 'March 2025 - Present',
    location: 'University Of Alberta',
    description: 'Elite competitive team for hackathons and case competitions',
    achievements: [
      'Created Team Optimization Algorithm that quantifies unique member metrics to predict and assemble high-performing hackathon teams, increasing win rate by 72%',
      'Secured 6 major hackathon wins within the first year',
      'Established Elite 20-Member Team through selective outreach and merit-based vetting process',
      'Created Zero-Touch Automation Pipeline for competition logistics using Python and Advanced WebScraping',
      'Reduced deployment time by 90% across Discord and external platforms',
    ],
  },
];

export const helpText = `
Available Commands:
==================

  !help              Show this help message
  !clear             Clear the terminal
  !portfolio         Switch to regular portfolio view
  !resume            View resume (PDF preview)
  !about             About Qendrim
  !experience        View work experience
  !education         View education details
  !skills            List technical skills
  !projects          List all projects
  !involvement       View leadership & competitive activities
  !contact           Get contact information
  !socials           Social media links

Navigation:
==================

  !projects/[id]     Open specific project (e.g., !projects/philo)
  !experience/[id]   Open specific experience (e.g., !experience/philo)
  !involvement/[id]  View involvement details (e.g., !involvement/index-competitive)

Tips:
==================

  • Use arrow keys (↑/↓) to navigate command history
  • Type 'q' or 'Esc' to close detail views
  • Press 'f' in resume view for fullscreen
  • All commands start with !

`;


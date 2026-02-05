'use client';

import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  date: string;
  summary: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  award?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Philo - A Thinking Journal',
      date: 'October 2025',
      summary: 'iOS mobile app with 25K+ users and $24K ARR. Philosophy-focused journaling with vector-based recommendation engine delivering personalized quote matches in <500ms.',
      image: '/images/philo.jpg',
      tags: ['React Native', 'TypeScript', 'Expo', 'RevenueCat', 'Vector Embeddings'],
      demo: '',
    },
    {
      title: 'NeuroNavScore: VR Alzheimer\'s Detection',
      date: 'November 2024',
      summary: 'Award-winning VR-based cognitive test integrating EEG data to detect early signs of Alzheimer\'s. Combined VR navigation tasks with real-time brain activity analysis.',
      image: '/images/nathacks.jpg',
      tags: ['Unity', 'C#', 'Python', 'VR', 'EEG', 'Healthcare'],
      github: 'https://github.com/NeuroNavScore/hackathon2024',
      award: '🏆 1st Place - natHACKS 2024',
    },
    {
      title: 'Gmail Code Autofill Extension',
      date: 'March 2025',
      summary: 'Privacy-focused Chrome extension that automatically reads Gmail verification codes and autofills website forms with local-only processing. No data storage or external transmission.',
      image: '/images/gmail-autofill.jpg',
      tags: ['JavaScript', 'Gmail API', 'Chrome Extension', 'OAuth'],
      github: 'https://github.com/qbeka/Code_Autofill_Extension',
      demo: 'https://chromewebstore.google.com/detail/gmail-code-autofill/bamdheehdjehlediicfmocahpdeegabg',
    },
    {
      title: 'ASL Hand Sign Recognition',
      date: 'October 2024',
      summary: 'Real-time sign language recognition system using computer vision and deep learning with 95% model accuracy. Supports letter, word, and phrase modes for live communication.',
      image: '/images/asl.jpg',
      tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'LSTM'],
      github: 'https://github.com/qbeka/ASL-Gesture-Recognition',
    },
    {
      title: 'US Election Voting Simulation',
      date: 'October 2024',
      summary: 'Blockchain-inspired simulation of the US electoral process with real-time vote visualization and immutable vote tracking. Educational demonstration of election security concepts.',
      image: '/images/voting.jpg',
      tags: ['Python', 'Flask', 'React', 'SQL', 'Blockchain'],
      github: 'https://github.com/qbeka/us-2024-election-sim',
    },
    {
      title: 'ML Rock Paper Scissors',
      date: 'October 2024',
      summary: 'Interactive computer vision game using real-time hand gesture detection with MediaPipe. Features ML-based feedback and data collection pipeline.',
      image: '/images/rps.jpg',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'ML'],
      github: 'https://github.com/qbeka/rockpaperscissors',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 lg:px-8 notepad-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-3">
            Projects
          </h2>
          <div className="w-20 h-1 bg-burgundy"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="paper-card rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.award && (
                  <div className="absolute top-3 right-3 px-3 py-1 bg-burgundy text-white rounded-md text-xs font-semibold">
                    {project.award}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-burgundy mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone mono">{project.date}</p>
                </div>

                <p className="text-sm text-charcoal mb-4 line-clamp-3">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-burgundy/10 text-burgundy rounded-md mono"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-burgundy/10 text-burgundy rounded-md mono">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-burgundy text-white rounded-md text-xs font-medium hover:bg-leather transition-colors btn-hover"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 border border-burgundy text-burgundy rounded-md text-xs font-medium hover:bg-burgundy hover:text-white transition-colors btn-hover"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

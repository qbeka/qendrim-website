'use client';

import { useTheme } from '@/contexts/ThemeContext';
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
  const { theme } = useTheme();

  const projects: Project[] = [
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
    {
      title: 'Matrix Calculator Study Tool',
      date: 'March 2024',
      summary: 'Console-based matrix calculator for academic learning, supporting REF, RREF, inverse operations, and system transformations. Built to reinforce linear algebra concepts.',
      image: '/images/matrix.jpg',
      tags: ['Python', 'Linear Algebra', 'Math'],
      github: 'https://github.com/qbeka/Matrix-Calculator',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 px-6 lg:px-8 ${
        theme === '8bit' ? 'bg-ink bit-8-bg' : 'bg-parchment'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center space-x-2 mb-4 ${theme === '8bit' ? 'text-amber' : 'text-gold'}`}>
            <div className="w-12 h-px bg-current"></div>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <div className="w-1 h-1 rounded-full bg-current"></div>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-serif font-bold uppercase tracking-wider ${
              theme === '8bit' ? 'text-amber bit-8-text' : 'text-burgundy'
            }`}
          >
            {theme === '8bit' ? '// PROJECTS //' : 'Projects'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded overflow-hidden ${
                theme === '8bit'
                  ? 'bg-charcoal border-4 border-amber bit-8-border'
                  : 'bg-notepad shadow-md border border-burgundy/10'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-300 hover:scale-110 ${
                    theme === '8bit' ? 'image-rendering: pixelated' : ''
                  }`}
                />
                {project.award && (
                  <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    theme === '8bit' ? 'bg-amber text-ink' : 'bg-burgundy text-white'
                  }`}>
                    {project.award}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className={`text-xl font-serif font-bold ${
                      theme === '8bit' ? 'text-amber' : 'text-burgundy'
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>

                <p
                  className={`text-sm mb-3 ${
                    theme === '8bit' ? 'text-amber/70' : 'text-stone'
                  }`}
                >
                  {project.date}
                </p>

                <p
                  className={`font-serif text-sm mb-4 line-clamp-3 ${
                    theme === '8bit' ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded ${
                        theme === '8bit'
                          ? 'bg-burgundy text-amber'
                          : 'bg-cream text-burgundy'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        theme === '8bit'
                          ? 'bg-burgundy text-amber'
                          : 'bg-cream text-burgundy'
                      }`}
                    >
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors ${
                        theme === '8bit'
                          ? 'bg-ink border-2 border-amber text-amber hover:bg-amber hover:text-ink'
                          : 'bg-burgundy text-parchment hover:bg-leather'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-colors ${
                        theme === '8bit'
                          ? 'border-2 border-amber text-amber hover:bg-amber hover:text-ink'
                          : 'border border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-parchment'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
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


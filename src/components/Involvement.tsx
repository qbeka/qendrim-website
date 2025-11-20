'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Users, Trophy, Target, Zap } from 'lucide-react';

interface InvolvementItem {
  icon: any;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export default function Involvement() {
  const { theme } = useTheme();

  const involvements: InvolvementItem[] = [
    {
      icon: Users,
      title: 'Founder & President',
      organization: 'Index Competitive',
      period: '2025 - Present',
      description: 'Leading a high-performance student team focused on competitive success across tech, business, and design challenges.',
      highlights: [
        'Built organizational systems for team management',
        'Coordinated cross-functional competition teams',
        'Developed training programs for hackathons',
      ],
    },
    {
      icon: Trophy,
      title: 'Hackathon Competitor',
      organization: 'Various Competitions',
      period: '2024 - Present',
      description: 'Active participant and winner in multiple hackathons, focusing on AI, healthcare tech, and innovative solutions.',
      highlights: [
        '🏆 1st Place - natHACKS 2024 (NeuroNavScore)',
        'Multiple top placements in university competitions',
        'Specialized in rapid prototyping and team collaboration',
      ],
    },
    {
      icon: Target,
      title: 'Competitive Programming',
      organization: 'University Competitions',
      period: '2023 - Present',
      description: 'Participating in algorithmic competitions and building problem-solving skills through competitive programming.',
      highlights: [
        'Active in coding challenges and contests',
        'Focus on algorithms and data structures',
        'Continuous skill development through practice',
      ],
    },
    {
      icon: Zap,
      title: 'AI & ML Research',
      organization: 'Personal Projects & University',
      period: '2023 - Present',
      description: 'Conducting independent research and building projects in machine learning, computer vision, and AI applications.',
      highlights: [
        'Built multiple ML-powered applications',
        'Focus on practical AI implementations',
        'Contributing to open-source projects',
      ],
    },
  ];

  return (
    <section
      id="involvement"
      className={`py-24 px-6 lg:px-8 ${
        theme === '8bit' ? 'bg-charcoal bit-8-bg' : 'bg-cream'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
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
            {theme === '8bit' ? '// INVOLVEMENT //' : 'Involvement'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
        </div>

        {/* Involvements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {involvements.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                theme === '8bit'
                  ? 'bg-ink border-4 border-amber bit-8-border'
                  : 'bg-cream shadow-xl border-l-4 border-burgundy'
              }`}
            >
              {/* Icon */}
              <div className={`inline-block p-3 rounded-lg mb-4 ${
                theme === '8bit' ? 'bg-burgundy' : 'bg-burgundy/10'
              }`}>
                <item.icon className={`w-8 h-8 ${theme === '8bit' ? 'text-amber' : 'text-burgundy'}`} />
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3
                  className={`text-xl font-serif font-bold mb-1 ${
                    theme === '8bit' ? 'text-amber' : 'text-burgundy'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm font-semibold ${
                    theme === '8bit' ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  {item.organization}
                </p>
                <p
                  className={`text-xs mt-1 ${
                    theme === '8bit' ? 'text-amber/70' : 'text-stone'
                  }`}
                >
                  {item.period}
                </p>
              </div>

              {/* Description */}
              <p
                className={`font-serif text-sm leading-relaxed mb-4 ${
                  theme === '8bit' ? 'text-cream' : 'text-charcoal'
                }`}
              >
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 text-sm ${
                      theme === '8bit' ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    <span className={theme === '8bit' ? 'text-amber' : 'text-burgundy'}>
                      {theme === '8bit' ? '>' : '•'}
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <p
            className={`font-serif text-lg mb-6 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            {theme === '8bit' ? '[ INTERESTED IN COLLABORATING? ]' : 'Interested in collaborating?'}
          </p>
          <a href="#contact">
            <div
              className={`inline-block px-8 py-4 rounded-lg uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                theme === '8bit'
                  ? 'bg-amber text-ink hover:bg-gold bit-8-border bit-8-small'
                  : 'bg-burgundy text-white hover:bg-leather'
              }`}
            >
              {theme === '8bit' ? '>>> LET\'S CONNECT <<<' : 'Let\'s Connect'}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}


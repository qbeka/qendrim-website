'use client';

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
    <section id="involvement" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-3">
            Involvement
          </h2>
          <div className="w-20 h-1 bg-burgundy"></div>
        </div>

        {/* Involvements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {involvements.map((item, index) => (
            <div
              key={index}
              className="paper-card p-6 rounded-lg border-l-4 border-burgundy"
            >
              {/* Icon */}
              <div className="inline-flex p-3 rounded-lg bg-burgundy/10 mb-4">
                <item.icon className="w-7 h-7 text-burgundy" />
              </div>

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-burgundy mb-1">
                  {item.title}
                </h3>
                <p className="text-base font-semibold text-charcoal">
                  {item.organization}
                </p>
                <p className="text-xs text-stone mono mt-1">{item.period}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-charcoal leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-charcoal"
                  >
                    <span className="text-burgundy mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-charcoal mb-6">
            Interested in collaborating?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-burgundy text-white rounded-md font-semibold hover:bg-leather transition-colors btn-hover">
              Let's Connect
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

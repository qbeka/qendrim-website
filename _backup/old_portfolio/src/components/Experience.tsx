'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

export default function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      type: 'work',
      company: 'Index Competitive',
      role: 'Founder, President',
      period: '2025 - Present',
      description: 'Leading a high-performance student team by building systems for competitive success across tech, business, and design challenges.',
      achievements: [
        'Built organizational framework for competitive team management',
        'Coordinated cross-functional teams for hackathons and case competitions',
        'Developed strategies for tech, business, and design challenges',
      ],
    },
  ];

  const education = {
    institution: 'University of Alberta',
    degree: 'Bachelor of Science, Major in Computer Science',
    period: '2023 - Present',
    year: '2nd Year',
  };

  const skills = [
    {
      category: 'Technical Skills',
      items: [
        'Python – pandas, NumPy, scikit-learn, OpenCV',
        'Machine Learning & AI – model training, evaluation, deployment',
        'Computer Vision – object detection, image processing',
        'R – data analysis, visualization',
        'Excel – modeling, cleaning, dashboards',
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        'Jupyter Notebooks',
        'Google Colab',
        'Tableau',
        'Git & GitHub',
        'VS Code',
        'LaTeX',
        'Bash',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-24 px-6 lg:px-8 ${
        theme === '8bit' ? 'bg-charcoal bit-8-bg' : 'bg-cream'
      }`}
    >
      <div className="max-w-6xl mx-auto">
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
            {theme === '8bit' ? '// EXPERIENCE //' : 'Experience'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-serif font-semibold mb-8 flex items-center gap-3 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            <Briefcase className={theme === '8bit' ? 'text-amber' : 'text-burgundy'} />
            {theme === '8bit' ? '[ WORK ]' : 'Work Experience'}
          </h3>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-8 rounded border-l-4 mb-6 ${
                theme === '8bit'
                  ? 'bg-ink border-amber bit-8-border'
                  : 'bg-notepad border-burgundy/40 shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4
                    className={`text-xl font-serif font-bold ${
                      theme === '8bit' ? 'text-amber' : 'text-burgundy'
                    }`}
                  >
                    {exp.role}
                  </h4>
                  <p
                    className={`text-lg ${
                      theme === '8bit' ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`text-sm uppercase tracking-wide px-4 py-2 rounded-full mt-2 md:mt-0 ${
                    theme === '8bit'
                      ? 'bg-burgundy text-amber'
                      : 'bg-burgundy/10 text-burgundy'
                  }`}
                >
                  {exp.period}
                </span>
              </div>
              <p
                className={`font-serif mb-4 ${
                  theme === '8bit' ? 'text-cream' : 'text-charcoal'
                }`}
              >
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2 ${
                      theme === '8bit' ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    <span className={theme === '8bit' ? 'text-amber' : 'text-burgundy'}>
                      {theme === '8bit' ? '>' : '•'}
                    </span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3
            className={`text-2xl font-serif font-semibold mb-8 flex items-center gap-3 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            <GraduationCap className={theme === '8bit' ? 'text-amber' : 'text-burgundy'} />
            {theme === '8bit' ? '[ EDUCATION ]' : 'Education'}
          </h3>

          <div
            className={`p-8 rounded border-l-4 ${
              theme === '8bit'
                ? 'bg-ink border-amber bit-8-border'
                : 'bg-notepad border-burgundy/40 shadow-sm'
            }`}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h4
                  className={`text-xl font-serif font-bold ${
                    theme === '8bit' ? 'text-amber' : 'text-burgundy'
                  }`}
                >
                  {education.institution}
                </h4>
                <p
                  className={`text-lg ${
                    theme === '8bit' ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  {education.degree}
                </p>
                <p
                  className={`text-sm mt-2 ${
                    theme === '8bit' ? 'text-amber' : 'text-stone'
                  }`}
                >
                  Currently: {education.year}
                </p>
              </div>
              <span
                className={`text-sm uppercase tracking-wide px-4 py-2 rounded-full mt-2 md:mt-0 ${
                  theme === '8bit'
                    ? 'bg-burgundy text-amber'
                    : 'bg-burgundy/10 text-burgundy'
                }`}
              >
                {education.period}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3
            className={`text-2xl font-serif font-semibold mb-8 flex items-center gap-3 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            <Code className={theme === '8bit' ? 'text-amber' : 'text-burgundy'} />
            {theme === '8bit' ? '[ SKILLS ]' : 'Skills'}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`p-6 rounded ${
                  theme === '8bit'
                    ? 'bg-ink border-2 border-amber bit-8-border'
                    : 'bg-notepad border border-burgundy/20 shadow-sm'
                }`}
              >
                <h4
                  className={`text-lg font-serif font-semibold mb-4 ${
                    theme === '8bit' ? 'text-amber' : 'text-burgundy'
                  }`}
                >
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm ${
                        theme === '8bit' ? 'text-cream' : 'text-charcoal'
                      }`}
                    >
                      <span className={theme === '8bit' ? 'text-amber' : 'text-burgundy'}>
                        {theme === '8bit' ? '>' : '•'}
                      </span>
                      {skill}
                  </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { experiences, education, skills } from '@/lib/terminalData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-3">
            Experience
          </h2>
          <div className="w-20 h-1 bg-burgundy"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-charcoal mb-6 flex items-center gap-3">
            <Briefcase className="text-burgundy" size={28} />
            Work Experience
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="paper-card p-6 rounded-lg border-l-4 border-burgundy"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-burgundy">{exp.role}</h4>
                    <p className="text-lg text-charcoal font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-medium text-stone mt-2 md:mt-0 mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-charcoal mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                      <span className="text-burgundy mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-charcoal mb-6 flex items-center gap-3">
            <GraduationCap className="text-burgundy" size={28} />
            Education
          </h3>

          <div className="paper-card p-6 rounded-lg border-l-4 border-burgundy">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h4 className="text-xl font-bold text-burgundy">{education.institution}</h4>
                <p className="text-lg text-charcoal font-medium">{education.degree}</p>
                {education.minor && (
                  <p className="text-sm text-stone mt-1">{education.minor}</p>
                )}
                <p className="text-sm text-burgundy mt-2 font-medium">
                  {education.year} • {education.standing}
                </p>
              </div>
              <span className="text-sm font-medium text-stone mt-2 md:mt-0 mono">
                {education.period}
              </span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-charcoal mb-6 flex items-center gap-3">
            <Code className="text-burgundy" size={28} />
            Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="paper-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-burgundy mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-md text-sm font-medium mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="paper-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-burgundy mb-4">Development</h4>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-md text-sm font-medium mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="paper-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-burgundy mb-4">AI/ML</h4>
              <div className="flex flex-wrap gap-2">
                {skills.aiml.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-md text-sm font-medium mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="paper-card p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-burgundy mb-4">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-burgundy/10 text-burgundy rounded-md text-sm font-medium mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

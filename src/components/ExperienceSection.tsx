import { EDUCATION, EXPERIENCE, SKILLS } from '@/lib/siteData';

export default function ExperienceSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Experience</h2>
      
      <div className="space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-700 mb-2">{exp.description}</p>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-gray-600 pl-4">
                  • {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Education</h2>
        <div className="border border-gray-200 rounded p-4">
          <div className="flex justify-between items-start gap-6">
            <div>
              <h3 className="font-semibold text-gray-900">{EDUCATION.institution}</h3>
              <p className="text-gray-600">{EDUCATION.degree}</p>
              <p className="text-gray-600">{EDUCATION.minor}</p>
              <p className="text-gray-600">{EDUCATION.standing}</p>
            </div>
            <span className="text-sm text-gray-500">{EDUCATION.period}</span>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
            <p className="text-sm text-gray-700">{SKILLS.languages.join(' · ')}</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
            <p className="text-sm text-gray-700">{SKILLS.development.join(' · ')}</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-2">AI/ML</h3>
            <p className="text-sm text-gray-700">{SKILLS.aiml.join(' · ')}</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
            <p className="text-sm text-gray-700">{SKILLS.tools.join(' · ')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

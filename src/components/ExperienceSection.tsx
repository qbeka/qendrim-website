import { experiences } from '@/lib/terminalData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
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
    </section>
  );
}

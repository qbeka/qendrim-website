import { PROJECTS } from '@/lib/siteData';

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Projects</h2>
      
      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="text-gray-700 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

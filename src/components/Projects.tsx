export default function Projects() {
  const projects = [
    {
      title: 'Philo - A Thinking Journal',
      description: 'iOS app with 25K+ users and $24K ARR. Philosophy journaling with vector-based recommendation engine.',
      tags: ['React Native', 'TypeScript', 'Vector Embeddings'],
    },
    {
      title: 'NeuroNavScore',
      description: 'VR-based Alzheimer\'s detection with EEG integration. 1st Place at natHACKS 2024.',
      tags: ['Unity', 'C#', 'Python', 'VR', 'EEG'],
      link: 'https://github.com/NeuroNavScore/hackathon2024',
    },
    {
      title: 'Gmail Code Autofill Extension',
      description: 'Privacy-focused Chrome extension for auto-filling verification codes from Gmail.',
      tags: ['JavaScript', 'Gmail API', 'Chrome Extension'],
      link: 'https://github.com/qbeka/Code_Autofill_Extension',
    },
    {
      title: 'ASL Hand Sign Recognition',
      description: 'Real-time sign language recognition with 95% accuracy using computer vision.',
      tags: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV'],
      link: 'https://github.com/qbeka/ASL-Gesture-Recognition',
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
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

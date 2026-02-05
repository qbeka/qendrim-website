import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact</h2>
      
      <div className="space-y-4">
        <p className="text-gray-700">Get in touch:</p>
        
        <div className="flex flex-col gap-2 text-sm">
          <a 
            href="mailto:beka.qendrim1@gmail.com" 
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Mail size={16} />
            beka.qendrim1@gmail.com
          </a>
          <a 
            href="https://github.com/qbeka" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/qendrimbeka/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

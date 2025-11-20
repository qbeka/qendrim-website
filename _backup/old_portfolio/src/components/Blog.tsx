'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { BookOpen, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

export default function Blog() {
  const { theme } = useTheme();

  const posts: BlogPost[] = [
    {
      title: 'Building NeuroNavScore: VR Meets Neuroscience',
      date: 'November 2024',
      readTime: '5 min read',
      summary: 'How we won 1st place at natHACKS by combining VR navigation tasks with EEG analysis to detect early signs of Alzheimer\'s. A deep dive into the technical challenges and breakthroughs.',
      tags: ['VR', 'Healthcare', 'AI', 'Hackathon'],
    },
    {
      title: 'The Journey to Building Index Competitive',
      date: 'January 2025',
      readTime: '4 min read',
      summary: 'Why I founded Index Competitive and how we\'re building a high-performance student team focused on competitive success in tech, business, and design challenges.',
      tags: ['Leadership', 'Competitions', 'Team Building'],
    },
    {
      title: 'Privacy-First Chrome Extensions: Lessons Learned',
      date: 'March 2025',
      readTime: '6 min read',
      summary: 'Building the Gmail Code Autofill extension taught me valuable lessons about user privacy, OAuth implementation, and the importance of local-only processing.',
      tags: ['Chrome Extension', 'Privacy', 'JavaScript'],
    },
  ];

  return (
    <section
      id="blog"
      className={`py-24 px-6 lg:px-8 ${
        theme === '8bit' ? 'bg-ink bit-8-bg' : 'bg-parchment'
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
            {theme === '8bit' ? '// BLOG //' : 'Blog'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
          <p
            className={`mt-4 font-serif ${
              theme === '8bit' ? 'text-cream bit-8-small' : 'text-charcoal'
            }`}
          >
            {theme === '8bit' ? '[ THOUGHTS ON AI, COMPETITIONS, AND BUILDING ]' : 'Thoughts on AI, competitions, and building cool stuff'}
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`p-8 rounded border-l-4 cursor-pointer ${
                theme === '8bit'
                  ? 'bg-charcoal border-amber bit-8-border hover:bg-ink'
                  : 'bg-notepad border-burgundy/40 shadow-md hover:shadow-lg transition-shadow'
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded ${theme === '8bit' ? 'bg-burgundy' : 'bg-burgundy/10'}`}>
                  <BookOpen className={theme === '8bit' ? 'text-amber w-6 h-6' : 'text-burgundy w-6 h-6'} />
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className={`flex items-center gap-1 ${theme === '8bit' ? 'text-amber bit-8-small' : 'text-stone'}`}>
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className={`flex items-center gap-1 ${theme === '8bit' ? 'text-amber bit-8-small' : 'text-stone'}`}>
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <h3
                className={`text-2xl font-serif font-bold mb-3 ${
                  theme === '8bit' ? 'text-amber' : 'text-burgundy'
                }`}
              >
                {post.title}
              </h3>

              <p
                className={`font-serif leading-relaxed mb-4 ${
                  theme === '8bit' ? 'text-cream bit-8-small' : 'text-charcoal'
                }`}
              >
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs px-3 py-1 rounded ${
                      theme === '8bit'
                        ? 'bg-burgundy text-amber'
                        : 'bg-cream text-burgundy border border-burgundy/20'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <p
            className={`font-serif italic ${
              theme === '8bit' ? 'text-amber bit-8-small' : 'text-stone'
            }`}
          >
            {theme === '8bit' ? '[ MORE POSTS COMING SOON... ]' : 'More posts coming soon...'}
          </p>
        </div>
      </div>
    </section>
  );
}

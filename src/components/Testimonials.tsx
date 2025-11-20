'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  relation: string;
}

export default function Testimonials() {
  const { theme } = useTheme();

  const testimonials: Testimonial[] = [
    {
      name: 'Mustafa Khan',
      role: 'President',
      company: 'AI Research Club at UofA',
      content: 'Qendrim is a bright, driven student with a natural curiosity and strong technical foundation. He approaches problems methodically and is always eager to refine his understanding - whether through coursework, side projects, or hackathons. His passion for AI and machine learning is evident in his projects, and I am confident he will continue to excel in both academic and professional settings.',
      relation: 'Academic Peer & Club President',
    },
  ];

  return (
    <section
      id="testimonials"
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
            {theme === '8bit' ? '// TESTIMONIALS //' : 'Testimonials'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded relative ${
                theme === '8bit'
                  ? 'bg-ink border-4 border-amber bit-8-border'
                  : 'bg-notepad shadow-md border border-burgundy/10'
              }`}
            >
              {/* Quote Icon */}
              <div className={`absolute top-6 left-6 ${theme === '8bit' ? 'text-amber/30' : 'text-burgundy/20'}`}>
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="relative z-10 pt-12">
                <p
                  className={`font-serif text-lg leading-relaxed mb-6 italic ${
                    theme === '8bit' ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className={`border-t pt-6 ${theme === '8bit' ? 'border-amber/30' : 'border-burgundy/20'}`}>
                  <h4
                    className={`text-xl font-serif font-bold ${
                      theme === '8bit' ? 'text-amber' : 'text-burgundy'
                    }`}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === '8bit' ? 'text-cream' : 'text-charcoal'
                    }`}
                  >
                    {testimonial.role} • {testimonial.company}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      theme === '8bit' ? 'text-amber/70' : 'text-stone'
                    }`}
                  >
                    {testimonial.relation}
                  </p>
                </div>
              </div>

              {/* Decorative Corner (normal mode only) */}
              {theme === 'normal' && (
                <>
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold"></div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p
            className={`font-serif text-lg mb-6 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            {theme === '8bit' ? '[ WORKED WITH QENDRIM? ]' : 'Worked with Qendrim?'}
          </p>
          <a href="#contact">
            <div
              className={`inline-block px-8 py-4 rounded uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                theme === '8bit'
                  ? 'border-2 border-amber text-amber hover:bg-amber hover:text-ink bit-8-small'
                  : 'border border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-parchment'
              }`}
            >
              {theme === '8bit' ? '>>> SHARE YOUR EXPERIENCE <<<' : 'Share Your Experience'}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}


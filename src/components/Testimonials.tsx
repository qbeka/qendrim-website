'use client';

import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  relation: string;
}

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 px-6 lg:px-8 notepad-bg">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-3">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-burgundy"></div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="paper-card p-8 rounded-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-burgundy/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="relative z-10 pt-8">
                <p className="text-lg text-charcoal leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-charcoal/10 pt-6">
                  <h4 className="text-xl font-bold text-burgundy">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-charcoal">
                    {testimonial.role} • {testimonial.company}
                  </p>
                  <p className="text-xs text-stone mono mt-1">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-charcoal mb-6">
            Worked with Qendrim?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 border-2 border-burgundy text-burgundy rounded-md font-semibold hover:bg-burgundy hover:text-white transition-colors btn-hover">
              Share Your Experience
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

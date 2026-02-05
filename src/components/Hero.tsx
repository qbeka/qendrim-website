'use client';

import { Github, Linkedin, Mail, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/qbeka', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/qendrimbeka/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:beka.qendrim1@gmail.com', label: 'Email' },
    { icon: Calendar, href: 'https://calendly.com/beka-qendrim1', label: 'Schedule' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-24 notepad-bg">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-charcoal/20 shadow-xl">
                <Image
                  src="/headshot-circular.png"
                  alt="Qendrim Beka"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-2 md:order-2">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-3 fade-in">
                Qendrim Beka
              </h1>
              <p className="text-xl lg:text-2xl text-burgundy font-medium mono fade-in">
                Competitor and Builder
              </p>
            </div>

            <div className="paper-card p-6 rounded-lg fade-in">
              <p className="text-base lg:text-lg text-charcoal leading-relaxed">
                Hi! I'm Qendrim, a 3rd Year Computing Science student at the{' '}
                <span className="font-semibold text-burgundy">University of Alberta</span>. 
                I'm a competitor and builder who's passionate about creating impactful products. 
                I've built Philo (25K+ users, $24K ARR), won hackathons, and am currently working at 
                NAT on multi-agent LLM research while leading Index Competitive.
              </p>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap gap-3 fade-in">
              {['English', 'German', 'Albanian'].map((lang) => (
                <span
                  key={lang}
                  className="px-4 py-2 bg-white border border-charcoal/20 rounded-md text-sm font-medium text-charcoal"
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3 fade-in">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-charcoal/20 rounded-md text-charcoal hover:bg-burgundy hover:text-white hover:border-burgundy transition-all btn-hover"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2 fade-in">
              <a href="#contact">
                <button className="px-8 py-3 bg-burgundy text-white rounded-md text-base font-semibold hover:bg-leather transition-colors btn-hover">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

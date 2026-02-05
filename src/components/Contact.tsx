'use client';

import { Mail, Calendar, Briefcase, Rocket, Github, Linkedin, Heart } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    if (email === '') return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSubmitStatus('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post(
        'https://connect.mailerlite.com/api/subscribers',
        {
          email: email,
          fields: {
            message: message || 'No message provided'
          },
          groups: [process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID || '']
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      setSubmitStatus('Message sent successfully!');
      setEmail('');
      setMessage('');
    } catch (err: any) {
      console.error('Submission error:', err);
      const errorMessage = err.response?.data?.message || 'Failed to send message. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const offerings = [
    {
      icon: Briefcase,
      title: 'Consulting & Freelance',
      description: 'I partner with startups, small businesses, and nonprofits to build impactful strategies, products, and tech solutions.',
      cta: 'Let\'s Build Together',
    },
    {
      icon: Rocket,
      title: 'Hackathon Competitor',
      description: 'I compete in hackathons, building fast, functional prototypes with small teams under pressure.',
      cta: 'Let\'s Compete Together',
    },
  ];

  return (
    <>
      <section id="contact" className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-3">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-burgundy"></div>
          </div>

          {/* Work With Me Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
              Work With Me
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {offerings.map((offering, index) => (
                <div
                  key={index}
                  className="paper-card p-8 rounded-lg text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-burgundy/10 mb-4">
                    <offering.icon className="w-10 h-10 text-burgundy" />
                  </div>

                  <h4 className="text-xl font-bold text-burgundy mb-3">
                    {offering.title}
                  </h4>

                  <p className="text-charcoal mb-6">
                    {offering.description}
                  </p>

                  <a
                    href="https://calendly.com/beka-qendrim1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy text-white rounded-md font-semibold hover:bg-leather transition-colors btn-hover"
                  >
                    <Calendar className="w-5 h-5" />
                    {offering.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="paper-card p-8 rounded-lg">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="text-burgundy w-8 h-8" />
              <h3 className="text-2xl font-bold text-burgundy">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2 text-charcoal"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-md border-2 border-charcoal/20 text-charcoal focus:border-burgundy focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2 text-charcoal"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border-2 border-charcoal/20 text-charcoal focus:border-burgundy focus:outline-none resize-none transition-colors"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {error && (
                <div className="p-4 rounded-md bg-red-500/20 border-2 border-red-500 text-red-700 text-sm">
                  {error}
                </div>
              )}

              {submitStatus && (
                <div className="p-4 rounded-md bg-green-500/20 border-2 border-green-500 text-green-700 text-sm">
                  {submitStatus}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-burgundy text-white rounded-md font-bold hover:bg-leather disabled:bg-stone/50 disabled:cursor-not-allowed transition-colors btn-hover"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-charcoal/10">
              <p className="text-center text-sm text-charcoal">
                Or reach out directly:{' '}
                <a
                  href="mailto:beka.qendrim1@gmail.com"
                  className="font-semibold text-burgundy hover:text-leather"
                >
                  beka.qendrim1@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-charcoal text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-1">Qendrim Beka</p>
              <p className="text-sm text-gray-400 mono">Competitor and Builder</p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/qbeka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/qendrimbeka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:beka.qendrim1@gmail.com"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/beka-qendrim1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                aria-label="Schedule"
              >
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-burgundy fill-burgundy" /> by Qendrim Beka © 2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

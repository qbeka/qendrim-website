'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Mail, Calendar, Briefcase, Rocket } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const { theme } = useTheme();
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

      setSubmitStatus(theme === '8bit' ? '>>> MESSAGE SENT! <<<' : 'Message sent successfully!');
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
    <section
      id="contact"
      className={`py-24 px-6 lg:px-8 ${
        theme === '8bit' ? 'bg-ink bit-8-bg' : 'bg-parchment'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-16"
        >
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
            {theme === '8bit' ? '// CONTACT //' : 'Get In Touch'}
          </h2>
          <div className={`w-24 h-1 mx-auto mt-4 ${theme === '8bit' ? 'bg-amber' : 'bg-burgundy'}`}></div>
        </div>

        {/* Work With Me Section */}
        <div
          className="mb-16"
        >
          <h3
            className={`text-3xl font-serif font-bold text-center mb-8 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            {theme === '8bit' ? '[ WORK WITH ME ]' : 'Work With Me'}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg text-center ${
                  theme === '8bit'
                    ? 'bg-charcoal border-4 border-amber bit-8-border'
                    : 'bg-white shadow-xl'
                }`}
              >
                <div className={`inline-block p-4 rounded-full mb-4 ${
                  theme === '8bit' ? 'bg-burgundy' : 'bg-burgundy/10'
                }`}>
                  <offering.icon className={`w-10 h-10 ${theme === '8bit' ? 'text-amber' : 'text-burgundy'}`} />
                </div>

                <h4
                  className={`text-xl font-serif font-bold mb-3 ${
                    theme === '8bit' ? 'text-amber' : 'text-burgundy'
                  }`}
                >
                  {offering.title}
                </h4>

                <p
                  className={`font-serif mb-6 ${
                    theme === '8bit' ? 'text-cream' : 'text-charcoal'
                  }`}
                >
                  {offering.description}
                </p>

                <a
                  href="https://calendly.com/beka-qendrim1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg uppercase tracking-wider font-semibold transition-all ${
                    theme === '8bit'
                      ? 'bg-amber text-ink hover:bg-gold bit-8-border'
                      : 'bg-burgundy text-white hover:bg-leather'
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  {offering.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`p-8 rounded-lg ${
            theme === '8bit'
              ? 'bg-charcoal border-4 border-amber bit-8-border'
              : 'bg-white shadow-2xl'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className={theme === '8bit' ? 'text-amber w-8 h-8' : 'text-burgundy w-8 h-8'} />
            <h3
              className={`text-2xl font-serif font-bold ${
                theme === '8bit' ? 'text-amber' : 'text-burgundy'
              }`}
            >
              {theme === '8bit' ? '[ SEND A MESSAGE ]' : 'Send a Message'}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-semibold mb-2 uppercase tracking-wide ${
                  theme === '8bit' ? 'text-cream' : 'text-charcoal'
                }`}
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg font-serif transition-all ${
                  theme === '8bit'
                    ? 'bg-ink border-2 border-amber text-cream focus:border-gold'
                    : 'bg-cream border-2 border-stone/30 text-ink focus:border-burgundy'
                } focus:outline-none`}
                placeholder={theme === '8bit' ? '>>> YOUR_EMAIL@DOMAIN.COM' : 'your.email@example.com'}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-semibold mb-2 uppercase tracking-wide ${
                  theme === '8bit' ? 'text-cream' : 'text-charcoal'
                }`}
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg font-serif resize-none transition-all ${
                  theme === '8bit'
                    ? 'bg-ink border-2 border-amber text-cream focus:border-gold'
                    : 'bg-cream border-2 border-stone/30 text-ink focus:border-burgundy'
                } focus:outline-none`}
                placeholder={theme === '8bit' ? '>>> TYPE YOUR MESSAGE HERE...' : 'Tell me about your project or idea...'}
              />
            </div>

            {error && (
              <div className="p-4 rounded-lg bg-red-500/20 border-2 border-red-500 text-red-500 text-sm">
                {error}
              </div>
            )}

            {submitStatus && (
              <div className={`p-4 rounded-lg text-sm ${
                theme === '8bit'
                  ? 'bg-amber/20 border-2 border-amber text-amber'
                  : 'bg-green-500/20 border-2 border-green-500 text-green-700'
              }`}>
                {submitStatus}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg uppercase tracking-widest font-bold transition-all ${
                theme === '8bit'
                  ? 'bg-amber text-ink hover:bg-gold bit-8-border disabled:bg-stone'
                  : 'bg-burgundy text-white hover:bg-leather disabled:bg-stone/50'
              } disabled:cursor-not-allowed`}
            >
              {isSubmitting 
                ? (theme === '8bit' ? '>>> SENDING... <<<' : 'Sending...')
                : (theme === '8bit' ? '>>> SEND MESSAGE <<<' : 'Send Message')
              }
            </button>
          </form>

          <div className={`mt-6 pt-6 border-t ${theme === '8bit' ? 'border-amber/30' : 'border-stone/30'}`}>
            <p className={`text-center text-sm ${theme === '8bit' ? 'text-cream' : 'text-charcoal'}`}>
              Or reach out directly:{' '}
              <a
                href="mailto:beka.qendrim1@gmail.com"
                className={`font-semibold ${theme === '8bit' ? 'text-amber hover:text-gold' : 'text-burgundy hover:text-leather'}`}
              >
                beka.qendrim1@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


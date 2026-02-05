'use client';

import { useState } from 'react';
import { SOCIALS } from '@/lib/siteData';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message, website }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error || 'Failed to send.');
      setStatus('sent');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Failed to send.');
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          {/* Honeypot (hidden) */}
          <div className="hidden" aria-hidden="true">
            <label className="block text-sm text-gray-700 mb-1" htmlFor="website">
              Website
            </label>
            <input
              id="website"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1" htmlFor="message">
              Message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              rows={5}
              placeholder="What should we build?"
            />
          </div>

          {status === 'error' && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          {status === 'sent' && (
            <p className="text-sm text-gray-700">Sent.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>

        <div className="space-y-3 text-sm">
          <p className="text-gray-700">Or reach me here:</p>
          <div className="space-y-2">
            <a href={`mailto:${SOCIALS.email}`} className="text-gray-600 hover:text-gray-900">
              {SOCIALS.email}
            </a>
            <div className="flex flex-col gap-1">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                GitHub
              </a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                LinkedIn
              </a>
              <a href={SOCIALS.calendly} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                Calendly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

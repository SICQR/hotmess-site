'use client'

import { useState } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Contact</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch for support, partnerships, press inquiries, or just to say hello
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <div className="card">
                <h2 className="mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-display font-bold uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-display font-bold uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-display font-bold uppercase mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="press">Press & Media</option>
                      <option value="artist">Artist Collaboration</option>
                      <option value="venue">Venue Partnership</option>
                      <option value="affiliate">Affiliate Program</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-display font-bold uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white"
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="card text-center">
                <div className="text-4xl mb-4">✨</div>
                <h2 className="mb-4">Message Sent!</h2>
                <p className="mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">Other Ways to Reach Us</h2>
          <div className="grid grid-3 mb-8">
            <div className="card text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="mb-2">Community</h3>
              <p className="small mb-3">Join our Telegram for real-time support</p>
              <a href="/rooms" className="btn btn-secondary text-sm">Join Telegram</a>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="mb-2">Social Media</h3>
              <p className="small mb-3">Follow us for updates and community highlights</p>
              <div className="space-y-2">
                <a href="#" className="block text-accent hover:opacity-75">Instagram</a>
                <a href="#" className="block text-accent hover:opacity-75">Twitter</a>
                <a href="#" className="block text-accent hover:opacity-75">TikTok</a>
              </div>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="mb-2">Direct Email</h3>
              <p className="small mb-3">For specific inquiries</p>
              <div className="space-y-2 text-sm">
                <p>Support: support@hotmess.london</p>
                <p>Press: press@hotmess.london</p>
                <p>Partnerships: partners@hotmess.london</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Response Times</h2>
          <div className="grid grid-2 mb-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="mb-3 text-green-400">Priority Inquiries</h3>
              <ul className="small space-y-2">
                <li>• Customer support: Within 2 hours</li>
                <li>• Order issues: Within 1 hour</li>
                <li>• Technical problems: Within 4 hours</li>
                <li>• Community moderation: Immediate</li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="mb-3 text-accent">Standard Inquiries</h3>
              <ul className="small space-y-2">
                <li>• General questions: Within 24 hours</li>
                <li>• Partnership proposals: Within 48 hours</li>
                <li>• Press inquiries: Within 24 hours</li>
                <li>• Artist collaborations: Within 72 hours</li>
              </ul>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '/community', label: 'Join Community' }}
            secondary={{ href: '/affiliate', label: 'Become Affiliate' }}
          />
        </div>
      </section>
    </>
  )
}
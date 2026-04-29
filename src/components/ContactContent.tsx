'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles, Zap } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { name, email, company, subject, message } = form;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : '',
      `Subject: ${subject}`,
      '',
      message,
    ].filter(Boolean).join('%0A');
    window.location.href = `mailto:contact@multiorigin.com?subject=${encodeURIComponent(subject || 'Enquiry from MultiOrigin Website')}&body=${bodyLines}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  }

  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label="Contact hero" className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="aurora opacity-70" />
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.18),transparent_70%)]" />
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow mb-7">
              <Sparkles size={11} className="text-orange-400" /> Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-7 tracking-display leading-[0.95] text-balance">
              <span className="gradient-text-soft">Let&apos;s </span>
              <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-gray-300/90 text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-light">
              Have a project in mind, a question about our services, or just want to say hello?
              We&apos;d love to hear from you. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section aria-label="Contact details and form" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Info */}
            <motion.div {...fade()} className="lg:col-span-2 space-y-5">
              <div className="mb-2">
                <h2 className="text-3xl font-black mb-3 tracking-display">Contact Information</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Reach out to us directly via email or phone, or use the contact form. We typically
                  respond to all enquiries within one business day.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    label: 'Email Us',
                    value: 'contact@multiorigin.com',
                    sub: 'For all project and service enquiries',
                    href: 'mailto:contact@multiorigin.com',
                  },
                  {
                    icon: Phone,
                    label: 'Call Us',
                    value: '+91 9650582767',
                    sub: 'Mon–Sat, 10am–7pm IST',
                    href: 'tel:+919650582767',
                  },
                  {
                    icon: MapPin,
                    label: 'Based In',
                    value: 'India',
                    sub: 'Serving clients nationwide',
                  },
                  {
                    icon: Clock,
                    label: 'Business Hours',
                    value: 'Mon – Sat',
                    sub: '10:00 AM – 7:00 PM IST',
                  },
                ].map(({ icon: Icon, label, value, sub, href }) => {
                  const Wrap: 'a' | 'div' = href ? 'a' : 'div';
                  return (
                    <Wrap
                      key={label}
                      {...(href ? { href } : {})}
                      className="flex items-start gap-4 p-5 surface-elevated rounded-2xl card-hover group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon size={18} className="text-orange-400" strokeWidth={1.75} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1.5 font-semibold">
                          {label}
                        </p>
                        <p className="text-sm font-bold text-white truncate">{value}</p>
                        <p className="text-xs text-gray-500 mt-1">{sub}</p>
                      </div>
                    </Wrap>
                  );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/12 via-orange-500/5 to-transparent border border-orange-500/25 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-orange-300 font-bold mb-1.5">Quick Response Guarantee</p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We aim to respond to all enquiries within 24 business hours. For urgent projects,
                      please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fade(0.2)} className="lg:col-span-3">
              <div className="surface-elevated rounded-3xl p-8 md:p-10 relative overflow-hidden">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl" />
                <div className="relative">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mx-auto mb-6 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.5)]">
                        <CheckCircle2 size={36} className="text-orange-400" />
                      </div>
                      <h3 className="text-3xl font-black mb-3 tracking-display">Message Sent!</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                        Your email client should have opened with the message pre-filled. We&apos;ll
                        get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', company: '', subject: '', message: '' });
                        }}
                        className="mt-7 btn-ghost"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="mb-7">
                        <h3 className="text-2xl font-black mb-2 tracking-display">Send Us a Message</h3>
                        <p className="text-sm text-gray-500">
                          Tell us about your project and we&apos;ll get back to you with how we can help.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                            Your Name <span className="text-orange-400">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="input-modern"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                            Email Address <span className="text-orange-400">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="input-modern"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                          Company / Organisation
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name (optional)"
                          className="input-modern"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                          Service You&apos;re Interested In
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="input-modern appearance-none cursor-pointer bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23f97316%22 stroke-width=%222.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><polyline points=%226 9 12 15 18 9%22></polyline></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10"
                        >
                          <option value="">Select a service or topic</option>
                          <option value="Print Services">Print Services</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Print Design">Print Design</option>
                          <option value="UI/UX Design & Development">UI/UX Design &amp; Development</option>
                          <option value="Brand Partnership">Brand Partnership</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-[11px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
                          Your Message <span className="text-orange-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your project, timeline, goals, or any questions you have..."
                          className="input-modern resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          'Opening email client...'
                        ) : (
                          <>
                            <Send size={15} strokeWidth={2.5} /> Send Message
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-gray-600 text-center pt-2">
                        This opens your email client with the message pre-filled. Your details are
                        never stored on our servers.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

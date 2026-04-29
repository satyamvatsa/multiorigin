'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const brands = [
  {
    name: 'Anginat',
    initial: 'A',
    tagline: 'AI Voice Services Platform',
    desc: 'Anginat is an AI-powered voice platform that lets you build seamless voice experiences in just a few clicks. From natural-sounding text to speech across 10+ languages to real-time speech recognition, voice chat, and personalised voice cloning — Anginat puts the power of AI voice technology in your hands.',
    highlights: [
      'Text to Speech — natural, multi-language audio',
      'Speech to Text — real-time AI transcription',
      'Voice Chat — conversational AI via voice',
      'Voice Cloning — personalised voice models',
      '50+ voice models available',
      'Supports Hindi, Bengali, Tamil & 10+ languages',
      '99.9% uptime guarantee',
      'Flexible Pro, Pro+, and Premium plans',
    ],
    href: 'https://anginat.com',
  },
  {
    name: 'AnginatLearning',
    initial: 'AL',
    tagline: 'AI-Powered Learning Management System',
    desc: 'AnginatLearning is revolutionising education across India with a comprehensive AI-powered LMS built for K-12 schools, higher education institutions, coaching centres, and corporate training departments. The platform delivers 40+ features completely free — with zero hidden costs — enabling institutions to digitalise and automate every aspect of their educational operations.',
    highlights: [
      '500+ educational institutions served',
      '100,000+ active learners on the platform',
      '95% success rate across delivered courses',
      '60% time savings through automation',
      '40+ features, 100% free — no hidden costs',
      'AI-powered analytics & personalised learning paths',
      'Biometric & QR-based attendance management',
      'ISO 27001 certified & bank-grade encryption',
    ],
    href: 'https://anginatlearning.com',
  },
  {
    name: 'AnginatEvents',
    initial: 'AE',
    tagline: 'AI-Powered Event Management Platform',
    desc: 'AnginatEvents is a comprehensive AI-driven event management ecosystem combining powerful software with optional hardware rental and on-ground support. From bulk registration and exhibitor management to AI-powered facial recognition photo distribution and real-time analytics — every detail is handled with technology-first precision. Available in Self-Service, Hybrid, and Full-Service modes.',
    highlights: [
      '50,000+ events successfully managed',
      '10 million+ attendees registered',
      '98% client satisfaction rate',
      'AI Photo Distribution via facial recognition',
      'QR code badge printing & mobile check-in',
      'Multi-channel comms via email & WhatsApp',
      'Real-time analytics dashboard & ROI metrics',
      'ISO 27001 certified | GDPR compliant',
    ],
    href: 'https://anginatevents.com',
  },
];

export default function BrandsContent() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label="Brands hero" className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="aurora opacity-70" />
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.18),transparent_70%)]" />
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="eyebrow mb-7">
              <Sparkles size={11} className="text-orange-400" /> Our Ecosystem
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-7 tracking-display leading-[0.95] text-balance">
              <span className="gradient-text-soft">Brands Under </span>
              <span className="gradient-text">MultiOrigin</span>
            </h1>
            <p className="text-gray-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Three powerful brands, each with a distinct purpose and identity — all driven by the
              same relentless commitment to quality that defines MultiOrigin.
            </p>
          </motion.div>

          {/* Brand quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 flex justify-center gap-3 flex-wrap"
          >
            {brands.map(({ name, initial, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full pl-2 pr-4 py-2 inline-flex items-center gap-2.5 hover:border-orange-500/40 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[10px] font-black text-black">
                  {initial}
                </span>
                <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                  {name}
                </span>
                <ArrowUpRight size={11} className="text-gray-500 group-hover:text-orange-400 transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BRAND DETAILS ─── */}
      <section aria-label="Brand details" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {brands.map(({ name, initial, tagline, desc, highlights, href }, i) => (
            <motion.article
              key={name}
              {...fade(i * 0.1)}
              className="surface-elevated rounded-[2rem] overflow-hidden card-hover card-shine group relative"
            >
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

              <div className="p-9 md:p-12 relative">
                <div className="grid lg:grid-cols-12 gap-10">
                  {/* Left — identity */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-7">
                      <span className="text-[11px] font-bold text-orange-400/60 tracking-widest">
                        BRAND 0{i + 1}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-orange-500/40 via-orange-500/10 to-transparent" />
                    </div>

                    <div className="relative mb-8 inline-block">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-orange-500/30 via-orange-500/15 to-orange-500/5 border border-orange-500/30 flex items-center justify-center shadow-[0_12px_40px_-8px_rgba(249,115,22,0.4)] relative overflow-hidden">
                        <span className="font-black text-orange-300 text-3xl relative z-10">{initial}</span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/5 to-orange-300/20" />
                      </div>
                      <div className="absolute -inset-2 bg-orange-500/20 rounded-3xl blur-xl -z-10" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-display text-balance">
                      {name}
                    </h2>
                    <span className="inline-block text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/25 px-3 py-1.5 rounded-full mb-6">
                      {tagline}
                    </span>
                    <p className="text-gray-400 leading-relaxed text-[15px] mb-8">{desc}</p>

                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${name} website`}
                      className="btn-primary"
                    >
                      Visit {name}
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </a>
                  </div>

                  {/* Right — highlights */}
                  <div className="lg:col-span-7">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                      Key Highlights
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {highlights.map((h, j) => (
                        <motion.div
                          key={h}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.04 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-orange-500/25 hover:bg-orange-500/5 transition-all"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-2 shadow-[0_0_8px_#f97316]" />
                          <span className="text-sm text-gray-300 leading-snug">{h}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── CONNECTION ─── */}
      <section
        aria-label="Brand ecosystem connection"
        className="relative section-pad overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 blur-[120px] rounded-full" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fade()}>
            <span className="eyebrow mb-7">
              <span className="eyebrow-dot" /> The Synergy
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-7 tracking-display text-balance leading-[1.05]">
              <span className="gradient-text-soft">One Family, </span>
              <span className="gradient-text">Many Strengths</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5 text-[15px]">
              What makes MultiOrigin powerful is the deep synergy between our brands. Anginat brings
              AI voice technology to businesses and creators. AnginatLearning digitalises and automates
              education for institutions across India. AnginatEvents manages events at scale with AI precision.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12 text-[15px]">
              Together, they form a technology-first creative ecosystem — united under MultiOrigin&apos;s
              commitment to building products and services that genuinely change how people communicate,
              learn, and connect.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:border-orange-500/40 transition-colors inline-flex items-center gap-2"
                >
                  {name} <ArrowUpRight size={13} className="text-orange-400" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section aria-label="Brands call to action" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="aurora opacity-60" />
        <div className="noise-overlay" />

        <div className="relative max-w-4xl mx-auto px-6">
          <motion.div
            {...fade()}
            className="glass-strong rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-display text-balance leading-[1.05]">
                Want to Partner with <span className="gradient-text">MultiOrigin?</span>
              </h2>
              <p className="text-gray-300/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Whether it&apos;s a brand collaboration, a service project, or something entirely new —
                we&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

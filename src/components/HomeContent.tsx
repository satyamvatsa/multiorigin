'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Printer,
  Megaphone,
  Palette,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Star,
} from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const services = [
  {
    icon: Printer,
    title: 'Print',
    desc: 'High-quality print production — from premium business stationery to large-format banners — crafted with precision and delivered on time.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that amplify your brand across SEO, social media, content, and paid channels with measurable ROI.',
  },
  {
    icon: Palette,
    title: 'Print Design',
    desc: 'Visually striking designs for every print format — brochures, packaging, exhibition materials, posters, and more.',
  },
  {
    icon: Code2,
    title: 'UI/UX Design & Development',
    desc: 'Beautiful, conversion-optimised websites and mobile apps built with modern technology and rigorous user experience principles.',
  },
];

const brands = [
  {
    name: 'Anginat',
    initial: 'A',
    tagline: 'AI Voice Services Platform',
    desc: 'Build seamless voice experiences with Text to Speech, Speech to Text, Voice Chat, and Voice Cloning — powered by AI, supporting 10+ languages and 50+ voice models.',
    href: 'https://anginat.com',
  },
  {
    name: 'AnginatLearning',
    initial: 'AL',
    tagline: 'AI-Powered Learning Management System',
    desc: 'Revolutionising education across India with an AI-powered LMS for schools, colleges, and corporates — 500+ institutions, 100,000+ active learners, and 40+ features completely free.',
    href: 'https://anginatlearning.com',
  },
  {
    name: 'AnginatEvents',
    initial: 'AE',
    tagline: 'AI-Powered Event Management Platform',
    desc: 'End-to-end AI-driven event management — from registration and exhibitor tools to AI photo distribution and real-time analytics. 50,000+ events managed, 10M+ attendees registered.',
    href: 'https://anginatevents.com',
  },
];

const stats = [
  { value: '10M+', label: 'Event Attendees via AnginatEvents' },
  { value: '500+', label: 'Institutions on AnginatLearning' },
  { value: '50K+', label: 'Events Managed' },
  { value: '98%', label: 'Client Satisfaction' },
];

const clients = [
  'Apex Analytix',
  'Compunnel Inc',
  'Accops',
  'Havells',
  'Same Day Solution',
  'Grafet',
  'Womenrf',
];

const doubled = [...clients, ...clients];

const pillars = [
  { title: 'Creative Vision', desc: 'Strategy-led design that connects' },
  { title: 'Strategic Growth', desc: 'Campaigns built for measurable results' },
  { title: 'Technical Excellence', desc: 'Modern, scalable development' },
  { title: 'Brand Impact', desc: 'Memorable experiences at every touchpoint' },
];

export default function HomeContent() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        aria-label="Hero"
        className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
      >
        {/* Layered backgrounds */}
        <div className="absolute inset-0 hero-grid" />
        <div className="aurora" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.15),transparent_70%)]" />
        <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-orange-500/10 blur-[120px] float-y" />
        <div
          className="absolute -right-32 bottom-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/8 blur-[140px] float-y"
          style={{ animationDelay: '-3s' }}
        />
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <span className="eyebrow mb-7">
              <span className="eyebrow-dot" />
              Creative Agency &amp; Brand Studio — India
            </span>

            <h1 className="text-[3.25rem] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black leading-[0.95] tracking-display mb-8 text-balance">
              <span className="gradient-text-soft">Building Brands</span>
              <br />
              <span className="gradient-text inline-flex items-center gap-4">
                That Matter
                <Sparkles
                  className="text-orange-500 hidden md:inline-block float-y"
                  size={48}
                  strokeWidth={1.5}
                />
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300/90 max-w-3xl leading-relaxed mb-5 font-light">
              MultiOrigin is a full-service creative studio helping businesses grow through{' '}
              <span className="text-white font-semibold">print</span>,{' '}
              <span className="text-white font-semibold">digital marketing</span>,{' '}
              <span className="text-white font-semibold">brand design</span>, and{' '}
              <span className="text-white font-semibold">web &amp; app development</span> — all under one roof.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-12">
              Parent company of Anginat (AI Voice), AnginatLearning (AI-powered LMS), and AnginatEvents (AI Event Management). Trusted by Havells, Compunnel Inc, Accops, and more.
            </p>

            <div className="flex flex-wrap gap-3.5 items-center">
              <Link href="/services" className="btn-primary">
                Explore Services <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Get in Touch
              </Link>

              <div className="hidden sm:flex items-center gap-3 ml-4 pl-5 border-l border-white/10">
                <div className="flex -space-x-2">
                  {['H', 'C', 'A'].map((c, i) => (
                    <span
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 ring-2 ring-[#050505] flex items-center justify-center text-xs font-black text-black"
                    >
                      {c}
                    </span>
                  ))}
                  <span className="w-9 h-9 rounded-full bg-white/5 ring-2 ring-[#050505] flex items-center justify-center text-[10px] font-bold text-orange-400">
                    +20
                  </span>
                </div>
                <div className="text-xs text-gray-500 leading-tight">
                  <div className="text-white font-semibold">Trusted partners</div>
                  across India
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex absolute bottom-8 right-6 items-center gap-2 text-[11px] uppercase tracking-widest text-gray-600 font-semibold"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500/60" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section aria-label="Key statistics" className="relative">
        <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
          <div className="glass-strong rounded-3xl px-8 py-10 md:px-12 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none" />
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                {...fade(i * 0.1)}
                className="relative text-center md:text-left group"
              >
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2 tracking-display">
                  {value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 leading-snug">{label}</div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section aria-label="About MultiOrigin" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fade()} className="lg:col-span-6">
              <span className="eyebrow mb-6">Who We Are</span>
              <h2 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-display mb-7 text-balance">
                <span className="gradient-text-soft">One Origin,</span>
                <br />
                <span className="gradient-text">Multiple Possibilities.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-[15px]">
                MultiOrigin is the parent company behind a growing ecosystem of brands — Anginat,
                AnginatLearning, and AnginatEvents. We combine creative strategy, design excellence,
                and technical mastery to help businesses stand out and scale.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4 text-[15px]">
                From crafting premium print materials for global brands like Havells and Compunnel Inc,
                to building full-stack digital products for startups and enterprises, we deliver
                end-to-end creative solutions with passion and precision.
              </p>
              <p className="text-gray-400 leading-relaxed mb-9 text-[15px]">
                Our integrated approach means every touchpoint — physical and digital — speaks with
                one consistent, compelling voice.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm group"
              >
                <span className="relative">
                  Learn More About Us
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-orange-500 to-transparent group-hover:from-orange-300" />
                </span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div {...fade(0.2)} className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="absolute -inset-8 bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />
              {pillars.map((item, i) => (
                <div
                  key={item.title}
                  className={`surface-elevated rounded-2xl p-6 card-hover card-shine relative ${
                    i % 2 === 1 ? 'mt-8' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center mb-4">
                    <span className="text-orange-400 font-black text-base">0{i + 1}</span>
                  </div>
                  <p className="text-[15px] font-bold text-white mb-1.5">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section aria-label="Our services" className="relative section-pad">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-6">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              From the first print run to the final app build, we cover every creative and technical
              discipline your brand needs to grow in the modern world.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.article
                key={title}
                {...fade(i * 0.1)}
                className="group relative surface-elevated rounded-3xl p-7 card-hover card-shine overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={24} className="text-orange-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold mb-2.5 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-orange-400/0 group-hover:text-orange-400 transition-colors">
                    Learn more <ArrowRight size={11} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...fade(0.4)} className="text-center mt-12">
            <Link href="/services" className="btn-ghost">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section aria-label="Our clients" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow mb-6">Trusted By</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance">
              Brands That <span className="gradient-text">Trust Us</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We&apos;re proud to have partnered with industry leaders and innovators across sectors —
              delivering results that speak for themselves.
            </p>
          </motion.div>

          {/* Marquee */}
          <motion.div {...fade(0.2)} className="relative overflow-hidden py-6 -mx-6">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
            <div className="marquee-track">
              {doubled.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="flex items-center gap-3 mx-2 px-7 py-4 glass rounded-full flex-shrink-0 group hover:border-orange-500/40 transition-colors"
                >
                  <Star size={12} className="text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-200 whitespace-nowrap group-hover:text-orange-300 transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client grid */}
          <motion.div
            {...fade(0.3)}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
          >
            {clients.map((name) => (
              <div
                key={name}
                className="surface-elevated rounded-2xl p-5 flex items-center gap-3 card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-orange-400 font-black text-sm">{name[0]}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-tight truncate">{name}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Trusted Partner</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl p-5 flex items-center gap-3 bg-gradient-to-br from-orange-500/15 to-orange-500/5 border border-orange-500/25">
              <div className="w-10 h-10 rounded-xl bg-orange-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-orange-300 font-black text-sm">+</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-orange-300 leading-tight">And More</p>
                <p className="text-[11px] text-orange-400/60 mt-0.5">Growing every day</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BRANDS ─── */}
      <section aria-label="Our brand ecosystem" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-6">Our Ecosystem</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance">
              Brands Under <span className="gradient-text">MultiOrigin</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Three distinct brands, one unified vision — creating value across education, events,
              and consumer experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {brands.map(({ name, initial, tagline, desc, href }, i) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                {...fade(i * 0.15)}
                className={`relative group surface-elevated rounded-3xl p-8 card-hover card-shine block overflow-hidden ${
                  i === 1 ? 'md:mt-8' : ''
                }`}
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/30 via-orange-500/15 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)]">
                    <span className="font-black text-orange-300 text-xl">{initial}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-1.5 tracking-tight">{name}</h3>
                  <p className="text-xs text-orange-400 font-semibold mb-4 uppercase tracking-wider">
                    {tagline}
                  </p>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">{desc}</p>
                  <span className="text-xs font-semibold text-orange-400 inline-flex items-center gap-1.5 pt-4 border-t border-white/5 w-full">
                    Visit Website <ArrowRight size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div {...fade(0.4)} className="text-center mt-12">
            <Link href="/brands" className="btn-ghost">
              Learn More About Our Brands <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section aria-label="Call to action" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="aurora opacity-60" />
        <div className="noise-overlay" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            {...fade()}
            className="glass-strong rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl" />

            <div className="relative">
              <span className="eyebrow mb-7">
                <span className="eyebrow-dot" />
                Let&apos;s Build Together
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-7 tracking-display text-balance leading-[1.05]">
                Ready to Build Something
                <br />
                <span className="gradient-text">Extraordinary?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Whether you need a stunning website, a bold print campaign, or a complete brand
                identity — we&apos;re here to make it happen.
              </p>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <Link href="/contact" className="btn-primary">
                  Start a Project <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <Link href="/brands" className="btn-ghost">
                  Explore Our Brands
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

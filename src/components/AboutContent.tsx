'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Users, Globe, Star, Sparkles } from 'lucide-react';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    desc: 'Every project starts with a clear objective. We align our creative work with your business goals to deliver outcomes that are both beautiful and effective.',
  },
  {
    icon: Zap,
    title: 'Bold & Innovative',
    desc: 'We push creative boundaries and embrace emerging technologies to ensure your brand stays ahead of evolving market trends.',
  },
  {
    icon: Heart,
    title: 'Passionate Craft',
    desc: 'Quality isn\'t a checkbox for us — it\'s the foundation of everything we create. We genuinely care about the work we put into the world.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    desc: 'We work with you, not just for you. Your insights and vision shape our strategy; our creativity brings that vision to life.',
  },
  {
    icon: Globe,
    title: 'Wide Reach',
    desc: 'Our multi-brand ecosystem gives us deep expertise and infrastructure to serve diverse industries and markets across India.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    desc: 'We sweat the small stuff so you don\'t have to. Every pixel, every word, every design decision is deliberate and intentional.',
  },
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

const timeline = [
  { year: '2020', event: 'MultiOrigin founded with a vision for unified brand building across print, design, and digital' },
  { year: '2021', event: 'Launched Anginat — an AI voice platform with Text to Speech, Speech to Text, Voice Chat, and Voice Cloning capabilities' },
  { year: '2022', event: 'AnginatLearning launched — an AI-powered LMS now serving 500+ institutions and 100,000+ learners across India' },
  { year: '2023', event: 'AnginatEvents launched — an AI-powered event management platform that has since managed 50,000+ events and 10M+ attendees' },
  { year: '2024', event: 'Expanded client portfolio to include Havells, Compunnel Inc, Accops, and more' },
  { year: '2025+', event: 'Scaling services, growing the team, and building the future of Indian creative excellence' },
];

export default function AboutContent() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label="About MultiOrigin hero" className="relative pt-36 pb-20 overflow-hidden">
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
              <Sparkles size={11} className="text-orange-400" /> Our Story
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-7 tracking-display leading-[0.95] text-balance">
              <span className="gradient-text-soft">About </span>
              <span className="gradient-text">MultiOrigin</span>
            </h1>
            <p className="text-gray-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              We started with a simple belief: great brands deserve great creative partners. That
              belief — and the relentless pursuit of excellence it demands — drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── STORY + TIMELINE ─── */}
      <section aria-label="Company story" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fade()}>
              <span className="eyebrow mb-6">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black leading-[1.05] mb-7 tracking-display text-balance">
                <span className="gradient-text-soft">Where It All</span>
                <br />
                <span className="gradient-text">Began</span>
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
                <p>
                  MultiOrigin was founded on a bold vision: to create a unified creative ecosystem
                  where design, technology, and marketing work in seamless harmony — helping brands
                  connect authentically with their audiences at every touchpoint.
                </p>
                <p>
                  What began as a focused creative studio quickly grew into a technology-powered multi-brand
                  ecosystem. Today, MultiOrigin is the parent company of three distinct brands: Anginat,
                  an AI voice services platform supporting 50+ voice models across 10+ languages;
                  AnginatLearning, an AI-powered LMS serving 500+ educational institutions and 100,000+
                  learners; and AnginatEvents, an AI-driven event management platform that has powered
                  50,000+ events and 10 million+ attendee registrations.
                </p>
                <p>
                  We have had the privilege of working with some of India&apos;s most respected organisations,
                  including Havells, Compunnel Inc, Accops, Apex Analytix, and more — delivering creative
                  solutions that drive real business results.
                </p>
                <p>
                  Our belief is simple: the best creative work happens when strategy meets creativity,
                  and when both are executed with technical mastery. That&apos;s the MultiOrigin way.
                </p>
              </div>
            </motion.div>

            <motion.div {...fade(0.2)} className="relative lg:pl-10">
              <div className="absolute left-[5.25rem] lg:left-[6.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-orange-500/40 to-transparent" />
              <div className="space-y-7">
                {timeline.map(({ year, event }, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex gap-5 items-start group"
                  >
                    <div className="flex-shrink-0 w-20 lg:w-24 text-right">
                      <span className="text-base font-black gradient-text">{year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-1">
                      <span className="block w-3 h-3 rounded-full bg-orange-500 ring-4 ring-orange-500/15 group-hover:ring-orange-500/30 transition-all" />
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed pt-0.5 flex-1">{event}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section aria-label="Mission and vision" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To empower businesses and individuals with exceptional creative solutions — blending artistry with strategy to deliver work that drives real-world results, builds lasting brand equity, and creates meaningful human connections.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: "To be India's most trusted creative and technology ecosystem — building AI-powered products and exceptional creative services that help businesses communicate, educate, and operate at scale across every touchpoint.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.15)}
                className="surface-elevated rounded-3xl p-9 md:p-10 card-hover card-shine relative overflow-hidden group"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-700" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-7 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)]">
                    <Icon size={26} className="text-orange-400" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-3xl font-black mb-4 tracking-display">{title}</h2>
                  <p className="text-gray-400 leading-relaxed text-[15px]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section aria-label="Core values" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow mb-6">What Drives Us</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 text-lg">
              These six principles are not aspirations — they are the standards we hold ourselves
              to on every single project we take on.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={20} className="text-orange-400" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold mb-2 tracking-tight">{title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENTS ─── */}
      <section aria-label="Our clients" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow mb-6">Who Trusts Us</span>
            <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-display text-balance">
              Our <span className="gradient-text">Clients</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We have had the privilege of working with outstanding organisations across
              technology, manufacturing, education, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((name, i) => (
              <motion.div
                key={name}
                {...fade(i * 0.06)}
                className="surface-elevated rounded-2xl p-5 flex items-center gap-3 card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Star size={14} className="text-orange-400" />
                </div>
                <p className="text-sm font-semibold text-white leading-tight truncate">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BRAND PROMISE ─── */}
      <section aria-label="Brand promise" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
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
              <h2 className="text-4xl md:text-6xl font-black mb-7 tracking-display text-balance leading-[1.05]">
                The <span className="gradient-text">MultiOrigin</span> Promise
              </h2>
              <p className="text-gray-300/90 text-lg leading-relaxed max-w-2xl mx-auto font-light">
                We don&apos;t just complete projects — we build long-term partnerships built on trust,
                transparency, and a shared passion for excellence. Every brand we touch, every service
                we deliver, every line of code we write is a reflection of that commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

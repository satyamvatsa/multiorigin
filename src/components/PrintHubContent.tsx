'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Mail,
  Phone,
  CheckCircle2,
  Layers,
  Award,
  Zap,
  Globe,
} from 'lucide-react';
import { PRINT_SERVICES, ICONS } from '@/lib/print-services';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const printAdvantages = [
  {
    icon: Award,
    title: 'Bank-grade quality',
    desc: 'Premium machines, premium materials, premium finishing — at every price point.',
  },
  {
    icon: Zap,
    title: 'Rapid turnaround',
    desc: 'Same-day rush available; standard 3–7 days; bulk runs reliably on schedule.',
  },
  {
    icon: Globe,
    title: 'Pan-India delivery',
    desc: 'Direct production-to-doorstep dispatch with insured tracking nationwide.',
  },
  {
    icon: Layers,
    title: 'End-to-end service',
    desc: 'From design and prototyping to printing, finishing, and last-mile delivery.',
  },
];

export default function PrintHubContent() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label="Print services hero" className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="aurora opacity-70" />
        <div className="absolute inset-x-0 top-0 h-[50vh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(249,115,22,0.18),transparent_70%)]" />
        <div className="noise-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl"
          >
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-xs text-gray-500 mb-7"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-orange-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-orange-400 transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-orange-400">Print</span>
            </nav>

            <span className="eyebrow mb-7">
              <Sparkles size={11} className="text-orange-400" /> Print Services Hub
            </span>

            <h1 className="text-[3rem] sm:text-7xl md:text-[5.5rem] lg:text-[6rem] font-black mb-7 tracking-display leading-[0.95] text-balance">
              <span className="gradient-text-soft">Premium Print </span>
              <span className="gradient-text">Services in India</span>
            </h1>

            <p className="text-orange-300/90 text-lg md:text-xl font-semibold mb-5 italic">
              Cards, lanyards, packaging, apparel, signage — printed to perfection.
            </p>

            <p className="text-gray-300/90 text-base md:text-lg leading-relaxed mb-9 font-light max-w-3xl">
              MultiOrigin is a full-stack print partner for Indian brands — from PVC and smart cards
              to packaging, t-shirts, and large-format flex. Every order is engineered for durability,
              brand impact, and a finish that punches well above its price. Bulk orders, custom shapes,
              eco-friendly materials, and pan-India delivery — handled in-house, end-to-end.
            </p>

            <div className="flex flex-wrap gap-3.5 items-center">
              <Link href="/contact" className="btn-primary">
                Get a Quote <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <a href="tel:+919650582767" className="btn-ghost">
                <Phone size={14} /> +91 96505 82767
              </a>
            </div>

            {/* Quick jump pills */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {PRINT_SERVICES.map((s) => {
                const Icon = ICONS[s.iconName];
                return (
                  <Link
                    key={s.slug}
                    href={`/services/print/${s.slug}`}
                    className="glass rounded-full pl-2 pr-4 py-1.5 inline-flex items-center gap-2 hover:border-orange-500/40 transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/30 flex items-center justify-center">
                      <Icon size={12} className="text-orange-400" strokeWidth={2} />
                    </span>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                      {s.hero.eyebrow.replace(' Printing', '')}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ADVANTAGES ─── */}
      <section aria-label="Why MultiOrigin for print" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="max-w-3xl mb-14">
            <span className="eyebrow mb-5">Why MultiOrigin</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05] mb-5">
              <span className="gradient-text-soft">A print partner that does </span>
              <span className="gradient-text">all of it well</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Specialised production lines for cards, packaging, apparel, and signage — all under one roof.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {printAdvantages.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-5 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={20} className="text-orange-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-base font-bold mb-2.5 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ALL SPECIALISED SERVICES ─── */}
      <section
        aria-label="Specialised print services"
        className="relative section-pad overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow mb-5">Print Catalogue</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance leading-[1.05]">
              <span className="gradient-text-soft">Every print </span>
              <span className="gradient-text">specialty</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Click any specialty to see materials, specifications, FAQs, and request a custom quote.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRINT_SERVICES.map((service, i) => {
              const Icon = ICONS[service.iconName];
              return (
                <motion.div key={service.slug} {...fade(i * 0.06)}>
                  <Link
                    href={`/services/print/${service.slug}`}
                    className="block surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden h-full"
                  >
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-300">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon size={24} className="text-orange-400" strokeWidth={1.75} />
                      </div>
                      <p className="text-[10px] font-bold text-orange-400/70 uppercase tracking-widest mb-2">
                        {service.category}
                      </p>
                      <h3 className="text-xl font-black mb-2.5 tracking-tight">
                        {service.hero.eyebrow}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-3">
                        {service.hero.tagline}
                      </p>
                      <ul className="space-y-1.5 mb-5">
                        {service.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2
                              size={11}
                              className="text-orange-400 flex-shrink-0 mt-0.5"
                            />
                            <span className="leading-snug">{h}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 pt-4 border-t border-white/5 w-full">
                        Explore Service <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section aria-label="Get a quote" className="relative section-pad overflow-hidden">
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
              <span className="eyebrow mb-7">
                <span className="eyebrow-dot" /> Custom Quotes in 24 Hours
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-display text-balance leading-[1.05]">
                <span className="gradient-text-soft">Tell us what you need </span>
                <span className="gradient-text">printed</span>
              </h2>
              <p className="text-gray-300/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Quantity, size, material, deadline — share the brief and our team responds with a quote and free design support within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <Link href="/contact" className="btn-primary">
                  Request a Quote <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <a href="mailto:contact@multiorigin.com" className="btn-ghost">
                  <Mail size={14} /> contact@multiorigin.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

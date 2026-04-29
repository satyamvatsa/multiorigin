'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Phone,
  Mail,
  Layers,
} from 'lucide-react';
import { ICONS, type PrintService } from '@/lib/print-services';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

type Props = {
  service: PrintService;
  related: PrintService[];
};

export default function PrintServiceDetail({ service, related }: Props) {
  const Icon = ICONS[service.iconName];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label={`${service.hero.eyebrow} hero`} className="relative pt-36 pb-20 overflow-hidden">
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
            className="grid lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-7">
              {/* Breadcrumb */}
              <nav
                className="flex items-center gap-2 text-xs text-gray-500 mb-7 flex-wrap"
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
                <Link
                  href="/services/print"
                  className="hover:text-orange-400 transition-colors"
                >
                  Print
                </Link>
                <span>/</span>
                <span className="text-orange-400">{service.hero.eyebrow}</span>
              </nav>

              <span className="eyebrow mb-7">
                <Sparkles size={11} className="text-orange-400" /> {service.category}
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-display leading-[0.98] text-balance">
                <span className="gradient-text-soft">{service.hero.h1Soft} </span>
                <span className="gradient-text">{service.hero.h1Accent}</span>
              </h1>

              <p className="text-orange-300/90 text-lg md:text-xl font-semibold mb-5 italic">
                {service.hero.tagline}
              </p>

              <p className="text-gray-300/90 text-base md:text-lg leading-relaxed mb-9 font-light max-w-2xl">
                {service.hero.intro}
              </p>

              <div className="flex flex-wrap gap-3.5 items-center">
                <Link href="/contact" className="btn-primary">
                  Get a Quote <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
                <a href="tel:+919650582767" className="btn-ghost">
                  <Phone size={14} /> +91 96505 82767
                </a>
              </div>
            </div>

            {/* Highlights card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-6 bg-orange-500/15 blur-3xl rounded-full pointer-events-none" />
                <div className="relative glass-strong rounded-3xl p-8 overflow-hidden">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-orange-500/5 border border-orange-500/30 flex items-center justify-center shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)]">
                        <Icon size={26} className="text-orange-400" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-orange-400/70 uppercase tracking-widest">
                          Quick Glance
                        </p>
                        <p className="text-sm font-semibold text-white">Key Highlights</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={11} className="text-orange-400" />
                          </div>
                          <span className="text-sm text-gray-300 leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section aria-label="Features" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="max-w-3xl mb-14">
            <span className="eyebrow mb-5">What Sets Us Apart</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05] mb-5">
              <span className="gradient-text-soft">Premium features built into every </span>
              <span className="gradient-text">{service.hero.eyebrow.toLowerCase()}</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every order is engineered for durability, brand impact, and a finish that punches well above its price.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.06)}
                className="surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 text-orange-400 font-black text-sm mb-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold mb-2.5 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section aria-label="Use cases" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute inset-0 dot-grid opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/8 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow mb-5">Use Cases</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05] mb-5">
              Where <span className="gradient-text">{service.hero.eyebrow.split(' ')[0]}</span> wins
            </h2>
            <p className="text-gray-400 text-lg">
              From everyday operations to flagship brand moments — see how teams across India use this service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.useCases.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.06)}
                className="surface-elevated rounded-3xl p-7 card-hover group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Layers size={18} className="text-orange-400" strokeWidth={1.75} />
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

      {/* ─── MATERIALS + SPECS ─── */}
      <section aria-label="Specifications and materials" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Materials */}
            <motion.div {...fade()} className="lg:col-span-4">
              <span className="eyebrow mb-5">Materials</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-display leading-[1.05] mb-5 text-balance">
                <span className="gradient-text">Premium materials</span>
                <span className="gradient-text-soft"> we work with</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-[15px]">
                Pick the material that matches your brand, durability needs, and budget — or let us recommend the optimal choice.
              </p>

              <div className="space-y-2.5">
                {service.materials.map((m) => (
                  <div
                    key={m}
                    className="flex items-center gap-3 px-4 py-3 surface-elevated rounded-2xl group hover:border-orange-500/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316] flex-shrink-0" />
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {m}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specifications */}
            <motion.div {...fade(0.15)} className="lg:col-span-8">
              <div className="surface-elevated rounded-3xl p-2 overflow-hidden relative">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <div className="px-7 pt-7 pb-5 flex items-center justify-between border-b border-white/5">
                    <div>
                      <p className="text-[10px] font-bold text-orange-400/70 uppercase tracking-widest mb-1">
                        Spec sheet
                      </p>
                      <h3 className="text-2xl font-black tracking-display">Technical Specifications</h3>
                    </div>
                    <div className="hidden md:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 items-center justify-center">
                      <Icon size={20} className="text-orange-400" strokeWidth={1.75} />
                    </div>
                  </div>

                  <dl>
                    {service.specifications.map(({ label, value }, i) => (
                      <div
                        key={label}
                        className={`grid grid-cols-1 md:grid-cols-3 gap-3 px-7 py-4 ${
                          i !== service.specifications.length - 1 ? 'border-b border-white/5' : ''
                        } hover:bg-orange-500/[0.02] transition-colors`}
                      >
                        <dt className="text-[11px] font-bold text-orange-400/80 uppercase tracking-widest md:pt-0.5">
                          {label}
                        </dt>
                        <dd className="md:col-span-2 text-sm text-gray-300 leading-relaxed">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section aria-label="Industries served" className="relative section-pad overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-12 max-w-2xl mx-auto">
            <span className="eyebrow mb-5">Industries Served</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-display text-balance leading-[1.1] mb-4">
              Trusted across <span className="gradient-text">every industry</span>
            </h2>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {service.industries.map((ind) => (
              <span
                key={ind}
                className="glass rounded-full px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:border-orange-500/40 transition-colors"
              >
                {ind}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section aria-label="Why choose MultiOrigin" className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[#080809]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow mb-5">Why MultiOrigin</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05] mb-5">
              The <span className="gradient-text">MultiOrigin</span> advantage
            </h2>
            <p className="text-gray-400 text-lg">
              Why hundreds of brands across India trust us with their print and brand identity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.whyChooseUs.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                {...fade(i * 0.08)}
                className="surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-5 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.3)]">
                    <span className="text-orange-300 font-black text-base">{i + 1}</span>
                  </div>
                  <h3 className="text-base font-bold mb-2.5 tracking-tight">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section aria-label="Frequently asked questions" className="relative section-pad">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <span className="eyebrow mb-5">Questions Answered</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05] mb-5">
              Frequently <span className="gradient-text">Asked</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to know about ordering {service.hero.eyebrow.toLowerCase()} from MultiOrigin.
            </p>
          </motion.div>

          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={faq.q}
                  {...fade(i * 0.04)}
                  className="surface-elevated rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-orange-500/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white pr-4">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-orange-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-400 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      {related.length > 0 && (
        <section aria-label="Related services" className="relative section-pad overflow-hidden">
          <div className="absolute inset-0 bg-[#080809]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6">
            <motion.div {...fade()} className="mb-12 max-w-2xl">
              <span className="eyebrow mb-5">Pair With</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-display text-balance leading-[1.05]">
                <span className="gradient-text-soft">You may also need </span>
                <span className="gradient-text">these</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {related.map((r, i) => {
                const RelIcon = ICONS[r.iconName];
                return (
                  <motion.div key={r.slug} {...fade(i * 0.1)}>
                    <Link
                      href={`/services/print/${r.slug}`}
                      className="block surface-elevated rounded-3xl p-7 card-hover card-shine group relative overflow-hidden h-full"
                    >
                      <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-300">
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </div>
                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/25 to-orange-500/5 border border-orange-500/25 flex items-center justify-center mb-5">
                          <RelIcon size={20} className="text-orange-400" strokeWidth={1.75} />
                        </div>
                        <p className="text-[10px] font-bold text-orange-400/70 uppercase tracking-widest mb-2">
                          {r.category}
                        </p>
                        <h3 className="text-xl font-black mb-2 tracking-tight">
                          {r.hero.eyebrow}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                          {r.hero.tagline}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
                <span className="eyebrow-dot" /> Ready when you are
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-display text-balance leading-[1.05]">
                <span className="gradient-text-soft">Get a tailored quote on </span>
                <span className="gradient-text">{service.hero.eyebrow}</span>
              </h2>
              <p className="text-gray-300/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Tell us your quantity, dimensions, and timeline — our team responds with a quote and free design support within 24 hours.
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

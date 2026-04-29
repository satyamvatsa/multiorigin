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
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PRINT_SERVICES, ICONS } from '@/lib/print-services';

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
    tagline: 'From paper to impact.',
    desc: 'We deliver premium print production that brings your brand to life in the physical world. From everyday business stationery to high-impact large-format signage and exhibition materials — every piece is crafted with precision, printed to the highest standard, and delivered on schedule.',
    features: [
      'Business cards & stationery',
      'Banners & flex printing',
      'Brochures & catalogues',
      'Packaging & labels',
      'Posters & flyers',
      'Large format printing',
      'Exhibition standees',
      'Merchandise printing',
    ],
    clients: 'Trusted for print by Havells, Grafet & more.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    tagline: 'Reach the right people, at the right time.',
    desc: 'Our digital marketing strategies combine data intelligence with creative storytelling to put your brand in front of the right audience at exactly the right moment. We build campaigns that don\'t just generate impressions — they generate revenue, loyalty, and lasting brand equity.',
    features: [
      'Search Engine Optimisation (SEO)',
      'Social media management',
      'Paid advertising (PPC/Meta/Google)',
      'Content marketing & copywriting',
      'Email marketing campaigns',
      'Influencer marketing',
      'Analytics & performance reporting',
      'Brand strategy & positioning',
    ],
    clients: 'Driving digital growth for Compunnel Inc, Accops & more.',
  },
  {
    icon: Palette,
    title: 'Print Design',
    tagline: 'Design that demands attention.',
    desc: 'Exceptional print begins with exceptional design. Our award-winning design team creates visually compelling, strategically crafted layouts that communicate your message with clarity and leave a lasting impression — long before a single sheet is ever printed.',
    features: [
      'Brand identity & logo design',
      'Brochure & catalogue design',
      'Packaging & product design',
      'Poster & banner design',
      'Menu & hospitality design',
      'Annual report design',
      'Exhibition & event materials',
      'Stationery & corporate kits',
    ],
    clients: 'Creative print design delivered for Womenrf, Same Day Solution & more.',
  },
  {
    icon: Code2,
    title: 'UI/UX Design & Development',
    tagline: 'Digital experiences that convert.',
    desc: 'We design and build digital products that look stunning, perform flawlessly, and keep users coming back. From discovery workshops and wireframes to pixel-perfect interfaces and production-ready code — every digital experience we create is user-tested, performance-optimised, and built to scale.',
    features: [
      'Website design & development',
      'Mobile app design & development',
      'UI/UX research & user testing',
      'Wireframing & prototyping',
      'E-commerce solutions',
      'CMS & dashboard integration',
      'Performance & SEO optimisation',
      'Maintenance & ongoing support',
    ],
    clients: 'Digital products built for Apex Analytix, Accops, Compunnel Inc & more.',
  },
];

export default function ServicesContent() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section aria-label="Services hero" className="relative pt-36 pb-20 overflow-hidden">
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
              <Sparkles size={11} className="text-orange-400" /> What We Offer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-7 tracking-display leading-[0.95] text-balance">
              <span className="gradient-text-soft">Our </span>
              <span className="gradient-text">Services</span>
            </h1>
            <p className="text-gray-300/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              End-to-end creative and technical services designed to elevate your brand, engage
              your audience, and drive meaningful, measurable growth — all under one roof.
            </p>
          </motion.div>

          {/* Service icons preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-12 flex justify-center gap-3 flex-wrap"
          >
            {services.map(({ icon: Icon, title }) => (
              <a
                key={title}
                href={`#${title.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className="glass rounded-full px-4 py-2.5 inline-flex items-center gap-2 hover:border-orange-500/40 transition-colors group"
              >
                <Icon size={14} className="text-orange-400" />
                <span className="text-xs font-medium text-gray-300 group-hover:text-white">
                  {title}
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES DETAIL ─── */}
      <section aria-label="Service details" className="relative section-pad">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map(({ icon: Icon, title, tagline, desc, features, clients }, i) => (
            <motion.article
              key={title}
              id={title.toLowerCase().replace(/[^a-z]+/g, '-')}
              {...fade(i * 0.08)}
              className="surface-elevated rounded-[2rem] overflow-hidden card-hover card-shine group relative scroll-mt-32"
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="grid md:grid-cols-5 relative">
                {/* Left — info */}
                <div className="md:col-span-3 p-9 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="flex items-center gap-3 mb-7">
                    <span className="text-[11px] font-bold text-orange-400/60 tracking-widest">
                      0{i + 1} / 0{services.length}
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-orange-500/40 via-orange-500/10 to-transparent" />
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-7 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon size={28} className="text-orange-400" strokeWidth={1.75} />
                  </div>
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-3">
                    {tagline}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-display text-balance">
                    {title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">{desc}</p>
                  <p className="text-xs text-orange-400/70 italic flex items-center gap-2">
                    <span className="w-6 h-px bg-orange-500/40" />
                    {clients}
                  </p>
                </div>

                {/* Right — features */}
                <div className="md:col-span-2 p-9 md:p-12 flex flex-col justify-center bg-white/[0.015]">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 group/item">
                        <div className="w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-orange-500/20 transition-colors">
                          <CheckCircle2 size={11} className="text-orange-400" />
                        </div>
                        <span className="text-sm text-gray-300 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── SPECIALISED PRINT SERVICES ─── */}
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
            <span className="eyebrow mb-5">Inside Print Hub</span>
            <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-display text-balance leading-[1.05]">
              <span className="gradient-text-soft">Explore our </span>
              <span className="gradient-text">print specialities</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Deep expertise across PVC cards, NFC &amp; RFID smart cards, lanyards, custom packaging,
              t-shirt printing, and large-format flex — each service backed by dedicated production lines and
              a full SEO-optimised guide.
            </p>
            <Link href="/services/print" className="btn-ghost">
              Visit Print Hub <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
      <section aria-label="Services call to action" className="relative section-pad overflow-hidden">
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
              <span className="eyebrow mb-7">
                <span className="eyebrow-dot" /> Bespoke Solutions
              </span>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-display text-balance leading-[1.05]">
                Need Something <span className="gradient-text">Custom?</span>
              </h2>
              <p className="text-gray-300/90 text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Every brand is unique. Let&apos;s talk about your specific needs and build a tailored
                creative solution that delivers real results for your business.
              </p>
              <Link href="/contact" className="btn-primary">
                Talk to Us <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

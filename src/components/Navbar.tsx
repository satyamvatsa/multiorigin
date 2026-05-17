'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  Printer,
  Megaphone,
  Palette,
  Code2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PRINT_SERVICES, ICONS } from '@/lib/print-services';
import { BRANDS } from '@/lib/brands';

type SimpleLink = { href: string; label: string };

const simpleLinks: SimpleLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

const tailLinks: SimpleLink[] = [
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const coreServices = [
  {
    icon: Printer,
    title: 'Print',
    desc: 'PVC, NFC, RFID, lanyards, packaging, t-shirts, flex',
    href: '/services/print',
    featured: true,
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'SEO, social, paid, content, analytics',
    href: '/services',
  },
  {
    icon: Palette,
    title: 'Print Design',
    desc: 'Brand identity, brochures, packaging, posters',
    href: '/services',
  },
  {
    icon: Code2,
    title: 'UI/UX Design & Dev',
    desc: 'Websites, apps, dashboards, e-commerce',
    href: '/services',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<'services' | 'brands' | null>(null);
  const [mobileSection, setMobileSection] = useState<'services' | 'brands' | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenu(null);
    setOpen(false);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMenu(null);
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function openMenu(name: 'services' | 'brands') {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(name);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  }

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full transition-all duration-500 relative ${
          scrolled
            ? 'glass-strong px-4 md:px-5 h-14 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]'
            : 'glass px-5 md:px-6 h-16'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5 group relative z-10">
          <span className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center font-black text-black text-sm shadow-[0_4px_20px_-4px_rgba(249,115,22,0.6)]">
            M
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </span>
          <span className="font-bold text-[15px] tracking-tight">
            Multi<span className="text-orange-500">Origin</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
          {simpleLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10" />
                  )}
                  <span className="relative">{label}</span>
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                  )}
                </Link>
              </li>
            );
          })}

          {/* Services trigger */}
          <li
            onMouseEnter={() => openMenu('services')}
            onMouseLeave={scheduleClose}
            className="relative"
          >
            <Link
              href="/services"
              onFocus={() => openMenu('services')}
              aria-haspopup="true"
              aria-expanded={menu === 'services'}
              className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                isActive('/services') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {isActive('/services') && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10" />
              )}
              <span className="relative">Services</span>
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className={`relative text-gray-500 transition-transform duration-300 ${
                  menu === 'services' ? 'rotate-180 text-orange-400' : ''
                }`}
              />
              {isActive('/services') && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              )}
            </Link>
          </li>

          {/* Brands trigger */}
          <li
            onMouseEnter={() => openMenu('brands')}
            onMouseLeave={scheduleClose}
            className="relative"
          >
            <Link
              href="/brands"
              onFocus={() => openMenu('brands')}
              aria-haspopup="true"
              aria-expanded={menu === 'brands'}
              className={`relative inline-flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                isActive('/brands') ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {isActive('/brands') && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10" />
              )}
              <span className="relative">Brands</span>
              <ChevronDown
                size={12}
                strokeWidth={2.5}
                className={`relative text-gray-500 transition-transform duration-300 ${
                  menu === 'brands' ? 'rotate-180 text-orange-400' : ''
                }`}
              />
              {isActive('/brands') && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
              )}
            </Link>
          </li>

          {tailLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                    active ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10" />
                  )}
                  <span className="relative">{label}</span>
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 text-black font-semibold text-[13px] pl-4 pr-3 py-2 rounded-full transition-all shadow-[0_6px_20px_-6px_rgba(249,115,22,0.6)] hover:shadow-[0_10px_30px_-6px_rgba(249,115,22,0.8)] hover:-translate-y-0.5"
        >
          Start a Project
          <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
            <ArrowUpRight size={11} strokeWidth={2.5} />
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 text-white flex items-center justify-center transition-colors relative z-10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* ─── Desktop Mega Menu ─── */}
      <AnimatePresence>
        {menu && (
          <motion.div
            key={menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => openMenu(menu)}
            onMouseLeave={scheduleClose}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(96vw,1100px)]"
          >
            <div
              className="rounded-3xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] relative overflow-hidden border border-white/10"
              style={{
                background:
                  'linear-gradient(180deg, #111114 0%, #0a0a0c 100%)',
              }}
            >
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
              <div className="relative">
                {menu === 'services' && <ServicesMega />}
                {menu === 'brands' && <BrandsMega />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-auto max-w-6xl mt-2 glass-strong rounded-3xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-3 py-3 flex flex-col gap-1">
              {simpleLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                      active
                        ? 'text-orange-400 bg-orange-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                  </Link>
                );
              })}

              {/* Services accordion */}
              <button
                onClick={() =>
                  setMobileSection(mobileSection === 'services' ? null : 'services')
                }
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  isActive('/services')
                    ? 'text-orange-400 bg-orange-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={mobileSection === 'services'}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    mobileSection === 'services' ? 'rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>
              {mobileSection === 'services' && (
                <div className="ml-2 pl-3 border-l border-white/10 space-y-1 my-1">
                  <Link
                    href="/services"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-orange-400 uppercase tracking-widest hover:bg-white/5"
                  >
                    All Services
                  </Link>
                  {coreServices.map(({ icon: Icon, title, href }) => (
                    <Link
                      key={title}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      <Icon size={14} className="text-orange-400" />
                      {title}
                    </Link>
                  ))}
                  <p className="px-3 pt-3 pb-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Print Specialities
                  </p>
                  {PRINT_SERVICES.map((s) => {
                    const Icon = ICONS[s.iconName];
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/print/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                      >
                        <Icon size={14} className="text-orange-400" />
                        {s.hero.eyebrow.replace(' Printing', '')}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Brands accordion */}
              <button
                onClick={() => setMobileSection(mobileSection === 'brands' ? null : 'brands')}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  isActive('/brands')
                    ? 'text-orange-400 bg-orange-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
                aria-expanded={mobileSection === 'brands'}
              >
                <span>Brands</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    mobileSection === 'brands' ? 'rotate-180 text-orange-400' : ''
                  }`}
                />
              </button>
              {mobileSection === 'brands' && (
                <div className="ml-2 pl-3 border-l border-white/10 space-y-1 my-1">
                  <Link
                    href="/brands"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-orange-400 uppercase tracking-widest hover:bg-white/5"
                  >
                    All Brands
                  </Link>
                  {BRANDS.map((b) => (
                    <a
                      key={b.name}
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[10px] font-black text-black">
                          {b.initial}
                        </span>
                        {b.name}
                      </span>
                      <ExternalLink size={11} className="text-gray-500" />
                    </a>
                  ))}
                </div>
              )}

              {tailLinks.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                      active
                        ? 'text-orange-400 bg-orange-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{label}</span>
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />}
                  </Link>
                );
              })}

              <div className="px-1 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-br from-orange-400 to-orange-600 text-black font-semibold text-sm px-5 py-3 rounded-2xl"
                >
                  Start a Project <ArrowUpRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ──────────────── Mega Menu Panels ──────────────── */

function ServicesMega() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Core services */}
      <div className="col-span-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-bold text-orange-400/80 uppercase tracking-[0.2em]">
            Core Services
          </p>
          <Link
            href="/services"
            className="text-[11px] font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
          >
            View All <ArrowRight size={11} />
          </Link>
        </div>
        <div className="space-y-1.5">
          {coreServices.map(({ icon: Icon, title, desc, href, featured }) => (
            <Link
              key={title}
              href={href}
              className={`group flex items-start gap-3 p-3 rounded-2xl border transition-all ${
                featured
                  ? 'bg-gradient-to-br from-orange-500/10 to-orange-500/[0.02] border-orange-500/25 hover:border-orange-500/50'
                  : 'border-transparent hover:bg-white/[0.03] hover:border-white/10'
              }`}
            >
              <span
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  featured
                    ? 'bg-gradient-to-br from-orange-500/30 to-orange-500/10 border border-orange-500/30'
                    : 'bg-white/5 border border-white/10 group-hover:bg-orange-500/15 group-hover:border-orange-500/30'
                }`}
              >
                <Icon
                  size={16}
                  className={featured ? 'text-orange-400' : 'text-gray-400 group-hover:text-orange-400 transition-colors'}
                  strokeWidth={1.75}
                />
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-bold text-white">{title}</p>
                  {featured && (
                    <span className="text-[9px] font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      Hub
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 leading-snug">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Print specialities */}
      <div className="col-span-7 border-l border-white/8 pl-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-bold text-orange-400/80 uppercase tracking-[0.2em] inline-flex items-center gap-2">
            <Printer size={11} className="text-orange-400" /> Print Specialities
          </p>
          <Link
            href="/services/print"
            className="text-[11px] font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
          >
            Print Hub <ArrowRight size={11} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {PRINT_SERVICES.map((s) => {
            const Icon = ICONS[s.iconName];
            const label = s.hero.eyebrow.replace(' Printing', '');
            return (
              <Link
                key={s.slug}
                href={`/services/print/${s.slug}`}
                className="group flex items-center gap-3 p-2.5 rounded-xl border border-transparent hover:bg-white/[0.03] hover:border-white/10 transition-all"
              >
                <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:bg-orange-500/15 group-hover:border-orange-500/30 flex items-center justify-center flex-shrink-0 transition-all">
                  <Icon
                    size={14}
                    className="text-gray-400 group-hover:text-orange-400 transition-colors"
                    strokeWidth={1.75}
                  />
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-white leading-tight truncate">
                    {label}
                  </p>
                  <p className="text-[10px] text-gray-500 truncate">{s.category}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-4 p-3 rounded-2xl bg-gradient-to-br from-orange-500/8 to-transparent border border-orange-500/20 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-9 h-9 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Sparkles size={14} className="text-orange-400" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-bold text-white truncate">Need something custom?</p>
              <p className="text-[11px] text-gray-400 truncate">Free quote within 24 hours.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-[11px] font-semibold bg-gradient-to-br from-orange-400 to-orange-600 text-black px-3.5 py-2 rounded-full inline-flex items-center gap-1.5 flex-shrink-0 hover:shadow-[0_8px_24px_-8px_rgba(249,115,22,0.6)] transition-shadow"
          >
            Talk to Us <ArrowRight size={11} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function BrandsMega() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-[10px] font-bold text-orange-400/80 uppercase tracking-[0.2em]">
          Our Brand Ecosystem
        </p>
        <Link
          href="/brands"
          className="text-[11px] font-semibold text-orange-400 hover:text-orange-300 inline-flex items-center gap-1"
        >
          View All Brands <ArrowRight size={11} />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {BRANDS.map((b) => (
          <a
            key={b.name}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/8 hover:border-orange-500/40 hover:bg-orange-500/[0.04] transition-all relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all">
              <ArrowUpRight size={11} strokeWidth={2.5} />
            </div>
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/30 via-orange-500/10 to-orange-500/5 border border-orange-500/30 flex items-center justify-center mb-4 shadow-[0_8px_30px_-8px_rgba(249,115,22,0.4)]">
                <span className="font-black text-orange-300 text-base">{b.initial}</span>
              </div>
              <p className="text-base font-black text-white mb-1 tracking-tight">{b.name}</p>
              <p className="text-[10px] font-semibold text-orange-400 uppercase tracking-wider mb-2">
                {b.tagline}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">{b.shortDesc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

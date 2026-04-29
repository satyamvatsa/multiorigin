import Link from 'next/link';
import { Mail, Phone, ArrowUpRight, MapPin } from 'lucide-react';

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
import { PRINT_SERVICES } from '@/lib/print-services';
import { BRANDS } from '@/lib/brands';

const coreServices = [
  { label: 'Print', href: '/services/print' },
  { label: 'Digital Marketing', href: '/services' },
  { label: 'Print Design', href: '/services' },
  { label: 'UI/UX Design & Development', href: '/services' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/services/print', label: 'Print Hub' },
  { href: '/brands', label: 'Brands' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#080809]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/8 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Mega heading */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[11px] font-bold text-orange-400 uppercase tracking-[0.2em] mb-4">
            Let&apos;s Create Together
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-display text-balance leading-[1.05]">
            <span className="gradient-text-soft">Building brands that matter, </span>
            <span className="gradient-text">one origin at a time.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="md:col-span-3 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center font-black text-black text-sm shadow-[0_4px_20px_-4px_rgba(249,115,22,0.6)]">
                M
                <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
              </span>
              <span className="font-bold text-lg tracking-tight">
                Multi<span className="text-orange-500">Origin</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A creative powerhouse building powerful brands and delivering exceptional digital experiences.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href="mailto:contact@multiorigin.com"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-orange-500/20 border border-white/10 group-hover:border-orange-500/30 flex items-center justify-center transition-colors">
                  <Mail size={12} className="text-orange-400" />
                </span>
                contact@multiorigin.com
              </a>
              <a
                href="tel:+919650582767"
                className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-orange-400 transition-colors group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-orange-500/20 border border-white/10 group-hover:border-orange-500/30 flex items-center justify-center transition-colors">
                  <Phone size={12} className="text-orange-400" />
                </span>
                +91 9650582767
              </a>
              <span className="flex items-center gap-2.5 text-sm text-gray-300">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={12} className="text-orange-400" />
                </span>
                India
              </span>
            </div>

            {/* Socials */}
            <div className="pt-3">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/multiorigin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow MultiOrigin on Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500/15 hover:border-orange-500/40 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all hover:-translate-y-0.5"
                >
                  <InstagramIcon size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-orange-400 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {coreServices.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-orange-400 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Print Specialities */}
          <div className="md:col-span-3">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
              Print Specialities
            </h3>
            <ul className="space-y-3">
              {PRINT_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/print/${s.slug}`}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-orange-400 transition-all duration-300" />
                    {s.hero.eyebrow.replace(' Printing', '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-5">
              Our Brands
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/brands"
                  className="text-sm text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-orange-400 transition-all duration-300" />
                  All Brands
                </Link>
              </li>
              {BRANDS.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors group"
                  >
                    {name}
                    <ArrowUpRight
                      size={12}
                      className="text-gray-600 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MultiOrigin. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 inline-flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-orange-500" />
            Crafted with passion in India
          </p>
        </div>
      </div>
    </footer>
  );
}

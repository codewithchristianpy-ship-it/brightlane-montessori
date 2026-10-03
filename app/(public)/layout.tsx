import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Email", href: "mailto:hello@brightlanemontessori.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                B
              </div>
              <div>
                <div className="font-heading text-2xl font-extrabold text-ink">BrightLane</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Montessori
                </div>
              </div>
            </div>
            <p className="max-w-xs text-sm text-slate-600">
              A vibrant Montessori community where children build confidence,
              independence, and a lifelong love for learning.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-ink">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-ink">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>245 Willow Grove Lane, Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+15550149224" className="hover:text-primary">
                  +1 (555) 014-9224
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@brightlanemontessori.com" className="hover:text-primary">
                  hello@brightlanemontessori.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-xl font-bold text-ink">Newsletter</h3>
            <p className="mb-4 text-sm text-slate-600">
              Stay connected with school updates, events, and enrollment news.
            </p>
            <form className="flex gap-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="h-12 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 text-sm text-ink placeholder:text-slate-400 focus:border-primary focus:outline-none"
              />
              <Button type="submit" size="sm" className="h-12 w-12 rounded-full p-0" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BrightLane Montessori School. All rights reserved.</p>
          <Link href="https://maps.google.com/?q=245+Willow+Grove+Lane+Austin+TX+78701" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-ink hover:text-primary">
            Find us on the map
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

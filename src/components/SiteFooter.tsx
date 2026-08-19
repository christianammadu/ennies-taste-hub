import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MessageCircle, Music2 } from "lucide-react";
import logo from "@/assets/logo.asset.json";
import { SITE } from "@/lib/site";

const QUICK = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/catering", label: "Catering" },
  { to: "/reviews", label: "Reviews" },
  { to: "/gallery", label: "Gallery" },
  { to: "/order", label: "Order Online" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
  { to: "/about", label: "About Us" },
] as const;

const POLICIES = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/refunds", label: "Cancellations & Refunds" },
  { to: "/cookies", label: "Cookie Policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-brown text-brand-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt="Ennieskitchen logo"
            className="h-20 w-20 rounded-full object-cover"
            width={160}
            height={160}
          />
          <p className="mt-4 font-display text-xl font-bold">{SITE.name}</p>
          <p className="text-brand-gold">{SITE.slogan}</p>
          <p className="mt-3 max-w-xs text-sm text-brand-cream/80">
            Authentic Nigerian food and catering in Gardena, California — freshly prepared for
            every order.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {QUICK.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-brand-cream/85 hover:text-brand-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-gold">Policies</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {POLICIES.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-brand-cream/85 hover:text-brand-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-brand-gold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-brand-gold">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold"
              >
                <MessageCircle className="h-4 w-4" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 break-all hover:text-brand-gold"
              >
                <Mail className="h-4 w-4 shrink-0" /> {SITE.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ennieskitchen on Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-brown"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={SITE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ennieskitchen on Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-brown"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={SITE.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ennieskitchen on TikTok"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-brown"
            >
              <Music2 className="h-5 w-5" />
            </a>
            <a
              href={SITE.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Ennieskitchen on WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-cream/10 hover:bg-brand-gold hover:text-brand-brown"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-cream/15 py-5 text-center text-xs text-brand-cream/70">
        © 2026 Ennieskitchen. All rights reserved.
      </div>
    </footer>
  );
}
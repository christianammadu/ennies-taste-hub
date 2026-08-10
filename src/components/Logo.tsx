import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.asset.json";
import { SITE } from "@/lib/site";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3">
      <img
        src={logo.url}
        alt="Ennieskitchen logo"
        className={`${className} shrink-0 rounded-full object-cover`}
        width={96}
        height={96}
      />
      <span className="min-w-0">
        <span className="block truncate font-display text-lg font-bold text-brand-brown">
          {SITE.name}
        </span>
        <span className="block truncate text-xs text-brand-orange">{SITE.slogan}</span>
      </span>
    </Link>
  );
}
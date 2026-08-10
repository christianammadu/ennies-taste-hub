import { MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  const { count, setOpen } = useCart();

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View cart, ${count} items`}
        className="relative grid h-12 w-12 place-items-center rounded-full bg-brand-brown text-brand-cream shadow-lg transition-transform hover:scale-105"
      >
        <ShoppingBag className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-gold px-1 text-[11px] font-bold text-brand-brown">
            {count}
          </span>
        )}
      </button>
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Ennieskitchen on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
# Ennieskitchen — Nigerian Food & Catering Website

A warm, premium, mobile-first site for Ennieskitchen (Gardena, CA) with a fully working
menu → cart → checkout → WhatsApp order flow.

## Images (only your uploads, nothing generated)
- Logo → navbar, footer, hero, favicon-adjacent branding.
- Founder photo (arms crossed) → Our Story; founder photo (pot/smiling) → Meet Ennie / Mission.
- Four food photos → Egusi, Moi Moi, Boiled Rice (rice & plantain plate), Efo Riro, reused in Gallery and hero collage.
- Two PayPal QR codes → shown as "Tip Jar" and "Meal Payment" cards on Contact/Checkout alongside Zelle details.
- Note: no customer chat screenshots were uploaded, so Reviews will use the five supplied review texts styled as chat-bubble cards with founder replies — no invented images.

## Brand & design
Golden yellow / orange / red-orange / dark brown tokens in `src/styles.css` (oklch), warm cream
backgrounds, dark-brown nav and headings, subtle African line-pattern texture echoing the logo
backdrop. Display serif-ish headings + clean sans body, generous spacing, restrained motion.

## Pages (TanStack routes)
`/` home, `/menu`, `/order`, `/catering`, `/about`, `/gallery`, `/reviews`, `/faq`, `/contact`,
`/privacy`, `/terms`, `/refunds`, `/cookies`. Sticky nav (Home, Menu, Catering, About, Gallery,
Reviews, Contact) + Order Now and WhatsApp buttons, mobile drawer, floating WhatsApp and cart
buttons stacked so they never overlap on mobile.

Home sections: hero (headline, 3 CTAs, WhatsApp), business intro, 6 category quick-link cards,
Delivery Locations + Special Offers, Our Story, Meet Ennie, About/Mission/Vision, 8 "Why Choose"
cards, menu highlights, reviews strip, newsletter, footer.

## Menu & cart
Full price list entered as typed data (rice, soups, sauces, swallows, beans pottage, yam & egg,
combo, akara, stews, pepper soups, peppered protein, pasta, sides, small chops, drinks) with
category tabs + search. Each card: sizes, price per size, quantity stepper, Add to Cart.
Swallows (Poundo/Eba/Amala) enforce a 12-piece minimum with a clear inline error.

Cart drawer + `/order` page: edit quantity, remove, subtotal, tax at exactly 10.25%, total —
all derived, never hardcoded. Cart persists in localStorage.

## Checkout
Name, phone, email, pickup date, pickup time, order notes, dietary/allergy notes.
Date input and all display use DD/MM/YYYY with strict day-first parsing (no MM/DD ambiguity).
Pickup must be ≥24h out for regular orders; catering guidance 48–72h. Required checkboxes for
pickup-only (no delivery; Uber/Lyft courier allowed) and the cancellation policy. Prep-rules and
Zelle details (3235786993, Ennieskitchenllc) shown prominently.

Confirmation screen: validated summary, Zelle info, PayPal QR, "Send order to WhatsApp" button
that opens `https://wa.me/13235786993` with the URL-encoded ENNIESKITCHEN ORDER message (customer
details, pickup date/time, itemised lines with size/qty/unit/line total, subtotal, tax, total,
notes), plus a clear "not confirmed until payment" statement.

## Forms
Catering quote form (all requested fields, DD/MM/YYYY event date, 48–72h notice notice) and the
contact form submit by opening a prefilled email to Ennieskitchen259@gmail.com, with a WhatsApp
send option as backup. Newsletter shows an inline success state and stores the address locally.
No backend is added; if you'd rather have submissions saved to a database and emailed
automatically, say so and I'll add Lovable Cloud.

## Other
Gallery grid + lightbox, FAQ accordion with all 11 Q&As, Reviews page, four policy pages from your
copy, social links (Instagram, Facebook, TikTok, WhatsApp), footer with logo and "...Just Delicious".

## SEO
Per-route title/description/og tags targeting Nigerian food & catering in Gardena / Los Angeles,
single H1 per page, descriptive alt text, LocalBusiness/FoodEstablishment JSON-LD, sitemap entries.

## Technical notes
- Cart state via React context + localStorage; money maths in cents to avoid float drift.
- `formatDateDDMMYYYY` / `parseDDMMYYYY` helpers used everywhere dates appear.
- Uploaded images uploaded via Lovable Assets and imported by pointer.
- Verified at the end with a browser pass on mobile and desktop widths across the full
  home → menu → cart → checkout → WhatsApp journey.

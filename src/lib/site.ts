export const SITE = {
  name: "Ennieskitchen",
  slogan: "...Just Delicious",
  established: 2024,
  phone: "323-578-6993",
  phoneHref: "tel:+13235786993",
  whatsappDisplay: "+1 (323) 578-6993",
  whatsappNumber: "13235786993",
  whatsappUrl: "https://wa.me/13235786993",
  email: "Ennieskitchen259@gmail.com",
  hours: "24 Hours",
  location: "Gardena, California / Los Angeles area",
  taxRate: 0.1025,
  zelle: { phone: "3235786993", name: "Ennieskitchenllc" },
  socials: {
    instagram: "https://www.instagram.com/ennieskitchen1?igsh=MzRlODBiNWFlZA==",
    facebook:
      "https://www.facebook.com/profile.php?id=61560088835209&mibextid=ZbWKwL",
    tiktok: "https://www.tiktok.com/@ennieskitchenllc?_r=1&_t=ZT-989L68daULm",
    whatsapp: "https://wa.me/13235786993",
  },
} as const;

export function whatsappLink(message?: string) {
  return message
    ? `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`
    : SITE.whatsappUrl;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
export type MenuSize = { label: string; price: number };

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  description?: string;
  sizes: MenuSize[];
  image?: { url: string; alt: string };
  minQty?: number;
  addOns?: string[];
};

export const MENU_CATEGORIES = [
  "Rice",
  "Nigerian Soups",
  "Sauces",
  "Swallows",
  "Stews",
  "Pepper Soups",
  "Peppered Protein",
  "Pasta",
  "Sides",
  "Small Chops",
  "Drinks",
  "Other Items",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

const TRAY = (q: number, h: number, l: number): MenuSize[] => [
  { label: "Quarter Tray", price: q },
  { label: "Half Tray", price: h },
  { label: "Large Tray", price: l },
];

export const MENU: MenuItem[] = [
  // RICE
  {
    id: "jollof-rice",
    name: "Jollof Rice",
    category: "Rice",
    sizes: TRAY(40, 55, 100),
  },
  {
    id: "fried-rice",
    name: "Fried Rice",
    category: "Rice",
    sizes: TRAY(45, 60, 110),
  },
  {
    id: "asun-rice",
    name: "Asun Rice",
    category: "Rice",
    sizes: TRAY(55, 110, 240),
  },
  {
    id: "native-rice",
    name: "Native Rice",
    category: "Rice",
    sizes: TRAY(55, 125, 240),
  },
  {
    id: "seafood-fried-rice",
    name: "Seafood Fried Rice",
    category: "Rice",
    sizes: TRAY(70, 150, 240),
  },
  {
    id: "steamed-white-rice",
    name: "Steamed White Rice",
    category: "Rice",
    sizes: TRAY(20, 40, 70),
    image: {
      url: "/images/boiled-rice.jpg",
      alt: "Boiled white rice served with stew, beans and fried plantain",
    },
  },

  // NIGERIAN SOUPS
  {
    id: "egusi",
    name: "Egusi",
    category: "Nigerian Soups",
    sizes: TRAY(70, 150, 280),
    image: {
      url: "/images/egusi.jpg",
      alt: "Tray of Ennieskitchen Egusi soup with assorted meat",
    },
  },
  {
    id: "efo-riro",
    name: "Efo Riro",
    category: "Nigerian Soups",
    sizes: TRAY(70, 150, 300),
    image: {
      url: "/images/efo-riro.jpg",
      alt: "Tray of Efo Riro with prawns, snail and assorted meat",
    },
  },
  {
    id: "okra",
    name: "Okra",
    category: "Nigerian Soups",
    sizes: TRAY(70, 130, 260),
  },
  {
    id: "ogbono",
    name: "Ogbono",
    category: "Nigerian Soups",
    sizes: TRAY(70, 150, 300),
  },
  {
    id: "fisherman-soup",
    name: "Fisherman Soup",
    category: "Nigerian Soups",
    sizes: TRAY(100, 180, 350),
  },
  {
    id: "seafood-okro",
    name: "Seafood Okro",
    category: "Nigerian Soups",
    sizes: TRAY(100, 180, 350),
  },

  // SAUCES
  {
    id: "ayamase",
    name: "Ayamase",
    category: "Sauces",
    sizes: TRAY(70, 150, 300),
  },
  {
    id: "ofada-sauce",
    name: "Ofada Sauce",
    category: "Sauces",
    sizes: TRAY(70, 150, 300),
  },

  // SWALLOWS
  {
    id: "poundo",
    name: "Poundo",
    category: "Swallows",
    sizes: [{ label: "Each", price: 3 }],
    minQty: 12,
  },
  {
    id: "eba",
    name: "Eba",
    category: "Swallows",
    sizes: [{ label: "Each", price: 3 }],
    minQty: 12,
  },
  {
    id: "amala",
    name: "Amala",
    category: "Swallows",
    sizes: [{ label: "Each", price: 3 }],
    minQty: 12,
  },

  // STEWS
  {
    id: "mackerel-stew",
    name: "Mackerel Stew",
    category: "Stews",
    sizes: TRAY(70, 110, 120),
  },
  {
    id: "hake-fish-stew",
    name: "Hake Fish Stew",
    category: "Stews",
    sizes: TRAY(70, 110, 280),
  },
  {
    id: "beef-stew",
    name: "Beef Stew",
    category: "Stews",
    sizes: TRAY(70, 150, 280),
  },
  {
    id: "turkey-stew",
    name: "Turkey Stew",
    category: "Stews",
    sizes: TRAY(70, 130, 260),
  },
  {
    id: "goat-meat-stew",
    name: "Goat Meat Stew",
    category: "Stews",
    sizes: TRAY(90, 160, 360),
  },
  {
    id: "assorted-buka-stew",
    name: "Assorted Buka Stew",
    category: "Stews",
    sizes: TRAY(90, 150, 300),
  },
  {
    id: "tilapia-fish-stew",
    name: "Tilapia Fish Stew",
    category: "Stews",
    sizes: TRAY(70, 110, 250),
  },
  {
    id: "chicken-stew",
    name: "Chicken Stew",
    category: "Stews",
    sizes: TRAY(70, 120, 240),
  },
  {
    id: "ata-din-din",
    name: "Ata Din Din",
    category: "Stews",
    sizes: TRAY(70, 150, 300),
  },

  // PEPPER SOUPS
  {
    id: "fish-pepper-soup",
    name: "Fish Pepper Soup",
    category: "Pepper Soups",
    sizes: TRAY(70, 150, 300),
    addOns: ["Yam", "Plantain", "Potatoes"],
  },
  {
    id: "goat-meat-pepper-soup",
    name: "Goat Meat Pepper Soup",
    category: "Pepper Soups",
    sizes: TRAY(70, 170, 350),
    addOns: ["Yam", "Plantain", "Potatoes"],
  },

  // PEPPERED PROTEIN
  {
    id: "peppered-fish",
    name: "Peppered Fish",
    category: "Peppered Protein",
    sizes: TRAY(70, 140, 280),
  },
  {
    id: "peppered-beef",
    name: "Peppered Beef",
    category: "Peppered Protein",
    sizes: TRAY(70, 150, 300),
  },
  {
    id: "peppered-turkey",
    name: "Peppered Turkey",
    category: "Peppered Protein",
    sizes: TRAY(70, 130, 260),
  },
  {
    id: "peppered-chicken",
    name: "Peppered Chicken",
    category: "Peppered Protein",
    sizes: TRAY(65, 100, 170),
  },
  {
    id: "peppered-goat-meat",
    name: "Peppered Goat Meat",
    category: "Peppered Protein",
    sizes: TRAY(70, 160, 320),
  },

  // PASTA
  {
    id: "creamy-alfredo-pasta",
    name: "Creamy Alfredo Pasta",
    category: "Pasta",
    sizes: TRAY(70, 100, 170),
  },
  {
    id: "jollof-pasta",
    name: "Jollof Pasta",
    category: "Pasta",
    sizes: TRAY(50, 80, 160),
  },

  // SIDES
  {
    id: "gizdodo",
    name: "Gizdodo",
    category: "Sides",
    sizes: TRAY(55, 110, 240),
  },
  {
    id: "nigerian-salad",
    name: "Nigerian Salad",
    category: "Sides",
    sizes: TRAY(40, 60, 120),
  },
  {
    id: "plantain",
    name: "Plantain",
    category: "Sides",
    sizes: TRAY(40, 60, 120),
  },
  {
    id: "moi-moi-protein",
    name: "Moi Moi with Protein",
    category: "Sides",
    sizes: [{ label: "12 pieces", price: 84 }],
    image: {
      url: "/images/moi-moi.jpg",
      alt: "Four trays of freshly steamed Moi Moi with protein",
    },
  },
  {
    id: "moi-moi-plain",
    name: "Plain Moi Moi",
    category: "Sides",
    sizes: [{ label: "12 pieces", price: 72 }],
  },

  // SMALL CHOPS
  {
    id: "meat-pie",
    name: "Meat Pie",
    category: "Small Chops",
    sizes: [{ label: "12 pieces", price: 30 }],
  },
  {
    id: "large-meat-pie",
    name: "Large Meat Pie",
    category: "Small Chops",
    sizes: [{ label: "12 pieces", price: 48 }],
  },
  {
    id: "samosa",
    name: "Samosa",
    category: "Small Chops",
    sizes: [{ label: "12 pieces", price: 30 }],
  },
  {
    id: "fish-roll",
    name: "Fish Roll",
    category: "Small Chops",
    sizes: [{ label: "12 pieces", price: 30 }],
  },

  // DRINKS
  {
    id: "chapman-12oz",
    name: "Chapman",
    category: "Drinks",
    sizes: [{ label: "12 x 12 oz", price: 48 }],
  },
  {
    id: "chapman-16oz",
    name: "Chapman",
    category: "Drinks",
    sizes: [{ label: "12 x 16 oz", price: 60 }],
  },

  // OTHER ITEMS
  {
    id: "beans-pottage",
    name: "Beans Pottage",
    category: "Other Items",
    sizes: TRAY(50, 70, 140),
  },
  {
    id: "boiled-yam-and-egg",
    name: "Boiled Yam and Egg",
    category: "Other Items",
    sizes: TRAY(80, 100, 200),
  },
  {
    id: "combo",
    name: "Combo",
    category: "Other Items",
    description: "Half tray rice + half tray beans + half tray Ata Din Din.",
    sizes: [{ label: "Combo Tray", price: 220 }],
    addOns: ["Plantain"],
  },
  {
    id: "akara",
    name: "Akara",
    category: "Other Items",
    sizes: [
      { label: "Half Tray", price: 55 },
      { label: "Large Tray", price: 110 },
    ],
  },
];

export function menuByCategory(category: MenuCategory) {
  return MENU.filter((item) => item.category === category);
}

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { SITE } from "@/lib/site";

export type CartLine = {
  key: string;
  itemId: string;
  name: string;
  size: string;
  /** unit price in cents */
  unitCents: number;
  quantity: number;
  minQty: number;
};

type CartContextValue = {
  lines: CartLine[];
  addLine: (line: Omit<CartLine, "key">) => void;
  setQuantity: (key: string, quantity: number) => void;
  removeLine: (key: string) => void;
  clear: () => void;
  count: number;
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "ennieskitchen-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore malformed storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const addLine = useCallback((line: Omit<CartLine, "key">) => {
    const key = `${line.itemId}__${line.size}`;
    setLines((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + line.quantity } : l,
        );
      }
      return [...prev, { ...line, key }];
    });
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((prev) =>
      prev.flatMap((l) => {
        if (l.key !== key) return [l];
        const next = Math.max(0, quantity);
        if (next === 0) return [];
        return [{ ...l, quantity: Math.max(next, l.minQty) }];
      }),
    );
  }, []);

  const removeLine = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<CartContextValue>(() => {
    const subtotalCents = lines.reduce(
      (sum, l) => sum + l.unitCents * l.quantity,
      0,
    );
    const taxCents = Math.round(subtotalCents * SITE.taxRate);
    return {
      lines,
      addLine,
      setQuantity,
      removeLine,
      clear,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotalCents,
      taxCents,
      totalCents: subtotalCents + taxCents,
      isOpen,
      setOpen,
    };
  }, [lines, addLine, setQuantity, removeLine, clear, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../parties/type";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addToCart = (produit: CartItem) => {
    setCart((prev) => [...prev, produit]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
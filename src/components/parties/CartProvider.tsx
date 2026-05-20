import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../parties/type";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const addToCart = (produit: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === produit.id);
      if (existing) {
        return prev.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + produit.quantity }
            : item
        );
      }
      return [...prev, { ...produit, quantity: produit.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.prix * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal, open, setOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
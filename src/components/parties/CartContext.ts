import { createContext } from "react";
import type { CartItem } from "../parties/type";

export type cartContextType = {
  cart: CartItem[];
  addToCart: (produit: CartItem) => void;
  removeFromCart: (id: string) => void;
  getTotal: () => number;
  open: boolean;
  setOpen: (v: boolean) => void;
  increaseQuantity: (id: string) => void;
decreaseQuantity: (id: string) => void;
};

export const CartContext = createContext<cartContextType | undefined>(undefined);

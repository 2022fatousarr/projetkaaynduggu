import { createContext } from "react";
import type { CartItem } from "../parties/type";

export type cartContextType = {
  cart: CartItem[];
  addToCart: (produit: CartItem) => void;
  removeFromCart: (id: string) => void;
  open: boolean;
  setOpen: (v: boolean) => void;
};

export const CartContext = createContext<cartContextType | undefined>(undefined);

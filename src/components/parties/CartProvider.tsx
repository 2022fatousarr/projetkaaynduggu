import { useState } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../parties/type";

export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  // PANIER
  const [cart, setCart] = useState<CartItem[]>([]);

  // SIDEBAR
  const [open, setOpen] = useState(false);



  // AJOUTER AU PANIER
  const addToCart = (produit: CartItem) => {

    setCart((prev) => {

      const existing = prev.find(
        (item) => item.id === produit.id
      );

      // SI EXISTE
      if (existing) {

        return prev.map((item) =>

          item.id === produit.id
            ? {
                ...item,

                quantity:
                  item.quantity + produit.quantity,
              }

            : item
        );
      }

      // SINON AJOUTER
      return [

        ...prev,

        {
          ...produit,
          quantity: produit.quantity || 1,
        },
      ];
    });
  };



  // AUGMENTER
  const increaseQuantity = (id: string) => {

    setCart((prev) =>

      prev.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item
      )
    );
  };



  // DIMINUER
  const decreaseQuantity = (id: string) => {

    setCart((prev) =>

      prev.map((item) =>

        item.id === id
          ? {
              ...item,

              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }

          : item
      )
    );
  };



  // SUPPRIMER
  const removeFromCart = (id: string) => {

    setCart((prev) =>
      prev.filter((p) => p.id !== id)
    );
  };



  // TOTAL
  const getTotal = () =>

    cart.reduce(

      (sum, item) =>

        sum + item.prix * item.quantity,

      0
    );



  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotal,
        open,
        setOpen,

        // NOUVELLES FONCTIONS
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};
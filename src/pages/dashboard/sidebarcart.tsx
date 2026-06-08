import { useCart } from "../../components/parties/useCart";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const SidebarCart = () => {
  const { cart, open, setOpen, removeFromCart } = useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpen]);
  const sendOrder = () => {
    const message = cart.map((item) => `${item.nom} x${item.quantity}  = ${
      item.prix * item.quantity
    } FCFA`).join("%0A");

    window.open(
      `https://wa.me/221782157371?text=Commande:%0A${message}`,
      "_blank",
    );
  };

  return (
    <>
      {/*  Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/*  Drawer */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-70 bg-white shadow-xl transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-bold">Mon Panier</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        </div>

        <div className="p-4 space-y-3">
          {cart.length === 0 ? (
            <p>Panier vide</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border p-2 rounded"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-semibold">{item.nom}</h3>
                  <p className="text-xs">
                    {" "}
                    {item.quantity} x {item.prix} FCFA
                  </p>

                  <p className="text-sm font-bold text-[#75ab3f]">
                    {item.prix * item.quantity} FCFA
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-[#75ab3f] hover:text-[#5a8a2d]"
                >
                  ✖
                </button>
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white space-y-3 space-x-2.5">
          {/* Bouton voir panier */}
          <Link to="/panier" onClick={() => setOpen(false)}>
            <button
              className="w-full bg-gray-200 py-2 rounded font-semibold"
              onClick={() => {
                setOpen(false);
              }}
            >
              Voir mon panier
            </button>
          </Link>

          {/* Bouton commander */}
          <button
            className="w-full bg-[#75ab3f] text-white py-2 rounded font-semibold"
            onClick={sendOrder}
          >
            Commander sur WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarCart;

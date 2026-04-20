import { useCart } from "../../components/parties/useCart";

const SidebarCart = () => {
  const { cart, open, setOpen, removeFromCart } = useCart();

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
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 border-b flex justify-between">
          <h2 className="font-bold">Mon Panier</h2>
          <button onClick={() => setOpen(false)} className="text-red-500">✖</button>
        </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          ...
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
                  <p className="text-xs">{item.prix} FCFA</p>
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
      </div>
    </>
  );
};

export default SidebarCart;
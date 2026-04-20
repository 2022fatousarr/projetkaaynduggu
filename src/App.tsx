import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import MainApp from "./MainApp";
import { CartProvider } from "./components/parties/CartProvider";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Toaster position="bottom-center" richColors />
        <MainApp />  
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

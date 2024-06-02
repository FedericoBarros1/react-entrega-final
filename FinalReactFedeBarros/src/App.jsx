import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./Item/ItemListContainer";
import ItemDetailContainer from "./Item/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { CartProvider } from "./context/CartContext";
import LoadProducts from './components/LoadProducts'; // Importa el componente

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <LoadProducts /> {/* Cargar productos al iniciar */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;




import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
          <button onClick={clearCart} className="btn btn-danger">Vaciar carrito</button>
          <Link to="/checkout" className="btn btn-primary">Realizar Checkout</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;


import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import './CheckoutForm.css'; // Importar el CSS específico para CheckoutForm

const CheckoutForm = () => {
  const { cart, totalPrice, setCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: { name, address, email },
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);
      const orderId = docRef.id;
      alert(`Order placed with ID: ${orderId}`);
      setCart([]); // Clear the cart after successful order
      navigate('/'); // Redirect to home
    } catch (error) {
      console.error('Error placing order: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-item">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="checkout-item">
        <label>Dirección:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="checkout-item">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Realizar pedido</button>
    </form>
  );
};

export default CheckoutForm;



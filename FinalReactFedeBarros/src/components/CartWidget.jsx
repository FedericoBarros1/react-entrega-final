import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cart-icon.png'; // Asegúrate de tener un icono de carrito en la carpeta assets

function CartWidget() {
  const { totalUnits } = useContext(CartContext);

  return (
    <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={cartIcon} alt="Cart" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      <span>{totalUnits}</span>
    </Link>
  );
}

export default CartWidget;

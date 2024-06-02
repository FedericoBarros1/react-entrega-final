import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import './ItemDetail.css'; // Importar el CSS específico para ItemDetail

function ItemDetail({ item }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    addToCart(item, quantity);
    setAddedToCart(true);
    navigate('/cart');
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-header">
        <h2>{item.name}</h2>
        <img src={item.imageUrl} alt={item.name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
      <div className="item-detail-actions">
        {!addedToCart && <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />}
        {addedToCart && <button onClick={() => navigate('/cart')} className="btn btn-secondary">Go to Cart</button>}
      </div>
    </div>
  );
}

export default ItemDetail;




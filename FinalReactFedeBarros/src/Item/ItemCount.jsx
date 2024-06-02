import React, { useState } from 'react';
import './ItemCount.css'; // Importar el CSS específico para ItemCount

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        <button className="item-count-button" onClick={decrement}>-</button>
        <span className="item-count-display">{count}</span>
        <button className="item-count-button" onClick={increment}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;



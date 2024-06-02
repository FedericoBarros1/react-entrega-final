import React from 'react';

function CartItem({ item, removeItem }) {
  return (
    <div>
      <p>{item.name} - ${item.price}</p>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;

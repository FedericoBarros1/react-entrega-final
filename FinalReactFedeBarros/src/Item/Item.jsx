import React from 'react';

function Item({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <img src={item.imageUrl} alt={item.name} style={{ width: '300px', height: '200px' }} />
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
}

export default Item;

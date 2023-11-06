/** @format */

import React from 'react';

const CartItem = ({ item, onRemove }) => (
  <div className='cart-item'>
    <img
      src={item.image}
      alt={item.name}
    />
    <div className='item-details'>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
    </div>
    <button onClick={() => onRemove(item.id)}>Remove</button>
  </div>
);

export default CartItem;

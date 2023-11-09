/** @format */

import React from 'react';

const Cart = ({ items, onClose }) => {
  return (
    <div className='cart'>
      <h3>Il tuo carrello</h3>
      {items.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>

          <p>Prezzo: {item.price}</p>
        </div>
      ))}
      <button onClick={onClose}>Chiudi il carrello</button>
    </div>
  );
};

export default Cart;

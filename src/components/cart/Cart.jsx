/** @format */

import React from 'react';

const Cart = ({ cart, onRemove }) => {
  return (
    <div className='cart'>
      <h4>Carrello</h4>
      {cart.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} -{' '}
              <button onClick={() => onRemove(item.id)}>Rimuovi</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

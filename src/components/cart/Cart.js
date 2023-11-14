/** @format */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  prodotti,
  totaleProdotti,
  totalePrezzi,
  removeCart,
  emptyCart,
} from '../../context/CartContext';
import { nanoid } from '@reduxjs/toolkit';
import { shippingCost } from '../../context/CartContext';
import PayButton from './Button';

import './cart.css';

const Cart = () => {
  const products = useSelector(prodotti);
  const totalItems = useSelector(totaleProdotti);
  const totalAmount = useSelector(totalePrezzi);
  const dispatch = useDispatch();
  console.log(products);
  const handleRemove = productId => {
    dispatch(removeCart({ id: productId }));
  };

  const empty = () => {
    dispatch(emptyCart());
  };

  const dynamicShippingCost =
    totalAmount < 39.99 && totalItems > 0 ? shippingCost : 0;

  return (
    <div className='cart'>
      <p>Numero di prodotti nel carrello: {totalItems}</p>
      <ul>
        {products?.map(product => (
          <li key={nanoid()}>
            <img
              className='product-cover'
              src={product.cover}
            />
            <div className='product-title'>{product.title}</div>
            <div className='quantity'>Qtà:{product.quantity}</div>
            <div className='product-price'>{product.price} €</div>
            <button onClick={() => handleRemove(product.id)}>
              Rimuovi dal carrello
            </button>
          </li>
        ))}
      </ul>

      <p>Spese di spedizione: {dynamicShippingCost.toFixed(2)} €</p>
      <p>Totale: {totalAmount} €</p>

      <PayButton products={products} />
      <button
        className='empty'
        onClick={() => empty()}>
        Svuota carrello
      </button>
    </div>
  );
};

export default Cart;

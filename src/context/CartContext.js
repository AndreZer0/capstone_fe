/** @format */

import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'AGGIUNGI_AL_CARRELLO':
      return { ...state, articoli: [...state.articoli, action.payload] };
    case 'RIMUOVI_DAL_CARRELLO':
      return {
        ...state,
        articoli: state.articoli.filter(
          articolo => articolo.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [carrello, dispatch] = useReducer(cartReducer, { articoli: [] });

  return (
    <CartContext.Provider value={{ carrello, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

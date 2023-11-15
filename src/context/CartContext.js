/** @format */

import { createSlice } from '@reduxjs/toolkit';

const loadCart = () => {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return [];
  }
};

const loadTotalAmount = () => {
  const totalData = localStorage.getItem('total');
  if (totalData) {
    return JSON.parse(totalData);
  } else {
    return 0;
  }
};
const loadTotalItems = () => {
  const totalIt = localStorage.getItem('items');
  if (totalIt) {
    return JSON.parse(totalIt);
  } else {
    return 0;
  }
};
const saveItems = items => {
  localStorage.setItem('items', JSON.stringify(items));
};
const saveTotal = total => {
  localStorage.setItem('total', JSON.stringify(total));
};
const saveCart = cart => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const shippingCost = 4.99;
const freeShippingThreshold = 39.99;

const calculateTotalAmount = products => {
  return products
    .map(product => Number(product.price) * product.quantity)
    .reduce((acc, current) => acc + current, 0);
};

const CartContext = createSlice({
  name: 'cart',
  initialState: {
    products: loadCart(),
    totalItems: loadTotalItems(),
    totalAmount: loadTotalAmount(),
  },
  reducers: {
    addCart: (state, action) => {
      const { id, title, price, cover } = action.payload;
      const existingProductIndex = state.products.findIndex(
        product => product.id === id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push({
          id,
          title,
          price,
          cover,
          quantity: 1,
        });
      }

      state.totalItems += 1;
      state.totalAmount = calculateTotalAmount(state.products);

      if (state.totalItems === 0) {
        state.totalAmount = 0;
      } else if (state.totalAmount < freeShippingThreshold) {
        state.totalAmount += shippingCost;
      }

      state.totalAmount = state.totalAmount.toFixed(2);

      saveCart(state.products);
      saveTotal(state.totalAmount);
      saveItems(state.totalItems);
    },

    removeOneFromCart: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex(
        product => product.id === id
      );

      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];

        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.products.splice(existingProductIndex, 1);
        }

        state.totalItems -= 1;
        state.totalAmount = calculateTotalAmount(state.products);

        if (state.totalItems === 0) {
          state.totalAmount = 0;
        } else if (state.totalAmount < freeShippingThreshold) {
          state.totalAmount += shippingCost;
        }

        state.totalAmount = state.totalAmount.toFixed(2);

        saveCart(state.products);
        saveTotal(state.totalAmount);
        saveItems(state.totalItems);
      }
    },
    removeCart: (state, action) => {
      const { id } = action.payload;
      const existingProductIndex = state.products.findIndex(
        product => product.id === id
      );

      if (existingProductIndex !== -1) {
        state.totalItems -= state.products[existingProductIndex].quantity;
        state.totalAmount = calculateTotalAmount(state.products);

        if (state.totalItems === 0) {
          state.totalAmount = 0;
        } else if (state.totalAmount < freeShippingThreshold) {
          state.totalAmount += shippingCost;
        }

        state.totalAmount = state.totalAmount.toFixed(2);

        state.products.splice(existingProductIndex, 1);

        saveCart(state.products);
        saveTotal(state.totalAmount);
        saveItems(state.totalItems);
      }
    },

    emptyCart: state => {
      state.products = [];
      state.totalItems = 0;
      state.totalAmount = 0;
      saveCart(state.products);
      saveTotal(state.totalAmount);
      saveItems(state.totalItems);
    },
  },
});

export const { addCart, removeCart, emptyCart, removeOneFromCart } =
  CartContext.actions;
export const prodotti = state => state.cart.products;
export const totaleProdotti = state => state.cart.totalItems;
export const totalePrezzi = state => state.cart.totalAmount;
export default CartContext.reducer;

import React, { createContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart];
      const itemIndex = updatedCart.findIndex(item => item.id === action.product.id);
      if (itemIndex >= 0) {
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...action.product, quantity: 1 });
      }
      return { ...state, cart: updatedCart };
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.id);
      return { ...state, cart: filteredCart };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

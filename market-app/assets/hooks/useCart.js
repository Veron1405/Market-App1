import { useContext } from 'react';
import CartContext from '../context/CartContext';

const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return { cart, addToCart, removeFromCart };
};

export default useCart;

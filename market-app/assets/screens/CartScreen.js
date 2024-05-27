import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartList from '../components/CartList';
import useCart from '../hooks/useCart';

const CartScreen = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <View style={styles.screen}>
      <CartList items={cart} onRemove={removeFromCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
});

export default CartScreen;

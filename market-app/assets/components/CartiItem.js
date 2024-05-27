// components/CartItem.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{item.quantity} </Text>
        <Text style={styles.mainText}>{item.name}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${item.totalPrice.toFixed(2)}</Text>
        <Button title="Remove" onPress={onRemove} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'open-sans',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
});

export default CartItem;

// components/CartList.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CartItem from './CartItem';

const CartList = ({ items, onRemove }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={() => onRemove(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
});

export default CartList;

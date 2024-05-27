import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';
import useCart from '../hooks/useCart';

const ProductItem = ({ product, onViewDetail }) => {
  const { addToCart } = useCart();

  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <CustomButton title="View Details" onPress={onViewDetail} />
        <CustomButton title="Add to Cart" onPress={() => addToCart(product)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
  image: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    alignItems: 'center',
    height: '17%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    color: '#212121',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
});

export default ProductItem;

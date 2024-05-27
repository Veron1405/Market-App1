import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import useCart from '../hooks/useCart';
import styles from './styles';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: product.image }} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <CustomButton title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductDetailsScreen;

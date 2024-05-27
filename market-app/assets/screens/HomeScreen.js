import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';
import { PRODUCTS } from '../data/products';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  const handleViewDetail = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <View style={styles.screen}>
      <ProductList
        products={PRODUCTS}
        onViewDetail={handleViewDetail}
      />
    </View>
  );
};

export default HomeScreen;

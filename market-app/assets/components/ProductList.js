// components/ProductList.js
import React from 'react';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ products, onViewDetail, onAddToCart }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          product={item}
          onViewDetail={() => onViewDetail(item)}
          onAddToCart={() => onAddToCart(item)}
        />
      )}
    />
  );
};

export default ProductList;

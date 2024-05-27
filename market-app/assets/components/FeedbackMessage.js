import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackMessage = ({ message, type }) => {
  return (
    <View style={[styles.container, type === 'error' ? styles.error : styles.success]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  error: {
    backgroundColor: '#f44336',
  },
  message: {
    color: 'white',
    fontSize: 16,
  },
});

export default FeedbackMessage;

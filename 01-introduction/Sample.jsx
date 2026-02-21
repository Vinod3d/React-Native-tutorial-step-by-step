import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SimpleComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello React Native 🚀
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SimpleComponent;

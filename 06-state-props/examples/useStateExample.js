import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const useStateExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4ECDC4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default useStateExample;

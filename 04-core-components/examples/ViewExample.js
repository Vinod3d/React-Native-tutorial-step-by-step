import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  box1: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    marginBottom: 10,
  },
  box2: {
    backgroundColor: '#4ECDC4',
    padding: 20,
  },
});

export default ViewExample;

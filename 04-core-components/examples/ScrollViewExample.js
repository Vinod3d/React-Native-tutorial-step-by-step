import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const ScrollViewExample = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Array.from({ length: 20 }, (_, i) => (
        <View key={i} style={styles.item}>
          <Text>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    backgroundColor: '#E8E8E8',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
});

export default ScrollViewExample;

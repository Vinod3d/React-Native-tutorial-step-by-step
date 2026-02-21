import React from 'react';
import { View, StyleSheet } from 'react-native';

const AlignItems = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { alignItems: 'flex-start' }]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={[styles.row, { alignItems: 'center' }]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={[styles.row, { alignItems: 'flex-end' }]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 10,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#4ECDC4',
    margin: 5,
  },
});

export default AlignItems;

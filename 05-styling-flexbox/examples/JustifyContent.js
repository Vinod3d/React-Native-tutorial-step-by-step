import React from 'react';
import { View, StyleSheet } from 'react-native';

const JustifyContent = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.row, { justifyContent: 'flex-start' }]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={[styles.row, { justifyContent: 'center' }]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={[styles.row, { justifyContent: 'space-around' }]}>
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
    height: 80,
    marginBottom: 10,
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: '#FF6B6B',
  },
});

export default JustifyContent;

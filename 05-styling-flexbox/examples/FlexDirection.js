import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlexDirection = () => {
  return (
    <>
      <View style={styles.containerRow}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View style={styles.containerColumn}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    height: 100,
    marginBottom: 20,
  },
  containerColumn: {
    flexDirection: 'column',
    height: 200,
  },
  box: {
    flex: 1,
    backgroundColor: '#4ECDC4',
    margin: 5,
  },
});

export default FlexDirection;

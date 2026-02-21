import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ImageExample;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Greeting = ({ name, age }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {name}!</Text>
      <Text style={styles.text}>Age: {age}</Text>
    </View>
  );
};

const PropsExample = () => {
  return (
    <View style={styles.wrapper}>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={28} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
  },
  container: {
    backgroundColor: '#F0F0F0',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PropsExample;

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextExample = () => {
  return (
    <>
      <Text style={styles.title}>Title Text</Text>
      <Text style={styles.subtitle}>Subtitle Text</Text>
      <Text style={styles.body}>
        This is body text with normal styling and can span multiple lines.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default TextExample;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const FetchExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {data && data.map((user) => (
        <Text key={user.id} style={styles.text}>{user.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default FetchExample;

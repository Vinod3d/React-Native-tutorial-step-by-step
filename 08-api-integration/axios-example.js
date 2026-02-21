import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {data && data.slice(0, 5).map((post) => (
        <Text key={post.id} style={styles.text}>{post.title}</Text>
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
    fontSize: 14,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default AxiosExample;

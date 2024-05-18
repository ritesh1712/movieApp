import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.image?.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
      <Text style={styles.summary}>{movie.summary?.replace(/<[^>]+>/g, '')}</Text>
      <Text style={styles.details}>Language: {movie.language}</Text>
      <Text style={styles.details}>Genres: {movie.genres.join(', ')}</Text>
      <Text style={styles.details}>Premiered: {movie.premiered}</Text>
      <Text style={styles.details}>Rating: {movie.rating?.average}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  summary: {
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',

  },
  details: {
    fontSize: 14,
    marginBottom: 5,
    color: 'gray',
  },
});

export default DetailsScreen;

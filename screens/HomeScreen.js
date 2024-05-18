import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => setMovies(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { movie: item.show })} style={styles.movieContainer}>
      <Image source={{ uri: item.show.image?.medium }} style={styles.thumbnail} />
      <View style={styles.movieDetails}>
        <Text style={styles.title}>{item.show.name}</Text>
        <Text style={styles.summary}>{item.show.summary?.replace(/<[^>]+>/g, '')}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        placeholderTextColor={'black'}
        onFocus={() => navigation.navigate('Search')}
      />
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.show.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  movieDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  summary: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeScreen;

import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { movies, type Movie } from './src/data/movies';

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <View style={styles.card}>
      <Image
        accessibilityLabel={`${movie.title} poster`}
        source={movie.thumbnail}
        style={styles.poster}
      />
      <View style={styles.cardCopy}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container} testID="movie-screen">
      <StatusBar style="light" />
      <FlatList
        contentContainerStyle={styles.listContent}
        data={movies}
        keyExtractor={(movie) => movie.id}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>TONIGHT'S PICKS</Text>
            <Text style={styles.title}>Movie Night</Text>
            <Text style={styles.subtitle}>Stories worth staying up for.</Text>
          </View>
        }
        renderItem={({ item }) => <MovieCard movie={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090d16',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#a8e9dc',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.2,
  },
  title: {
    color: '#f7f8fb',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 8,
  },
  subtitle: {
    color: '#9da9bb',
    fontSize: 15,
    marginTop: 6,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#151c2a',
    borderColor: '#283246',
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 14,
    overflow: 'hidden',
    minHeight: 162,
  },
  poster: {
    width: 112,
    height: 162,
  },
  cardCopy: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  movieTitle: {
    color: '#f7f8fb',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 23,
  },
  description: {
    color: '#aab5c5',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 9,
  },
});

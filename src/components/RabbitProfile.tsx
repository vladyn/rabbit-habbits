import { Image, StyleSheet, Text, View } from 'react-native';

import type { Rabbit } from '@/data/rabbits';

type RabbitProfileProps = {
  rabbit: Rabbit;
  pictureSize: number;
};

export function RabbitProfile({ rabbit, pictureSize }: RabbitProfileProps) {
  return (
    <View style={styles.profile}>
      <Text style={styles.eyebrow}>YOUR LITTLE COMPANION</Text>
      <Text style={styles.title}>Meet {rabbit.name}</Text>
      <Text style={styles.subtitle}>Small routines, happy hops.</Text>

      <Image
        accessibilityLabel={`${rabbit.name} the rabbit`}
        source={rabbit.picture}
        style={[styles.picture, { width: pictureSize, height: pictureSize }]}
      />

      <View style={styles.habitsCard}>
        <Text style={styles.habitsTitle}>{rabbit.name}'s habits</Text>
        {rabbit.habits.map((habit) => (
          <View key={habit} style={styles.habitRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.habitText}>{habit}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profile: {
    marginBottom: 36,
  },
  eyebrow: {
    color: '#71977b',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: '#243c2d',
    fontSize: 38,
    fontWeight: '800',
    marginTop: 8,
  },
  subtitle: {
    color: '#667d6d',
    fontSize: 16,
    marginTop: 6,
    marginBottom: 24,
  },
  picture: {
    alignSelf: 'center',
    backgroundColor: '#dce8d7',
  },
  habitsCard: {
    backgroundColor: '#ffffff',
    padding: 22,
    marginTop: 22,
  },
  habitsTitle: {
    color: '#243c2d',
    fontSize: 21,
    fontWeight: '800',
    marginBottom: 14,
  },
  habitRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  bullet: {
    color: '#6b9b73',
    fontSize: 24,
    lineHeight: 24,
    marginRight: 12,
  },
  habitText: {
    color: '#405847',
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});

import { Stack, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';

import { getPictureSize, RabbitProfile } from '../../App';
import { rabbits } from '@/data/rabbits';

export default function RabbitDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width, height } = useWindowDimensions();
  const rabbit = rabbits.find((entry) => entry.id.toString() === id);

  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <StatusBar style="dark" />
      <Stack.Screen options={{ title: rabbit?.name ?? 'Rabbit' }} />
      {rabbit ? (
        <RabbitProfile rabbit={rabbit} pictureSize={getPictureSize(width, height)} />
      ) : (
        <Text style={styles.notFound}>Rabbit not found</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f6ee',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 36,
  },
  notFound: {
    color: '#243c2d',
    fontSize: 24,
    fontWeight: '800',
  },
});

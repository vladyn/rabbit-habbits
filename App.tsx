import { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { RabbitProfile } from '@/components/RabbitProfile';
import { rabbits } from '@/data/rabbits';

export function getPictureSize(viewportWidth: number, viewportHeight: number) {
  return Math.floor(Math.max(0, Math.min(viewportWidth - 48, viewportHeight * 0.4, 360)));
}

export default function App() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const pictureSize = getPictureSize(width, height);
  const [firstRabbitIndex] = useState(() => Math.floor(Math.random() * rabbits.length));
  const [profileCount, setProfileCount] = useState(rabbits.length);
  const canLoadMore = useRef(false);
  const profiles = Array.from({ length: profileCount }, (_, index) => ({
    id: index.toString(),
    rabbit: rabbits[(firstRabbitIndex + index) % rabbits.length],
  }));

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <FlatList
        testID="rabbit-list"
        contentContainerStyle={styles.content}
        data={profiles}
        keyExtractor={(profile) => profile.id}
        ListHeaderComponent={<Text style={styles.brand}>Rabbit Habits</Text>}
        renderItem={({ item }) => (
          <Pressable
            accessibilityLabel={`View ${item.rabbit.name}'s profile`}
            accessibilityRole="button"
            onPress={() => router.push(`/rabbit/${item.rabbit.id}`)}
          >
            <RabbitProfile rabbit={item.rabbit} pictureSize={pictureSize} />
          </Pressable>
        )}
        onEndReached={() => {
          if (canLoadMore.current) return;
          canLoadMore.current = true;
          setProfileCount((count) => count + rabbits.length);
        }}
        onContentSizeChange={() => {
          canLoadMore.current = false;
        }}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f6ee',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 68,
    paddingBottom: 36,
  },
  brand: {
    color: '#315742',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.2,
    marginBottom: 40,
  },
});

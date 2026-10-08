import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rabbit Habits</Text>
      <Text style={styles.subtitle}>Your new habit tracker starts here.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f7faf5',
  },
  title: {
    color: '#203323',
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    color: '#526654',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

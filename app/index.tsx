import { View, StyleSheet } from 'react-native';
import HomePage from './src/screens/HomePage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

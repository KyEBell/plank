import { Colors } from '@/constants/Colors';
import { useTheme } from './context/ThemeContext';
import { StatusBar, View, StyleSheet } from 'react-native';
import HomePage from './screens/HomePage';

export const MainContent: React.FC = () => {
  const { theme } = useTheme();
  const themeColors = Colors[theme];

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}>
      <StatusBar
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

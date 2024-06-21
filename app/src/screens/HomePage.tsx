import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Counter from '../components/Counter';
import { Colors } from '../../../constants/Colors';
import { useTheme } from '../context/ThemeContext';

const HomePage: React.FC = () => {
  const [lore, setLore] = useState(0);
  const [inkRemaining, setInkRemaining] = useState(0);
  const [inkTotal, setInkTotal] = useState(0);
  const [inkAddedThisTurn, setInkAddedThisTurn] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const handleLoreIncrease = () =>
    setLore((prevLore) => (prevLore < 20 ? lore + 1 : prevLore));
  const handleLoreDecrease = () => setLore(lore > 0 ? lore - 1 : 0);

  const handleInkSpend = () => {
    if (inkRemaining > 0) setInkRemaining(inkRemaining - 1);
  };

  const handleInkIncreaseDuringTurn = () => {
    setInkTotal(inkTotal + 1);
    setInkRemaining(inkRemaining + 1);
    setInkAddedThisTurn(true);
  };

  const handleUnexertedInkIncrease = () => {
    setInkTotal(inkTotal + 1);
    setInkRemaining(inkRemaining + 1);
  };

  const handleExertedInkIncrease = () => {
    setInkTotal(inkTotal + 1);
  };

  const passTurn = () => {
    setInkRemaining(inkTotal);
    setInkAddedThisTurn(false);
  };

  const resetCounters = () => {
    setLore(0);
    setInkRemaining(0);
    setInkTotal(0);
    setInkAddedThisTurn(false);
  };

  const backgroundColor = Colors[theme].background;
  const buttonBackgroundColor = Colors[theme].buttonBackground;
  const buttonText = Colors[theme].buttonText;
  const resetButtonBackgroundColor = Colors[theme].resetButtonBackground;
  const buttonDisabledColor = Colors[theme].buttonDisabled;
  const unexertedInkButtonColor = theme === 'light' ? '#00FFFF' : '#00FF00'; // Teal for light, green for dark

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
          <Text style={{ color: buttonText }}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
      <Counter
        label='Lore Counter'
        count={lore}
        onIncrease={handleLoreIncrease}
        onDecrease={handleLoreDecrease}
      />
      <Counter
        label='Ink'
        count={inkRemaining}
        onIncrease={handleInkSpend}
        onDecrease={handleInkSpend}
        showTotal
        total={inkTotal}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleInkIncreaseDuringTurn}
          style={[
            styles.button,
            { backgroundColor: buttonBackgroundColor },
            inkAddedThisTurn && { backgroundColor: buttonDisabledColor },
          ]}
          disabled={inkAddedThisTurn}>
          <Text style={{ color: buttonText }}>Add Ink During Turn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleUnexertedInkIncrease}
          style={[
            styles.button,
            {
              backgroundColor: unexertedInkButtonColor,
              shadowColor: unexertedInkButtonColor,
            },
          ]}>
          <Text style={{ color: 'black' }}>Add Unexerted Ink</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleInkSpend}
          style={[
            styles.button,
            { backgroundColor: buttonBackgroundColor },
            inkRemaining === 0 && { backgroundColor: buttonDisabledColor },
          ]}
          disabled={inkRemaining === 0}>
          <Text style={{ color: buttonText }}>Spend One Ink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleExertedInkIncrease}
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
          <Text style={{ color: buttonText }}>Add Exerted Ink</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={passTurn}
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}>
          <Text style={{ color: buttonText }}>Pass Turn</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={resetCounters}
        style={[
          styles.resetButton,
          { backgroundColor: resetButtonBackgroundColor },
        ]}>
        <Text style={{ color: buttonText }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    fontSize: 18,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 8,
    flex: 1,
  },
  buttonText: {
    color: 'white',
  },
  resetButton: {
    fontSize: 18,
    padding: 8,
    marginTop: 16,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%',
  },
  toggleButton: {
    fontSize: 18,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#6C3483', // Default color, will be overridden by theme color
  },
});

export default HomePage;

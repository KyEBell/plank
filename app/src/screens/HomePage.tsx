import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Counter from '../components/Counter';

const HomePage: React.FC = () => {
  const [lore, setLore] = useState(0);
  const [inkRemaining, setInkRemaining] = useState(0);
  const [inkTotal, setInkTotal] = useState(0);

  const handleLoreIncrease = () =>
    setLore((prevLore) => (prevLore < 20 ? lore + 1 : prevLore));
  const handleLoreDecrease = () => setLore(lore > 0 ? lore - 1 : 0);

  const handleInkSpend = () => {
    if (inkRemaining > 0) setInkRemaining(inkRemaining - 1);
  };

  const handleInkIncrease = () => setInkTotal(inkTotal + 1);
  const handleInkDecrease = () => {
    if (inkRemaining < inkTotal) setInkRemaining(inkRemaining + 1);
  };

  const spendOneInk = () => {
    if (inkRemaining > 0) setInkRemaining(inkRemaining - 1);
  };

  const passTurn = () => setInkRemaining(inkTotal);

  const resetCounters = () => {
    setLore(0);
    setInkRemaining(0);
    setInkTotal(0);
  };

  return (
    <View style={styles.container}>
      <Counter
        label='Lore Counter'
        count={lore}
        onIncrease={handleLoreIncrease}
        onDecrease={handleLoreDecrease}
      />
      <Counter
        label={`Ink: `}
        count={inkRemaining}
        onIncrease={handleInkDecrease}
        onDecrease={handleInkSpend}
        showTotal
        total={inkTotal}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleInkIncrease} style={styles.button}>
          <Text style={styles.buttonText}>Increase Total Ink</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={spendOneInk}
          style={[styles.button, inkRemaining === 0 && styles.buttonDisabled]}
          disabled={inkRemaining === 0}>
          <Text style={styles.buttonText}>Spend One Ink</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={passTurn} style={styles.button}>
        <Text style={styles.buttonText}>Pass Turn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetCounters} style={styles.resetButton}>
        <Text style={styles.buttonText}>Reset</Text>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    fontSize: 18,
    color: 'white',
    padding: 8,
    backgroundColor: '#6C3483',
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  buttonText: {
    color: 'white',
  },
  buttonDisabled: {
    backgroundColor: '#D3D3D3',
  },
  resetButton: {
    fontSize: 18,
    color: 'white',
    padding: 8,
    marginTop: 16,
    backgroundColor: '#DAA520',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default HomePage;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface CounterProps {
  label: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  showTotal?: boolean;
  total?: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  count,
  onIncrease,
  onDecrease,
  showTotal = false,
  total,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onDecrease} style={styles.arrowButton}>
        <AntDesign name='down' size={24} color='black' />
      </TouchableOpacity>
      <Text style={styles.label}>
        {label}: {count} {showTotal && total !== undefined ? `/ ${total}` : ''}
      </Text>
      <TouchableOpacity onPress={onIncrease} style={styles.arrowButton}>
        <AntDesign name='up' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginHorizontal: 8,
  },
  arrowButton: {
    padding: 8,
  },
});

export default Counter;

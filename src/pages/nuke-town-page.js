import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {equipName} from '../scripts/equip-name';

export function NukeTown() {
  console.log('-'.repeat(30));
  const name = equipName('rodrigo', 'amanda');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NukeTown</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

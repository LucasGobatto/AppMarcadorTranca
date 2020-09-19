import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {equipName, getRandomInt} from '../scripts/equip-name';
import {randomNames} from '../assets/storage/random_names';

export function NukeTown() {
  const firstName = randomNames[getRandomInt(0, randomNames.length)];
  const secondName = randomNames[getRandomInt(0, randomNames.length)];
  console.log('-'.repeat(30));
  const name = equipName(firstName, secondName);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random Name:</Text>
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

import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {styles} from '../assets/styles/dashboard-style.js';
import {getData, removeAllData} from '../assets/storage/async-storage';
import {teamNamesKey, teamScoreKey} from '../assets/storage/key-names';
import {confirmAlert} from '../scripts/confirm-alert';

export const Dashboard = () => {
  const {navigate} = useNavigation();
  const [continueGameExists, setContinueGameExists] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(teamScoreKey);
      if (result != null) {
        setContinueGameExists(true);
      } else {
        setContinueGameExists(false);
      }
    };
    fetchData();
  }, [isFocused]);

  async function goToNewGamePage() {
    if (continueGameExists) {
      if (
        await confirmAlert(
          'Você tem certeza que deseja começar um novo jogo?',
          'O último jogo será pagado',
        )
      ) {
        await removeAllData([teamScoreKey, teamNamesKey]);
        navigate('NewGame');
      }
    } else {
      navigate('NewGame');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/darklogo.jpeg')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => goToNewGamePage()}>
          <Text style={styles.buttonText}>Novo Jogo</Text>
        </TouchableOpacity>
        {continueGameExists && (
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => navigate('Scores')}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('Detail')}>
          <Text style={styles.buttonText}>Detalhes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('NukeTown')}>
          <Text style={styles.buttonText}>Testes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

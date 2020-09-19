import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {styles} from '../assets/styles/dashboard-style.js';
import {getData, removeAllData} from '../assets/storage/async-storage';
import {teamNamesKey, teamScoreKey} from '../assets/storage/key-names';
import {confirmAlert} from '../scripts/confirm-alert';

import {SquareButton} from '../components/molecules/button.mole';

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
        <SquareButton text="Novo Jogo" onPress={goToNewGamePage} />
        {continueGameExists && (
          <SquareButton text="Continue" onPress={() => navigate('Scores')} />
        )}
        <SquareButton text="Detalhes" onPress={() => navigate('Detail')} />
        <SquareButton text="Testes" onPress={() => navigate('NukeTown')} />
      </View>
    </View>
  );
};

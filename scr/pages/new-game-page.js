import React, {useState} from 'react';
import {View, Image, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../assets/styles/new-game-style';
import {storeData} from '../assets/storage/async-storage';
import {teamNamesKey} from '../assets/storage/key-names';
import {equipName} from '../scripts/equip-name';

import {Forms} from '../components/molecules/forms.mole';
import {CircularButton} from '../components/molecules/button.mole';

export const NewGame = () => {
  const [name1, setName1] = useState({text: '', isValid: false});
  const [name2, setName2] = useState({text: '', isValid: false});
  const [name3, setName3] = useState({text: '', isValid: false});
  const [name4, setName4] = useState({text: '', isValid: false});
  const {navigate} = useNavigation();

  function handleSubmits() {
    console.log('here');
    if (name1.isValid && name2.isValid && name3.isValid && name4.isValid) {
      goToScorePage();
    }
  }

  async function goToScorePage() {
    const team1 = equipName(name1.text, name2.text);
    const team2 = equipName(name3.text, name4.text);
    const teamNames = JSON.stringify({
      team1,
      team2,
    });
    await storeData(teamNamesKey, teamNames);
    navigate('Scores');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/images/whitelogo.jpeg')}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Forms
            handleChangeTextPlayer1={setName1}
            handleChangeTextPlayer2={setName2}
            text="Equipe 1"
          />
          <Forms
            handleChangeTextPlayer1={setName3}
            handleChangeTextPlayer2={setName4}
            text="Equipe 1"
          />
        </View>
        <CircularButton onPress={handleSubmits} text="Ok" />
      </View>
    </KeyboardAvoidingView>
  );
};

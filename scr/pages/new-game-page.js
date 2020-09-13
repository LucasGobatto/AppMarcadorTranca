import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../assets/styles/new-game-style';
import {storeData} from '../assets/storage/async-storage';
import {teamNamesKey} from '../assets/storage/key-names';

export const NewGame = () => {
  const [name1, setName1] = useState('Jonas');
  const [name2, setName2] = useState('Fernando');
  const [name3, setName3] = useState('Douglas');
  const [name4, setName4] = useState('Isabela');
  const {navigate} = useNavigation();

  function handleSubmits() {
    const especialValidation = /\W|_|[0-9]/;
    if (
      especialValidation.test(name1) ||
      especialValidation.test(name2) ||
      especialValidation.test(name3) ||
      especialValidation.test(name4)
    ) {
      Alert.alert(
        'Nome inválido. Não deve conter caracteres especiais nem números. Favor, digite nomes válidos',
      );
    } else if (
      name1.length >= 15 ||
      name4.length >= 15 ||
      name3.length >= 15 ||
      name2.length >= 15
    ) {
      Alert.alert('Nome deve ter no máximo 15 caracteres');
    } else if (
      name1.length <= 2 ||
      name2.length <= 2 ||
      name3.length <= 2 ||
      name4.length <= 2
    ) {
      Alert.alert('Nome Inválido. Nomes de ter no mínimo 3 caracteres');
    } else {
      goToScorePage();
    }
  }

  async function goToScorePage() {
    const players = JSON.stringify({
      player1: name1,
      player2: name2,
      player3: name3,
      player4: name4,
    });
    await storeData(teamNamesKey, players);
    navigate('Scores');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.layout}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require('../assets/images/whitelogo.jpeg')}
          />
        </View>
        <View style={styles.inputsContainer}>
          <Text style={styles.textEquip}>EQUIPE 1</Text>
          <View style={styles.inputsNames}>
            <TextInput
              style={styles.textInput}
              value={name1}
              onChangeText={(text) => setName1(text)}
            />
            <TextInput
              style={styles.textInput}
              value={name2}
              onChangeText={(text) => setName2(text)}
            />
          </View>
          <Text style={styles.textEquip}>EQUIPE 2</Text>
          <View style={styles.inputsNames}>
            <TextInput
              style={styles.textInput}
              value={name3}
              onChangeText={(text) => setName3(text)}
            />
            <TextInput
              style={styles.textInput}
              value={name4}
              onChangeText={(text) => setName4(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            handleSubmits();
          }}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

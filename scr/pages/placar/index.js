import React, {useState} from 'react';
import {Text, View, Alert, KeyboardAvoidingView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native-gesture-handler';

import styles from '../../../assets/styles/placarStyle.js';

export default function Placar() {
  const [pontosEq1, setPontosEq1] = useState(0);
  const [pontosEq2, setPontosEq2] = useState(0);
  const [pontuacaoEq1, setPontuacaoEq1] = useState([]);
  const [pontuacaoEq2, setPontuacaoEq2] = useState([]);
  const [novosPontosEq1, setNovosPontosEq1] = useState('');
  const [novosPontosEq2, setNovosPontosEq2] = useState('');
  /*const [eq1Ganhou, setEq1Ganhou] = useState(false);
  const [eq2Ganhou, setEq2Ganhou] = useState(false);*/
  const {navigate} = useNavigation();

  function contaPonto() {
    pontuacaoEq1.push(novosPontosEq1);
    pontuacaoEq2.push(novosPontosEq2);

    let pontos1 = 0;
    pontuacaoEq1.map((ponto) => {
      pontos1 += ponto;
    });
    setPontosEq1(pontos1);

    var pontos2 = 0;
    pontuacaoEq2.map((ponto) => {
      pontos2 += ponto;
    });
    setPontosEq2(pontos2);

    setNovosPontosEq1('');
    setNovosPontosEq2('');
    /*pontosEq1 + pontos1 >= 3000 && pontosEq1 + pontos1 > pontosEq2 + pontos2
      ? setEq1Ganhou(true)
      : console.warn(pontosEq1, eq1Ganhou, '1');
    pontuacaoEq2 + pontos2 >= 3000 && pontosEq2 + pontos2 > pontosEq1 + pontos1
      ? setEq2Ganhou(true)
      : console.warn(pontosEq2, eq2Ganhou, '2');*/
  }

  function validacao() {
    if (isNaN(novosPontosEq2) || isNaN(novosPontosEq1)) {
      Alert.alert('Digite apenas números');
    } else if (novosPontosEq1 === '' || novosPontosEq2 === '') {
      Alert.alert('Há campos vazios. Digite um número');
    } else {
      contaPonto();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.layout}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.placares}>
            <View style={styles.equipeInfos}>
              <Text style={styles.nomeEquipe}>Nome Equipe</Text>
              <Text style={styles.placar}>{pontosEq1}</Text>
            </View>
            <View style={styles.pontuacao}>
              {pontuacaoEq1.map((i) => {
                return (
                  <Text key={'id1' + i.toString()} style={styles.pontos}>
                    {i}
                  </Text>
                );
              })}
              <TextInput
                style={styles.textInput}
                value={novosPontosEq1}
                onChangeText={(text) => setNovosPontosEq1(Number(text))}
              />
            </View>
          </View>
          <View style={styles.placares}>
            <View style={styles.equipeInfos}>
              <Text style={styles.nomeEquipe}>Nome Equipe</Text>
              <Text style={styles.placar}>{pontosEq2}</Text>
            </View>
            <View style={styles.pontuacao}>
              {pontuacaoEq2.map((i) => {
                return (
                  <Text key={'id2' + i.toString()} style={styles.pontos}>
                    {i}
                  </Text>
                );
              })}
            </View>
            <TextInput
              style={styles.textInput}
              value={novosPontosEq2}
              onChangeText={(text) => setNovosPontosEq2(Number(text))}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsFormat}>
        <TouchableOpacity
          style={styles.buttonDesygn}
          onPress={() => {
            navigate('dashboard');
          }}>
          <Text style={styles.buttonText}>H</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDesygn}
          onPress={() => {
            validacao();
          }}>
          <Text style={styles.buttonText}>∫</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonDesygn}
          onPress={() => {
            navigate('newGame');
          }}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

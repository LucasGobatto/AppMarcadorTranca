/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';

import {getData, removeData, storeData} from '../assets/storage/async-storage';
import {teamNamesKey, teamScoreKey} from '../assets/storage/key-names';
import {styles} from '../assets/styles/scores-style.js';
import {confirmAlert} from '../scripts/confirm-alert';

import {CircularButton} from '../components/molecules/button.mole';
import {auxColors, themeColors} from '../components/theme/theme.colors';

export function Scores() {
  //TODO: SET AN STATE LIKE AN OBJECT WHICH HAVE ALL THE INFORMATIONS ABOUT TEAMS POINTS
  const [newTeam1Point, setNewTeam1Point] = useState('');
  const [newTeam2Point, setNewTeam2Point] = useState('');
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team1Points, setTeam1Point] = useState([]);
  const [team2Points, setTeam2Points] = useState([]);
  const {navigate} = useNavigation();
  const [team1Name, setTeam1Name] = useState('EQUIPE 1');
  const [team2Name, setTeam2Name] = useState('EQUIPE 2');
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchData = () => {
      handleGetStoregeScores();
      handleGetStoregeNames();
    };
    fetchData();
  }, [isFocused]);

  async function handleGetStoregeScores() {
    const result = await getData(teamScoreKey);
    if (result != null) {
      const scores = JSON.parse(result);
      setTeam1Point(scores.team1Score);
      setTeam2Points(scores.team2Score);
      setTeam1Score(updateScores(scores.team1Score));
      setTeam2Score(updateScores(scores.team2Score));
    }
  }

  async function handleGetStoregeNames() {
    const result = await getData(teamNamesKey);
    if (result != null) {
      const teamNames = JSON.parse(result);
      setTeam1Name(teamNames.team1);
      setTeam2Name(teamNames.team2);
    }
  }

  function updateScores(oldScores) {
    let newScores = 0;
    oldScores.map((score) => {
      newScores += score;
    });
    return newScores;
  }

  function contaPonto() {
    team1Points.push(newTeam1Point);
    team2Points.push(newTeam2Point);
    setTeam1Score(updateScores(team1Points));
    setTeam2Score(updateScores(team2Points));
    setNewTeam1Point('');
    setNewTeam2Point('');
  }

  function validation() {
    if (isNaN(newTeam2Point) || isNaN(newTeam1Point)) {
      Alert.alert('Digite apenas números');
    } else if (!newTeam1Point || !newTeam2Point) {
      Alert.alert('Há campos vazios. Digite um número');
    } else {
      contaPonto();
    }
  }

  async function storeScores() {
    if (team1Score && team2Score) {
      const scores = JSON.stringify({
        team1Score: team1Points,
        team2Score: team2Points,
      });
      await storeData(teamScoreKey, scores);
    }
    navigate('Dashboard');
  }

  async function comeBackToNewGame() {
    if (
      await confirmAlert(
        'Você tem certeza que quer voltar?',
        'Os pontos não serão perdidos',
      )
    ) {
      await removeData(teamNamesKey);
      navigate('NewGame');
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
              <Text style={styles.nomeEquipe}>{team1Name}</Text>
              <Text style={styles.placar}>{team1Score}</Text>
            </View>
            <View style={styles.pontuacao}>
              {team1Points.map((i, index) => {
                return (
                  <Text key={'id1' + index.toString()} style={styles.pontos}>
                    {i}
                  </Text>
                );
              })}
              <TextInput
                style={styles.textInput}
                value={newTeam1Point.toString()}
                onChangeText={(text) => setNewTeam1Point(Number(text))}
              />
            </View>
          </View>
          <View style={styles.placares}>
            <View style={styles.equipeInfos}>
              <Text style={styles.nomeEquipe}>{team2Name}</Text>
              <Text style={styles.placar}>{team2Score}</Text>
            </View>
            <View style={styles.pontuacao}>
              {team2Points.map((i, index) => {
                return (
                  <Text key={'id2' + index.toString()} style={styles.pontos}>
                    {i}
                  </Text>
                );
              })}
            </View>
            <TextInput
              style={styles.textInput}
              value={newTeam2Point.toString()}
              onChangeText={(text) => setNewTeam2Point(Number(text))}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonsFormat}>
        <CircularButton
          backgroudColor={auxColors.firstAuxColor}
          color={themeColors.secColor}
          onPress={storeScores}
          text="H"
        />
        <CircularButton
          backgroudColor={auxColors.firstAuxColor}
          color={themeColors.secColor}
          onPress={validation}
          text="+"
        />
        <CircularButton
          backgroudColor={auxColors.firstAuxColor}
          color={themeColors.secColor}
          onPress={comeBackToNewGame}
          text="X"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

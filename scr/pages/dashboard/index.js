import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../assets/styles/dashboardStyle.js';

const Dashboard = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/darklogo.jpeg')}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('newGame')}>
          <Text style={styles.buttonText}>Novo Jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => navigate('regras')}>
          <Text style={styles.buttonText}>Regras</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Dashboard from './dashboard';
import NewGame from './newGame';
import Placar from './placar';
import Regras from './rules';

export default function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{title: 'Marcador de Tranca'}}
      />
      <Stack.Screen
        name="newGame"
        component={NewGame}
        options={{title: 'Novo Jogo'}}
      />
      <Stack.Screen
        name="Placar"
        component={Placar}
        options={{title: 'Placar'}}
      />
      <Stack.Screen
        name="regras"
        component={Regras}
        options={{title: 'Regras do Jogo'}}
      />
    </Stack.Navigator>
  );
}

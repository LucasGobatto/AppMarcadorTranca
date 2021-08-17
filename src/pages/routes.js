import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {Dashboard} from './dashboard-page';
import {NewGame} from './new-game-page';
import {Scores} from './scores-page';
import {Detail} from './rules-page';
import {NukeTown} from './nuke-town-page';

export function Route() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{title: 'Marcador de Tranca'}}
      />
      <Stack.Screen
        name="NewGame"
        component={NewGame}
        options={{title: 'Novo Jogo'}}
      />
      <Stack.Screen
        name="Scores"
        component={Scores}
        options={{title: 'Placar'}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{title: 'Detalhes do Jogo'}}
      />
      <Stack.Screen
        name="NukeTown"
        component={NukeTown}
        options={{title: 'Campo para Testes'}}
      />
    </Stack.Navigator>
  );
}

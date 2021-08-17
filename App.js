import React from 'react';
import {Route} from './src/pages/routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Route />
    </NavigationContainer>
  );
}

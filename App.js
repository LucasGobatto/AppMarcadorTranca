import React from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={{url: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
      </View>
      <View style={styles.body}>
        <Button title="Novo Jogo" />
        <Button title="Regras" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    marginTop: 100,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  body: {
    alignItems: 'center',
  },
});

export default App;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
  image: {
    width: 300,
    height: 300,
  },
  buttonsContainer: {
    height: '40%',
  },
  touchableOpacity: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 10,
    width: 200,
  },
  buttonText: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

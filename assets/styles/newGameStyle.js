import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    margin: '5%',
  },
  image: {
    width: 200,
    height: 200,
  },
  inputsContainer: {
    margin: '10%',
    alignItems: 'center',
  },
  textEquip: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputsNames: {
    borderWidth: 4,
  },
  textInput: {
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#CCC',
    width: 200,
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  touchableOpacity: {
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#000000',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#DDD',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#DDD',
    paddingTop: 10,
  },
  placares: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 200,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#AAA',
    paddingBottom: 10,
  },
  equipeInfos: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#AAA',
  },
  nomeEquipe: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
  },
  placar: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  pontuacao: {
    alignItems: 'center',
    width: '90%',
    paddingTop: 20,
  },
  pontos: {
    fontSize: 20,
    paddingBottom: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#CCC',
    width: 170,
    height: 30,
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonsFormat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    width: '80%',
  },
  buttonDesygn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 70,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;

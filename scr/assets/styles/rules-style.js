import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#000000',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    margin: 8,
    padding: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    width: 350,
  },
  Subtitle: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  par: {
    padding: 10,
    textAlign: 'center',
  },
  parObs: {
    paddingTop: 5,
    paddingBottom: 30,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonView: {
    alignItems: 'center',
  },
  buttonContainer: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
  },
});

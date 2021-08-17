import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

export async function storeData(key, data) {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    Alert.alert(error);
  }
}

export async function getData(keyName) {
  try {
    const result = await AsyncStorage.getItem(keyName);
    return result;
  } catch (error) {
    Alert.alert(error);
  }
}

export async function removeData(tokenName) {
  try {
    await AsyncStorage.removeItem(tokenName);
  } catch (error) {
    Alert.alert(error);
  }
}

export async function removeAllData(tokensName) {
  try {
    await AsyncStorage.multiRemove(tokensName);
  } catch (error) {
    Alert.alert(error);
  }
}

import {Alert} from 'react-native';

export function confirmAlert(msg, detail) {
  return new Promise((res, rej) =>
    Alert.alert(
      msg,
      detail,
      [
        {
          text: 'Sim',
          onPress: () => {
            res(true);
          },
        },
        {
          text: 'Não',
          onPress: () => {
            res(false);
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    ),
  );
}

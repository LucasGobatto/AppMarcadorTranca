import {cutName} from './cut-names.es6';

export function equipName(name1, name2) {
  name1 = cutName(name1);
  name2 = cutName(name2);
  return makeRandomName(name1, name2);
}

function makeRandomName(name1, name2) {
  const randomList = [];
  let randomName = '';
  const maxValue = 3;

  name1.map((i) => randomList.push(i));
  name2.map((i) => randomList.push(i));
  console.log(name1, randomList.length);
  console.log(name2, randomList.length);

  let i = 0;
  let initial = 0;
  while (i < maxValue) {
    var index = getRandomInt(initial, randomList.length);
    if (randomName.indexOf(randomList[index]) === -1) {
      randomName += randomList[index];
      if (i === initial + 1) {
        initial++;
      }
      i++;
    }
  }
  randomName = randomName.charAt(0).toUpperCase() + randomName.slice(1);
  return randomName;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

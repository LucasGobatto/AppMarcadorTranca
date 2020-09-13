import {cutName} from './cut-names';

export function equipName(name1, name2) {
  let name1 = name1.lowerCase();
  let name2 = name2.lowerCase();
  name1 = cutName(name1);
  name2 = cutName(name2);
  return makeRandomName(name1, name2);
}

function makeRandomName(name1, name2) {
  const randomList = [];
  const randomName = [];
  const maxValue = 6;
  var name = '';

  name1.map((i) => randomList.push(i));
  name2.map((i) => randomList.push(i));

  let i = 0;
  while (i < maxValue) {
    var index = getRandomInt(0, randomList.length);
    if (randomName.indexOf(randomList[index]) === -1) {
      randomName.push(randomList[index]);
      i++;
    }
  }
  randomList.map((p) => (name += p));

  return name;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

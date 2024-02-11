////size
///set()
///get()
const map = new Map();
map.set(1, {}).set('1', 'value');

// console.log(map.get('1'));

const vocabulary = new Map();
vocabulary
  .set('cat', 'кіт')
  .set('dog', 'собака')
  .set('eat', 'їсти')
  .set('vova', 'Вовчик')
  .set('milk', 'молочко')
  .set('drink', 'пити');

function translator(str, vocabulary) {
  let translatedArr = [];
  const arrayWords = str.toLowerCase().trim().split(' ');
  translatedArr = arrayWords
    .map((word) => {
      if (vocabulary.has(word)) {
        return vocabulary.get(word);
      } else {
        return word;
      }
    })
    .join(' ');
  return translatedArr;
}
translator('cat eat dog', vocabulary);

/////////////////////////////////////////

const schedule = new Map();
schedule
  .set('Monday', ['Math', 'Physic'])
  .set('Tuesday', ['English', 'Geography'])
  .set('Wednesday', ['Latin', 'History'])
  .set('Thursday', ['Chemistry', 'Culture'])
  .set('Friday', ['Literature', 'Biologe']);

schedule.get('Monday');

////////////////////////////////////////////
const user1 = {
  firstName: 'Tanos',
  lastName: 'Tyrant',
  id: 1,
};

const user2 = {
  firstName: 'Rocket',
  lastName: 'Snackmaster',
  id: 2,
};

const tanosMessages = [
  'Seeking Infinity Stone. Found donuts?',
  'Stones power universe!',
  'Join me, Rocket!',
];
const rocketMessages = [
  'Donuts rule, not stones.',
  'Donuts fuel my ship.',
  'Donuts first, universe later.',
];

const ownerMessages = new Map();
ownerMessages.set(user1.id, tanosMessages).set(user2.id, rocketMessages);
// console.log(ownerMessages.get(1));
// console.log(ownerMessages.get(2));

const map3 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

const mapIteratorentries = map3.entries();

mapIteratorentries.next();
const keyIterators = map3.keys();
// map3.forEach((v, k, m) => console.log(k, v));

// console.log(...map3);
// console.log(Array.from(map3));

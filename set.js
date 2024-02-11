//////////////////////////////
const set = new Set(map3);
set.add(5);

// const arr = [2, 4, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13];
const uniqArr = [...new Set([2, 4, 5, 6, 77, 77, 5, 1, 1, 12, 12, 13])];

const arr1 = [4, 3, 7, 5, -11];
const arr2 = [3, 4, 8, 7, 2, -11];

const newArr = [...new Set([...arr1, ...arr2])];

const mySet = new Set();
mySet.add(1).add(2).add(3);
console.log(mySet.has(3));
console.log(mySet.has(4));
mySet.add(5).add(8).add(12);
// mySet.delete(2);
// mySet.clear();

// for (let val of mySet) {
//   console.log(val);
// }
let sum = 0;
mySet.forEach((item) => (sum += item));
const value = [...mySet].reduce((accum, item) => (accum += item), 0);

/////////////////////////////////////////////////
const arr5 = [1, 6, 9, 4, 9, 4, 5, 6];
const arr9 = [5, 10, 11];
const newSet = new Set(arr1);
const newSet2 = new Set([...arr5, ...arr9]);
const newSet3 = new Set([...[1, 6, 9, 4, 9, 4, 5, 6], ...[5, 10, 11]]);

const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];

const names = new Set(messages.map((item) => item.name));

const map = new Map([[]]);

const messageMap = new Map();

///////////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

messages.forEach((message) => {
  // Якщо ім'я вже є у мапі, додаємо новий об'єкт до масиву
  if (messageMap.has(message.name)) {
    messageMap
      .get(message.name)
      .push({ message: message.message, date: message.date });
  } else {
    // Якщо ім'я ще не має запису у мапі, створюємо новий масив з одним об'єктом
    messageMap.set(message.name, [
      { message: message.message, date: message.date },
    ]);
  }
});

console.log(messageMap);

const usersMessages = new Map();

messages.forEach(({ name, message, date }) => {
  const key = { message, date };
  usersMessages.has(name)
    ? usersMessages.get(name).push(key)
    : usersMessages.set(name, [key]);
});

/////////////////////////////////////////////////////////////////////////////////

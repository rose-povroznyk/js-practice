// // array.concat - використовується для об'єднання двох або більше масивів у новий масив
// // array.concat(array1, array2, ..., arrayN)

// const array1 = [1, 2, 3, 4];
// const array2 = array1.concat([222, 888, 333], [555555, 7777777]);
// // console.log(array2);

// // array.fill - використовується для заповнення всіх елементів масиву якимсь одним значенням
// // array.fill(value, [start, [end]]); // start, end - не обов'язкові

// const array3 = new Array(5);
// array3.fill(1);

// // array.includes - використовується для перевірки наявності певного значення у масиві
// // array.includes(searchValue, [fromIndex])

// const array4 = [2, 12, 1, 5, 8, 13, 12];
// // console.log(array4.includes(120));

// // array.indexOf - використовується для отримання першого входження певного значення у масиві
// // array.indexOf(searchElement, [fromIndex])
// // console.log(array4.indexOf(12));

// // array.join - використовується для створення рядка, об'єднуючи всі елементи масиву
// // array.join([separator])
// const array5 = ['Hello', 'world', 4, 2, 'hi'];
// //console.log(array5.join(' <<--->> '));

// // array.push - використовується для додавання одного або кількох елементів у кінець
// // array.push(element1, ..., elementN);
// const array6 = [2, 3, 4, 5];
// array6.push(6, 7, 8, 9, 10);

// // array.pop - використовується для видалення останнього елементу
// array6.pop();
// array6.pop();
// array6.pop();

// //array.shift - використовується для видалення first елементу
// const array7 = [2, 3, 4, 5];
// console.log(array7.reverse());
// console.log(array7);

///////////////////////////////////////////////////////////////////
// const arrFirst = [1, 2, 3];
// const arrSecond = [4, 5, 6];
// const concatArrays = arrFirst.concat(arrSecond);

// const arrReversed = [1, 2, 3];
// arrReversed.reverse();

// const arrPush = [3, 4, 5];
// arrPush.push(4, 8, 10);

// const arrPop = ['aaa', 'bbb', 'ccc'];
// console.log(arrPop[2]);
// const popValue = arrPop.pop();

// const arrUnshift = [3, 7, 10];
// arrUnshift.unshift(2, 8);

// const arrJoin = [3, 7, 10];
// console.log(arrJoin.join('~'));

///////////////////////////////////////////////////////////////////
// const arrSlice = [1, 2, 3, 4, 5];
// const newArrSlice = arrSlice.slice(2, 3);

// const users = [
//   { name: 'John', lastName: 'Linux' },
//   { name: 'Jane', lastName: 'Git' },
//   { name: 'Jack', lastName: 'Sparrow' },
// ];

// const newUsers = users.slice();
// users[0].name = 'Alexo';
// console.log(users == newUsers);

// const newArr = [1];
// const arrFromNewArr = newArr;
// console.log(newArr === arrFromNewArr); // виведе true

// const arrFromSlice = newArr.slice();
// console.log(newArr === arrFromSlice); // виведе false

// newArr[1] = 2;
///////////////////////////////////////////////////////////////////

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);

const arr2 = [1, 2, 3, 4];
const arr33 = arr2.slice(1);

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 4, 'w', 'tr-td', 2, 3, 4, 'vv', 5, 'aa');

///////////////////////forEach
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => console.log(number ** 2));

// const squaredNumbers = numbers.map((number) => number ** 2);

// const users = [
//   { name: 'John', lastName: 'Smith', age: 19, email: 'john.smith@gmail.com' },
//   { name: 'Jane', lastName: 'Smith', age: 22, email: 'jane.smith@gmail.com' },
//   {
//     name: 'Jackson',
//     lastName: 'Smith',
//     age: 55,
//     email: 'jackson.smith@gmail.com',
//   },
// ];

// users.forEach((user) => (user.age += 1));

// const array = [2, 44, 11, 234, 8, 2, 4, 1];
// const newArray = array.map((item) => item + 100);

const users = [
  { name: 'John', lastName: 'Smith', age: 19, email: 'john.smith@gmail.com' },
  { name: 'Jane', lastName: 'Smith', age: 22, email: 'jane.smith@gmail.com' },
  {
    name: 'Jackson',
    lastName: 'Smith',
    age: 55,
    email: 'jackson.smith@gmail.com',
  },
];

const newArrFromUsers = users.map((user) => {
  const newUser = {
    fullName: `${user.name} ${user.lastName}`,
    email: user.email,
  };
  return newUser;
});

// const array = [5, 3, 9, 21, 5, 1, 2, 4];
// // array.sort(compareFunction);

// const lettersArray = ['bbb', 'abb', 'aaa', 'aba'];
// lettersArray.sort();

// const dogArr = [
//   { nickname: 'Tuzik', color: 'black', weight: 3, age: 2 },
//   { nickname: 'Dolly', color: 'white', weight: 5, age: 3 },
//   { nickname: 'Fagot', color: 'black', weight: 15, age: 5 },
//   { nickname: 'Stus', color: 'black', weight: 9, age: 1 },
// ];

// dogArr.sort((dog1, dog2) => dog2.weight - dog1.weight);

// dogArr.sort((dog1, dog2) => dog2.age - dog1.age);

// const filteredDogArr = dogArr.filter((dog) => dog.color === 'white');

// const weightOfAllDogs = dogArr.reduce((accum, dog) => accum + dog.weight, 0);

/////////////////////////////////////////////////////////////
const usersWithMessages2 = [
  { id: 1, name: 'Test1', message: 'hello', date: new Date() },
  { id: 1, name: 'Test1', message: 'how are you', date: new Date() },
  { id: 2, name: 'Test2', message: 'hi', date: new Date() },
  { id: 2, name: 'Test2', message: 'fine', date: new Date() },
];

const users2 = [];

usersWithMessages2.forEach((um) => {
  if (!users2.find((u) => um.id === u.id)) {
    users2.push({ id: um.id, name: um.name });
  }
});

const messages22 = usersWithMessages2.map((um) => ({
  message: um.message,
  date: um.date,
}));
//////////////////////////////////////////////////////////////////////////////

///////////////Отримати масив марок телефонів

const users55 = [
  { name: 'Test0', brand: 'Iphone' },
  { name: 'Test1', brand: 'Samsung' },
  { name: 'Test2', brand: 'Iphone' },
  { name: 'Test3', brand: 'Xiaomi' },
  { name: 'Test4', brand: 'Samsung' },
  { name: 'Test5', brand: 'Xiaomi' },
  { name: 'Test6', brand: 'Iphone' },
];

const brands = users55.map((u) => {
  return u.brand;
});

const brands2 = [
  ...new Set(
    users55.map((u) => {
      return u.brand;
    })
  ),
];

usersWithPhones = {};

brands.forEach((b) => {
  usersWithPhones[b] = users55.filter((u) => b === u.brand).map((u) => u.name);
});
//////////////////////////////////////////////////////////////////

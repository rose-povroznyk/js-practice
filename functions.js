// JS DOC

/**
 * Power the first number to the power of the second number
 * @param {number} base - First number
 * @param {number} pow [pow = 2] - Second number
 * @returns {number} power the first number to the power of the second number
 */
// function power(base, pow){
//   return base ** pow
// }
/////////////////////////////////////////////////////

// Функція, що виводить привітання

// function greetingUser(userName) {
//   console.log('Hello, ' + userName + '!');
// }

// greetingUser('Вовчик');
/////////////////////////////////////////////////////
// Функція що додає до числа 5
// function sum(number) {
//   let result = Number(number) + 5;
//   console.log(result);
// }

// sum(10);
/////////////////////////////////////////////////////
// Функція, яка приймає 2 числа і повертає те, що більше
// function chooseBiggerNum(num1, num2) {
//   let biggerNum;
//   if (num1 > num2) {
//     biggerNum = num1;
//   } else if (num2 > num1) {
//     biggerNum = num2;
//   } else if ((num1 = num2)) {
//     console.log('Numbers are equals');
//   } else {
//     console.log('Something is going wrong');
//   }
//   return biggerNum;
// }

// biggerNum = chooseBiggerNum(23, 15);
// console.log(biggerNum);

/////////////////////////////////////////////////////
// Функція, яка знаходить середнє арифматичне з двох чисел
// function arithmeticMean(num1, num2) {
//   let average = (num1 + num2) / 2;
//   return average;
// }

// const averageResult = arithmeticMean(5, 8);
// console.log(averageResult);

/////////////////////////////////////////////////////
// Функція, яка приймає одне число і визначає чи є воно парним
// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log(num + ' is even');
//     return true;
//   } else {
//     console.log(num + ' is odd');
//     return false;
//   }
// }

// console.log(isEven(8));

/////////////////////////////////////////////////////
// Функція, що додає два числа, як введе юзер
// const numb1 = Number(prompt('Please enter first number'));
// const numb2 = Number(prompt('Please enter second number'));

// function addTwoNumbers(arg1, arg2) {
//   const result = arg1 + arg2;
//   return result;
// }

// let result = addTwoNumbers(numb1, numb2);
// console.log(result);

/////////////////////////////////////////////////////
// Функції, яка вирішить математичне завдання, яке введе користувач
// const firstUserNumber = Number(prompt('Please, enter first number'));
// const secondUserNumber = Number(prompt('Please, enter second number'));
// const userSign = prompt('Please, choose one of this sign: / or * or + or - ');

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
// }

// function minusTwoNumbers(num1, num2) {
//   return num1 - num2;
// }

// function multiplicateTwoNumbers(num1, num2) {
//   return num1 * num2;
// }

// function divideTwoNumbers(num1, num2) {
//   return num1 / num2;
// }

// if (userSign === '+') {
//   alert(addTwoNumbers(firstUserNumber, secondUserNumber));
// } else if (userSign === '-') {
//   alert(minusTwoNumbers(firstUserNumber, secondUserNumber));
// } else if (userSign === '*') {
//   alert(multiplicateTwoNumbers(firstUserNumber, secondUserNumber));
// } else if (userSign === '/') {
//   alert(divideTwoNumbers(firstUserNumber, secondUserNumber));
// } else {
//   alert('You enter incorrect data');
// }

/////////////////////////////////////////////////////
//Функція на знаходження факторіалу (5! добуток всіх цілих чисел від 1 до 5, тільки для невідємних чисел, дл 0! = 1, для 1!=1)

// function findFactorial(num) {
//   let factorial = 1;

//   if (num < 0) {
//     return null;
//   } else if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     for (let i = 1; i <= num; i++) {
//       factorial *= i;
//     }
//   }
//   return factorial;
// }

// console.log(findFactorial(5));

// function findFactorial(num) {
//   let factorial = 1;
//   let i = 1;

//   if (num < 0) {
//     return null;
//   } else if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     while (i <= num) {
//       factorial *= i;
//       i++;
//     }
//   }
//   return factorial;
// }

// console.log(findFactorial(5));
/////////////////////////////////////////////////////
// Розв'язок FizzBuzz через функції, цикл while і switch-case

// function isFizzBuzz(num) {
//   return num % 3 === 0 && num % 5 === 0 ? true : false;
// }
// function isFizz(num) {
//   return num % 3 === 0 ? true : false;
// }

// function isBuzz(num) {
//   return num % 5 === 0 ? true : false;
// }

// let num = Number(
//   prompt('Please, enter number from 1 to 100 and feel like Pythagoras')
// );

// while (num < 100) {
//   switch (true) {
//     case isFizzBuzz(num): {
//       alert('FizzBuzz!');
//       break;
//     }
//     case isFizz(num): {
//       alert('Fizz!');
//       break;
//     }
//     case isBuzz(num): {
//       alert('Buzz!');
//       break;
//     }
//     default: {
//       alert(num);
//     }
//   }
//   num = Number(
//     prompt('Please, enter number from 1 to 100 and feel like Pythagoras')
//   );
// }
/////////////////////////////////////////////////////
// Функція, яка приймає 2 числа (діапазон) і виводить на консоль усі числа з діапазону,які діляться на 5

// function numberInRange(min, max) {
//   for (let i = min; i <= max; i++) {
//     if (i !== 0 && i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }

// numberInRange(0, 25);
/////////////////////////////////////////////////////
// Функція, яка приймає 2 числа (діапазон) і виводить на консоль усі числа з діапазону,які діляться на 5 2 variant
// let numberOne = Number(prompt('Введіть число один'));
// let numberTwo = Number(prompt('Введіть число два'));
// let it;

// function count(num1, num2) {
//   if (numberOne > numberTwo) {
//     console.log('Start value must be smaller than end value');
//     return;
//   }
//   for (let it = num1; it <= num2; it++) {
//     if (it % 5 === 0) {
//       console.log(it);
//     } else {
//       console.log('Number ' + it + ' cannot divide on 5');
//     }
//   }
// }
// count(numberOne, numberTwo);
/////////////////////////////////////////////////////
// Написати функцію для розрахунку суми числа від 1*(m) до n
// function sumOfOneNumber(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfOneNumber(45));
/////////////////////////////////////////////////////
// Функція, що приймає два числа і вираховує суму усіх числен в діапазоні цих чисел
// function sumOfOneNumber2(n, m) {
//   let sum = 0;
//   for (let i = n; i <= m; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumOfOneNumber2(5, 7));

/////////////////////////////////////////////////////
// Функція що перевіряє, чи юзер повнолітній
// const userAge = Number(prompt("Please, enter your age"));

// function checkIsUserAdult(age) {
//   let message;
//   if (userAge < 18) {
//     message = "not adult";
//   } else if (userAge >= 18) {
//     message = "adult";
//   } else {
//     message = "Please enter correct number";
//   }
//   return message;
// }

// console.log(checkIsUserAdult(userAge));
/////////////////////////////////////////////////////
// Функція що перевіряє, чи юзер повнолітній
// const isAdult = Number(prompt("Please, enter your age")) === 18;
// function checkUserAge(age) {
//   let message = isAdult ? "adult" : "not adult";
//   return message;
// }
// console.log(checkUserAge(isAdult));
/////////////////////////////////////////////////////

//Написати функцію яка за рядком поверне ініціали
// function getInitials(name, surname) {
//   let initials = name.substring(0, 1) + '.' + surname.substring(0, 1) + '.';
//   return initials;
// }
// console.log(getInitials('John', 'Smith'));

// Написати функцію, яка знаходить найбільше значення серед елементів масиву.
// const newArr = [3, 6, 8, 2, 5, 3, 1];
// function findLargestNumber(arr) {
//   let largestNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       largestNumber = arr[i];
//     }
//   }
//   return largestNumber;
// }
// console.log(findLargestNumber(newArr));

// Написати функцію, яка знаходить середнє арифметичне

// function findAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(findAverage(newArr));

// Задача: у об'єкті user вивести назви всіх ключів і властивості

// for (let key in user) {
//   console.log(`${key} ---> ${user[key]}`);

// Задача: у нас є об'єкт з зарплатами по всіх відділах. Написати функцію, яка повертає загальну суму, витрачену на зарплатню всіх відділів

// const departmentSalaryInCompany1 = {
//   HR: 120000,
//   development: 5500000,
//   PR: 50000,
//   marketing: 120000,
//   assistant: undefined,
// };

//   function sumSalary(salaryObject) {
//     let sum = 0;

//     for(let key in salaryObject) {
//       if(typeof salaryObject[key] === 'number') {
//         sum += salaryObject[key];
//       }
//     }

//     return sum;
//   }

// ввести з консолі n елементів масиву
// function inputArray(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Number(prompt('input item')));
//   }
//   return arr;
// }
// console.log(inputArray(5));

/////////////////////////////////////////////////////////////////////
// Function isOdd
// function isOdd(item) {
//   return item % 2 === 1;
// }

/////////////////////////////////////////////////////////////////////
//Arguments
// function f() {
//   console.log(arguments);
// }
/////////////////////////////////////////////////////////////////////
// Функція для розрахунку добутку необмеженої кількості переданих аргументів
// function multiplication() {
//   let result = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     result *= arguments[i];
//   }
//   return result;
// }
// console.log(multiplication(5, 3, 2));
/////////////////////////////////////////////////////////////////////
// Функція виду
// calculate(operation, operand1, operand2, ,,,. operandN),
// де operation - операція, яка має бути виконана над операндами

// function calculate() {
//   let sum = 0;
//   let multiply = 1;

//   if (arguments[0] === '+') {
//     for (let i = 1; i < arguments.length; i++) {
//       sum += arguments[i];
//     }
//     return sum;
//   } else if (arguments[0] === '*') {
//     for (let i = 1; i < arguments.length; i++) {
//       multiply *= arguments[i];
//     }
//     return multiply;
//   }
// }

// console.log(calculate('*', 5, 10, 10));

///////////////////////////////////////////////////////////////
// Rest parameteres

// function sumNumber(...args) {
//   const sum = args.reduce(function (accumulator, currentVallue) {
//     return accumulator + currentVallue;
//   }, 0);

//   return sum;
// }

// sumNumber(1, 5, 10);

// console.log(calculate.arguments[0]);
/////////////////////////////////////////////////////////////////////
//Function arrow isAdult
// const isAdult = (age) => age >= 18;
// console.log(isAdult(18));
/////////////////////////////////////////////////////////////////////
// Функція, яка запакує обєкт
// const packObject = (firstName, lastName) => {
//   return { firstName: firstName, lastName: lastName };
// };
// console.log(packObject('John', 'Balon'));
/////////////////////////////////////////////////////////////////////
//Function arrow isEven
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(5));
/////////////////////////////////////////////////////////////////////

//Function greeting
// const greetingOptions = {
//   en: 'Hello',
//   ua: 'Vitajy',
//   esp: 'Hola',
// };
// const greeting = (lang, userName) => `${greetingOptions[lang]}, ${userName}`;
// console.log(greeting('esp', ''));

///////////////////////////////////////////////////////////////////
//Function-constructor for creating phone objects

// function Phone(id, brand, model, makeYear, color, isNfc, price) {
//   this.id = id;
//   this.brand = brand;
//   this.model = model;
//   this.makeYear = makeYear;
//   this.color = color;
//   this.isNfc = isNfc;
//   this.price = price;
// }

// const phones = [];
// const phonesCount = 100;

// Loop for creating array phones with 100 phone objects

// for (let i = 0; i < phonesCount; i++) {
//   const phone = new Phone(
//     i,
//     Math.random() < 0.5 ? 'Samsung' : 'IPhone',
//     `Series ${Math.trunc(Math.random() * 20)}`,
//     2015 + Math.trunc(Math.random() * 8),
//     Math.random() > 0.5 ? 'white' : 'black',
//     Math.random() > 0.5,
//     5000 + Math.trunc(Math.random() * 7000)
//   );
//   phones.push(phone);
// }
// console.dir(phones);
// Відібрати телефони з ціною вище 8000
// const phonePriceMoreThan8000 = phones.filter((item) => item.price > 8000);
// Відібрати телефони 2018 року випуску (filter)
// const phoneMakeYear2018 = phones.filter((item) => item.makeYear === 2018);
// Вивести бренд, модель і рік кожного телефону (forEach)
// phones.forEach( (item) => console.log(`${item.brand}: ${item.model} ${item.makeYear}`))
// Видалити телефон з id 10(findIndex + splice)
// const id10 = phones.findIndex((item) => item.id === 10);
// phones.splice(id10, 1);
// Вивести бренд+модель телефонів з nfc (можна через filter + forEach)
// phones.forEach((value) => {
//   if (value.isNfc === true) {
//     console.log(`${value.brand}: ${value.model}`);
//   }
// });
// Вивести дані про моделі еппл 2016 року
// phones.forEach(item => item.makeYear === 2016 && item.brand === 'IPhone') {
//     console.log(value);
//   }
// });

// Отримати масив з телефонами, ціна яких нижча 5% від вихідної
// const mapPhones = phones.map(function (item) {
//   const i = { ...item }; // Make new objext for data
//   i.price = Math.trunc(i.price * 0.95);
//   return i; // this new object with new price will be in our const
// });
///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// Функція призначена для знаходження двох ідентичних сусідніх чисел у масиві.
// function findTwoIdentNumber(arr) {
//   let isFind;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       isFind = true;
//       break;
//     } else if (arr[i] !== arr[i + 1]) {
//       isFind = false;
//     }
//   }
//   return isFind;
// }

// function isDoubleElement(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] === array[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

//////////////////////!!!!!!!!!!!!!
// function saySomething(howToSay, whatToSay) {
//   howToSay(whatToSay);
// }
// saySomething(alert, 'Hello, user');
// saySomething(console.log, 'hiiii');

/////////////////////Функція отримання суми з переданих аргументів
// function sum() {
//     const arrayArgs = Array.from(arguments);
//     let sum = 0;

//     for (let i = 0; i < arrayArgs.length; i++) {
//       sum += arrayArgs[i];
//     }
//     return sum;
//   }

//   console.log(sum(2, 6, 3, 4, 5, 6, 7, 8));

// function compareFunction(a, b) {
//   //для зростання
//   if (b > a) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

////////////////////////////////////////////////////////
// // function capitalizeWords(str) {
// //   let words = str.split(' ');
// //   console.log(words);
// //   for (let i = 0; i < words.length; i++) {
// //     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// //   }
// //   return words.join(' ');
// // }

// // capitalizeWords('word, flower, third');

// // function checkSpam(str) {
// //   let checkstr = str.toLowerCase();
// //   console.log(checkstr.includes('via'));

// //   if (checkstr.includes('viagra') || checkstr.includes('xxx')) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // checkSpam('by ViAgRa now');

// // function palindrom(str) {
// //   const reverseStr = Array.from(str.toLowerCase).reverse().join('');
// //   console.log(reverseStr);
// // }
// // palindrom('ann');

// ////////////////// Рекурсивна функція на знаходження факторіалу

// function findFactorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     return (num *= findFactorial(num - 1));
//   }
// }

// console.log(findFactorial(5));

// ////////////////// Рекурсивна функція на знаходження послідовності чисел Фібоначчі

// function recursiveFibonacciGenerator(num) {
//   if (num === 1) {
//     return [0];
//   } else if (num === 2) {
//     return [0, 1];
//   } else {
//     let previousNum = recursiveFibonacciGenerator(num - 1);
//     let nextNum =
//       previousNum[previousNum.length - 1] + previousNum[previousNum.length - 2];
//     return [...previousNum, nextNum]; //прийшлося гуглити, сама не додумалася(
//   }
// }

// console.log(recursiveFibonacciGenerator(17));

// ////////////////// Функція з циклом на знаходження послідовності чисел Фібоначчі
// function fibonacciGenerator(n) {
//   let output = [];

//   if (n === 1) {
//     output = [0];
//   } else if (n === 2) {
//     output = [0, 1];
//   } else {
//     output = [0, 1];
//     for (let i = 2; i < n; i++) {
//       output.push(output.at(-2) + output.at(-1));
//     }
//   }

//   return output;
// }

// ///////////////////////// Нагуглений розв'язок
// //////////////////Stackoverflow Fibonachii resolve
// // function fibonacci(num) {
// //   if (num < 2) {
// //     return num;
// //   } else {
// //     return fibonacci(num - 1) + fibonacci(num - 2);
// //   }
// // }

// // const nTerms = prompt('Enter the number of terms: ');

// // if (nTerms <= 0) {
// //   console.log('Enter a positive integer.');
// // } else {
// //   for (let i = 0; i < nTerms; i++) {
// //     console.log(fibonacci(i));
// //   }
// // }

///Function translator
function translate(engPhrase) {
  return engPhrase
    .split(' ')
    .map((e) => (vocabulary.has(e) ? vocabulary.get(e) : e))
    .join();
}

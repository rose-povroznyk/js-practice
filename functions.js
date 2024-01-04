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

// Цикл, доки користувач не введе правильну суму

// let userNumber = null;

// do {
//   userNumber = Number(prompt('Please, enter the summary of 2+2*2'));
//   console.log(userNumber);
// } while (userNumber !== 6);
/////////////////////////////////////////////////////

// Цикл до 10
// let iterator = 1;
// while (iterator <= 10) {
//   console.log(iterator);
//   iterator++;
// }
/////////////////////////////////////////////////////
// Цикл, що виводить кожне друге значення
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i += 2;
// }
/////////////////////////////////////////////////////
// Цикл, доки юзер не введе вірний пароль
// const truePassword = 'qwerty1234';
// let userPasswordInput = prompt('Please, enter your password');

// while (userPasswordInput !== truePassword) {
//   userPasswordInput = prompt(
//     'Please, enter your password again. It is not correct'
//   );
//   if (userPasswordInput !== truePassword) {
//     alert('Please try one more time');
//   } else if (userPasswordInput === truePassword) {
//     alert('Please, enter');
//   }
// }
/////////////////////////////////////////////////////
// Цикл, доки юзер не введе вірний пароль
// const truePassword = 'qwerty1234';
// let userPasswordInput;

// do {
//   userPasswordInput = prompt('Please, enter your password');
// } while (userPasswordInput !== truePassword);

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }
/////////////////////////////////////////////////////

// Розв'язок FizzBuzz через цикл for
// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 == 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }
/////////////////////////////////////////////////////
// Multiplicatiion table

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
/////////////////////////////////////////////////////
//Three tries for enter password
// const PASSWORD = "qwerty";
// let quantitOfTries = 3;
// let isCorrectPassword;

// do {
//   isCorrectPassword =
//     prompt(
//       `Please, enter your parol. You have only ${quantitOfTries} tries`
//     ).trim() === PASSWORD;
//   quantitOfTries--;
// } while (!isCorrectPassword && quantitOfTries > 0);

// alert(`You password is ${isCorrectPassword ? "correct" : "incorrect"}`);

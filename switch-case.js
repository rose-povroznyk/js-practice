// Оператор множинного виводу. Інструкція switch...case

// switch (mark) {
//   case 12:
//     console.log('5+');
//     break;
//   case 11:
//     console.log('5');
//     break;
//   case 10:
//     console.log('5-');
//     break;
//   default:
//     console.log('Mark is < 5');
// }

/////////////////////////////////////////////////////
// Користувач вводить 2 числа a,b - операцію ??? (* . + - ). Порахувати і вивести результат a ??? b
// const firstUserNum = Number(prompt('Please, enter first number'));
// const secondUserNum = Number(prompt('Please, enter second number'));
// const operate = prompt('Please enter one of this signs: /  * + - ');

// switch (operate) {
//   case '+':
//     console.log(firstUserNum + secondUserNum);
//     break;
//   case '-':
//     console.log(firstUserNum - secondUserNum);
//     break;
//   case '/':
//     console.log(firstUserNum / secondUserNum);
//     break;
//   case '*':
//     console.log(firstUserNum * secondUserNum);
//     break;
//   default:
//     console.log('Please enter correct data');
// }

/////////////////////////////////////////////////////
// За введеним номером місяція вивести назву пори року
// const numberOfMonths = 10;
// switch (numberOfMonths) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('Winter');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('Spring');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('Summer');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('Autumn');
//     break;
//   default:
//     console.log('It is not a month');
// }

/////////////////////////////////////////////////////
// Перевірити і вивести, чи введене юзером число ділиться на 5, 3, 2
// const userNumber = Number(prompt('Please enter your number'));

// if (typeof userNumber !== 'number') {
//   console.log('Please enter correct data');
// } else if (userNumber % 5 === 0) {
//   console.log(userNumber + ' / 5');
// } else if (userNumber % 3 === 0) {
//   console.log(num + ' / 3');
// } else if (userNumber % 2 === 0) {
//   console.log(num + ' / 2');
// }

// switch (true) {
//   case userNumber % 8 === 0:
//     console.log(userNumber + ' divides on 8');
//   case userNumber % 2 === 0:
//     console.log(userNumber + ' divides on 2');
//   case userNumber % 3 === 0:
//     console.log(userNumber + ' divides on 3');
//   case userNumber % 5 === 0:
//     console.log(userNumber + ' divides on 5');
//     break;
//   default:
//     console.log(userNumber + ' is not diveded on 2, 3, 5');
// }

/////////////////////////////////////////////////////
// В залежності від ввведеного користувачем числа, вивести йому страву з меню
// const userNumber = Number(prompt('Please, my sweet user, enter number in range from 1 to 5'));
// switch (userNumber) {
//   case 1:
//     console.log('You choose juice, my friend');
//     break;
//   case 2:
//     console.log('You choose water, my friend');
//     break;
//   case 3:
//     console.log('You choose coffee');
//     break;
//   case 4:
//     console.log('You choose tea, my friend');
//     break;
//   case 5:
//     console.log('You choose lemonade, my friend');
//     break;
//   default:
//     console.log('Oh no, no drink for you, you enter incorrect data');
// }

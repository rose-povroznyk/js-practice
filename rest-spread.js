// function sum(a, b) {
//   let restValues = [];
//   let sum = a + b;
//   for (let i = 2; i < arguments.length; i++) {
//     restValues.push(arguments[i]);
//   }
//   console.log(restValues);
//   return sum;
// }

//Функція яка сумує будь яку кількість чисел

const sumOfNumb = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

// function arrowSum(...args) {
//   let sum = args.reduce((accum, num) => accum + num, 0);
//   return sum;
// }

const arrowSum = (...args) => args.reduce((accum, num) => accum + num, 0);

const arr1 = [1, 2, [3, 4], 6];
// console.log(...arr1);

const numbers = [1, 2, 3, 4, 5];
function sum(a, b, ...restArray) {
  console.log(restArray);
  return a + b;
}

// console.log(sum(...numbers));

/////////////////////////////////////////
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 11, 12, 13, 14, 15];

const array3 = [...array1, ...array2];

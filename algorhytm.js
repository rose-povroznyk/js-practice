////// лінійна складність
const arr5 = [2, 4, 1, 3, 7, 3, 2, 1, 3, 5, 2, 8, 2, 4, 1];
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

linearSearch(arr5, 6);

///////////////квадратична складність
function myltyTable(limit) {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push(`${i} * ${j} = ${i * j}`);
    }
  }
  return table;
}

myltyTable(10);

/////////////////логарифмічна складність !!!обовязково масив має бути відсортований !!! треба ще прописати  if для першого останього елемента,бо не повертатимек

// const arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(arr, whatToFind) {
//   if (whatToFind > arr[arr.length - 1]) {
//     return -Infinity;
//   }
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.round((start + end) / 2);
//   while (true) {
//     if (arr[middle] === whatToFind) {
//       return middle;
//     }
//     if (arr[middle] < whatToFind) {
//       start = middle;
//       middle = Math.ceil((start + end) / 2);
//     } else {
//       end = middle;
//       middle = Math.ceil((start + end) / 2);
//     }
//   }

//   function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);

//       if (arr[mid] === target) {
//         return mid; // Знайдено елемент, повертаємо його індекс
//       } else if (arr[mid] < target) {
//         left = mid + 1; // Шуканий елемент знаходиться праворуч від середини
//       } else {
//         right = mid - 1; // Шуканий елемент знаходиться ліворуч від середини
//       }
//     }

//     return -1; // Елемент не знайдено
//   }

//   // Приклад використання:
//   const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const targetElement = 7;

//   const result = binarySearch(sortedArray, targetElement);

//   if (result !== -1) {
//     console.log(`Елемент ${targetElement} знайдено на позиції ${result}.`);
//   } else {
//     console.log(`Елемент ${targetElement} не знайдено в масиві.`);
//   }
// }

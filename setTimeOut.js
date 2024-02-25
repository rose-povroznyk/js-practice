////////Hometask
// function printNumbers(from, to, interval) {
//   let timer = setInterval(() => {
//     from += 1;
//     console.log(from);
//     if (from > to - 1) {
//       clearInterval(timer);
//     }
//   }, interval);
// }

// printNumbers(10, 15, 2000);

//recursive setTimeout in printNumber
// function printNumber(from, to, interval) {
//   if (from > to) {
//     console.log('Помилка: Початкове число більше кінцевого числа');
//     return;
//   }

//   console.log(from);

//   if (from === to) {
//     return; // Завершуємо рекурсію
//   }

//   setTimeout(function () {
//     printNumber(from + 1, to, interval); // Рекурсивний виклик з наступним числом
//   }, interval);
// }

// printNumber(1, 5, 1000);
/////////////////////////////////////////////////////////////////////////

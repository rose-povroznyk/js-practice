// Якщо b є парним збільшити n на 5, в іншому випадку змінити значення змінної a на 15.
// let a = 3;
// let b = 6;
// let n = 8;

// if (b % 2 === 0) {
//   console.log((n += 5));
// } else {
//   console.log((a = 15));
// }

// console.log(a, b, n);

// Якщо число більше 12, вивести про це повідомлення в консоль. Якщо воно менше 5, вивести повідомлення що число менше 5. В іншому випадку вивести, що наше число перебуває в діапазоні між 5 і 12.

// let r = 8;
// if (r > 12) {
//   console.log(" more than 12");
// } else if (r < 5) {
//   console.log("less than 5");
// } else {
//   console.log(" our number: " + r + " is between 5 and 12");
// }

// Якщо користувач повнолітній і має ліцензію вивести в консоль, що він має право керувати транспортом.

// const age = 18;
// const hasLicense = false;

// if (age <= 18 && hasLicense === true) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }

// if (age >= 18 && hasLicense === true) {
//   console.log(
//     "You can drive, your age is: " + age + " and your license is " + hasLicense
//   );
// } else if (age < 18) {
//   console.log(
//     "You cannot drive, because your age: " + age + " is less than 18"
//   );
// } else if (hasLicense === false) {
//   console.log("You haven't license, your license is: " + hasLicense);
// } else if (age < 18 && hasLicense === false) {
//   console.log("your age is less than 18 and you have no license");
// } else {
//   console.log("We have some mistake");
// }

// let isHoliday = true;
// let isDay = false;
// if (isHoliday || isDay) {
//   console.log("djflksjk");
// } else {
//   console.log("lskjdfljskl");
// }

// let numb = 5;
// if (numb !== 5) {
//   console.log(numb + " Not equal 5");
// } else {
//   console.log(numb + " number is equal 5");
// }

// Задача на хвилини і чверті години

// const minutesInHour = 13;
// if (minutesInHour >= 0 && minutesInHour < 15) {
//   console.log("It is first quater");
// } else if (minutesInHour >= 15 && minutesInHour < 30) {
//   console.log("It is second quater");
// } else if (minutesInHour >= 30 && minutesInHour < 45) {
//   console.log("It is third quater");
// } else if (minutesInHour >= 45 && minutesInHour < 60) {
//   console.log("It is fourth quater");
// } else {
//   console.log("something is going wrong");
// }

// Задача на визначення високосного року:Ви зберігаєте у змінній рік.Потрібно визначити, чи є цей рік високосним. Примітка. Рік є високосним, якщо його номер кратний 4, але не кратний 100, АБО якщо він кратний 400

// const year = 2036;
// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log("Year " + year + " is leap.");
// } else {
//   console.log("Year " + year + " is not leap.");
// }

//У вас є задане початкове і кінцеве значення діапазону, і також певне число. Вам потрібно визначити, чи входить це число в заданий діапазон, чи ні. Якщо число знаходить між початковим і кінцевим значенням діапазону (включно), вивести "В діапазоні". В іншому випадку вивести "Поза діапазоном", оскільки число знаходиться поза початковим та кінцевим значенням.

// const beginValue = 0;
// const endValue = 100;
// const num = 55;

// if (num >= beginValue && num <= endValue) {
//   console.log("Yeah, " + num + "  is our number");
// } else {
//   console.log(num + " is not our number");
// }

// Козак Вус проводить змагання з програмування, в якому беруть участь n людей. Він вирішив нагородити їх усіх ручками та блокнотами. Відомо, що Ус має рівно m ручок і k блокнотів. Визначте, чи може козак Вус нагородити всіх учасників, даючи кожному з них щонайменше по одній ручці і одному блокноту.

// const quantityOfPeople = 3;
// const quantityOfPens = 13;
// const quantityOfNotebooks = 5;

// if (
//   quantityOfPeople <= quantityOfNotebooks &&
//   quantityOfPeople <= quantityOfPens
// ) {
//   console.log(
//     `We have presents for all. It still remain: ${
//       quantityOfNotebooks - quantityOfPeople
//     } notebooks and ${quantityOfPens - quantityOfPeople} pens.`
//   );
// } else if (
//   quantityOfPeople > quantityOfNotebooks &&
//   quantityOfPeople < quantityOfPens
// ) {
//   console.log(
//     "We don't have enough notebooks for presents. We have only pens."
//   );
// } else if (
//   quantityOfPeople > quantityOfPens &&
//   quantityOfPeople < quantityOfNotebooks
// ) {
//   console.log(
//     "We don't have enough pens for presents. We have only notebooks."
//   );
// } else {
//   console.log("We don't have presents for all. Sorry :( ");
// }

//Ви є організатором розважальної програми і вам потрібно розподілити вхідні квитки на основі віку відвідувачів. Вхідні квитки мають різні ціни в залежності від віку відвідувачів. Вам потрібно реалізувати таку логіку, яка в залежності від віку відвідувача повертає вартість його квитка згідно наступних умов: - Діти до 6 років: безкоштовний вхід - Діти від 6 до 12 років (включно): квиток коштує $10 - Дорослі від 12 років і старше: квиток коштує $20  Якщо дорослий надає документ, що підтверджує його право на пільги, то такому дорослому надається знижка 50% знижка для всіх дорослих фіксована, незалежно від виду пільги).

// const visitorAge = 5;
// const hasDiscount = true;
// let ticketPrice;

// if (visitorAge < 0 || typeof visitorAge !== "number") {
//   console.log("Please, write correct data");
// } else if (visitorAge < 6) {
//   ticketPrice = "free";
//   console.log("Your entry is " + ticketPrice);
// } else if (visitorAge >= 6 && visitorAge < 12) {
//   ticketPrice = "10";
//   console.log("Ticket costs: " + ticketPrice + "$");
// } else if (visitorAge >= 12 && hasDiscount) {
//   ticketPrice = (20 * 50) / 100;
//   console.log("Ticket costs: " + ticketPrice + "$");
// } else if (visitorAge >= 12 && !hasDiscount) {
//   ticketPrice = 20;
//   console.log("Ticket costs: " + ticketPrice + "$");
// } else {
//   console.log(
//     "Ooops, something is going wrong ... Perhaps you are not of the human race"
//   );
// }

// Запитати число у користувача, піднести його до квадрату і вивисти результат.
// const userNumber = Number(prompt("Please, enter your number"));
// console.log(userNumber ** 2);

// Вивести середнє арифматичне двох чисел. Числа запитувати у користувача.

// const firstUserNumber = Number(prompt("Please, enter your number"));

// const secondUserNumber = Number(prompt("Please, enter your number"));

// const averageNumber = (firstUserNumber + secondUserNumber) / 2;
// console.log(averageNumber);

// Перевести кількість хвилин на секунди та вивести результат. Число запитувати у користувача.

// const userQuantityOfMinutes = Number(prompt("Please, enter your number"));
// const quantityOfSeconds = userQuantityOfMinutes * 60;
// console.log(quantityOfSeconds);

// const greeting = "Hello";
// const userName = prompt("Please, enter you name");
// alert(greeting + ", " + userName + "!");

// Запитайте змінну у користувачів. Якщо змінна дорівнює числу 10, виведіть Вірно, інакше виведіть Невірно.

// const userNum = Number(prompt("Please, enter your number"));
// if (userNum === 10) {
//   alert("Right!");
// } else {
//   alert("Wrong!");
// }

// Напишіть дві перевірки. Якщо змінна test дорівнює true виведіть Вірно, інакше Невірно. Якщо змінна test не дорівнює true виведть Вірно, інакше Невірно.

// const test = true;
// if (test) {
//   console.log("Right");
// } else {
//   console.log("Wrong");
// }

// if (!test) {
//   console.log("Right");
// } else {
//   console.log("Wrong");
// }

// Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума більше 500, а знижка 5% якщо сума більша за 800. Суму покупки вводить користувач.

// const purchaseAmount = Number(prompt("Please, enter you purchase amount"));
// let discountedPrice;
// let value;

// if (purchaseAmount > 500 && purchaseAmount < 800) {
//   discountedPrice = (purchaseAmount * 3) / 100;
//   value = purchaseAmount - discountedPrice;
//   alert("You must pay: " + value + "$");
// } else if (purchaseAmount > 800) {
//   discountedPrice = (purchaseAmount * 5) / 100;
//   value = purchaseAmount - discountedPrice;
//   alert("You must pay: " + value + "$");
// } else {
//   discountedPrice = purchaseAmount;
//   alert("You must pay: " + discountedPrice + "$");
// }

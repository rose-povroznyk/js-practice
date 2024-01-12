const cat = {
  name: 'Murzik',
  color: 'Red',
  breed: 'Dvorovyi',
  age: 2,
  eat: function () {
    return 'I am eating';
  },
  sleep: function () {
    return 'I am sleeping';
  },
};

cat.age = cat.age + 1; // зміна значення
delete cat.sleep; // видалення значення

cat['favourite food'] = 'fish'; // оператор обчислювальних властивостей

cat.meowing = function () {
  return 'Meow';
}; // додавання функції

cat.friend = {
  name: 'Tom',
  age: 3,
  color: 'light gray',
}; // додавання обєкта в обєкт

//Function-constructor

function Cat(name, color, age, breed) {
  this.name = name;
  this.color = color;
  this.age = age;
  this.breed = breed;
  this.run = function () {
    return this.name + ' is running';
  };
}

const cat1 = new Cat('Tom', 'light', 5, 'siam');
const cat2 = new Cat('Jerry', 'red', 3, 'egipt');

// Прийняти від користувача назву дня тижня і видати алерт, що заплановано

const obj = {
  Mon: 'drive lesson',
  Tue: 'dentist visit',
  Wed: 'go to party',
  Thu: 'hard work',
  Fri: 'chill',
  Sat: 'go to park',
};

const userValue = prompt(
  'Type your week day to get your plan: \n Monday = Mon, \n Tuesday = Tue, \n ...'
);
alert(obj[userValue] ? obj[userValue] : 'Error happened');

//Function greetning with in object

const user = {
  email: 'john.doe@gmail.com',
  name: 'Peter',
};

function greeting(user) {
  return `Hello ${'name' in user ? user.name : 'Anonym'}`;
}

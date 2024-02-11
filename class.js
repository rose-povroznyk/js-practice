// class User5 {
//   constructor(name, lastName, age) {
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getFullName() {
//     return `${this.name} ${this.lastName}`;
//   }
// }

// const user3 = new User5('Jack', 'Sparrow', 23);
// const user6 = new User5('Janny', 'Grey', 16);

// // class Worker {
// //   constructor(name, lastName, ratePerDay, monthWorkDays) {
// //     this.name = name;
// //     this.lastName = lastName;
// //     this.ratePerDay = ratePerDay;
// //     this.monthWorkDays = monthWorkDays;
// //   }

// //   getMonthSalary() {
// //     return this.ratePerDay * this.monthWorkDays;
// //   }
// // }

// // const worker1 = new Worker('John', 'Sparrow', 350, 20);

// // class Phone {
// //   constructor(mark, model, color, price, year) {
// //     this.mark = mark;
// //     this.model = model;
// //     this.color = color;
// //     this.price = price;
// //     this.year = year;
// //   }

// //   set price(value) {
// //     if (typeof value !== 'number') {
// //       throw new TypeError('it is not a number');
// //     }
// //     this._price = value;
// //   }

// //   get price() {
// //     return this._price;
// //   }

// //   phoneAge() {
// //     return new Date().getFullYear() - this.year;
// //   }
// // }

// // const phone1 = new Phone('nokia', 'Nck', 'white', 5200, 2021);

// class Fuel {
//   constructor(volume, density) {
//     this.volume = volume;
//     this.density = density;
//   }

//   getWeight() {
//     return this.volume * this.density;
//   }
// }

// const benzin = new Fuel(50, 0.9);
// benzin.getWeight();

// class Auto {
//   constructor(name, ownWeight, fuel) {
//     this.name = name;
//     this.ownWeight = ownWeight;
//     this.fuel = fuel;
//   }
//   getAllWeight() {
//     return this.ownWeight + this.fuel.getWeight();
//   }
// }

// const bmw = new Auto('BMW', 4000, benzin);

// const MIN_ZP = 7101;
// const WORK_DAYS = 21;
// const MIN_RATE = MIN_ZP / WORK_DAYS;

// class Worker {
//   constructor(name, lastName, rate = MIN_RATE, days = WORK_DAYS, coefficient) {
//     this._name = name;
//     this._lastName = lastName;
//     this._rate = Number(rate.toFixed(2));
//     this._days = days;
//     this._coefficient = coefficient;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newValue) {
//     if (typeof newValue !== 'string') {
//       throw new TypeError('Name must be string');
//     }
//     if (newValue === '') {
//       throw new Error('Name must contain words');
//     }
//     this._name = newValue;
//   }

//   get lastName() {
//     return this._lastName;
//   }

//   set lastName(newValue) {
//     if (typeof newValue !== 'string') {
//       throw new TypeError('Name must be string');
//     }
//     if (newValue === '') {
//       throw new Error('Name must contain words');
//     }
//     this._lastName = newValue;
//   }

//   set rate(newValue) {
//     if (newValue < 0) {
//       throw new RangeError('rate must be positive number');
//     }
//     if (typeof newValue !== 'number') {
//       throw new TypeError('it is not a number');
//     }
//     this._rate = newValue;
//   }
//   get rate() {
//     return this._rate;
//   }

//   get days() {
//     return this._days;
//   }

//   set days(value) {
//     if (value < 0 || value > 31) {
//       throw new RangeError('Days must be in 0 to 31');
//     }
//     this._days = value;
//   }

//   get coefficient() {
//     return this._coefiicient;
//   }

//   set coefficient(value) {
//     if (value < 0) {
//       throw new RangeError('Coefficient must be positive');
//     }
//     this._coefiicient = value;
//   }

//   getSalary() {
//     if (this.coefficient) {
//       return this.rate * this.days * this.coefficient;
//     } else {
//       return this.rate * this.days;
//     }
//   }
// }

// const wrkr = new Worker('ll', 'sdf', 10, 20);

// class Animal {
//   constructor(nickname, color) {
//     this.nickname = nickname;
//     this.color = color;
//   }

//   eat() {
//     return `${this.nickname} is eating`;
//   }
// }

// class Dog extends Animal {
//   constructor(nickname, color, age) {
//     super(nickname, color);
//     this.age = age;
//   }
//   woof() {
//     return `${this.nickname} woof-woof-woof`;
//   }
// }

// const anim = new Dog('Tuzik', 'black', 2);

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Moderator extends User {
  constructor(name, surname, age) {
    super(name, surname, age);
  }
  createPost(text) {
    console.log('Post is successfully created');
  }

  deletePost() {
    console.log('Post is successfully deleted');
  }
  getFullName() {
    return `${this.name} ${this.surname} ${this.age}`;
  }
}

class Admin extends Moderator {
  constructor(name, surname, age, uniquePrefix) {
    super(name, surname, age);
    this.uniquePrefix = uniquePrefix;
  }
  makeModerator(userId) {
    console.log('Moderator is successfully set!');
  }
  deleteModerator(userId) {
    console.log('Moderator is successfully deleted');
  }
}

class Support extends Admin {
  constructor(name, surname, age, uniquePrefix, uniquePref) {
    super('William', null, 20, null);
    this.uniquePref = uniquePref;
  }
  makeModerator(userId) {
    console.log('Moderator is successfully set!');
  }
  deleteModerator(userId) {
    console.log('Moderator is successfully deleted');
  }
}
const user1 = new User('John', 'Smith', 25);
const moderator1 = new Moderator('Jack', 'Sparrow', 23);
const admin1 = new Admin('Suzanna', 'Johnas', 22, 'Head of sales');

class Person {
  constructor(fullName, birthYear, gender) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;
  }

  //Setters
  set fullName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Fullname must be a string');
    }
    this._fullName = value;
  }

  set birthYear(value) {
    this._birthYear = value;
  }

  set gender(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Fullname must be a string');
    }
    this._gender = value;
  }

  //Getters
  get fullName() {
    return this._fullName;
  }
  get birthYear() {
    return this._birthYear;
  }
  get gender() {
    return this._gender;
  }

  //Methods
  greeting() {
    let prefix;
    if (this.gender === 'male') {
      prefix = 'Mr';
    } else if (this.gender === 'female') {
      prefix = 'Mrs';
    } else {
      prefix = prompt('How should we adress you');
    }
    return `Hello, ${prefix} ${this._fullName}`;
  }
}

class Student extends Person {
  constructor(
    fullName,
    birthYear,
    gender,
    admissionYear,
    studentId,
    averageGrade
  ) {
    super(fullName, birthYear, gender);
    this.admissionYear = admissionYear;
    this.studentId = studentId;
    this.averageGrade = averageGrade;
  }
  //Static
  static getAverageGradeOfAll(arr) {
    return (
      arr.reduce((accum, arr) => (accum += arr.averageGrade), 0) / arr.length
    );
  }

  //Setters
  set admissionYear(value) {
    this._admissionYear = value;
  }

  set studentId(value) {
    this._studentId = value;
  }

  set averageGrade(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Average grade must be a number');
    }
    if (value > 100 || value < 0) {
      throw new RangeError('Average grade must be: [0: 100]');
    }
    this._averageGrade = value;
  }

  //Getters
  get admissionYear() {
    return this._admissionYear;
  }

  get studentId() {
    return this._studentId;
  }
  get averageGrade() {
    return this._averageGrade;
  }

  ///Methods
  isExcellentStudent() {
    return this.averageGrade >= 90;
  }
}

const ivanov = new Person('Іванов Іван Іванович', 1985, 'male');
const petrov = new Person('Петров Петр Петрович', 1985, 'Non binary');

console.log(ivanov.greeting());

const student1 = new Student(
  'Сидоров Сидр Сидорович',
  1999,
  'male',
  2021,
  'A12-F-345',
  95
);
const student2 = new Student('John Doe', 1999, 'male', 2021, 'A12-F-346', 85);
const student3 = new Student('Jane Doe', 2000, 'male', 2022, 'A13-F-258', 70);
const student4 = new Student('Josh Doe', 2000, 'male', 2022, 'A13-F-259', 77);

const students = [student1, student2, student3, student4];

function getAverageGradeOfAll(arr) {
  return arr.reduce((accum, arr) => accum + arr.averageGrade, 0) / arr.length;
}

//////////////////////////////////////////////////
class Figure {
  constructor(sideQuantity) {
    this.sideQuantity = sideQuantity;
  }

  get sideQuantity() {
    return this._sideQuantity;
  }
  set sideQuantity(value) {
    if (value < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._sideQuantity = value;
  }
  getArea() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super(3);
    this.a = a;
    this.b = b;
    this.angle = angle;
  }

  get a() {
    return this._a;
  }
  set a(value) {
    if (value < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._a = value;
  }

  get b() {
    return this._b;
  }
  set b(value) {
    if (value < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._b = value;
  }

  get angle() {
    return this._angle;
  }
  set angle(value) {
    if (value < 0) {
      throw new RangeError('Side cannot be less than 0');
    }
    this._angle = value;
  }
  getArea() {
    return this.a * this.b * Math.sin(this.angle);
  }
}

class Square extends Figure {
  constructor(a) {
    super(4);
    this.a = a;
  }
  getArea() {
    return this.a * this.a;
  }
}

function calcArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError('Parametr is not a figure');
}

const triangle1 = new Triangle(5, 6, 45);

class Circle extends Figure {
  constructor(radius) {
    super(1);
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value < 0) {
      throw new RangeError('Radius cannot be less than 0');
    }

    this._radius = value;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Animal {
  //abstract class - interface
  constructor(nickname) {
    this.nickname = nickname;
  }
  makeSound() {} //abstract method
}
class Dog extends Animal {
  //specific class
  constructor(nickname) {
    super(nickname);
  }

  makeSound() {
    //virtual method
    console.log('Woof woof woof');
  }
}

class Cat extends Animal {
  //specifi class
  constructor(nickname) {
    super(nickname);
  }

  makeSound() {
    //virtual method
    console.log('Meow meow meow');
  }
}

class AnimalFactory {
  //fabric to create animal
  static createAnimal(type, nickname) {
    switch (type) {
      case 'dog':
        return new Dog(nickname);
      case 'cat':
        return new Cat(nickname);
      default:
        throw new Error(`Unknown type of animal: ${type}`);
    }
  }
}

///////////////////////////////////////
class MyArray {
  constructor() {
    this.length = 0;
  }

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }

  pop() {
    if (this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback) {
    const newArr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArr.push(callback(this[i], i, this));
    }
    return newArr;
  }
}
function call(value, key, arr) {
  return value * 2;
}
// const arr = new MyArray();
// arr.push(1);
// arr.push(2);
// arr.push(3, 2, 5);

const arr = new MyArray();
arr.push(1, 2, 3, 4, 5);

/////////////////////Class Home Task Practice
class Vehicle {
  constructor(length, width, height, brand, model, manufactureDate) {
    this.dimension = {
      length: length,
      width: width,
      height: height,
    };
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }

  getFullInfo() {
    return `Brand: ${this.brand}, model: ${
      this.model
    }, age: ${this.manufactureDate.getFullYear()}`;
  }

  getAge() {
    return new Date().getFullYear() - this.manufactureDate.getFullYear();
  }
}

const car = new Vehicle(55, 66, 78, 'Toyouta', 'fdf', '02/12/2004');

class PassengerTransport extends Vehicle {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(length, width, height, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }

  addPasenger() {
    if (this.passengerCount < this.passengerLimit) {
      return ++this.passengerCount;
    } else {
      return 'No free place';
    }
  }

  getFullInfo() {
    return `Brand: ${this.brand}, model: ${
      this.model
    }, age: ${this.manufactureDate.getFullYear()}, seats: ${
      this.passengerLimit
    }`;
  }
}

const car2 = new PassengerTransport(
  55,
  66,
  78,
  'Toyouta',
  'fdf',
  '02/12/2004',
  18,
  15
);

class FreightTransport extends Vehicle {
  constructor(length, width, height, brand, model, manufactureDate, capacity) {
    super(length, width, height, brand, model, manufactureDate);
    this.capacity = capacity;
  }

  checkLoadingPossibility(weight) {
    return this.capacity > weight;
  }

  getFullInfo() {
    return `Brand: ${this.brand}, model: ${
      this.model
    }, age: ${this.manufactureDate.getFullYear()}, capacity: ${this.capacity}`;
  }
}

const car3 = new FreightTransport(
  55,
  66,
  78,
  'Toyouta',
  'fdf',
  '02/12/2004',
  5000
);
/////////////////////////////////////////

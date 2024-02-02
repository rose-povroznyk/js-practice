//////////////Creating own Array
function MyArray() {
  this.length = 0;
  this.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  };
}

///////////////////////// Creating own Array
function MyArray() {
  this.length = 0;
}

const MyArrayPrototype = {
  push: function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  },

  pop: function () {
    if (this.length > 0) {
      // Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // Видалити останній елемент з масиву
      delete this[this.length - 1];
      // Зменшити довжину масиву на 1
      this.length--;
      // Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  },

  forEach: function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  },

  unshift: function (value) {
    if (this.length === 0) {
      this[0] = value;
    } else {
      // Перемістити решту елементів на один індекс вперед
      for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
      }
      this[0] = value; // Додати перший елемент
    }
    this.length++;
    return this.length; // Повернути нову довжину
  },

  shift: function () {
    // Зберегти перший елемент
    const firstItem = this[0];
    if (this.length > 0) {
      // Видалити перший елемент
      delete this[0];
      // Перемістити решту елементів на один індекс назад
      for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i];
      }
      // Зменшити довжину масиву на 1
      this.length--;
      // Повернути перший елемент
      return firstItem;
    } else {
      return undefined;
    }
  },
};

MyArray.prototype = MyArrayPrototype;

////////////////////////////////////////////
// const cat = {
//   name: 'Barsil',
//   color: 'red',
//   age: 1,
// };

// const catMethods = {
//   run: function () {
//     console.log(`${this.name} is running`);
//   },
//   meow: function () {
//     console.log(`${this.name} said Meow`);
//   },
// };

// cat.__proto__ = catMethods;

// const cat2 = {
//   name: 'Murzik',
//   color: 'white',
//   age: 2,
// };

// cat2.__proto__ = catMethods;

function Car(model, speed) {
  this.model = model;
  this.speed = speed;
}

function CarMethods() {
  this.accelarate = function () {
    return (this.speed = this.speed + 10);
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

Car.prototype = new CarMethods();

const audi = new Car('Audi', 150);

function Ladder(currentStair) {
  this.currentStair = currentStair;
}

// function LadderMethods() {
//   this.up = function (currentStair) {
//     this.currentStair++;
//   };
//   this.down = function (currentStair) {
//     this.currentStair--;
//   };
//   this.showStair = function (currentStair) {
//     return this.currentStair;
//   };
// }

function LadderMethods() {
  this.up = function () {
    this.currentStair++;
    return this;
  };
  this.down = function () {
    this.currentStair--;
    return this;
  };
  this.showStair = function () {
    this.currentStair;
    return this;
  };
}

Ladder.prototype = new LadderMethods();

const ladder1 = new Ladder(5);

const newspaper = {
  title: 'News news news',
  articles: [
    { author: 'John Smith', date: '23-08-2023', text: 'lorem' },
    { author: 'Richard Smith', date: '25-08-2023', text: 'lorem' },
    { author: 'Sam Smith', date: '25-08-2023', text: 'lorem' },
  ],
  showArticles: function () {
    this.articles.forEach((item, index) => {
      console.log(`${this.title} ${index}  ${item.author}`);
    });
  },
};

// newspaper.showArticles();

const parrot = {
  name: 'Rejkjavik',
  color: 'yellow',
};

const birdMethods = {
  sing: function () {
    return `${this.name} is singing`;
  },
};

parrot.__proto__ = birdMethods;

// function User(name, lastName, age) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
// }

// function UserPrototype() {
//   this.getFullName = function () {
//     return `${this.name} ${this.lastName}`;
//   };
// }

// User.prototype = new UserPrototype();

// // User.prototype.getFullName = function () {
// //   return `${this.name} ${this.lastName}`;
// // };

// const user1 = new User('John', 'Bond', 21);
// const user2 = new User('Joana', 'Mors', 18);
// console.log(user1);

const regExp = new RegExp('gwerty', 'ig');
const regExp2 = /qwerty/gi;

/////Flags: i - незалежність від регістру, g - пошук по всьому рядку

///method .test()
// console.log(regExp.test('gwertysdlfkjsljkdsgwerty'));

///method .match() return null or Array with finding value
// console.log('sqwertyldkfjslkjfdqwerty'.match(regExp2));

/////Межі:
// ^ - початок рядка
// $ - кінець рядка
// \b - границя слова
// \B -  не межа слова

///// Квантифікатори
// {8}
// {1,10}
// + {1,}
// * {0,}
// ? {0,1}
//

///// Alternative symbols / one of the group
// \d = [0-9]
// \D = ^\d
// [a-z]
// [A-Z]
// [a-zA-Z]
// \w = [a-zA-Z0-9_] symbol of word
// \W = ^\w
// \s - space
// \S

//////Only numbers:
// console.log('123456'.match(/^[0-9]+$/));

////Name
// console.log('Anna'.match(/^[A-Z][a-z]{1,19}$/));

// Альтернативні слова
// [1 | 2 | 3]; 1 or 2 or 3
//(cat | dog)

//() теж для групування!!!!!

// find cutatu
// ? переводить квантифікатор з жадного режиму в лінивий + g
// console.log("I say 'yes' but i think 'no'".match(/'.*?'/g));

//find sentence
// console.log('Ffdsl sldkjfsl sldfjlfd. FDSfsfs ljsdlfjls'.match(/[A-Z].*?\./g));
// console.log('I bought 10 apple by 1$'.match(/\d+(?=\$)/g));

/////////////////////////////////////////////////////////////////////////

const btn = document.querySelector('button');
btn.addEventListener('click', clickHandler);

function clickHandler(e) {
  console.log('BUTTON');
}

function greeting() {
  alert('Hello user');
}

const timeoutId = setTimeout(greeting, 8000);
clearTimeout(timeoutId);

///////////////
// const user = {
//   firstName: 'John',
//   lastName: 'Johnson',
//   age: 23,
//   footSize: 36,
//   adress: {
//     street: 'Centralna',
//     house: 34,
//   },
//   sayHello: function () {
//     console.log('Hello');
//   },
// };

// const jsonFromObj = JSON.stringify(user);
// console.log(JSON.parse(jsonFromObj));

// const originalObject = {
//   users: [
//     { name: 'John', age: 25 },
//     {
//       name: 'Lucky',
//       age: 33,
//     },
//   ],
// };

// const shallowCopy = { ...originalObject };
// const shallowCopy2 = Object.assign({}, originalObject);

// const deepCopy = JSON.parse(JSON.stringify(originalObject));

// originalObject.users[0].name = 'Jack';

////////////////////////////////////////////
// fetch('./user.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log('error'))
//   .finally(() => {
//     console.log('Finally question closed');
//   });

// fetch('https://api.monobank.ua/bank/currency')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/////////////own promise
// const p = new Promise(executor); //pending

// function executor(resolve, reject) {
//   const number = Math.floor(Math.random() * 15);
//   if (number % 2 === 0) {
//     resolve(number);
//   } else {
//     const err = new RangeError(`Error happened: ${number}`);
//     reject(err);
//   }
// }

// p.then(
//   (number) => {
//     console.log(number);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
/////////////////////////////////Promisify loading image

function loadImage(src) {
  const img = document.createElement('img');
  img.setAttribute('src', src);

  const h2 = document.createElement('h2');
  h2.id = 'loading-h2';
  h2.append('Loading image ....');
  document.body.append(h2);

  return new Promise((resolve, reject) => {
    const timeId = setTimeout(() => {
      reject('Image is not loaded');
    }, 5000);
    img.addEventListener('load', () => {
      clearTimeout(timeId);
      resolve(img);
    });
    img.addEventListener('error', () => {
      clearTimeout(timeId);
      reject('Image cannot be loaded');
    });
  });
}

loadImage(
  'https://hips.hearstapps.com/hmg-prod/images/group-portrait-of-adorable-puppies-royalty-free-image-1687451786.jpg?crop=0.89122xw:1xh;center,top&resize=12005:*'
).then(
  (img) => {
    document.body.append(img);
    const loadingh2 = document.querySelector('#loading-h2');
    loadingh2.remove();
  },
  (errorMessage) => {
    const h2 = document.createElement('h2');
    h2.append('Img loading error');
    document.body.append(h2);
  }
);
//////////////////////////////////////////

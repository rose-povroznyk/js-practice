/////////Closure

let valuee = 10;

function wrapper() {
  let valuee = 20;
  // console.log('Wrapper function', valuee);
  return function log() {
    console.log('Log function', valuee);
  };
  log();
}
wrapper();
const a = wrapper();

function counter() {
  let i = 0;
  i++;
  return i;
}

function makeCounter() {
  let i = 0;
  return function () {
    return i++; //variable in closure
  };
}

const count = makeCounter();

// function makeCounterVers2() {
//   let counter = 0;
//   return {
//     increment() {
//       return ++counter;
//     },
//     discrement() {
//       return --counter;
//     },
//   };
// }

// const fnObj = makeCounterVers3(start, step);

function makeCounterVers2(start, step) {
  let counter = start;
  return {
    increment() {
      return (counter += step);
    },
    decrement() {
      return (counter -= step);
    },
  };
}

const fnVers2 = makeCounterVers2(1, 5);
console.log(fnVers2.increment());
console.log(fnVers2.increment());
console.log(fnVers2.increment());
console.log(fnVers2.decrement());
console.log(fnVers2.decrement());
console.log(fnVers2.decrement());

/////////////////////

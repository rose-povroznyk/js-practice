//////Destruction

const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: 'cm // 1',
    },
    width: {
      value: 50,
      scale: 'cm // 2',
    },
  },
  brightness: 750,
  refresh: {
    value: 144,
    scale: 'Ggrc',
  },
  color: 'black',
  resolution: '4K',
};

const {
  sizes: {
    height: { value },
  },
} = monitor;

const {
  sizes: {
    height: { scale: heigthScale },
    width: { scale: widthScale },
  },
} = monitor;

const { color, resolution, brightness, ...rest } = monitor;

const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
  contacts: {
    email: 'john@gmail.com',
    phone: '+38096325648',
  },
};

// const {
//   name,
//   address: { city },
//   contacts: { phone },
// } = user;

//////////////////////////////////
const arr = [1, 2, 3, 4, 5, 6];
const [first, second, , , fifth] = arr;

const user222 = {
  name: 'John',
  age: 30,
  address: {
    city: 'Kyiv',
    country: 'Ukraine',
  },
  contacts: {
    email: 'john@gmail.com',
    phone: ['54654564', '546', '654646'],
  },
};

const {
  contacts: {
    phone: [firsJoNu, SecondJoNu, ThirdJoNu],
  },
} = user222;

function getFullName({ firstName, lastName, ...rest }) {
  console.log(rest);
  return `${firstName} ${lastName}`;
}

const user55 = {
  firstName: 'John',
  lastName: 'Smith',
  age: 42,
  geoLocation: '54654 5545',
  browser: 'Chrome',
};
getFullName(user55);

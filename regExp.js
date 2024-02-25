// const regExp1 = new RegExp(shablon);
// const regExp2 = /shablon/;

const regExp1 = new RegExp('qwerty', 'i');
const regExp2 = /qwerty/g;

// console.log(regExp2.test('sdlfjslqwertyfxbhfcbqwerty'));
// console.log('qwertysldfjkslqwerty'.match(regExp2));

// console.log('qwerty'.match(/^qwerty$/));
// console.log('qwerty'.match(/^qwerty/i));

console.log('dog '.match(/\bdog\b/));

console.log('qwerty'.match(/^qw..ty$/));

console.log('111abcd'.match(/^1{3}.{4}$/));

console.log('hello@gmail.com'.match(/^.{1,60}@.{1,30}$/));

console.log('123560'.match(/^\d+$/));
console.log('+380-96-600-0048'.match(/^\+380-[0-9]{2}-[0-9]{3}-[0-9]{4}$/));

console.log('Suzanna'.match(/^[A-Z][a-z]{1,20}$/));

console.log('-111.555'.match(/^-?[0-9]*\.[0-9]*$/));

console.log('I like cats'.match(/\b(cat|dog)s?\b/));

console.log('Maria-Antuaneta'.match(/^[A-Z][a-z]{1,19}-([A-Z][a-z]{1,19})?$/));

/////////////////////////////////////////////////////////////////////////////

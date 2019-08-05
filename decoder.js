const key = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  x: 24,
  y: 25,
  z: 26,
}

const numbers = 'Daniel';

function decode(numbers) {
  let text = '';
  for (let i = 0; i < numbers.length; i++) {
    let letter = input[i].charCodeAt() - 64;
    text += letter
  }
  return text
}

console.log(decode(input));
console.log(decode(key));

// Fixed some error

//Fixed some other error directly in the master branch
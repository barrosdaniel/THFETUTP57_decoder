<<<<<<< HEAD
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
}

const input = 'Daniel';
||||||| merged common ancestors
const key = 'Daniel';
=======
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
}

const key = 'Daniel';
>>>>>>> master

function decode(numbers) {
  let text = '';
  for (let i = 0; i < numbers.length; i++) {
    let letter = input[i].charCodeAt() - 64;
    text += letter
  }
  return text
}

<<<<<<< HEAD
console.log(decode(input));
||||||| merged common ancestors
console.log(decode(key));
=======
console.log(decode(key));

// Fixed some error

//Fixed some other error directly in the master branch
>>>>>>> master

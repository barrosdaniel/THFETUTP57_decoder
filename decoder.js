const key = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
}

const input = 'Daniel';

function decode(numbers) {
  let text = '';
  for (let i = 0; i < numbers.length; i++) {
    let letter = input[i].charCodeAt() - 64;
    text += letter
  }
  return text
}

console.log(decode(input));
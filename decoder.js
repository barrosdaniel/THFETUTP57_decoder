const key = 'Daniel';

function decode(numbers) {
  let text = '';
  for (let i = 0; i < numbers.length; i++) {
    let letter = key[i].charCodeAt() - 64;
    text += letter
  }
  return text
}

console.log(decode(key));

// Fixed some error

//Fixed some other error directly in the master branch
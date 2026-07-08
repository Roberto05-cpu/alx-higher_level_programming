#!/usr/bin/node

const arg1 = process.argv[2];
const num1 = parseInt(arg1);

const arg2 = process.argv[3];
const num2 = parseInt(arg2);

function somme (a , b) {
  if (isNaN(a) || isNaN(b)) {
    console.log('Missing calcul because Not a Number');
  } else {
    return a + b ;
  }
}

console.log(somme(num1, num2));

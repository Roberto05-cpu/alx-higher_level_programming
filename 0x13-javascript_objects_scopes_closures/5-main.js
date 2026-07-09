#!/usr/bin/node

const Square = require('./5-square');

const s1 = new Square(4);
console.log('Normal');
s1.print();
console.log('Rotate');
s1.rotate();
console.log('Double');
s1.double();

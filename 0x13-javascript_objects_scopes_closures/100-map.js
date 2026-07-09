#!/usr/bin/node

const listInitial = require('./100-data').list ;

const listFinal = listInitial.map((index, value) => index * value);

console.log(listInitial);
console.log(listFinal);

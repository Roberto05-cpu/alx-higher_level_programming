#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);

// mon code ajoute
myObject.incr = function () {
  myObject.value ++;
}
// fin de mon code ajoute 

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);

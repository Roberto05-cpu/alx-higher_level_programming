#!/usr/bin/node

const dictData = require('./101-data').dict ;

const newDict = {};

for (const userId in dictData) {
  const occurences = dictData[userId];
  if (newDict[occurences] === undefined) {
    newDict[occurences] = [];
  }
  newDict[occurences].push(userId);
}

console.log(newDict);

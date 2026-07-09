#!/usr/bin/node
const fs = require('fs');

const fileA = process.argv[2];
const stringA = fs.readFileSync(fileA, 'utf8');

const fileB = process.argv[3];
const stringB = fs.readFileSync(fileB, 'utf8');

const destination = process.argv[4];
const resultat = stringA + stringB;
fs.writeFileSync(destination, resultat);

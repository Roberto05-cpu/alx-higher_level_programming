#!/usr/bin/node

exports.esrever = function (list) {
  const list_reverse = [];
  for (let i = list.length - 1; i >= 0; i--) {
    list_reverse.push(list[i]);
  }
  return list_reverse ;
}

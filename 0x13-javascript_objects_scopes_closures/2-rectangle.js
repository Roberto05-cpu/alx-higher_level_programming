#!/usr/bin/node

class Rectangle {

  constructor(w,h) {
    if (w > 0 && h > 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.w = w;
      this.h = h;
    }
  }
}

module.exports = Rectangle ;

#!/usr/bin/node

class Rectangle {

  constructor(w, h) {
    if (w > 0 && h> 0 && Number.isInteger(w) && Number.isInteger(h)) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      console.log('X'.repeat(this.width));
    }
  }

  rotate () {
    for (let i = 0; i < this.width; i++) {
      console.log('X'.repeat(this.height));
    }
  }

  double () {
    for (let i = 0; i < 2 * this.height; i++) {
      console.log('X'.repeat(2 * this.width));
    }
  }
}

module.exports = Rectangle ;

/* eslint-disable no-unused-vars */
function Laptop(year, size) {
  this.year = year;
  this.hd = size;
}

Laptop.prototype.checkSpecs = function () {
  return `Year: ${this.year}, HD: ${this.hd}`;
};

class Macbook extends Laptop {
  constructor(year, size, color) {
    super(year, size);
    this.color = color;
  }
}

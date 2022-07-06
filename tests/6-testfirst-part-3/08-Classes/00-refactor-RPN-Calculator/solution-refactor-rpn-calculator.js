/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/

class RPNCalculator {
  constructor() {
    this.array = [];
  }

  push = function (val) {
    this.array.push(val);
  };
}

RPNCalculator.prototype.plus = function () {
  if (!this.array.length) throw "rpnCalculatorInstance is empty";
  this.array.push(
    this.array.reduce((a, b) => {
      return a + b;
    })
  );
  console.log(this.array);
};

RPNCalculator.prototype.minus = function () {
  if (!this.array.length) throw "rpnCalculatorInstance is empty";
  this.array.push(
    this.array.reduce((a, b) => {
      return a - b;
    })
  );
  console.log(this.array);
};

RPNCalculator.prototype.times = function () {
  if (!this.array.length) throw "rpnCalculatorInstance is empty";
  this.array.push(
    this.array.reduce((a, b) => {
      return a * b;
    })
  );
  console.log(this.array);
};

RPNCalculator.prototype.divide = function () {
  if (!this.array.length) throw "rpnCalculatorInstance is empty";
  this.array.push(
    this.array.reduce((a, b) => {
      return a / b;
    })
  );
  console.log(this.array);
};

RPNCalculator.prototype.value = function () {
  this.array = [this.array[this.array.length - 1]];
  return this.array[0];
};

/* eslint-disable no-unused-vars, no-throw-literal*/
function RPNCalculator() {
  this.total = 0;
  this.myArr = [];

  //CONSTUCTOR METHOD
  //   //   this.value = () => {
  //   //     return this.total;
  //   //   };
  //   //   this.push = (num) => {
  //   //     myArr.push(num);
  //   //   };

  //   this.minus = () => {
  //     if (this.myArr.length >= 2) {
  //       let num1 = this.myArr.pop();
  //       let num2 = this.myArr.pop();
  //       this.total = num2 - num1;
  //       this.myArr.push(this.total);
  //     } else throw "rpnCalculatorInstance is empty";
  //   };

  //   this.times = () => {
  //     if (this.myArr.length >= 2) {
  //       let num1 = this.myArr.pop();
  //       let num2 = this.myArr.pop();
  //       this.total = num2 * num1;
  //       this.myArr.push(this.total);
  //     } else throw "rpnCalculatorInstance is empty";
  //   };
  //   this.divide = () => {
  //     if (this.myArr.length >= 2) {
  //       let num1 = this.myArr.pop();
  //       let num2 = this.myArr.pop();
  //       this.total = num2 / num1;
  //       this.myArr.push(this.total);
  //     } else throw "rpnCalculatorInstance is empty";
  //   };
}

RPNCalculator.prototype.push = function (num) {
  this.myArr.push(num);
};

RPNCalculator.prototype.value = function () {
  return this.total;
};

RPNCalculator.prototype.plus = function () {
  if (this.myArr.length >= 2) {
    let num1 = this.myArr.pop();
    let num2 = this.myArr.pop();
    this.total = num2 + num1;
    this.myArr.push(this.total);
  } else {
    throw "rpnCalculatorInstance is empty";
  }
};

RPNCalculator.prototype.minus = function () {
  if (this.myArr.length >= 2) {
    let num1 = this.myArr.pop();
    let num2 = this.myArr.pop();
    this.total = num2 - num1;
    this.myArr.push(this.total);
  } else {
    throw "rpnCalculatorInstance is empty";
  }
};

RPNCalculator.prototype.times = function () {
  if (this.myArr.length >= 2) {
    let num1 = this.myArr.pop();
    let num2 = this.myArr.pop();
    this.total = num2 * num1;
    this.myArr.push(this.total);
  } else {
    throw "rpnCalculatorInstance is empty";
  }
};

RPNCalculator.prototype.divide = function () {
  if (this.myArr.length >= 2) {
    let num1 = this.myArr.pop();
    let num2 = this.myArr.pop();
    this.total = num2 / num1;
    this.myArr.push(this.total);
  } else {
    throw "rpnCalculatorInstance is empty";
  }
};

/* eslint-disable no-unused-vars */

function createCalculator() {
  let calculator = {};
  calculator.val = 0;
  calculator.value = function () {
    return this.val;
  };
  calculator.add = function (num) {
    this.val += num;
    return this.val;
  };
  calculator.subtract = function (num) {
    this.val -= num;
    return this.val;
  };

  calculator.clear = function () {
    this.val = 0;
  };

  return calculator;
}

function addSquareMethod(arrayOfCalculatorInstances) {
  return arrayOfCalculatorInstances.map((n) => {
    n.square = function () {
      return this.val * this.val;
    };
    return n;
  });
}

function createHumanCalculator() {
  let calculator = {
    total: -10,
    value: function () {
      return this.total;
    },
    add: function (num) {
      this.total += num;
      return this.total;
    },
    subtract: function (num) {
      this.total -= num;
      return this.total;
    },
    clear: function () {
      this.total = -10;
    },
  };

  humanCalculator = Object.create(calculator);
  return humanCalculator;
}

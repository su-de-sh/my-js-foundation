/* eslint-disable no-unused-vars */

function concatString() {
  let myStr = "";
  array = Array.from(arguments);
  array.forEach((element) => {
    myStr += element;
  });
  return myStr;
}

function yourFunctionRunner() {
  let myStr = "";
  let func = Array.from(arguments);
  func.forEach((element) => {
    myStr += element();
  });
  return myStr;
}

//makeAdder

function makeAdder(num) {
  function innerAdder(num1) {
    return num + num1;
  }

  return innerAdder;
}

//Once

function once(func) {
  let count = 0;
  function anotherFunc() {
    count++;
    if (count > 1) return "the function has already been called...";
    else return func();
  }

  return anotherFunc;
}

function createObjectWithClosures() {
  let number = 0;
  const obj = {
    oneIncrementer() {
      number += 1;
    },
    tensIncrementer() {
      number += 10;
    },
    getValue() {
      return number;
    },
    setValue(num = 0) {
      number = num;
      return number;
    },
  };

  return obj;
}

function dontSpillTheBeans(msg) {
  const obj = {
    getSecret() {
      return msg;
    },
    setSecret(secretMsg) {
      msg = secretMsg;
    },
  };
  return obj;
}

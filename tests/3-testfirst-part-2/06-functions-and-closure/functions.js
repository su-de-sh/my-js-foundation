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

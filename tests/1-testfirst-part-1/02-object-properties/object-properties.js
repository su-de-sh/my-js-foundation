/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = function (arg) {
    return arg + 1;
  };
}

function setPropsOnArr(arrayObject) {
  arrayObject.hello = function () {
    return "Hello!";
  };
  arrayObject.full = "stack";
  arrayObject.twoTimes = function (arg) {
    return arg * 2;
  };
}

function setPropsOnFunc(functionObject) {
  functionObject.year = "20??";
  functionObject.divideByTwo = function (arg) {
    return arg / 2;
  };
}

function shallowCopy(arg1, arg2) {
  if (Array.isArray(arg1)) {
    return [...arg1, ...arg2];
  } else return { ...arg1, ...arg2 };
}

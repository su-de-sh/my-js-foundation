/* eslint-disable no-unused-vars */
function repeat(word, count) {
  let newWord = "";
  for (let i = 0; i < count; i++) {
    newWord += word;
  }

  return newWord;
}

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function join(array, delimiter = "") {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += array[i] + delimiter;
  }
  if (delimiter) return newString.slice(0, -1);
  else return newString;
}

function gridGenerator(num = 0) {
  let newString = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          newString += "#";
        }
        if (j % 2 === 1) {
          newString += " ";
        }
      } else {
        if (j % 2 === 1) {
          newString += "#";
        }
        if (j % 2 === 0) {
          newString += " ";
        }
      }
    }
    newString += "\n";
  }

  return newString;
}

function paramify(obj) {
  let newStr = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys)) {
      newStr.push(`${keys}=${obj[keys]}`);
    }
  }
  return newStr.sort().join("&");
}

function paramifyObjectKeys(obj) {
  let newStr = [];
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      newStr.push(`${key}=${obj[key]}`);
    });

  //   for (let keys in obj) {
  //     if (obj.hasOwnProperty(keys)) {
  //       newStr.push(`${keys}=${obj[keys]}`);
  //     }
  return newStr.sort().join("&");
}

const sort = (args) => {
  for (let i = args.length - 1; i >= 0; i--) {
    for (let j = args.length - i; j > 0; j--) {
      if (args[j] < args[j - 1]) {
        let tmp = args[j];
        args[j] = args[j - 1];
        args[j - 1] = tmp;
      }
    }
  }
  return args;
};

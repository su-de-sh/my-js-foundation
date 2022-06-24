/* eslint-disable no-unused-vars */

forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// map

map = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
};

// filter

filter = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) newArr.push(array[i]);
  }
  return newArr;
};

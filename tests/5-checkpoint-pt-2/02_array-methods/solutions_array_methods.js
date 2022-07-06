/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  return str.split(" ").map((element) => {
    return element.toUpperCase();
  });
}

function useFilter(array) {
  return array.filter((element) => {
    return element.match("@");
  });
}

function sumWithReduce(array, startingVal = 0) {
  return array.reduce((a, b) => {
    return a + b;
  }, startingVal);
}

function filterEvensDoubleAndSum(array) {
  return array
    .filter((element) => {
      return element % 2 === 0;
    })
    .map((element) => {
      return element * 2;
    })
    .reduce((a, b) => {
      return a + b;
    });
}

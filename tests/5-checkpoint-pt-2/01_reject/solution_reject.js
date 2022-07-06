/* eslint-disable no-unused-vars */
function reject(arrayOfNumbers, isNegNum) {
  return arrayOfNumbers.filter((element) => {
    if (!isNegNum(element)) {
      return element;
    }
  });
}

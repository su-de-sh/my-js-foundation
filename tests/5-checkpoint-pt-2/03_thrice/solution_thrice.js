/* eslint-disable no-unused-vars */
function thrice(callback) {
  let count = 0;
  function callback1() {
    count++;
    if (count > 3) return undefined;
    else {
      return callback();
    }
  }
  return callback1;
}

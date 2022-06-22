/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(obj) {
  let myStr = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys)) {
      myStr.push(keys);
    }
  }
  return myStr.join(", ");
}

function findObjKeys(obj) {
  let myStr = [];
  Object.keys(obj).forEach((n) => {
    myStr.push(n);
  });

  return myStr.join(", ");
}

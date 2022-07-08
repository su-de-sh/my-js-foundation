/* eslint-disable no-unused-vars */

function multipleMaps(array, mapArray) {
  return array.map((element) => {
    for (let i of mapArray) {
      if (i[element] !== undefined) {
        return i[element];
        break;
      }
    }
  });
}

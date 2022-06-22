/* eslint-disable no-unused-vars */
function multiplicationTable(rows, columns) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let intArr = [];
    for (let j = 0; j < columns; j++) {
      intArr.push((i + 1) * (j + 1));
    }
    matrix.push(intArr);
  }
  return matrix;
}

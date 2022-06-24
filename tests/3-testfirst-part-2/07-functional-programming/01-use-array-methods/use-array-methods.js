/* eslint-disable no-unused-vars */

function indexAndValue(array) {
  return array.map((n, i) => {
    return { index: i, value: n };
  });
}

function capitalize(string) {
  return string.toUpperCase();
}
function swapCase(sentence) {
  return sentence
    .split(" ")
    .map((n, i) => {
      if (i % 2 === 0) {
        return capitalize(n);
      } else return n;
    })
    .join(" ");
}

function extensionSearch(text, array) {
  return array.filter((n) => {
    return n.match(text);
  });
}

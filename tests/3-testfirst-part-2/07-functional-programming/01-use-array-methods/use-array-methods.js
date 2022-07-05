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

function getPopulation(arrayOfCountries, myCountry) {
  if (myCountry.length === 0) {
    return arrayOfCountries.reduce((a, b) => {
      return a + b.population;
    }, 0);
  } else
    return arrayOfCountries
      .filter((n) => {
        return myCountry.includes(n.name);
      })
      .reduce((a, b) => {
        return a + b.population;
      }, 0);
}

function keyifyArrayOfObjects(key, array) {
  let myObject = {};
  array.forEach((n) => {
    myObject[n[key]] = n;
  });
  console.log(myObject);
  return myObject;
}

// console.log(
//   keyifyArrayOfObjects("alias", [
//     { name: "joe", alias: "joe" },
//     { name: "joe", alias: "joe" },
//   ])
// );

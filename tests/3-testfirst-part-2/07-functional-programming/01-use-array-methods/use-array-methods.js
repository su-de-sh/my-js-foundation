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
  return array.reduce((a, b) => {
    a[b[key]] = b;
    return a;
  }, {});
}

function powerLevelAverage(array) {
  return Math.floor(
    array.reduce((a, b) => {
      return a + b.powerLevel;
    }, 0) / array.length
  );
}

// function mapReduce(array, callback) {
//   return array.reduce((a, b) => {
//     return a + callback(b);
//   }, 0);
// }

function mapReduce(array, callback) {
  return array.reduce((a, b) => {
    a.push(callback(b));
    return a;
  }, []);
}

function filterReduce(array, callback) {
  return array.reduce((a, b) => {
    if (callback(b)) a.push(b);
    return a;
  }, []);
}

function inYourBudget(budget, array) {
  return array
    .filter((element) => {
      return element.price <= budget;
      inYourBudget;
    })
    .map((element) => {
      return element.item;
    });
}

function separateAndReturnNames(array, name, len) {
  array.map((element) => {
    element.firstName = element.name.split(" ")[0];
    element.lastName = element.name.split(" ")[1];
  });

  return array
    .filter((element) => {
      return element[name].length <= len;
    })
    .map((element) => {
      return element[name];
    });
}

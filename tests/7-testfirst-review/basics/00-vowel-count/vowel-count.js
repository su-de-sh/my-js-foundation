/* eslint-disable no-unused-vars */

function vowelsCount(string) {
  const map = { a: 0, e: 0, i: 0, o: 0, u: 0, total: 0 };
  if (!string) return map;
  return string
    .toLowerCase()
    .split("")
    .reduce((a, b) => {
      if (b === "a") a.a++, a.total++;
      if (b === "e") a.e++, a.total++;
      if (b === "i") a.i++, a.total++;
      if (b === "o") a.o++, a.total++;
      if (b === "u") a.u++, a.total++;

      return a;
    }, map);
}

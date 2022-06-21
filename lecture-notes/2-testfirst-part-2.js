/**
 * Array.reduce
 * example: array.reduce(combinerFunction, startVale)
 *
 * combinerFunction: the function to run to combine the values
 * startVal (optional): initial value
 * returns: the final value after running the combinerFunction
 *      through all elements of array
 */

let a = [1, 2, 3, 4];
console.log(a.reduce((val, x) => val + x));
console.log(a.reduce((val, x) => val + x, 20));

function interleave() {
  let count = 0;
  let args = Array.from(arguments);
  let myStr = "";
  let max = maxChar(args);
  for (let i = 0; i < max; i++) {
    let currStr = args[i];
    for (let j = 0; j < args.length; j++) {
      let currStr = args[j][i];
      if (!currStr) continue;
      myStr += currStr;
    }
  }
  return myStr;
}

// function that returns max num of characters in an array of strings
function maxChar(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
}

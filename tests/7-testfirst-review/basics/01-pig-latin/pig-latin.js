/* eslint-disable no-unused-vars */
function pigify(mystr) {
  const vowel = "aeiou";
  const myStrArray = [];
  debugger;
  mystr.split(" ").forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "q" && str[i + 1] === "u") {
        i++;
        continue;
      }
      if (vowel.includes(str[i])) {
        myStrArray.push(
          str.slice(str.indexOf(str[i]), str.length) +
            str.slice(0, str.indexOf(str[i])) +
            "ay"
        );
        break;
      }
    }
  });

  return myStrArray.join(" ");
}

pigify("apple");

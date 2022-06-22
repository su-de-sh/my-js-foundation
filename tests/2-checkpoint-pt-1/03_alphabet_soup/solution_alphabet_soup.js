/* eslint-disable no-unused-vars, no-prototype-builtins */
const soup = (phrase, bank) => {
  if (bank.length < phrase.length) return false;
  bank = bank.split("");

  let fileterdPhrase = phrase.split("").filter((n, i) => {
    return bank.includes(n);
  });
  return fileterdPhrase.length === phrase.length ? true : false;
};

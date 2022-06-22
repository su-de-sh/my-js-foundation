/* eslint-disable no-unused-vars */
const name = "Cody";
const loud = "loud";

const dog = {
  name: name,
  bark(sound = "ruff ruff!") {
    return sound;
  },
  loudBark() {
    return "RUFF RUFF!";
  },
};
let loudBark = dog.bark;
dog["loudBark"](loud);

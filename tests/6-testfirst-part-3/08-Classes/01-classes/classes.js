/* eslint-disable no-unused-vars */
class Mammal {
  constructor(name) {
    this.name = name;
    this.offspring = [];
  }
}

Mammal.prototype.sayHello = function () {
  return `My name is ${this.name}, I'm a ${this.constructor.name}`;
};

Mammal.prototype.haveBaby = function () {
  const child = new Mammal(`Baby ${this.name}`);
  this.offspring.push(child);
  return child;
};

class Cat extends Mammal {
  constructor(name, color) {
    super(name);

    this.color = color;
  }
}

Cat.prototype.meow = function () {
  return "meow";
};

Cat.prototype.haveBaby = function (color) {
  const child = new Cat(`Baby ${this.name}`, color);
  this.offspring.push(child);
  return child;
};

class Dog extends Mammal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
Dog.prototype.bark = function () {
  return `RUFF RUFF`;
};

Dog.prototype.haveBaby = function (breed) {
  const child = new Dog(`Baby ${this.name}`, breed);
  this.offspring.push(child);
  return child;
};

/* eslint-disable no-unused-vars, no-throw-literal*/

function Pokemon(name, health, attackBonus) {
  (this.name = name), (this.health = health), (this.attackBonus = attackBonus);
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  return this.health > 1 ? false : true;
};

function simulateBattle(pokemon1, pokemon2, name) {
  while (true) {
    if (name === pokemon1.name) {
      let totalValueOfAttack = pokemon1.biteAttack();
      pokemon2.health -= totalValueOfAttack;
      if (pokemon2.isDefeated()) return `${pokemon1.name} Wins!`;
      name = pokemon2.name;
    }
    if (name === pokemon2.name) {
      let totalValueOfAttack = pokemon2.biteAttack();
      pokemon1.health -= totalValueOfAttack;
      if (pokemon1.isDefeated()) return `${pokemon2.name} Wins!`;
      name = pokemon1.name;
    }
  }
}

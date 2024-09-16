/*



*/
"use strict";

const car = {
  brand: `Mini`,
  model: `Countryman`,
  year: 2023,
  displayInfo() {
    return `Car brand: ${this.brand}, car model: ${this.model}, car year: ${this.year}`;
  },
};

console.log(car.displayInfo());

const camry = Object.create(car);
camry.brand = `Toyota`;
camry.model = `Camry`;
camry.year = 2020;

console.log(camry.displayInfo());

const mustang = Object.create(car);

mustang.brand = `Ford`;
mustang.model = `Mustang`;
mustang.year = 2015;

console.log(mustang.displayInfo());

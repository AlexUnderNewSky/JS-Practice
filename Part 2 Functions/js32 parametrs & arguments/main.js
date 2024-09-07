function greet(name, surName) {
  console.log(`${name} - ${surName}`);
}

greet(`Сергей`, `Сосницкий`);

console.log(`====================`);

function greet1(name = `Enter your name`, surName = `Enter your surname`) {
  console.log(name);
  console.log(surName);
}

greet1(`John`, `Malkovich`);

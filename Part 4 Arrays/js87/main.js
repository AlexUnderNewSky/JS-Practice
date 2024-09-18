/*



*/
"use strict";

const str = `Far far away, bro`;

console.log(str.indexOf(`F`));

const name = `Serhii`;
const greetings = `Hello ${name}`;

console.log(greetings);

console.log(`==============`);

const reverseStr = (str) => str.split(``).reverse().join(``);

console.log(reverseStr(`Hello`));

console.log(`=============`);

function lg1(str) {
  const words = str.split(" ");
  let maxWords = 0;
  for (let word of words) {
    if (word.length > maxWords) {
      maxWords = word.length;
    }
  }
  return maxWords;
}

console.log(
  lg1(
    "Wikis are powered by wiki software, also known as wiki engines. Being a form of content management system, these differ from other web-based systems such as blog software or static site generators in that the content is created without any defined owner or leader."
  )
);

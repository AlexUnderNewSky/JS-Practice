/*



*/
"use strict";

const words = [`Rare`, `Mythic`, `Ancient`, `Common`];

function wordsFn(array) {
  return array.reduce((acc, words) => acc + ` ` + words);
}

const combinedWords = wordsFn(words);

console.log(combinedWords);

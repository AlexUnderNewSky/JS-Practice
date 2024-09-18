/*



*/
"use strict";

const str1 = `Once upon a time.`;

const str2 = `Once upon a year. !`;

const str3 = str1 + ` ` + str2;
console.log(str3);

console.log(`==============`);

const str4 = `Once upon a time`;
console.log(str4.length);

console.log(`=============`);

const strOne = `Lorem, ipsum!`;

const firstChar = strOne[0];
const lastChar = strOne[strOne.length - 1];
console.log(firstChar);
console.log(lastChar);

console.log(`==============`);

const strHello = `Hello World!`;
const charStr = strHello.split(` `);

console.log(charStr);

charStr.push(`!!!!!!!!!!!`);

console.log(charStr);

const newStr = charStr.join(``);
console.log(newStr);

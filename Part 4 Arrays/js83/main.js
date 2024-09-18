/*



*/
"use strict";

const str = `Hello World`;

const arr = str.split(` `);
console.log(str);
console.log(arr);

const str1 = `apple,banana,kiwi`;

const arr2 = str1.split(`,`);
console.log(arr2);

console.log(`===========`);

const str3 = `apple,banana,kiwi`;

const arr3 = str3.split(`,`, 2);
console.log(arr3);

console.log(`==============`);

const str4 = `JavaScript`;

const arr4 = str4.split(``);

console.log(arr4);
console.log(arr4[5]);

console.log(`============`);

const arrStr = [`apple`, `banana`, `kiwi`];

const strA = arrStr.join(` `);
console.log(strA);

console.log(`==============`);

const js = `JavaScript`;

console.log(js);

const jsArr = js.split(``);

console.log(jsArr);

const jsJoin = jsArr.join(``);
console.log(jsJoin);

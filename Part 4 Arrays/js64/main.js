/*



*/
"use strict";

const arr1 = [1, 2];

arr1.push(true);
arr1.push(10, 20, undefined, null);
console.log(arr1);
console.log(arr1.length);
// while (arr1.length >= 1) {
//   if (arr1.length > 4 || arr1.length < 2) {
//     console.log(`Я сосал меня ебали ${arr1.length} раз`);
//   } else {
//     console.log(`Я сосал меня ебали ${arr1.length} раза`);
//   }
//   arr1.pop();
// }

arr1.unshift(22);
console.log(arr1);
arr1.shift();
console.log(arr1);

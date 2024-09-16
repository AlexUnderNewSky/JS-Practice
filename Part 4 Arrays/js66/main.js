/*



*/
"use strict";

// const removeItem = arr4.splice(2, 2);

// console.log(arr4);

// console.log(removeItem);
/* ФИЛЬТРАЦИЯ МАССИВА ОТ НЕЧЁТНЫХ ЧИСЕЛ */
// const arr1 = [1, 2, 3, 4, 5, 22, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     if (element % 2 == 0) {
//         console.log(`Even`);
//     }else{
//         delete arr1[i];
//     }
// }
// console.log(arr1);
// let filteredArr = arr1.filter(num => Number.isFinite(num) && num % 2 === 0);
// arr1.splice(0, arr1.length, ...filteredArr);

// console.log(arr1);

// const arr1 = [1, 2, 3, 4, 5];

// const removeItem1 = arr1.splice(1, 0);

// console.log(arr1);
// console.log(removeItem1);

const arr1 = [1, 2, 3, 4];

const a1 = arr1.toSpliced(1, 1, undefined);

console.log(arr1);
console.log(a1);

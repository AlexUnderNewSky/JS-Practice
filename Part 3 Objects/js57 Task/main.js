/*



*/
"use strict";

const student = [
  {
    name: `Pasha`,
    age: 19,
    university: `ZETK ZNTU`,
    major: `Software development`,
  },
  {
    name: `Zheka`,
    age: 21,
    university: `Politeh`,
    major: `Shofer`,
  },
  {
    name: `Grisha`,
    age: 22,
    university: `Morskoy`,
    major: `Starpom`,
  },
];
let i = 0;
function printStudentInfo(student) {
  for (const { name, age, university, major } of student) {
    i++;
    console.log(
      `${i} | Student ${name} is ${age} years old, his university - ${university}, and his major - ${major}`
    );
  }
  
}

printStudentInfo(student);

/*



*/
"use strict";

const students = [
  { id: 1, name: `Bob`, subjects: [`JavaScript`, `TypeScript`] },
  { id: 2, name: `Serhii`, subjects: [`JavaScript`, `Java`, `C#`, `C++`] },
  { id: 3, name: `Xristo`, subjects: [`Ruby`, `PHP`] },
];

const studentName = students.find((name) => {
  if (name.name === `Serhii` && name.subjects.includes(`C#`)) {
    return name;
  }
});
console.log(studentName);

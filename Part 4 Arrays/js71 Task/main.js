/*



*/
"use strict";

const users = [
  { id: 1, userName: "Nikolai", isActive: true },
  { id: 2, userName: "Grigory", isActive: false },
  { id: 3, userName: "Serhii", isActive: true },
  { id: 4, userName: "Maria", isActive: true },
  { id: 5, userName: "Oksana", isActive: false },
  { id: 6, userName: "Jacob", isActive: false },
  { id: 7, userName: "Rico", isActive: true },
];

const activeUsers = users.filter((active) => active.isActive === true);

console.log(activeUsers);

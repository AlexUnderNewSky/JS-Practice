/*



*/

let global = `I am global variable`;

function myFunction() {
  let global = `Hi`;
  console.log(global);
}

myFunction();
console.log(global);
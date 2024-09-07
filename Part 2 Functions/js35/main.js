/*



*/
function arg() {
  console.log(arguments);
}

arg();

arg(1, 2, 3);

function fn21() {
  console.log(`Hello`);
}

fn21();

console.log(`============`);

function count() {
  let a = "IDI NAHUI!"
  console.log(arguments.length);
}

count(1, "hello", 10, 20);

console.log(`============`);
let nums = '33';

console.log(nums.length);

console.log(`============`);

let nums1 = '332';

let arr = [1, 2, 3, true];

console.log(arr.length);
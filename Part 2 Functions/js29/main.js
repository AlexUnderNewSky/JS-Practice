function greet() {
  console.log(`Hi buddy!`);
}

function fn1() {
  const a = 5;
  console.log(a);
}

function fn2() {
  const a1 = 10;
  let a2 = 50;
  console.log(a1 + a2);
}

function fn3() {
  const myName = "Bob";
  console.log(`Hi, ${myName}`);
}

function fn4() {
  let a = 100;
  let b = 199;
  if (a > b) {
    console.log(`Variable a is bigger than variable b by ${a - b}`);
  }else if(b > a){
    console.log(`Variable b is bigger than variable a by ${b - a}`);
  }
}
greet();
console.log(`===========`);
fn1();
console.log(`===========`);
fn2();
console.log(`===========`);
fn3();
console.log(`===========`);
fn4();

/*



*/
function fn19(a1, a2, a3) {
  document.querySelector(a1).textContent = "hello";
  console.log(a2 + a3);
}

fn19('h1', 20, 20);

function fn20(a1, a = 20) {
  console.log(a + a1);
}
fn20(2);

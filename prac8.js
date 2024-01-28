let a = Math.random(1, 10);

let b = +prompt("nhap vao so b: ");

if (a < b) {
  console.log("so lon hơn");
}
if (a > b) {
  console.log("so be hơn");
}
while (a !== b) {
  let b = +prompt("nhap vao so b: ");
}

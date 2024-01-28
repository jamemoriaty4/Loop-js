let a = +prompt("nhap vao so a: ");
let b = +prompt("nhap vao so b: ");

for (let i = 1; i <= a; i++) {
  if (i % b == 0) {
    console.log(i);
  }
}

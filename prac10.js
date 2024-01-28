let a = +prompt("nhap vao so a: ");

let n1 = 0;
let n2 = 1;
let n3 = n1 + n2;
let fibo = " ";

for (let i = 0; i <= a; i++) {
  n1 = n2;
  n2 = n3;
  n3 = n1 + n2;

  if (n3 < a) {
    fibo = fibo + n1 + " ";
  }
}
console.log("Dayfibo", fibo);

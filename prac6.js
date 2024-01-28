let a = +prompt("nhap vao so a: ");
let count = 0;
for (let i = 0; i <= a / 2; i++) {
  if (a % i == 0) {
    count += i;
  }
}

if (count === a) {
  console.log(a + " la so hoan hảo");
} else console.log(a + "khong la so hoan hao");

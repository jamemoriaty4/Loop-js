let a = +prompt("nhap vao so nguyen duong a: ");

while (a < 0) {
  let a = +prompt("nhap lai so nguyen duong a: ");
}

function isPrime(b) {
  if (b < 2) {
    return false;
  } else
    for (i = 2; i <= Math.sqrt(b); i++) {
      if (b % i === 0) {
        return false;
      }
    }
  return true;
}

for (let i = 0; i <= a; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

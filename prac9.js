let a = +prompt("nhap vao so a: ");

for (let i = 1; i <= a; i++) {
  for (let j = 1; j <= a; j++) {
    console.log("");
  }

  for (let k = 0; k < 2 * i + 1; k++) {
    console.log("*");
  }
}

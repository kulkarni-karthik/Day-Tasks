//Inverse of right-angle triangle

let n = 5;

for (let i = 1; i <= n; i++) {
  let star = "";
  for (let j = i; j < n; j++) {
    star += " ";
  }
  for (let k = 1; k <= i; k++) {
    star += "*";
  }
  console.log(star);
}

// Pyramid Pattern

let m = 5;

for (let i = 1; i <= m; i++) {
  let pyramid = "";
  for (let j = i; j < m; j++) {
    pyramid += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pyramid += "*";
  }
  console.log(pyramid);
}

// Display all products

let colors = ["Red", "Green", "Blue"];
let sizes = ["S", "M", "L"];

let output = [];

for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < sizes.length; j++) {
    output.push(`${colors[i]}-${sizes[j]}`);
  }
}

console.log(output.join(","));

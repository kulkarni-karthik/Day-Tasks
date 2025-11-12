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
let sizes = ["Small", "Medium", "Large"];

for (let color of colors) {
  for (let size of sizes) {
  }
}
console.log("${colors[0]}=${sizes[0]}");
console.log("${colors[0]}=${sizes[1]}");
console.log("${colors[0]}=${sizes[2]}");
console.log("${colors[1]}=${sizes[0]}");
console.log("${colors[1]}=${sizes[1]}");
console.log("${colors[1]}=${sizes[2]}");
console.log("${colors[2]}=${sizes[0]}");
console.log("${colors[2]}=${sizes[1]}");
console.log("${colors[2]}=${sizes[2]}");

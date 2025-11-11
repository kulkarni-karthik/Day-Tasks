// Checking Stock Availability until stock runout

let stock = 10;

for (let i = stock; i > 0; i--) {
  console.log("Remaining Stock: " , (i - 1));
}
console.log("Stock Finished");

// Sum of Numbers from 1-20

let sum = 0;

for (let i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log("Sum of numbers from 1-20: ",  sum);

// Reverse countdown from 1-10

let n = 10;

while (n >= 1) {
  console.log(n);
  n--;
}

// Sum of even numbers from 1-50

let total = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    total = total + i;
  }
}

console.log("Sum of even numbers from 1 to 50:", total);
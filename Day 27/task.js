// all arthematic operation using functions

//addition

function add(a, b) {
  return a + b;
}
let Output = add(23, 26);
console.log(Output);

//subtraction

function sub(a, b) {
  return a - b;
}
let out = sub(23, 26);
console.log(out);

//multliplication

function mul(a, b) {
  return a * b;
}
let put = mul(23, 26);
console.log(put);

//division

function div(a, b) {
  return a / b;
}
let outputs = div(23, 26);
console.log(outputs);

//	Calculate total cart value
//  Hint: parameter we need to pass array [199, 299, 499]
//  Discount (10%)

function adds(a, b, c) {
  return a + b + c;
}
let result = adds(199, 299, 499);
console.log(result);

let Discount = (result / 100) * 10;
let Amountpaid = result - Discount;
console.log("final value =", Amountpaid);

// convert celsius to fahrenheit

function celsiustofahrenheit(celsius) {
  fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
}

function fahrenheittocelsius(fahrenheit) {
  celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
}

console.log(celsiustofahrenheit(23));
console.log(fahrenheittocelsius(26));

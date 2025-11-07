// Task 1:Shopping Cart
// -> We have item1,item2 and discount(Thse are the inputs)
// -> Output should be final price after discount

let item1 = 23;
let item2 = 26;
const discount = 30;

let total = item1 + item2;
let finalPrice = total * (1 - discount / 100);

console.log("Final Price after discount:" + finalPrice);

// Task-2: Age and Country check
// ->Input will be age and country, we are allowing the age more than 18 and countries India and USA

let country1 = "India";
let country2 = "USA";
let Age = 26;


if(Age >= 18 && (country1 == "India" || country2 == "USA")){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}
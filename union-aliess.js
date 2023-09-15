"use strict";
function combine(n1, n2, reslutConversion) {
    let result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        reslutConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if (reslutConversion === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
let u1 = { name: "Max" };
u1 = "Michael";
console.log(u1);
const p1 = { title: "A Book", price: 12.99, isListed: true };
console.log(p1);
const koji = {
    name: "koji",
    age: 58,
};
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
greet(koji);
console.log(isOlder(koji, 50));
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);

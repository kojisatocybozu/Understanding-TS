type Combinable = number | string;
type ComversionDescriptor = "as-number" | "as-text" | "as-string";

function combine(
  n1: Combinable,
  n2: Combinable,
  reslutConversion: ComversionDescriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    reslutConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
  // if (reslutConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

type Users = { name: string } | string;
let u1: Users = { name: "Max" };
u1 = "Michael";

console.log(u1);

type Product = { title: string; price: number; isListed: boolean };
const p1: Product = { title: "A Book", price: 12.99, isListed: true };

console.log(p1);

type User = { name: string; age: number };
const koji: User = {
  name: "koji",
  age: 58,
};

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}
function isOlder(user: User, checkAge: number) {
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

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // Tuple型の定義
// } = {
//   name: "yota",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// 部フォルトでは内部的なIDが振られるが、明示的に指定も可能
enum Role {
  ADMIN = 0,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "yota",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
}; //

if (person.role === Role.ADMIN) {
  console.log("管理者");
}

// TSの型推論により、コンパイル前にエラーが表示される
// console.log(person.nickname);
// Object 型定義のままだと、これでもエラーになる
// console.log(person.name);
// 以下のように、型定義を行うことにより、
// const person: {
//  name: string;
//  age: number;
//}

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [];　　// error
// person.role = [0, "admin", "user"]  // error
// person.role = [0, "admin"];

console.log(person);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

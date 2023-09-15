// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "yota",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "authoer"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = 5,
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "yota",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];

let favoriteActivities: any[];
favoriteActivities = ["sports", "instlements", "reading book"];

console.log(person.hobbies[0]);

if (person.role === Role.ADMIN) {
  console.log("管理者ユーザー");
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }
}

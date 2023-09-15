"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yota",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];
let favoriteActivities;
favoriteActivities = ["sports", "instlements", "reading book"];
console.log(person.hobbies[0]);
if (person.role === Role.ADMIN) {
    console.log("管理者ユーザー");
    for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
    }
}

{
  //
  // type-guard-->>
  //   typeof as a type quard-->>
  type Alphanumeric = string | number;
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add("500", "3");
  const result2 = add(200, 4);
  console.log(result2, result1);

  //   in Guard
  type normalUser = {
    name: string;
  };
  type adminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: normalUser | adminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  const normalUser: normalUser = {
    name: "shihab",
  };
  const adminUser: adminUser = {
    name: "sk shihab",
    role: "admin",
  };

  getUser(adminUser);
  //
}

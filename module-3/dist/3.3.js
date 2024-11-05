"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add("500", "3");
    const result2 = add(200, 4);
    console.log(result2, result1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`my name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "shihab",
    };
    const adminUser = {
        name: "sk shihab",
        role: "admin",
    };
    getUser(adminUser);
    //
}

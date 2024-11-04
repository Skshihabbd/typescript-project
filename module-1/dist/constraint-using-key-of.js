"use strict";
{
    const person1 = "car";
    const user = {
        name: "Mr.shihab",
        age: 27,
        address: "bagerhat",
    };
    //   console.log(user["address"]);
    const getPeopertyValue = (obj, key) => {
        return obj[key];
    };
    const user1 = {
        name: "Mr.shihab",
        age: 27,
        address: "bagerhat",
    };
    const argument = getPeopertyValue(user1, "address");
    console.log(argument);
    //
}

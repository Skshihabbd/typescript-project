"use strict";
var _a, _b;
{
    // ternary operator ||optional chaining || nullish coalescing
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //   ternary
    const isAdult = age >= 18 ? "adult" : "not Adult";
    //   console.log({ isAdult });
    //   nullish coalescing operator-->> depend on null and undefined
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "shihab",
        address: {
            city: "khulna",
            road: "moylapota",
            presentAddress: "bagerhat",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent adress";
    console.log({ permanentAddress });
}

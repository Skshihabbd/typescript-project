"use strict";
{
    // Type asertion and Type narrowing if declare better type than typescript this is type assertion
    //  type assertion
    let anything;
    anything = "Next level web development";
    anything = 1234;
    anything;
    const kgTogm = (value) => {
        if (typeof value === "string") {
            console.log(typeof value);
            const a = parseFloat(value);
            console.log(a);
            const convertedNumber = parseInt(value) * 1000;
            console.log(typeof convertedNumber);
            return `the converted number is : ${typeof convertedNumber}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgTogm(1.55);
    const result2 = kgTogm("1.55");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}

"use strict";
// function type
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
//return also a number ():number
// in a function in object this function called is method
const poorUser = {
    name: "shihab",
    balance: 0,
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    },
};
const arr = [1, 5, 8];
const newArray = arr.map((elem) => elem * elem);

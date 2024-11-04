// function type
function add(num1: number, num2: number) {
  return num1 + num2;
}
add(2, 2);
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

//return also a number ():number

// in a function in object this function called is method
const poorUser = {
  name: "shihab",
  balance: 0,
  addBalance(balance: number): string {
    return `my new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 5, 8];
const newArray: number[] = arr.map((elem: number): number => elem * elem);

{
  //
  // interface type
  type User1 = {
    name: string;
    age: number;
  };
  type rollNumber = number;

  type UserwithRole1 = User1 & { role: string };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserwithRole2 extends User1 {
    role: string;
  }
  const user1: UserwithRole2 = {
    name: "shihab",
    age: 27,
    role: "manager",
  };
  const user2: UserwithRole1 = {
    name: "shihab",
    age: 27,
    role: "manager",
  };

  // interface uses for Array
  type Roll1 = number[];
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll1 = [1, 4, 7];
  const rollNumber2: Roll2 = [1, 4, 7];

  // function interface type

  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const Add: Add2 = (num1, num2) => num1 + num2;
  const call = Add(3, 5);
  //
}

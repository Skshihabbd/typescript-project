{
  //
  //type alias
  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "shihab",
    age: 10,
    gender: "male",
    address: "bagerhat",
  };
  const student2: Student = {
    name: "bidyut",
    age: 15,
    gender: "male",
    address: "rajshahi",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const user: UserName = "persian";
  const asAdmin: IsAdmin = true;

  //   type Alis in function

  type add = (num1: number, num2: number) => number;
  const Add: add = (num1, num2) => num1 + num2;
  //
}

{
  //
  // generics constraint with keyof operator

  type Vahicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vahicle; //automatically using keyof
  const person1: Owner2 = "car";

  const user = {
    name: "Mr.shihab",
    age: 27,
    address: "bagerhat",
  };
  //   console.log(user["address"]);

  const getPeopertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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

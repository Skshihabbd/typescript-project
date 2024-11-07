{
  //problem-8
  //Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  // Sample Input:
  // const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));

  // Sample Output:
  // true;

  type genericDynamic<Y> = Array<Y>;

  const roolNumber: genericDynamic<number> = [1, 3, 4, 5, 6, 7];

  type genericTuple<X, Y> = [X, Y];

  const manush: genericTuple<string, string> = ["mr. x", "mr. y"];
  //
}

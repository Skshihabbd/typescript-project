{
  // generics type
  type GenericArray<T> = Array<T>; // -->> T means Type that push as a params
  //   const rollNumbers: number[] = [1, 3, 4, 5];
  const rollNumbers1: Array<number> = [1, 3, 4, 5];
  //   same when make  this dynamic type insertion using generic
  const rollNumbers: GenericArray<number> = [1, 3, 4, 5];

  //   const mentors: string[] = ["mr x", "mr y"];
  const mentors1: Array<string> = ["mr x", "mr y"];
  const mentors: GenericArray<string> = ["mr x", "mr y"];
  //   const booArray: boolean[] = [true, false, true];
  const booArray1: Array<boolean> = [true, false, true];
  const booArray: GenericArray<boolean> = [true, false, true];

  //   make Array of using Generics
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "shihab",
      age: 110,
    },
    {
      name: "karim",
      age: 115,
    },
  ];
  // generics tuple dynamic
  type GenericsTuple<X, Y> = [X, Y];
  // generics tuple dynamic
  const manush: GenericsTuple<string, number> = ["Mr. x", 5];

  const UserWithID: GenericsTuple<number, { name: string; email: string }> = [
    1234,
    { name: "shihab", email: "skshihab170@gmail.com" },
  ];
}

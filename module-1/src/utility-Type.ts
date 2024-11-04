{
  //
  //Utility type
  type person = {
    name: string;
    age: number;
    email?: string;
    contactNO: string;
  };

  type NameAndAge = Pick<person, "contactNO" | "age">;

  //   Omit
  type ContactInfo = Omit<person, "name" | "age">;

  //   Required type
  type PersonRequired = Required<person>;

  // partial
  type PersonPartial = Partial<person>;

  // readonly

  type PersonReadOnly = Readonly<person>;

  const personal: PersonReadOnly = {
    name: "shihab",
    age: 200,
    contactNO: "12654374",
  };
  personal.age = 300;

  //   record type
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  type MyObj1 = Record<string, unknown>;

  const EmptyObj1: Record<string, unknown> = {};
  const obj2: MyObj1 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: 20,
  };

  //
}

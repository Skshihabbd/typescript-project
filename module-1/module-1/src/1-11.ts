{
  // ternary operator ||optional chaining || nullish coalescing

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  //   ternary
  const isAdult = age >= 18 ? "adult" : "not Adult";
  //   console.log({ isAdult });

  //   nullish coalescing operator-->> depend on null and undefined
  const isAuthenticated = undefined;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "shihab",
    address: {
      city: "khulna",
      road: "moylapota",
      presentAddress: "bagerhat",
    },
  };
  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent adress";
  console.log({ permanentAddress });
}

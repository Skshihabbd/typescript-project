{
  // object destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "persian",
    },
    constactNo: "01700000000",
    address: "Uganda",
  };
  const {
    id,
    name: { lastName },
    constactNo,
    address,
  } = user;
  console.log(id, lastName);

  //   array destructuring
  const myFriends: string[] = ["chandler", "joey", "ross", "rachel", "monica"];
  const [, a, , b, ...all] = myFriends;
  console.log(all);
  console.log(b);

  //   rest operator always return a array
}

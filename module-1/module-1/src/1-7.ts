{
  // spread oparator
  const obj1: string[] = ["rajib", "nahid", "Mizan"];
  const obj2: string[] = ["tanmoy", "nahid", "rahat"];
  obj1.push(...obj2);

  const mentors1 = {
    tyscript: "mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };
  console.log(mentorList);

  //   learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`hi${friend}`));
  };
  greetFriends("Abul", "kabul", "babul", "ubul", "5");
}

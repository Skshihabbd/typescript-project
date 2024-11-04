"use strict";
{
    // spread oparator
    const obj1 = ["rajib", "nahid", "Mizan"];
    const obj2 = ["tanmoy", "nahid", "rahat"];
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
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentorList);
    //   learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`hi${friend}`));
    };
    greetFriends("Abul", "kabul", "babul", "ubul", "5");
}

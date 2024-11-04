"use strict";
{
    //
    //mapped type
    const arrayOfNumber = [1, 2, 3, 4];
    //   const arrayOfString: string[] = ["1", "2", "3", "4"];
    const arrayOfString = arrayOfNumber.map((number) => number.toString());
    console.log(arrayOfString);
    const area1 = {
        height: "100",
        width: 50,
    };
    //
}

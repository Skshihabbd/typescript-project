{
  //
  //mapped type
  const arrayOfNumber: number[] = [1, 2, 3, 4];
  //   const arrayOfString: string[] = ["1", "2", "3", "4"];
  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );
  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //lookup type
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };
  type AreaString1<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString1<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
  //
}

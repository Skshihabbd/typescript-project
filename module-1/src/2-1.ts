{
  // Type asertion and Type narrowing if declare better type than typescript this is type assertion
  //  type assertion
  let anything: any;
  anything = "Next level web development";
  anything = 1234;
  anything as string;
  const kgTogm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      console.log(typeof value);
      const a = parseFloat(value);
      console.log(a);
      const convertedNumber = parseInt(value) * 1000;
      console.log(typeof convertedNumber);
      return `the converted number is : ${typeof convertedNumber}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgTogm(1.55) as number;
  const result2 = kgTogm("1.55") as number;
  console.log(result2);

  type customError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as customError).message);
  }
  //
}

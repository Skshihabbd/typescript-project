{
  //
  //   nullable oparator / unknown type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("There is nothing to serach");
    }
  };

  //   searchName(null);

  // unknown type
  const getSpeedInMeterPerSecoend = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      //   console.log(`the speed is ${convertedSpeed}ms^-1`);
    } else if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      console.log(result);
      const convertedSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed}ms^-1`);
    } else {
      console.log("wrong input");
    }
  };
  //   getSpeedInMeterPerSecoend(1000);
  getSpeedInMeterPerSecoend("1000 mph");

  //   never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("throw an error");

  //
}

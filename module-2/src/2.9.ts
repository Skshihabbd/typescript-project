{
  //
  // conditional type
  type a1 = number;
  type b1 = string;
  type x = a1 extends null ? true : false;
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };
  //keyof Sheikh "bike"|"car"|"ship"|"plane" same of equal to keyof Sheikh

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
  type havePlane = CheckVehicle<"ship">;
  //
}

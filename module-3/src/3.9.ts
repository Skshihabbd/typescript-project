{
  // Abstraction

  //   interface Vehical1 {
  //     name: string;
  //     model: string;
  //   }
  interface Vehical1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehical1 {
    startEngine(): void {
      console.log("i am starting the engine");
    }
    stopEngine(): void {
      console.log("i am stoping the engine");
    }
    move(): void {
      console.log("i am moving the car");
    }

    test() {
      console.log("i am testing");
    }
  }

  const toyota = new Car1();
  toyota.startEngine();
  //abstract class
  //abstract class only be declared not be implement .only it is used as a hints or architecutre what type of class property have just like type alias or interface.

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log("i am testing");
    }
  }

  class toyotaCar extends Car2 {
    startEngine(): void {
      console.log("i am startengine");
    }
    stopEngine(): void {
      console.log("i am stoping");
    }
    move(): void {
      console.log("i am moving");
    }
  }

  const toyota2 = new toyotaCar();
  toyota2.startEngine();
  //   i can not create any instance of abstract class
  //const hondaCar = new Car2(); //cannot
  //hondaCar.startEngine();
  //
}

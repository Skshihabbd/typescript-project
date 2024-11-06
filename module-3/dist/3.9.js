"use strict";
{
    class Car1 {
        startEngine() {
            console.log("i am starting the engine");
        }
        stopEngine() {
            console.log("i am stoping the engine");
        }
        move() {
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
    class Car2 {
        test() {
            console.log("i am testing");
        }
    }
    class toyotaCar extends Car2 {
        startEngine() {
            console.log("i am startengine");
        }
        stopEngine() {
            console.log("i am stoping");
        }
        move() {
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

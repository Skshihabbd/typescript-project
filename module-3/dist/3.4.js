"use strict";
{
    //isntance of guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("i am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`i am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("i am Mewing");
        }
    }
    // -->>function use kore true false uses block work
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog bhai", "dog");
    const cat = new Cat("cat bhai ", "cat");
    getAnimal(cat);
    //
}

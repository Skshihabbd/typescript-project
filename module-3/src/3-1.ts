{
  const names: string = "shihab";
  console.log(names);

  // oop -class
  class Animal {
    name: string; //this is public property that can i access outside of the class
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }
  // this is called instance-->>protimurti of object
  const dog = new Animal("German shepard Bhai", "dog", "Ghew Ghew");
  const cat = new Animal("shihabs", "cat", "mew mew");
  dog.makeSound();
  console.log(cat.name);

  // example of public in same classs in a block of object because of the same property name
  {
    class Animal {
      public name: string; //this is public property that can i access outside of the class
      public species: string;
      public sound: string;

      constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
      }

      makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
      }
    }
    // this is called instance-->>protimurti of object
    const dog = new Animal("German shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("shihabs", "cat", "mew mew");
    dog.makeSound();
    console.log(cat.name);
  }

  // parameter properties-->>>
  {
    class Animal {
      // name: string; //this is public property that can i access outside of the class
      // species: string;
      // sound: string;

      constructor(
        public name: string, //this parameter properties work like same as class property
        public species: string,
        public sound: string
      ) {}

      makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
      }
    }
    // this is called instance-->>protimurti of object
    const dog = new Animal("German shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("shihabs", "cat", "mew mew");
    dog.makeSound();
    console.log(cat.species);
  }
}

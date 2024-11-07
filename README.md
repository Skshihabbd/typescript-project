"# typescript-project"

In TypeScript, generics are a way to create reusable components that can work with different types while still maintaining type safety. Generics allow you to write functions, classes, or interfaces that can operate on any data type, specified at the time of usage. This makes your code more flexible and adaptable to various types without sacrificing type checking.

Basic Generic Definition
A generic is defined using angle brackets <T> (where T stands for "type" but can be any identifier). It represents a placeholder for a type that will be specified when the component is used.

Example
typescript
Copy code
// Generic function that accepts any type of value and returns it
function identity<T>(value: T): T {
return value;
}

// Usage
const number = identity<number>(42); // T is number
const text = identity<string>("Hello"); // T is string
Here, T is a placeholder for the type of value, which will be determined based on the input when the function is called. This allows identity to work with any type while enforcing type safety.

Generic in Classes
Generics are also helpful when creating classes that can handle different types of data.

typescript
Copy code
class Box<T> {
content: T;

    constructor(value: T) {
        this.content = value;
    }

}

const stringBox = new Box<string>("Books");
const numberBox = new Box<number>(100);
Dynamic Generics
Dynamic Generics refer to using multiple generic types or setting constraints, making your generics even more flexible and adaptable based on usage. This can be achieved using multiple generic parameters, constraints, or conditional types.

Multiple Generics
You can use more than one generic type in a function or class.

typescript
Copy code
function pair<T, U>(first: T, second: U): [T, U] {
return [first, second];
}

const result = pair<number, string>(1, "apple"); // [1, "apple"]
Here, T and U are two generic types, allowing the pair function to work with two different types at once.

Constrained Generics
You can restrict a generic type to certain types or interfaces. This ensures that the generic type will only accept values that meet specific requirements.

typescript
Copy code
interface Lengthwise {
length: number;
}

function logLength<T extends Lengthwise>(value: T): void {
console.log(value.length);
}

// Usage
logLength("Hello"); // Works because string has a length property
logLength([1, 2, 3, 4]); // Works because array has a length property
logLength({ length: 10 }); // Works because object has a length property

// logLength(10); // Error: number doesn't have a length property
In this example, T is constrained to types that have a length property, ensuring only types with this property can be used.

Summary
Basic Generics let you define components that work with any type while ensuring type safety.
Dynamic Generics add flexibility by allowing multiple generics, constraints, or conditional types.
Generics are particularly useful in TypeScript when creating reusable and type-safe code that needs to adapt to different data types.`
`

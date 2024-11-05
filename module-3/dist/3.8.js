"use strict";
{
    //Polimorphisom
    class Person {
        getSleep() {
            console.log(` I am sleeping for 8 person hours`);
        }
    }
    class Student extends Person {
        // getSleep() {
        //   console.log(`I am sleeping for 78 student hours`);
        // }
        getSleepe() {
            console.log(`I am sleeping for 7 student hours`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hours`);
        }
    }
    const getSleeoingHours = (params) => {
        params.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleeoingHours(person1);
    getSleeoingHours(person2);
    getSleeoingHours(person3);
    //
    {
        // circle Area rule -->>PI*r*r
        class Shape {
            getArea() {
                return 0;
            }
        }
        class Circle extends Shape {
            constructor(radius) {
                super();
                this.radius = radius;
            }
            getArea() {
                return Math.PI * this.radius * this.radius;
            }
        }
        // rectangle Area rull-->>
        class Rectangle extends Shape {
            constructor(height, width) {
                super();
                this.height = height;
                this.width = width;
            }
            getArea() {
                return Math.PI * this.height * this.width;
            }
        }
        const getShapeArea = (param) => {
            console.log(param.getArea());
        };
        const shape1 = new Shape();
        const shape2 = new Circle(10);
        const shape3 = new Rectangle(10, 20);
        getShapeArea(shape2);
        getShapeArea(shape1);
        getShapeArea(shape3);
    }
    //
}

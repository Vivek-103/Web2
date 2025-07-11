// Classes in TypeScript are blueprints for creating objects, just like in other object-oriented languages (Java, C++, etc.). 
//They allow you to define properties and methods and support inheritance, encapsulation, and polymorphism.

// SYNTAX
class Person {
  // properties
  name: string;
  age: number;

  // constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // method
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// creating an object
const p1 = new Person("Alice", 25);
p1.greet(); // Hello, my name is Alice


// ACCESS MODIFIERS

class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public showInfo(): void {
    console.log(`${this.name}'s salary is ${this.salary}`);
  }
}


//INHERITENCE
class Animal {
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.move(); // Moving...
dog.bark(); // Woof!


//Inheretence with CLASSES
interface CanFly {
  fly(): void;
}

class Bird implements CanFly {
  fly(): void {
    console.log("Flies in the sky");
  }
}


// READONLY AND OPTIONAL PROPS.
class Car {
  readonly brand: string;
  color?: string;

  constructor(brand: string, color?: string) {
    this.brand = brand;
    this.color = color;
  }
}


// STATIC MEMBERS
class MathHelper {
  static PI = 3.14;

  static square(x: number): number {
    return x * x;
  }
}

console.log(MathHelper.PI); // 3.14
console.log(MathHelper.square(4)); // 16


// GETTERS AND SETTERS
class Counter {
  private _count = 0;

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    if (value >= 0) {
      this._count = value;
    }
  }
}

const c = new Counter();
c.count = 10;
console.log(c.count); // 10


// SHORTHAND PROPERTY DECLARATION
class Student {
  constructor(public name: string, private age: number) {}

  info(): void {
    console.log(`${this.name}, ${this.age} years old`);
  }
}

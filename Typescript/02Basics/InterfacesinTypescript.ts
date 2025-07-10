//What is an Interface?
//An interface in TypeScript defines the shape of an object. It tells the TypeScript compiler what properties and methods an object should have — without providing implementation.
//It’s used to enforce type safety, code readability, and reusability.

// SYNTAX 
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};


// METHOD DEFINITION IN INTERFACES
interface Animal {
  name: string;
  makeSound(): void;
}

const dog: Animal = {
  name: "Buddy",
  makeSound() {
    console.log("Woof!");
  }
};


// FUNCTION TYPES IN INTERFACES
interface GreetFunction {
  (name: string): string;
}

const greet: GreetFunction = (name) => {
  return `Hello, ${name}`;
};


//Extending Interfaces (Inheritance)
//You can extend one interface from another:
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Charlie",
  employeeId: 101
};


// INDEX SIGNATURES (FOR DYNAMIC KEYS)
interface StringMap {
  [key: string]: string;
}

const labels: StringMap = {
  title: "Mr",
  firstName: "John"
};


// INTERFACES WITH CLASSES
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}


// EXTENDING MULTIPLR INTERFACES
interface A {
  a: number;
}

interface B {
  b: string;
}

interface C extends A, B {
  c: boolean;
}

const obj: C = { a: 1, b: "hello", c: true };



// USE CASE
interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
}

const response: ApiResponse<string[]> = {
  data: ["apple", "banana"],
  status: 200,
  success: true
};

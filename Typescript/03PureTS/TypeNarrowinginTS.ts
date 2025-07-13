//Type narrowing in TypeScript means refining a variable's type from a broad type (like string | number) to a more specific one based on checks you perform at runtime. It helps the compiler understand the exact type you're working with in a given block of code — which gives type safety and intelligent autocomplete.

// Why Type Narrowing Matters?
// When you have union types like string | number, TypeScript can't assume which one it is until you narrow it:
function printId(id: string | number) {
  console.log(id.toUpperCase()); // ❌ Error: toUpperCase might not exist on number
}


// typeof Narrowing
// Works for primitive types: string, number, boolean, symbol, undefined, bigint, function
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // ✅ Type narrowed to string
  } else {
    console.log(id.toFixed(2)); // ✅ Type is number here
  }
}

// instanceof Narrowing
// Works for class instances.
class Car {
  drive() {}
}
class Bike {
  pedal() {}
}

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive(); // ✅ Now TypeScript knows it's a Car
  } else {
    vehicle.pedal(); // ✅ Must be Bike
  }
}


//in Operator Narrowing
//Used when checking for the existence of a property.
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // ✅ It's a Dog
  } else {
    animal.meow(); // ✅ It's a Cat
  }
}


// Equality Checks
// TypeScript can narrow types based on equality comparisons.
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // x and y must both be string now
    console.log(x.toUpperCase());
  }
}


// Custom Type Predicates
// Useful for narrowing to a custom type.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // ✅ Type narrowed to Fish
  } else {
    pet.fly(); // ✅ Type narrowed to Bird
  }
}


// Discriminated Unions
// Use a common kind or type field to narrow:
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

type Shape = Circle | Square;

function area(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

//In TypeScript, a tuple is a typed array with a fixed number of elements, where each element can have a different type. This differs from normal arrays, where all elements are of the same type.

//SYNTAX
//let tupleName: [type1, type2, ..., typeN];


// EXAMPLE
let user: [string, number];

user = ["Alice", 30]; // ✅ Correct
user = [30, "Alice"]; // ❌ Error: types are in the wrong order


// ACCESSING TUPLE ELEMENTS
let person: [string, number] = ["Bob", 25];

console.log(person[0]); // "Bob"
console.log(person[1]); // 25


//TUPLE WITH OPTIONAL ELEMENTS
let employee: [string, number?, boolean?];

employee = ["Alex"];
employee = ["Alex", 100];
employee = ["Alex", 100, true];


//TUPLE WITH REST ELEMENTS
let names: [string, ...string[]];

names = ["John"];
names = ["John", "Doe", "Smith"];


// TUPLE WITH DIFFRENT TYPES
type ApiResponse = [number, string, boolean];

const response: ApiResponse = [200, "OK", true];


// READONLY WITH TUPLES
const point: readonly [number, number] = [10, 20];
// point[0] = 5; ❌ Error: Cannot assign to '0' because it is a read-only property.


// DESTRUCTING TUPLES
let user: [string, number] = ["Tom", 35];

const [name, age] = user;

console.log(name); // "Tom"
console.log(age);  // 35


// USING TUPLES IN FUNCITONS
function getUser(): [string, number] {
  return ["Emma", 28];
}

const [username, userAge] = getUser();


// USE CASE
type HttpResponse = [statusCode: number, message: string, success: boolean];

const res: HttpResponse = [404, "Not Found", false];

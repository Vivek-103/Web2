// TWO WAYS TO DECLARE ARRAYS IN TYPESCRIPT
let scores: number[] = [85, 90, 75];
// and
let scores: Array<number> = [85, 90, 75];

// Typescript prevent MISTAKES
let colors: string[] = ["red", "blue"];
colors.push(123); // ❌ Error: Argument of type 'number' is not assignable to 'string'

// COMMON ARRAYS METHODS
let nums: number[] = [1, 2, 3, 4];

// map: returns a new array
const doubled: number[] = nums.map(n => n * 2);

// filter: filters values based on a condition
const even: number[] = nums.filter(n => n % 2 === 0);

// reduce: accumulates to a single value
const sum: number = nums.reduce((acc, val) => acc + val, 0);


// ARRAY OF CUSTOM TYPES
type User = {
  id: number;
  name: string;
};

let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Accessing user names
users.forEach(user => console.log(user.name));



// READONLY ARRAYS
const nums: ReadonlyArray<number> = [1, 2, 3];
nums.push(4); // ❌ Error: push does not exist on type 'readonly number[]'


// ARRAYS VS TUPLE
//Arrays: Same type, variable length.
//Tuples: Fixed length, possibly mixed types.
let coords: [number, number] = [10, 20]; // Tuple
let list: number[] = [10, 20, 30];       // Array


// Type inference in ARRAYS
const fruits = ["apple", "banana", "mango"]; // inferred as string[]
const mix = [1, "two", true];                // inferred as (string | number | boolean)[]


// ARRAYS WITH OPTIONAL VALUES
type Todo = {
  title: string;
  description?: string; // optional field
};

const todos: Todo[] = [
  { title: "Buy groceries" },
  { title: "Study", description: "TypeScript basics" }
];



// MULTIDIMENSIONAL ARRAYS
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];

console.log(matrix[0][1]); // 2


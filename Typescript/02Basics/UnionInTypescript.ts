// A union type allows a variable to hold more than one type of value. It tells TypeScript: “this value can be either type A or type B.”

// SYNTAX
let value: string | number;

value = "hello"; // ✅ OK
value = 42;      // ✅ OK
value = true;    // ❌ Error: Type 'boolean' is not assignable


// EXAMPLE
type ID = string | number;

let userId: ID;

userId = "user_123";  // ✅
userId = 7890;        // ✅
userId = true;        // ❌


// Narrowing with typeof
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID in uppercase:", id.toUpperCase());
  } else {
    console.log("ID doubled:", id * 2);
  }
}


// UNION WITH OBJECT TYPES
type Admin = {
  role: "admin";
  accessLevel: number;
};

type User = {
  role: "user";
  name: string;
};

type Person = Admin | User;

const p: Person = {
  role: "user",
  name: "Alice"
};
//You can discriminate between types using their unique properties:
function getInfo(person: Person) {
  if (person.role === "admin") {
    console.log("Access level:", person.accessLevel);
  } else {
    console.log("User name:", person.name);
  }
}


//Union of Literals (String Enums)
type Status = "loading" | "success" | "error";

function showStatus(status: Status) {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("All good!");
  } else {
    console.log("Something went wrong.");
  }
}


//Pitfalls to avoid
function handle(input: string | string[]) {
  console.log(input.length); // ❌ Error: 'length' exists on both, but behaves differently
}
//Use type guards:
function handle(input: string | string[]) {
  if (typeof input === "string") {
    console.log("String length:", input.length);
  } else {
    console.log("Array length:", input.length);
  }
}


// UNION VS INTERSECTION
type A = { a: string };
type B = { b: number };

type C = A | B; // a OR b
type D = A & B; // must have both a AND b

//An enum (short for enumeration) is a feature in TypeScript that allows you to define a set of named constants. It makes your code more readable and organized, especially when you work with fixed sets of values (like user roles, states, directions, etc.).


// syntax
enum EnumName {
  VALUE1,
  VALUE2,
  VALUE3
}


// numeric enums

enum Direction {
  North,
  East,
  South,
  West
}

console.log(Direction.North); // 0
console.log(Direction.West);  // 3


// custom numeric enums
enum Direction {
  north = 1,
  east,  // 2
  south, // 3
  west   // 4
}

// String enums
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

console.log(Status.Success); // "SUCCESS"

//Heterogeneous Enums (Not Recommended)
//Mixing string and number values (not common and discouraged):
enum Result {
  OK = 1,
  FAIL = "FAIL"
}


// REVERSE MAPPING(ONLY WITH NUMERIC ENUMS)
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
}

console.log(Color[0]); // "Red"


// USING ENUMS WITH CODE
enum Role {
  Admin,
  User,
  Guest
}

function checkPermission(role: Role) {
  if (role === Role.Admin) {
    console.log("Full Access");
  } else {
    console.log("Limited Access");
  }
}

checkPermission(Role.Admin); // Full Access
checkPermission(Role.Guest); // Limited Access


// Enums with Type Aliases
//If you don’t need full enum features, you can use union types instead:
type Role = "admin" | "user" | "guest";

function assign(role: Role) {
  if (role === "admin") {
    console.log("Admin assigned");
  }
}


//Const Enums (Compile-Time Optimization)
//Use const enum for performance — values are inlined at compile time.
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move = Direction.Up;


// ENUMS IN OBJECTS AND FUNCTIONS
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

function getStatusMessage(status: HttpStatus) {
  switch (status) {
    case HttpStatus.OK:
      return "Request successful";
    case HttpStatus.NotFound:
      return "Resource not found";
    case HttpStatus.ServerError:
      return "Server error";
  }
}

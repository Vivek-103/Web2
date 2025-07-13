//A discriminated union (also called tagged union) is a pattern where all union members share a common literal property (called the discriminant) that distinguishes them.
// EX:
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };
//Here, "kind" is the discriminant.

//Using switch for Type Narrowing
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}


//Exhaustiveness Check Using never
//To ensure all cases are handled (i.e., exhaustiveness), add a default case that uses the never type.
function assertNever(x: never): never {
  throw new Error("Unhandled case: " + JSON.stringify(x));
}


function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      return assertNever(shape); // 🔥 compiler error if a case is missing
  }
}
//Now, if you add:
{ kind: "triangle"; base: number; height: number }
//...you'll get a compile-time error in assertNever(shape) because shape is no longer of type never.

// DEMO
type Status =
  | { type: "success"; data: string }
  | { type: "error"; message: string };

function handle(status: Status) {
  switch (status.type) {
    case "success":
      console.log("Data:", status.data);
      break;
    case "error":
      console.error("Error:", status.message);
      break;
    default:
      // Forces us to handle all cases
      const _exhaustiveCheck: never = status;
      return _exhaustiveCheck;
  }
}


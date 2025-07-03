// ----------------------------
// 📌 What is Readonly<T> in TypeScript?
// ----------------------------
// `Readonly<T>` is a utility type that takes a type `T` and marks *all* its properties as `readonly`.
// This means the properties cannot be reassigned after the object is created.
// It is useful when you want to create immutable data structures to prevent accidental mutations.

// ----------------------------
// Define a `User` interface with typical fields
// ----------------------------
interface User {
  id: number;          // Unique user identifier
  name: string;        // Full name of the user
  email: string;       // Email address of the user
}

// ----------------------------
// Create an immutable version of User using Readonly
// ----------------------------
// `ReadonlyUser` has all properties of `User`, but none of them can be changed after initialization
type ReadonlyUser = Readonly<User>;

// ----------------------------
// A function that receives a ReadonlyUser and tries to print the details
// ----------------------------
const printUserDetails = (user: ReadonlyUser) => {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);

  // ❌ The following lines would cause a compile-time error
  // user.name = "New Name";     // Error: Cannot assign to 'name' because it is a read-only property
  // user.email = "new@example.com"; // Error: Cannot assign to 'email' because it is a read-only property
};

// ----------------------------
// Create a readonly user object
// ----------------------------
const user: ReadonlyUser = {
  id: 101,
  name: "John Doe",
  email: "john.doe@example.com"
};

// Call the function to print user details
printUserDetails(user);

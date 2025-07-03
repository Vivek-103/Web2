// ----------------------------
// 🔍 What is Exclude<T, U> in TypeScript?
// ----------------------------
// `Exclude<T, U>` is a utility type that constructs a new type by **removing** from type `T`
// all union members that are **assignable to** type `U`.
//
// Think of it as a way to "filter out" types you don't want from a union.
//
// 📌 Syntax:
//     Exclude<UnionType, ExcludedMembers>
//     => Resulting type = UnionType - ExcludedMembers

// ----------------------------
// Example 1: Basic string literal exclusion
// ----------------------------

// Define a union type of possible user roles
type AllRoles = 'admin' | 'editor' | 'viewer' | 'guest';

// Create a type that excludes 'guest'
type AuthenticatedRoles = Exclude<AllRoles, 'guest'>;
// Result: 'admin' | 'editor' | 'viewer'

// ----------------------------
// Function that only accepts authenticated roles
// ----------------------------
const redirectToDashboard = (role: AuthenticatedRoles) => {
  console.log(`Redirecting ${role} to their dashboard.`);
};

// Valid usages
redirectToDashboard('admin');   // ✅
redirectToDashboard('editor');  // ✅
// redirectToDashboard('guest'); // ❌ Error: Argument of type '"guest"' is not assignable to parameter of type 'AuthenticatedRoles'

// ----------------------------
// Example 2: Exclude from union of types
// ----------------------------

// Union of string and number
type Primitive = string | number | boolean;

// Exclude `boolean` from the union
type StringOrNumber = Exclude<Primitive, boolean>; 
// Result: string | number

// A function that accepts only string or number
const printValue = (val: StringOrNumber) => {
  console.log("Value:", val);
};

printValue("Hello"); // ✅
printValue(42);      // ✅
// printValue(true); // ❌ Error: Argument of type 'true' is not assignable


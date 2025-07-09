// In TypeScript, the ? symbol after a property name means that the property is optional — it may or may not exist in the object.
//OPTIONAL EXAMPLE 

// Defining a User type where 'email' is optional
type User = {
  id: number;
  name: string;
  email?: string; // optional: might be undefined or not present
};

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const user2: User = {
  id: 2,
  name: "Bob"
  // ✅ OK: 'email' is optional, no need to provide it
};

// NOTE - (Optional just means "not required" — it does not assign a default value)

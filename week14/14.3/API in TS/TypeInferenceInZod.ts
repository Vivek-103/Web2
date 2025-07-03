// ----------------------------
// 🧪 What is Zod?
// ----------------------------
// Zod is a TypeScript-first schema declaration and validation library.
// It allows you to define schemas for your data and validate it at runtime
// ✅ While also automatically inferring the correct TypeScript types!

import { z } from 'zod'; // Import the Zod library

// ----------------------------
// 🧾 Step 1: Define a schema using Zod
// ----------------------------
// Here, we define a schema for a user object.
// This schema can validate actual data at runtime!
const userSchema = z.object({
  id: z.number(),                  // id must be a number
  name: z.string(),                // name must be a string
  email: z.string().email(),       // email must be a valid email format
  isActive: z.boolean().optional() // isActive is optional and must be a boolean if provided
});

// ----------------------------
// 🧠 Step 2: Infer the TypeScript type from the schema
// ----------------------------
// `z.infer<typeof userSchema>` extracts the TS type directly from the Zod schema.
// This means your types are always in sync with your validation!
type User = z.infer<typeof userSchema>;

// 🔍 The inferred `User` type is equivalent to:
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isActive?: boolean;
// }

// ----------------------------
// ✅ Step 3: Use the inferred type in your code
// ----------------------------
const createUser = (user: User) => {
  console.log("Creating user:", user);
};

// ----------------------------
// 📦 Step 4: Example usage with validation
// ----------------------------
// This data will be validated using Zod before passing to `createUser`
const result = userSchema.safeParse({
  id: 101,
  name: "Alice",
  email: "alice@example.com",
});

// Check if validation passed
if (result.success) {
  // If valid, we now have a type-safe object to use!
  createUser(result.data);
} else {
  // If invalid, log the errors
  console.error("Validation failed:", result.error.format());
}

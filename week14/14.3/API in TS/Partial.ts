// Define a User interface with some required properties
interface User {
  id: number;          // Unique user identifier
  name: string;        // Full name of the user
  email: string;       // Email address of the user
  isActive: boolean;   // Status indicating if the user is active
}

// Use Partial to create a new type where all properties of User are optional
// `Partial<T>` is a TypeScript utility type that makes all the properties in `T` optional
type UpdateUserInput = Partial<User>;

// Simulate a function to update a user object
// It takes a user ID and an object that may contain zero or more properties to update
const updateUser = (id: number, updateData: UpdateUserInput) => {
  // Simulated existing user data (in a real app, this might come from a database)
  const existingUser: User = {
    id: id,
    name: "Alice",
    email: "alice@example.com",
    isActive: true
  };

  // Use object spread to merge existing data with the partial update
  // This way, only the provided fields in `updateData` will overwrite existing ones
  const updatedUser = { ...existingUser, ...updateData };

  // Log the final updated user object
  console.log("Updated User:", updatedUser);
};

// Example usage: only updating the name and isActive status
updateUser(1, { name: "Alice Smith", isActive: false });

// Define a User interface with properties: id, name, email, and createdAt
interface User {
  id: number;          // Unique identifier for the user
  name: string;        // Full name of the user
  email: string;       // Email address of the user
  createdAt: Date;     // Date when the user was created
}

// Create a new type `UserProfile` using TypeScript's built-in utility type `Pick`
// `Pick<T, K>` creates a new type by selecting a set of properties `K` from type `T`
// Here, we are picking only the 'name' and 'email' properties from the `User` interface
type UserProfile = Pick<User, 'name' | 'email'>;

// Define a function that takes a parameter `user` of type `UserProfile`
// Since `UserProfile` only includes 'name' and 'email', only those two properties are accessible
const displayUserProfile = (user: UserProfile) => {
  // Log the user's name and email to the console
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};

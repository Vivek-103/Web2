// ----------------------------
// 📘 What is Map<K, V> in TypeScript?
// ----------------------------
// `Map<K, V>` is a built-in JavaScript object introduced in ES6,
// and fully supported in TypeScript with strong typing.
//
// It allows storing **key-value pairs** where:
//   - `K` is the type of the key
//   - `V` is the type of the value
//
// Unlike plain objects (`{}`), Maps:
// ✅ Can have keys of any type (not just strings/symbols)
// ✅ Maintain insertion order
// ✅ Have useful methods like `set()`, `get()`, `has()`, and `delete()`

// ----------------------------
// Example: Mapping user IDs (number) to their names (string)
// ----------------------------

// Create a typed map: number keys (user IDs) -> string values (user names)
const userMap: Map<number, string> = new Map();

// Add entries using `set(key, value)`
userMap.set(1, "Alice");
userMap.set(2, "Bob");
userMap.set(3, "Charlie");

// ----------------------------
// Function to display all users in the map
// ----------------------------
const displayUsers = (map: Map<number, string>) => {
  // Loop over each entry using `for...of`
  for (const [id, name] of map) {
    console.log(`User ID: ${id}, Name: ${name}`);
  }
};

displayUsers(userMap);

// ----------------------------
// Other common operations with Map
// ----------------------------

console.log("Has user with ID 2?", userMap.has(2));     // true
console.log("User with ID 3:", userMap.get(3));         // "Charlie"

// Delete a user
userMap.delete(1);
console.log("After deletion:");
displayUsers(userMap);

// Clear the map
userMap.clear();
console.log("Map size after clear:", userMap.size);     // 0

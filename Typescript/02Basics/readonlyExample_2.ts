// READONLY EXAMPLE ⬇️
// Defining a type alias with readonly properties
type User = {
  readonly id: number; // id cannot be modified after initialization
  name: string;
};

const user: User = {
  id: 101,
  name: "Alice"
};

user.name = "Bob";     // ✅ OK: name is mutable
user.id = 102;         // ❌ Error: Cannot assign to 'id' because it is a read-only property.


// READ ONLY WITH ARRAYS ⬇️
// Creates an array that cannot be modified (no push, pop, etc.)
const nums: ReadonlyArray<number> = [1, 2, 3];

nums[0] = 10;     // ❌ Error: Index signature in type 'readonly number[]' only permits reading.
nums.push(4);     // ❌ Error: Property 'push' does not exist on type 'readonly number[]'.

// ✅ You can still read values
console.log(nums[0]);  // 1

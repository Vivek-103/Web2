// Define the structure of a User object using a TypeScript interface
interface Users {
    firstName: string; // User's first name
    lastName: string;  // User's last name
    age: number;       // User's age
}

// Define a function to filter users who are 18 years old or older
function filteredUsers(users: Users[]) {
    // Use the filter method to return only users whose age is 18 or more
    return users.filter(user => user.age >= 18);
}

// Test the function with a sample array of users
console.log(filteredUsers([
    {
        firstName: "Vivek",       // Legal (age 21)
        lastName: "Srivastava",
        age: 21
    },
    {
        firstName: "Rohit",       // Not legal (age 16)
        lastName: "Sharma",
        age: 16
    },
]));

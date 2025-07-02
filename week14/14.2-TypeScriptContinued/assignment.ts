// Create 2 types user and admin
// create a function that takes either a user or an admin as an input, and returns a string saying welcome,[name]

interface Admin{
    name : string;
    permission : string;
}

interface User {
    name : string
}

type UserorAdmin = User | Admin;

function greet(user:UserorAdmin){
    console.log(user.name);
}

interface User {
    name: string;
    age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

let user = {
    name: "vivek",
    age: 23
};

console.log(isLegal(user));
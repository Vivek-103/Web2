const User = {
    name :"vivek",
    email : "vivek@dev",
    isActive : true
}

function createUser({name : string , isPaid :boolean}){}

let newUser = {name:"rohit" , isPaid :false , email : "Vivek@dev"}

createUser(newUser)

function createCourse({name : string , price : number}):{}{  
    return {name : "reactJS",price:399}
}

export {}
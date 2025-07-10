//const user : (string | number)[] = [1,"vs"]

// writing as tuple
const user : (string | number)[] = [1,"vs"]


let tUser : [string , number , boolean]

tUser = ["vs",132,true]// you have to write in this order only cannot change the order as tuples restricts you.

let  rgb : [number , number , number] = [255 ,123,112]

type User = [number ,string]

const newUser : User = [112 , "example"]

newUser[1] = "hi-hello"
newUser.push(true);
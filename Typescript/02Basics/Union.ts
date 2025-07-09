let score: number | string  = 33

score = 44

score = "55"

type User2 = {
    name : string;
    id : number
}

type Admin = {
    username : string;
    id : number
}

let rohan : User2 | Admin = {
    name : "rohan" ,id:1234
}

rohan = {
    username : "rko" ,
    id:123
}

function getDbId(id:number | string) {
    console.log(`DB id is ${id}`);
}

getDbId(3);
getDbId("44");

// array 
const data1 : number[] = [1,2,3]
const data2 : string[] = ["1","2","3"]
const data3 : (string | number)[] = ["1","3",4,"2"]

let seatAllotment : "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "crew" // error here as seat allotment can only be above 3 

function above18(users){
    let adultusers = users.filter((user)=>user.age>18);
    return adultusers;
}

let users=[
    {name:"Vivek",age:22},
    {name:"rohit",age:19},
    {name:"tanmay",age:17}
];
console.log(above18(users));
function above18male(users)
{
    let filterusers =users.filter((user)=>user.age>18 && user.gender==="male");
    return filterusers;
}
let users =[
    {name:"vivek",age:20,gender:"male"},
    {name:"priya",age:21,gender:"female"},
    {name:"harkirat",age:22,gender:"male"},
    {name:"kumar",age:17,gender:"male"},
];
console.log(above18male(users))
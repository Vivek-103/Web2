let Users=[{
    name:"Vivek",
    age:21,
    gender:"male",
},
{
    name:"tanmay",
    age:20,
    gender:"male"
},
{
    name:"kaur",
    age:21,
    gender:"female",
}
];
function greetings(person){
    for(let i=0;i<person.length;i++){
        if (person[i].gender == "male"){
            console.log(" hello mr "+ person[i].name+ " your age " + person[i].age);
        }
        else{
            console.log(" hello mrs " + person[i].name+" your age is " +person[i].age);
        }
    }
}
greetings(Users);
function Canvote(person){
    for (let i = 0;i<person.length;i++){
        if (person[i].age >= 18){
            console.log("can vote");
        }
        else{
            console.log("can't vote");
        }
    }
}
Canvote(Users);
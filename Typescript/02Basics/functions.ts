function addTwo(num:number):number{
    return num +2;
}
addTwo(5);

function getUpper(val:string){
    return val.toUpperCase()
}
 getUpper("rko");

 function signupUser(name :string,email:string,isPaid:boolean){}
 signupUser("raman","@gmail",false,);

// functions that give more than one typr(we use Union for this learn later)
 function getValue(myVal:number){
    if(myVal > 5){
        return true
    }
    return "200 OK"
 }

 const getHello =(s:string):string=>{
    return ""
 }

 const heros = ["thor","spiderman","ironman"]

 heros.map(hero=>{
    return `hero is ${hero}`
 })

 function consoleError(errmsg:string):void{
    consoleError(errmsg);
 }

 
 function handleError(errmsg:string):never{
    throw new Error(errmsg);
 }

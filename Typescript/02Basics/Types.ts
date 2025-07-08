//We’ve been using object types and union types by writing them directly in type annotations. 
//This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.
//A type alias is exactly that - a name for any type.

type User = {
    name : string;
    email : string;
    isActive : boolean
}



function createUser(user:User){
    return {name:" ",email:"",isActive:true}
}

createUser({name:" ",email:"",isActive:true})

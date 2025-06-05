/*write a function that takes in a username and password and returns
a JWT token with the username encoded inside an object. Should return null if the username 
is not valid email of if the password is less than 6 characers. Try using zod library here*/

/* Write  a function that takes a JWTas input and returns true if 
the JWT can be decoded(not VERIFIED). Return false otherwise*/

/* Write a function that takes JWT as in input and returns true if the JWT
can be verified. Return false otherwise*/

const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password){
    const usernameResponse = emailSchema.safeparse(username);
    const passwordResponse = passwordSchema.safeparse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
   const signature=  jwt.sign({username},jwtpassword)
    return signature;
}

function verifyJwt(token){
    let ans= true;
    try{
    const verified =jwt.verify(token,jwtPassword); 
    }catch(e){
        ans = false;
    }
        return ans;
    
}

function decodeJwt(token){
    // true,false
    const decoded = jwt.decode(token);
    if (decoded){
        return true;
    }else{
        return false;
    }
}

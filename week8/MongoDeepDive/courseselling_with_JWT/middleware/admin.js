const jwt = require ("jsonwebtoken");
const {JWT_SECRET} = require("../config")

function adminMiddleware (req,res,next){

    const token = req.headers.authorization;
    // Bearer "___ some jwt___"
    try{
        const words = token.split(" ");//["Bearer","token"]
    const jwtToken = words[1]//token
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({
            message: " you are not authenticated"
        })
    }
    
    }catch(e){
        res.json({
            msg:"incorrect inputs"
        })
    }

}

module.exports= adminMiddleware;
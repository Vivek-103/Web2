//Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?
const express = require('express')
const jwt = require('jsonwebtoken')
const  JWT_SECRET = "JWT_SECRET"
const app = express(); // initialise the instance of the express application

app.use(express.json());
app.use(express.static("./assignment"))
const users = [];

app.post("/signup",function(req,res){
    const username = req.body.username
    const password = req.body.password
    users.push({
        username : username,
        password : password
    })
// ideally we should check a user with this username already exist
    res.json({
        messages: "You have signed in"
    })
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    // now we write the code to check if there a user that already exist in the golbal user array

    let foundUser = null;
    for (let i =0 ; i<users.length;i++ ){
        if(users[i].username === username && users[i].password=== password){
          foundUser = user[i];  
        }
    }
    if(!user){
        res.json({
            message:"credentials incorrect"
        })
        return
    }else{
        const token = jwt.sign({username},JWT_SECRET);
        res.json({
           token : token
        })
    }


})

function auth(req,res,next){

    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);
    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }else{
        res.json({
            message :"you are not logged in"
        })
    }
}

app.get("/me",auth,function(req,res){
    
  let foundUser = null;
    for (let i =0 ; i<users.length;i++ ){
        if(users[i].username === req.username){
          foundUser = user[i];  
        }
    }  
    res.json(
        {
            username:foundUser.username,
            password:foundUser.password
        }
    ) 


})

app.listen(3000);
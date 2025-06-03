const express = require('express')
const jwt = require('jsonwebtoken')
const  JWT_SECRET = "JWT_SECRET"
const app = express(); // initialise the instance of the express application

app.use(express.json());

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

app.get("/me",function(req,res){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);
// we can also use jwt.decode(token)but it has security vulnerability

if (decodedData.username){
  let foundUser = null;
    for (let i =0 ; i<users.length;i++ ){
        if(users[i].username === decodedData.username){
          foundUser = user[i];  
        }
    }  
    res.json(
        {
            username:foundUser.username,
            password:foundUser.password
        }
    ) 
}

})

app.listen(3000);
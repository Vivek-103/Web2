//using JWT
const express = require("express");
const jwt = require('jsonwebtoken')
const JWT_SECRET = "JWT_SECRET"

const app = express();
app.use(express.json());

const users = [];

app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.bofy.password;
    users.push({
        username:username,
        password:password
    })

    res.json({
        messsages:"you have signed in"
    })

})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    let foundUser = null;

    for (let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = user[i];
        }
    }

    /*
    const user = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }else{
            return false
        }
    }) {this is a another way to authenticate}*/

    if (foundUser){
        const token = jwt.sign({
            username : username
        },JWT_SECRET);//convert their jwt to a jwt
        

        res.json({
            message:token
            })
    }else{
        res.status(403).send({
            message : "invalid username and password"
        })
    }
})
app.get("/me",function(req,res){
    const token = req.headers.token //jwt
    const decodedInformation = jwt.verify(token,JWT_SECRET);//this LOC is converting the JWT to the username
    const username = decodedInformation.username

    let foundUser = null;

    for(let i =0;i<users.length;i++){
        if(users[i].username === username){
            foundUser = users[i];
        }
    }
    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }else{
        res.json({
            message : "invalid token"
        })
    }

})

app.listen(3000);// ensures that http server is listening on port 3000
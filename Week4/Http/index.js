const fs = require("fs");
fs.readFile("a.txt",function(err,data){

})


const express = require("express");
const app = express();
// route handles
app.get('/',function(req,res){
    res.send("hello world")
})

app.get('/asd',function(req,res){
    res.send("hello world from asd endpoint")
})

app.post('/',function(req,res){
    res.send("hello world from post endpoint")
})
app.listen(3000);// which port
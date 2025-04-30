const express = require('express');

const app = express();

//function that returns boolean if age of person is more than 14

function isOldEnough(age){
    if (age >= 14){
        return true;
    }
    else{
        return false;
    }
}

app.get("/ride1",function(req,res){
    if (isOldEnough(req.query.age)){
    res.json({
        msg:"You have successfully riden the ride 1"
    })
}   else{
    res.status(411).json({
        msg:"sorry u are not of age yet"
    })
}


})


app.get("/ride2",function(req,res){
    if (isOldEnough(req.query.age)){
    res.json({
        msg:"You have successfully riden the ride 2"
    })
}   else{
    res.status(411).json({
        msg:"sorry u are not of age yet"
    })
}


})
app.listen(3000);

// THIS WAS WITHOUT USE OF MIDDLEWARE NOW WE WILL SEE HOW SYNTAX CHANGES WITH HELP OF MIDDLEWARE AND HOW ITS MAKES THE WORK EASYY!!!
const express = require('express');

const app = express();

//Using Middleware

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if (age>=14){
        next();
    }
    else{
        res.json({
            msg : "sorry u are not of age yet",
        })
    }
}

app.get("/ride1",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg:"You have successfully riden the ride 1"
    })
})


app.get("/ride2",isOldEnoughMiddleware, function(req,res){
    res.json({
        msg:"You have successfully riden the ride 2"
    })
})
app.listen(3000);

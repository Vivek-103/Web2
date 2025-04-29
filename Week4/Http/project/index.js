const express = require("express");
const app = express();

const users =[ {
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json())

app.get("/",function(req,res){
    const JohnKidneys = users[0].kidneys;
    const numberofkidneys = JohnKidneys.length;
    let numberofhealthykidneys = 0;
    for(let i =0;i<JohnKidneys.length;i++){
        if (JohnKidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        JohnKidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg : "Done!"
    })
})
app.put("/",function(req,res){
    for(let i = 0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})
app.delete("/",function(req,res){
    const newkidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy){
            newkidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({msg:"Donee!"})
})



app.listen(3000);
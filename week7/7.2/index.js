const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {z} = require("zod");

mongoose.connect("")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(3).max(30)
    })
    // 2 ways to parse
    // const parsedData = requiredBody.parse(req.body); problem with this is it wither works on throws an error so u this put this LOC in try catch or just use safe.parse
    const parsedDatawithSuccess = requiredBody.safeParse(req.body);
    
    
    if(!parsedDatawithSuccess.success){
        res.json({
            message: "incorrect format",
            error: parsedDatawithSuccess.error
        })
        return;
    }    
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // below code can throw an error if you signup from same userid or email(i.e repeated user)
    // we should wrap is inside try..catch block
   let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password,5);
        
        console.log(hashedPassword);
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });
    }catch(e){
        res.json({
            message: "User already exists"
        })
        errorThrown = true;
    }
    if(!errorThrown){

        
        res.json({
            message: "You are signed up"
        })
    }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    if(!response){
        res.status(403).json({
            message: "User does not exist"
        })
        return;
    }
    const passwordMatch = bcrypt.compare(password,response.password);
    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);
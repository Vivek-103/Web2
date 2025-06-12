const {Router} = require("express");

const {userModel} = require("../db")

const jwt = require("jsonwebtoken");
const { JWT_USER_PASSWORD } = require("../config");
const { userMiddleware } = require("../middleware/user");

const userRouter = Router();


userRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName} = req.body;
    //H.W-1.use zod validation 2. hash the password(bcrypt)

    try{
        await userModel.create({
            
            email:email,
            password:password,
            firstName : firstName,
            lastName : lastName
        })
    }catch(e){
        message:"signup failed"
    }

    res.json({
        message: "SignUp Succeeded",
    })
});

userRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;

    // TODO: ideally password should be hashed  so u cant compare provided password and datdabase password
    const user = await userModel.find({
        email : email,
        password : password
    });
    if(user){
        jwt.sign({
            id:user._id
        },JWT_USER_PASSWORD);
        res.json({
            token : token
        })
    }else{

        res.status(403).json({
            message: "incorrect credentials"
        })
    }
});



userRouter.get("/purchases",userMiddleware,async function(req,res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    });
    const coursesData = await courseModel.find({
        _id: {$in: purchases.map(x=>x.courseId)}
    })

    res.json({
       purchases,
       coursesData
    })
});

module.exports={
    userRouter : userRouter
}
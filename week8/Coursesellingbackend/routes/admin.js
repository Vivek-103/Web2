const {Router} = require("express");
const jwt = require("jsonwebtoken");
const adminRouter = Router();
const {adminModel} = require("../db")
const{courseModel} = require("../db")
const {JWT_ADMIN_PASSWORD} = require("../config");
const { adminMiddleware } = require("../middleware/admin");
adminRouter.post("/signup",async function(req,res){
   const {email,password,firstName,lastName} = req.body;
    //H.W-1.use zod validation 2. hash the password(bcrypt)

    try{
        await adminModel.create({
            
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

adminRouter.post("/signin",async function(req,res){
    const {email,password} = req.body;

    // TODO: ideally password should be hashed  so u cant compare provided password and datdabase password
    const admin = await adminModel.findOne({
        email : email,
        password : password
    });
    if(user){
        jwt.sign({
            id:admin._id
        },JWT_ADMIN_PASSWORD);
        res.json({
            token : token
        })
    }else{

        res.status(403).json({
            message: "incorrect credentials"
        })
    }
});

adminRouter.post("/course", adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price} = req.body;
    const course = await courseModel.create({
        title,description,imageUrl,price,creatorId:adminId
    })
    res.json({
        message:"course created",
        courseId:course._id
    })
});

adminRouter.put("/course",adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price,courseId} = req.body;
    const course = await courseModel.updateOne({
        _id:courseId,
        creatorId:adminId
        },
    {
        title,description,imageUrl,price,creatorId:adminId
    })
    res.json({
        message:"course created",
        courseId:course._id
    })
    res.json({
        message:"course Updated"
    })
});

adminRouter.get("/course/bulk",adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId : adminId,
        });
    res.json({
        message:"courses shown",
        courses
    })
});

module.exports = {
    adminRouter:adminRouter
}





const {Router} = require("express");
const adminMiddleware = require("../middleware/admin")
const router = Router();
const {Admin,User} = require("../db") 
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

router.post("/signup",async (req,res)=>{
    const username =req.body.username;
    const password= req.body.password;
    await Admin.create({
        username,
        password
    })
    res.json({
        msg : "Admin created successfully"
    })
});

router.post("/signin",adminMiddleware,async (req,res)=>{
    
    const username =req.body.username;
    const password= req.body.password;

    const isvalidated = await User.find({
        username,
        password
    })

    if(user){

        
        jwt.sign({
            username
        },JWT_SECRET);
        
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message: " incorrect credetials"
        })
    }
});

router.post("/courses",adminMiddleware,async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //use zod for validation
   const newCourse = await Course.create({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    res.json({
        message : "Course created successfully",courseId : newCourse._id
    })
});

router.get("/courses", adminMiddleware, async (req,res)=>{
    
    const response =await Course.find({}
        .then(function(response){
            res,json({
                courses:response
            })
        })
    )
});

module.exports = router;
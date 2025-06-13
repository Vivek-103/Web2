const {Router} = require("express");
const router = Router();

const UserMiddleware = require("../middleware/user");
const {User} = require("../db");
const userMiddleware = require("../middleware/user");

router.post("/signup",(req,res)=>{
    const username = req.body.username;
    const  password = req.body.password;
    User.create({
        username,
        password
    })
    res.json({
        message : "user created successfully"
    })

});

router.get('/courses',async (req,res)=>{
    //implementing listing of all courses
     const response =await Course.find({}
        .then(function(response){
            res,json({
                courses:response
            })
        })
    )

});

router.post("courses/:courseId",userMiddleware,async (req,res)=>{
    //implementing course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    //use zod

   try{
    await User.updateOne({
        username : username
    },{
            "$push":{
                purchasedCourses:courseId
            }
    })
   }catch(e){
    console.log(e)
   } ;
   res.json({
    message:"purchase complete"
   }) 
    
});

router.get("/purchasedCourses",userMiddleware,async (req,res)=>{
    const user = await User.findOne({
        username:req.headers.username
    });
    console.log(user.purchasesCourses)
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })
    res.json({
        Courses : courses
    })
})

module.exports = router;

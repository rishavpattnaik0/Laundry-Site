// Import Model
import User from "../models/User.js"

// Making Promise
import bigPromise from "../middlewares/bigPromise.js"
import { cookieToken } from "../utils/cookieToken.js";
import { mailHelper } from "../utils/mailHelper.js";
import crypto from "crypto";
export const createUser = bigPromise(async(req,res,next)=>{
    const {username,email,password}=req.body;
    console.log(req.body);
    if((!username) || (!email) || (!password)){
        return res.status(400).json({
            success:false,
            message:"All fields are required!"
        })
    }
  const existingUser = await User.findOne({email:email})
    if(existingUser){
        return res.status(501).json({
            success:true,
            message:"You have been Already been registered !",
        })
    }
    else{
        const user=await User.create({
            username,
            email,
            password
        })
        return res.status(200).json({
            success:true,
            message:"User created!",
            data:user
        })
    }
})

export const login= bigPromise(async(req,res,next)=>{
    const {email,password}= req.body;
    console.log(req.body);
    const user=await User.findOne({email:email});
    if(!user)
    {
        return res.status(401).json({
        success:false,
        message:"Invalid Username or Password"
        });
    }
    else{
        const user1=await user.isValidatedPassword(req.body.password,user.password);
        if(!user1){
            return res.status(401).json({
                success:false,
                message:"Invalid Username or Password"
                });
        }
    return res.status(200).json({
        success:true,
        message:"Successfully logged in",
        data:user
        });
    } 
});

export const logout=bigPromise(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    
    res.status(200).json({
        success:true,
        message:"loggedOut Successfully"
    })
})

export const getUser = bigPromise(async(req,res,next) =>{
   const details= await User.find({});
//    console.log(JSON.parse(details));
   if(!details)
   {
    return res.status(401).json({
        success:false,
        message:"No users exist till now"
    })
   }
   else{
    return res.status(200).json({
        success:true,
        message:"Done !",
        data:details
    });
   }
});


export const updatePassword=bigPromise(async(req,res,next) =>{
   const id=req.body.id;
   const user=await User.findById(id);
   console.log(user.password);
   const user1=await user.isValidatedPassword(req.body.oldpassword,user.password);
   if(!user1)
   {
    return res.status(401).json({
    success:false,
    message:"Old password does not match to the new password"
    });
   }
   const newpass=req.body.newpassword;
   user.password=newpass;
   cookieToken(user,res,"Password updated Successfully");
});

export const updateUserdetails = bigPromise(async(req,res,next)=>{
 const data={
    username:req.body.newusername,
    email:req.body.newemail,
 }
 const userexists = await User.findOne({password:req.body.password});
 console.log(userexists.password);
 if(!userexists)
 {
    return res.status(401).json({
        success:false,
        message:"Enter Password Correctly"
    });
 }
 const updated = await User.findByIdAndUpdate(req.body.id,data,{
    new:true,
    runValidators:true,
    useModifyandUpdate:false
   });
   
   if(!updated)
   {
    return res.status(401).json({
        success:false,
        message:"Wrong email no user exist with this email"
     });
   }
   cookieToken(updated,res,"User details have been updated successfully");
});

export const deleteUser = bigPromise(async(req,res,next)=>{
    const user1 = await User.findById(req.body.id);
    if(!user1)
    {
       return res.status(401).json({
        success:true,
        message:"Invalid details of the user !"
       })
    }
    await user1.remove();
    return res.status(200).json({
    success:true,
    message:"Successfully Deleted User"
    });
})

export const addReviews=bigPromise(async(req,res,next)=>{
    const user=req.body;
    console.log(req.body.feedback);
    const a=await User.findOne({email:user.email});
    if(!a)
    {
        return res.status(401).json({
            success:false,
            message:"Invalid Username"
        });
    }
    else{
        const user1=await a.isValidatedPassword(req.body.password,a.password);
        if(!user1)
        {
            return res.status(401).json({
                success:false,
                message:"Invalid Password"
            });
        }
        console.log(user1);
        return res.status(200).json({
            success:true,
            message:"Successfully Added Your Review",
            data:user
        })  
    }
})
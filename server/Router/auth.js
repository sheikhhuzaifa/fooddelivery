const express=require('express');
const mongoose= require('mongoose');
const bcrypt=require('bcryptjs');
const router = express.Router();
const jwt=require('jsonwebtoken');
require("../db/conn");
const User=require("../model/usersSchema");
router.get('/',(req,res)=>{
    res.send('hello router');
  });
router.post('/register',async (req,res)=>{
    const {email,password,cpassword}=req.body;
    if(!email ||!password ||!cpassword)
    {
      return res.status(422).json({error: "plz filled the field properly"});

    }
    try{
      const userExist=await User.findOne({email:email});
      if(userExist)
      {
        return res.status(422).json({error:"Email already Exist"});

      }else if(password != cpassword){
        return res.status(422).json({error:"Password Not matching"});
      }
      else
      {
        const user=new User({email,password,cpassword});
      await user.save();
      console.log(req.body);
      res.status(201).json({messsage:"user register Succesfuly"});
      }
      
    
    }
    catch(err)
    {
    console.log(err);
    }
  });
router.post('/signin',async(req,res)=>
{
  try{
    const {email,password}=req.body;
    if(!email||!password)
    {
      return res.send(400).json({error:"plz filled the data"});
    }
    const userLogin=await User.findOne({email:email});
    if(userLogin)
    {
      const isMatch=await bcrypt.compare(password,userLogin.password);
      const token=await userLogin.generateAuthToken();
      res.cookie("jwtoken",token,{
        expires: new Date(Date.now+698987978),
        httpOnly:true
      })
      if(!isMatch)
      {
        return res.status(400).json({error:"invalid Credientials"});
      }
      else
      {
        return res.json({message: "user signin succesfully"});
      }
    }
    else
    {
      return res.status(400).json({error:"invalid Credientials"});
    }
      
    
    
  }
  catch(err){
    console.log(err);
  }

});
module.exports=router;
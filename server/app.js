const dotenv=require('dotenv');
const express=require('express');
const mongoose=require('mongoose');
const app=express();

//ETubEBKv7f!k*4p

dotenv.config({path: './config.env'});
require('./db/conn');
app.use(express.json());
app.use(require('./Router/auth'));

const middleware=(req,res,next)=>{
    
    next();
}
app.get('/',(req,res)=>{
  res.send('hello app');
});

app.get('/about',middleware,(req,res)=>{
    res.send('hello about');
  });
app.listen(3000,()=>
{
  console.log('hello');  
});
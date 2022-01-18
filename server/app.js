const dotenv=require('dotenv');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const http = require('http').createServer(app)

const io = require('socket.io')(http, { cors: {origin:'*'}}) 
io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})

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
app.listen(5000,()=>
{
  console.log('hello');  
});
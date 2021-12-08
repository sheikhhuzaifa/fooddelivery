const mongoose=require('mongoose');
Db=process.env.DATABASE;
mongoose.connect(Db,{
    
}).then(()=>{
console.log('connection successfully created');
});//.catch((err)=>console.log('error'));
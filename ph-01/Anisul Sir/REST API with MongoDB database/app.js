const express=require("express")
const cors=require("cors")
const app=express();



// server not found error
app.use((error,req,res,next)=>{
    res.status(500).json({message:"something is error"})

})


module.exports=app
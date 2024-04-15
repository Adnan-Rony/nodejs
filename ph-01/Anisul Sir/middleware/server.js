const express=require('express')
require("dotenv").config()
const app=express();
const PORT=process.env.PORT|| 3000


const mymiddleware=(req,res,next)=>{
    console.log("middle ware function")
    req.currentTime=new Date(Date.now())
    next()
}

// when middleware will used many times.then we can used...
app.use(mymiddleware)
 

app.get("/",(req,res)=>{
    console.log('i am home Time is  ' + req.currentTime)
    res.send("this is home page")
})

app.get("/about",(req,res)=>{
    console.log('i am about and Time is  ' + req.currentTime)
    res.send("this is about page")
})




app.use((req,res)=>{
    res.send("something is wrong !!")
})

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT} `)
})
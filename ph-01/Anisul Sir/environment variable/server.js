const express=require('express')
require("dotenv").config()
const app=express();
const PORT=process.env.PORT|| 3000




app.get("/",(req,res)=>{
    res.send("this is home page")
})




app.use((req,res)=>{
    res.send("something is wrong !!")
})

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT} `)
})
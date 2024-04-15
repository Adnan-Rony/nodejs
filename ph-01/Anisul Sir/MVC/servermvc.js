const express=require('express')
require("dotenv").config()
const userRouter=require("./route/users.route")



const app=express();
const PORT=process.env.PORT|| 3000

app.use(userRouter)
app.use(express.urlencoded({extended:true}))

app.use((req,res)=>{
    res.status(404).json({
        message:"not found page"
})
})

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT} `)
})
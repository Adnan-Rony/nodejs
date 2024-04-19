const express=require("express")
const cors=require("cors")
const bodyparsa=require("body-parser")
const users=require("./models/user.model")
const userrouter=require("./route/userRoute")



const app=express();
app.use(userrouter)

// body parser
app.use(cors())
app.use(bodyparsa.urlencoded({extended:true}))
app.use(bodyparsa.json())




app.use("/users",userrouter)





// home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})



// route not found error
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"})

})

// server not found error
app.use((error,req,res,next)=>{
    res.status(500).json({message:"something is error"})

})


module.exports=app
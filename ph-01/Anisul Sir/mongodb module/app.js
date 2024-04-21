// all requires file which are nessesary
const express=require("express")
const cors=require("cors");

// import another folders

const userRouter=require("./router/router")



const app=express();
app.use(cors())


app.use("/api/users",userRouter.route)




// home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})


app.use((req,res)=>{
    res.status(404).json({message:"router not found"})
})

app.use((error,req,res)=>{
    res.status(500).json({message:"something is error!!"})
})

module.exports=app;
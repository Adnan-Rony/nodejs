const express=require("express")
const cors=require("cors")
const userrouter=require("./route/user.route")


const app=express();
// app.use(userrouter)

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.use('/api/users',userrouter.route)





// home route
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/views/index.html')
})



// server not found error
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"})

})
// server not found error
app.use((error,req,res,next)=>{
    res.status(500).json({message:"something is error"})

})


module.exports=app
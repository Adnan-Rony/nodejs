const express=require("express")
const app=express();
const PORT=3000;



app.get("/userid/:id/userage/:age",(req,res)=>{

 // routing parameter
   const id=req.params.id
   const age=req.params.age
   res.send(`student id is ${id} and student  age is ${age}`)

})


app.get("/",(req,res)=>{
// used header
   const id=req.header('id')
   const name=req.header('name')
   res.send(`student id is ${id} and student  name is ${name}`)
})




app.use((req,res)=>{
    res.send("404 error")
})
app.listen(PORT,()=>{
    console.log(`server is running attt ${PORT} port`)
})
const express=require("express")
const app=express();
const PORT=3000;




app.get("/",(req,res)=>{
    const id=req.query.id;
    const name=req.query.name;

    res.send(`student id is ${id} and student name ${name}`)
})




app.use((req,res)=>{
    res.send("404 error")
})
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT} port`)
})
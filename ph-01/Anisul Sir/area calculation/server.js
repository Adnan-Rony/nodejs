const express=require('express')
const bodyParser=require("body-parser")
const app=express();
const PORT=3000

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname + "/circle.html")
})

app.get("/tringle",(req,res)=>{
    res.sendFile(__dirname + "/tringle.html")
})

app.post("/tringle",(req,res)=>{
    const height=req.body.height;
    const base=req.body.base;
    const area=0.5*height*base;

    res.send(`triangle area is ${area}`)
    
})
app.post("/circle",(req,res)=>{
    const radius=req.body.radius;
    const result=3.1416*radius*radius;
    res.send(`radius of circle is  ${result}`)
})

app.use((req,res)=>{
    res.send("something is wrong !!")
})

app.listen(PORT,()=>{
    console.log("server is running ")
})
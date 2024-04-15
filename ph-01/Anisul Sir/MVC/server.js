// not follow MVC
const express=require('express')
require("dotenv").config()
const app=express();
const PORT=process.env.PORT|| 3000

const htmlform=`
<form method="post" action="/users">
        <input type="text" name="name" placeholder="enter your name" />
        <input type="text" name="age" placeholder="enter your age" />
        <button type="submit"> save</button>
</form>

`
app.use(express.urlencoded({extended:true}))

const users=[
    {
        name:"adu",
        age:21
    },
    {
        name:"jadu",
        age:23
    },
]


app.get("/users",(req,res)=>{
    res.send(htmlform)
})
app.post("/users",(req,res)=>{
    const name=req.body.name
    const age=Number(req.body.age)
    const user={
        name,
        age
    }
    users.push(user)
    res.status(201).json({
        message:true,
        users
    })

})

app.use((req,res)=>{
    res.status(404).json({
        message:"not found page"
})
})

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT} `)
})
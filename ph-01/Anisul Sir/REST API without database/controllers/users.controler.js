const users = require("../models/user.model")
const {v4:uuidv4}=require("uuid")


const getallluser=(req,res)=>{
    res.status(200).json({users})
}


const createuser=(req,res)=>{

  const newuser={
     id:uuidv4(),
     username:req.body.username,
     email:req.body.email
  }
  users.push(newuser)
    res.status(201).json(users)
}

// update
const updateuser=(req,res)=>{
    const userid=req.params.id
   
    const {username,email}=req.body;
    users.filter((user)=>user.id===userid).map((seleteduser)=>{
        seleteduser.username=username;
        seleteduser.email=email;
    })

    res.status(200).json(users)
}


// delete user
    const deleteuser=(req,res)=>{
    const userid=req.params.id;
    const filterdata= users.filter((user)=>user.id !== userid)
    

    res.status(200).json(filterdata)
}
  





module.exports={getallluser,createuser,updateuser,deleteuser}


const getAllUsers=(req,res)=>{
    res.status(200).json(
        {message:"all users"})
}

const getOneUsers=(req,res)=>{
    res.status(200).json(
        {message:"get one users"})
}

const createusers=(req,res)=>{
    res.status(201).json(
        {message:"user is created"})
}

const updatedUser=(req,res)=>{
    res.status(201).json(
        {message:"user is updated"})
}
const deleteUser=(req,res)=>{
    res.status(201).json(
        {message:"user is deleted"})
}








module.exports={
    getAllUsers,getOneUsers,createusers,updatedUser,deleteUser
}
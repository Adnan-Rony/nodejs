const express=require("express");
const { getAllUsers, updatedUser, deleteUser, getOneUsers } = require("../controller/users.controler");

const route=express.Router();


route.get("/",getAllUsers)
route.get("/:id",getOneUsers)
route.post("/:id",updatedUser)
route.post("/:id",deleteUser)












module.exports={
    route
}



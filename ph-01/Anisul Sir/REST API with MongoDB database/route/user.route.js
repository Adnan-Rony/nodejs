const express=require("express")
const { getAllUsers, getOneUsers } = require("../controllers/user.controllers")
const route=express.Router()

route.get("/",getAllUsers)
route.get("/:id",getOneUsers)
route.post("/:id",getAllUsers)





module.exports={
    route
}
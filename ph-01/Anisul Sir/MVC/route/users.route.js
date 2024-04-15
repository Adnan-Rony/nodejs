const express=require("express");
const { getUser, saveuser } = require("../controllers/user.controller");

const router=express.Router();




router.get("/users",getUser)

router.post("/users",saveuser)

module.exports=router

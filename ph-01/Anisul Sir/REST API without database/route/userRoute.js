const express=require("express")
const router=express.Router()


const { getallluser, createuser, updateuser,deleteuser } = require("../controllers/users.controler")




router.get("/",getallluser)
router.post("/",createuser)
router.put("/:id",updateuser)
router.delete("/:id",deleteuser)




module.exports=router
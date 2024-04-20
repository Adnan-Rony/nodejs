require("dotenv").config();


const dev={
    app:{
        PORT:process.env.PORT || 3001,
    }
}

module.exports=dev
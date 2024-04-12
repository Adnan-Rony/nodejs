const express = require('express')
const app = express()
const port = 3000

const {MongoClient,ServerApiVersion}=require("mongodb")


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/createpost",(req,res)=>{

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const fs=require("fs")

// console.log("asyn-way 1 ")

fs.readFile(__dirname + '/read.txt','utf-8',(err,data)=>{
    if(err){
        throw new Error("Error reading file ");
    }
    console.log(data)
})
// console.log("asyn-way 2")


// write file async way
const text="i will be an sei level web devoloper"
fs.writeFile(__dirname + '/write-async.txt',text,(err)=>{
    if(err){
        throw Error("some error issu!  ")
    }
})
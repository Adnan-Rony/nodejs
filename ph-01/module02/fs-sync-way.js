const fs=require("fs")

console.log("sync-way 1")

const output=fs.readFileSync(__dirname + '/read.txt',"utf-8")

const text="bangladesh india";

const output02=fs.writeFileSync("./module02/write.txt",text)

// console.log(output02)





console.log(output)

console.log("sync-way 2")
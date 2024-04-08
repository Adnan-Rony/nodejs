const fs=require("fs")


const output=fs.readFileSync(__dirname + '/read.txt',"utf-8")

const text="bangladesh india";

const output02=fs.writeFileSync("./module02/write.txt",text)

console.log(output)


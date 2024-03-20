//path ,OS,FS
const path=require('path')

const mypath='E:/nodejss/Node.js Server & Core Modules/index.js'

// console.log(path.basename(mypath))
// console.log(path.dirname(mypath))
// console.log(path.extname(mypath))
// console.log(path.parse(mypath))



const os = require('os');

// console.log(os.platform())
// console.log(os.homedir())
// console.log(os.freemem())
// console.log(os.cpus())


const fs=require('fs');


fs.writeFileSync('myfile.tst','adnan rony.')


// fs.appendFileSync('myfile.tst',' good boy')

// const read=fs.readFileSync('myfile.tst')
// console.log(read)
// console.log(read.toString())

//async way
// fs.readFile('myfile.tst',(err,data)=>{
//         console.log(data.toString())
// })

// console.log("hello")


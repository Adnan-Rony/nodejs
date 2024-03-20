const fs=require('fs')
//create a file using writeFileSync 
fs.writeFileSync('adnan.txt','bangladesh')

//read file that's i was create by using writeFileSync.
fs.readFile('adnan.txt',(err,data)=>{
    console.log(data.toString())
})


//new adnan.txt file read in server used createReadStrem method
const http=require('http')

const server=http.createServer((req,res)=>{
   const ourReadStrem=fs.createReadStream(`${__dirname}/adnan.txt`)

   ourReadStrem.pipe(res)

})

server.listen(3000)

console.log('listening port 3000')
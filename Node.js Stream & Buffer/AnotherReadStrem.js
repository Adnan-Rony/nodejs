
const http=require('http')
const fs=require('fs')


const server=http.createServer((req,res)=>{

    //req=readStrem and res=writeStrem .that's why ourRreadStrem not important

    const ourReadStream=fs.createReadStream(`${__dirname}/bigdata.txt`);

    ourReadStream.pipe(res)

})

server.listen(3000)

console.log('listening on port 3000')
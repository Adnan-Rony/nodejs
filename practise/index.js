const http=require('http')

const server=http.createServer((req,res)=>{
    res.write('adnan')
    res.end();

})

server.listen(3000)

console.log('listening port 3000')
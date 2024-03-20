
const http=require('http')

const server=http.createServer((req,res)=>{
        if(req.url==='/')
        {
            res.write('hello people ')
            res.write('hello people how are you')
            res.end()
        }
        else if(req.url === '/about')
     {
        res.write('how about you')
        res.end()
     }
     else{
        res.write('not found')
        res.end()
     }
});


//never used it
// server.on('connection',(socket)=>{
//     console.log('newwwwwwww ')
// })

server.listen(3000)

console.log('listening on port 3000')
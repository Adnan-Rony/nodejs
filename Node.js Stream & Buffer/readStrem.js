
const http=require('http')

const server=http.createServer((req,res)=>{
        if(req.url==='/')
        {
            // res.write('<html><head><title><Form></title></head> ')
            res.write('<body><form method="post" action="/process"><input name="text"></input></body> ')
           
            res.end()
        }
        else if(req.url === '/process' && req.method==='POST')
     {
      const body=[];
        console.log(req.data)
        req.on('data',(chunk)=>{
         body.push(chunk)

        })
     

        req.on('end',(chunk)=>{
         console.log('finished')
         const parsebody=Buffer.concat(body).toString();
         console.log(parsebody)

        })
        res.write('thank you for submited')
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


//another topic 





const http=require('http')
const port=3000;
const localhost="127.0.0.1"

const server=http.createServer((req,res)=>{
    console.log(req.url)


    if(req.url==='/home' && req.method==='GET' ){
        res.end("this is home data")
    }
    else if(req.url==='/posts' && req.method==="GET"){
        res.end("this is posts data")
    }
    else{
        res.end("not found")
    }


    // res.end("welcome to my serverr");
})

server.listen(port,localhost,()=>{
    console.log(`server is on and port ${port} `)
})

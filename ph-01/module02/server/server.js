
const http=require('http')
const url=require("url")
const port=3000;
const localhost="127.0.0.1"

//json data
const posts=[
    {
        "id": 1,
        "title": "Mr.",
        "name": "John Doe"
    },
    {
        "id": 2,
        "title": "Ms.",
        "name": "Jane Smith"
    },
    {
        "id": 3,
        "title": "Dr.",
        "name": "Michael Johnson"
    }
];


const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
    // console.log(new URL(req.url,`htttp://${req.headers.host}`))

    const paraseUrl=new URL(req.url,`htttp://${req.headers.host}`)

    const pathname=paraseUrl.pathname

    // console.log(pathname)

    if(pathname==='/home' && req.method==='GET' ){
        res.writeHead(200,{
            "Content-type": "text/html"
        })
        res.end(`
        <ul>
    <li><a href="default.asp">Home</a></li>
    <li><a href="news.asp">News</a></li>
    <li><a href="contact.asp">Contact</a></li>
    <li><a href="about.asp">About</a></li>
        </ul>
        `)
    }
    else if(pathname==='/posts' && req.method==="GET"){
        
        const query=paraseUrl.searchParams
        const postid=query.get('id')
        const expectedcode=posts.find((post)=>post.id==postid)
        res.writeHead(200,{
            'Content-type':"application/json",
            "email":"adnanrony19@gmail.com"
        })
        res.end(JSON.stringify(expectedcode))
    }
    else if(pathname==='/blog' && req.method==='GET'){
        res.writeHead(200,{
            'Content-type': "application/json",
            "name":"adnan"
        })
        res.end("this is blog post");
    }
    else {
        res.end("not found")
    }


    // res.end("welcome to my serverr");
})

server.listen(port,localhost,()=>{
    console.log(`server is on and port ${port} `)
})

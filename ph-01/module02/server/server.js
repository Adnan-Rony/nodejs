
const http=require('http')
const url=require("url")
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs=require('fs')
const port=3000;
const localhost="127.0.0.1"

//json data
// const posts=[
//     {
//         "id": 1,
//         "title": "Mr.",
//         "name": "John Doe"
//     },
//     {
//         "id": 2,
//         "title": "Ms.",
//         "name": "Jane Smith"
//     },
//     {
//         "id": 3,
//         "title": "Dr.",
//         "name": "Michael Johnson"
//     }
// ];

const uri = "mongodb+srv://nodejs:nodejs@cluster0.gjcm0gd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
  
    await client.connect();
    const database=client.db("nodejs")

    // create db collection

    const postcollection=database.collection("post")
   
    await client.db("nodejs").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");





    
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    
    // console.log(new URL(req.url,`htttp://${req.headers.host}`))

    const paraseUrl=new URL(req.url,`htttp://${req.headers.host}`)

const pathname=paraseUrl.pathname

    // console.log(pathname)

    if(pathname==='/home' && req.method==='GET' ){

        fs.readFile(__dirname + '/index.html','utf-8',(err,data)=>{
            if(err){
                throw new Error("Error reading file ");
            }
            
        res.writeHead(200,{
            'Content-type':"text/html"
        })
        res.end(data)
        })
    }
    else if(pathname==='/posts' && req.method==="GET"){

        // const query=paraseUrl.searchParams
        // const postid=query.get('id')
        // const expectedcode=posts.find((post)=>post.id==postid)

        fs.readFile(__dirname + '/post.json','utf-8',(err,data)=>{
            if(err){
                throw new Error("Error reading file ");
            }
            
        res.writeHead(200,{
            'Content-type':"application/json",
            "email":"adnanrony19@gmail.com"
        })
        res.end(data)
        })
        




        // res.writeHead(200,{
        //     'Content-type':"application/json",
        //     "email":"adnanrony19@gmail.com"
        // })
        // res.end(JSON.stringify(expectedcode))
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

  }
   finally {
   
    await client.close();
  }
}
run().catch(console.dir);














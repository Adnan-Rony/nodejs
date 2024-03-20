// dependencies
const url=require('url')
const {StringDecoder}=require('string_decoder')
const route=require('../route')
const {notfoundHandler}=require('../handler/routehandler/notfoundHandler');
const routes = require('../route');





const handler={};

handler.handlerReqRes=(req,res)=>{
    // request handling

    const parseurl=url.parse(req.url,true)
    console.log(parseurl)
    const path=parseurl.pathname;
    const trimemedPath=path.replace(/^\/+|\/+$/g,'')
    const method=req.method.toLowerCase();
    const queryStringObject=parseurl.query;
    const headerObject=req.headers;

    const requestProperties={
        parseurl,
        path,
        trimemedPath,
        method,
        headerObject,
        queryStringObject
    }
    
    
    // console.log(headerObject)
    // console.log(queryStringObject)
    // console.log(trimemedPath)


    // event use
    const decoder=new StringDecoder('utf-8')

    let readData='';

    const chosenHandler=routes[trimemedPath] ? routes[trimemedPath]:notfoundHandler

    chosenHandler(requestProperties,(statusCode,payload)=>{
        statusCode=typeof(statusCode)==='number'? statusCode:500;
        payload=typeof(payload)==='object'?payload:{}

        const payloadString=JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString)
    })


    req.on('data',(buffer)=>{
        readData +=decoder.write(buffer);



    })
    req.on('end',()=>{
        readData +=decoder.end();
        console.log(readData)
    })
    


    // response handle
    res.end('hello ')
}

module.exports=handler
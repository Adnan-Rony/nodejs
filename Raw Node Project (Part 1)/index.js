/*
*Title:uptime monitoring application
description:a restfull api to monitor up or down time of user defined links

*/

// dependencies
const http=require('http')
const {handlerReqRes}=require('./helpers/handleReqRes')



//app objects-module scaffolding

const app={}

// configuration 
app.config={
    port:3000
}

// create server

app.createServer=()=>{
    const server=http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port ${app.config.port}` )
    })
}

// handle request response
app.handleReqRes=handlerReqRes

// start the server
app.createServer();

const handler={};

handler.notfoundHandler=(requestProperties,callback)=>{
    callback(404,{
        message:'your request url is error'
    })
    console.log("not found Handler")

};

module.exports=handler
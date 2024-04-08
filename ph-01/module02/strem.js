
const fs=require("fs")


// fs.readFile(__dirname + '/read.txt','utf-8',(err,data)=>{
//     if(err){
//         throw new Error("Error reading file ");
//     }
    

//     // write file async way

//     fs.writeFile(__dirname + '/write-async.txt',data,(err)=>{
//     if(err){
//         throw Error("some error issu!  ")
//     }
// })
// })

// crete a readable strem
    
const readableStrem=fs.createReadStream(__dirname + '/read.txt',"utf-8");

    readableStrem.on('data',(data)=>{
    console.log(data)

        // write able stream
        const writeablestring=fs.createWriteStream(__dirname + '/write-asyncc.txt')

        // writeablestring.write(data,(err)=>{
        //     if(err){
        //         throw new  Error ("something is error!")
        //     }
        // })

        readableStrem.pipe(writeablestring)




    })



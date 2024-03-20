//readStrem and writeStrem

const fs=require('fs')

const ourReadStream=fs.createReadStream(`${__dirname}/bigdata.txt`);

const ourWriteStream=fs.createWriteStream(`${__dirname}/output.txt`);

//readStrem....
ourReadStream.on('data',(chunk)=>{
console.log(chunk.toString
    ())
})

//writeStrem
// ourReadStream.on('data',(chunk)=>{
//    ourWriteStream.write(chunk)
//    })


//pipe method is more efficient to readStrem to write Strem
ourReadStream.pipe(ourWriteStream)


console.log('first')



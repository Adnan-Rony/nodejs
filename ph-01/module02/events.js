const Eventemitter=require("node:events");

class mybirthday extends Eventemitter{}

const mybirthday01=new mybirthday()

// creating event listening
mybirthday01.on('birthday',()=>{
    console.log("happy happy birthday");
})

mybirthday01.on("birthday",(adu)=>{
    console.log(`sad sad ${adu} birthday`)
})

mybirthday01.emit("birthday","adnan")
const EventEmitter=require('events')

const emitter=new EventEmitter();


// register a listener for bellRing event
emitter.on('bellring',(period)=>{
    console.log(`we need to run because ${period} `)
})


function startschool(){
    console.log('class started ')

   //rise an event 
setTimeout(()=>{
    emitter.emit('bellring','second period')
},2000)
}

module.exports=startschool;
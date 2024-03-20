const EventEmitter=require('events')

const emitter=new EventEmitter();

emitter.on('bellring',(period)=>{
    console.log(`we need to run because ${period} `)
})




//rise an event
// emitter.emit('bellring','second period')

setTimeout(()=>{
    emitter.emit('bellring','second period')
},2000)
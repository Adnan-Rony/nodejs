// dependency
const {samplehandler}=require('./handler/routehandler/sampleHandler')

const {abouthandler}=require('./handler/routehandler/abouthandler')

const routes={
    'sample':samplehandler,
    'about':abouthandler
}


module.exports=routes
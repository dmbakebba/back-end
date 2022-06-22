const mongoose= require('mongoose')
const serviceSchema=mongoose.Schema({
    logo:String,
    heading:String,
    text:String
})
module.exports=mongoose.model('Service',serviceSchema)
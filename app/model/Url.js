const mongoose = require('mongoose')
//const validator = require('validator')
const short = require('short-uuid')

const Schema = mongoose.Schema
const urlSchema = new Schema({
    url : {
        type : String,
        required : true
    },
    urlHash : {
        type : String,
        
    },
    shortUrl :{
       type : String,   
    }
})

urlSchema.pre('save',function(next){
    const translator = short();

    const hashUrl = translator.generate()
    this.urlHash = hashUrl
    this.shortUrl = `https://configurable-shortened-url-domain/${hashUrl}`
    console.log("this is changed on update");
    next()
})

const Url = mongoose.model('Url',urlSchema)

module.exports = Url
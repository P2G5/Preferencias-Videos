const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const videoSchema = new Schema({
   
    linkVideo:{type:String },
    titleVedio :{type:String},
    descriptionVideo :{type:String},
    photoUrl :{type:String},
    date:{
        type:Date,
        default: Date.now
     }
    
});
////Videos colection data
module.exports =Video = mongoose.model('video',videoSchema)
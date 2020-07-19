const mongoose = require('mongoose');
 
const videoSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
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
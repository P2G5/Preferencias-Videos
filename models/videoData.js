const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let VideoSchema = mongoose.Schema({
    linkVideo:{type:String },
    titleVedio :{type:String},
    descriptionVideo :{type:String},
    photoUrl :{type:String},
    date:{type:Date}
    
});
module.exports = mongoose.model("Videos",VideoSchema);




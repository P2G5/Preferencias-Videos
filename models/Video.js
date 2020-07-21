const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(
  //   "mongodb+srv://user_shortLink:A123A123@cluster0-51n2q.mongodb.net/flybooking",
  " mongodb://localhost/porjectDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;

db.on("error", function () {
  console.log("mongoose connection error");
});

db.once("open", function () {
  console.log("mongoose connected successfully");
});
const videoSchema = mongoose.Schema({
   
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
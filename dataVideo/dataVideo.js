var mongoose = require("mongoose");
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
// const mongoose = require('mongoose');

//  var MONGODB_URI = process.env.MONGODB_URL || https://vast-depths-86982.herokuapp.com/
//   "mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/videolist";

//     mongoose.connect(MONGODB_URI,{useUnifiedTopology: true} )
//     .then(()=>{
//     console.log("DB Connect");
//       })
// .catch(err =>{
//     console.log("Erorr",err);
// });

// mongoose.connection.once('open', () => { console.log('MongoDB Connected'); });
// mongoose.connection.on('error', (err) => { console.log('MongoDB connection error: ', err); });

// let videoSchema = new Schema({
//   linkVideo: { type: String },
//   titleVedio: { type: String },
//   descriptionVideo: { type: String },
//   photoUrl: { type: String },
//   date: { type: Date },
// });

const UserSchema =  Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
  
    }
  
})

////Videos colection data
// let VideoModel = mongoose.model("Videos", videoSchema);
let User =  mongoose.model("user", UserSchema);
///pass value to test database and save it
// let videoDoc = new videoModel ({
//     linkVideo :'https://www.youtube.com/embed/YB3xASruJHE' ,
//     titleVedio:'Test x Miss LaFamilia - All Mine [Music Video] | Link Up TV' ,
//     descriptionVideo:'SUB & ENABLEdfasdfas NOTIFICATIONS for more: http://goo.gl/cBSDnP Visit our clothing store: https://linkupstore.co.uk/ Visit our website for the latest videos: ...' ,
//     photoUrl:'https://i.ytimg.com/vi/YB3xASruJHE/mqdefault.jpg',
//     date:new Date()
// });
// videoDoc.save((err) =>{
//     if(err){
//         console.log("Not Saved",err);
//     }
//     else{
//         console.log("Saved value");
//     }
// })

module.exports = User;
// module.exports.db = db;

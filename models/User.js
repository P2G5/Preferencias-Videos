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
const mongooes =require('mongoose');

const UserSchema = new mongooes.Schema({
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

module.exports = Users =mongooes.model('user',UserSchema);

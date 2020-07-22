var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const connectDB = mongoose.connect(
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

module.exports = connectDB;

const mongoose = require('mongoose');
var MONGODB_URI = process.env.MONGODB_URL || "mongodb+srv://videoData:504030asd@cluster0.tellj.mongodb.net/test";
mongoose.connect(MONGODB_URI,
            { useNewUrlParser: true,
              useCreateIndex:true,
              useUnifiedTopology: true
            })
.then(()=>{
  console.log("Connected data!!");
})
.catch((err)=>{
  console.log("Error when connected to the DB",err)
})
const db = mongoose.connection
module.exports = db;
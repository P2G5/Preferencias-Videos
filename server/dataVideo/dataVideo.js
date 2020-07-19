const mongoose = require('mongoose');

 var MONGODB_URI = process.env.MONGODB_URL || "mongodb+srv://djayyab:doaa123@cluster0.sbk85.mongodb.net/videolist";


    mongoose.connect(MONGODB_URI,{useUnifiedTopology: true} )
//     .then(()=>{
//     console.log("DB Connect");
//       })
// .catch(err =>{
//     console.log("Erorr",err);
// });
const db = mongoose.connection

mongoose.connection.once('open', () => { console.log('MongoDB Connected'); });
mongoose.connection.on('error', (err) => { console.log('MongoDB connection error: ', err); });

let videoSchema = mongoose.Schema({
    linkVideo:{type:String },
    titleVedio :{type:String},
    descriptionVideo :{type:String},
    photoUrl :{type:String},
    date:{type:Date}
    
});
////Videos colection data
let videoModel = mongoose.model("Videos",videoSchema);
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

module.exports.videoModel = videoModel ;
// module.exports.db = db;
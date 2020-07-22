const express = require('express');
const db = require('./db')
var loginRouter = require('./routes/api/login');
var signupRouter = require('./routes/api/User');
//const Model = require('./dataVideo/dataVideo');
var cors = require('cors');
var bodyParser = require('body-parser')
const path = require('path');

//const db =  require('./config/db.js');
// db.db();
/////to save it in db //////
// let videoModel = db.videoModel;
let app =express();
/////////bodyparser  to be able to read the “body” of an incoming JSON object.
/////////SO we dont need to use that bcause  body-parser implementation is now included in the default Express package 
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(express.json());
app.use('/login', loginRouter);
app.use('/signup',signupRouter);
//connect front and back
app.use(express.static(__dirname + './../../public'));

// for deployment 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( './../../public' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './../../public')); // relative path
    });
}




 app.post("/save" , (req,res)=>{
    const {linkVideo ,titleVedio ,descriptionVideo,photoUrl,date} = req.body;
//    console.log(linkVideo ,titleVedio ,descriptionVideo,photoUrl,date);
    ////first date in schema second date from req.body all prop same
    let videoDoc = new Model.VideoModel({
        linkVideo:linkVideo,
        titleVedio :titleVedio,
        descriptionVideo :descriptionVideo,
        photoUrl :photoUrl,
        date:new Date ()
    });

 videoDoc.save((err)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send("Savd Input");
        }
     }); 
});//test

var port = process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("Port",port)
}); 

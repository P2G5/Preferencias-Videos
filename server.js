const express = require("express");
// const VideoModel = require("./models/Video.js");
const Users = require("./dataVideo/dataVideo.js")
const fs = require("fs");
var cors = require("cors");
const path = require("path");
// db.db();
/////to save it in db //////
// let videoModel = db.videoModel;
let app = express();
/////////bodyparser  to be able to read the “body” of an incoming JSON object.
/////////SO we dont need to use that bcause  body-parser implementation is now included in the default Express package
app.use(cors());


app.use(express.json());
//connect front and back
app.use("/", express.static(path.join(__dirname, "/client/build")));

///-------------------------------------------------------------
//for homepage form reactjs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});
//-----------------------------------------------

app.get("/", function (req, res) {
  fs.readFile("youtube.json", function (err, data) {
    res.send(data);
  });
});

// app.post("/save", (req, res) => {
//   const { linkVideo, titleVedio, descriptionVideo, photoUrl, date } = req.body;
//      console.log(linkVideo ,titleVedio ,descriptionVideo,photoUrl,date);
//   ////first date in schema second date from req.body all prop same
//   let videoDoc = new VideoModel({
//     linkVideo: linkVideo,
//     titleVedio: titleVedio,
//     descriptionVideo: descriptionVideo,
//     photoUrl: photoUrl,
//     date: new Date(),
//   });

//   videoDoc.save((err) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send("Savd Input");
//     }
//   });
// }); //test

//-------------------------------------------
app.post("/save", (req, res) => {
  // const { linkVideo, titleVedio, descriptionVideo, photoUrl, date } = req.body;
    //  console.log(linkVideo ,titleVedio ,descriptionVideo,photoUrl,date);
  ////first date in schema second date from req.body all prop same
  let videoDoc = new Users(req.body);

  videoDoc.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Savd Input");
    }
  });
}); //test
//-----------------------------------------------------------
var port = process.env.PORT || 5003;
app.listen(port, () => {
  console.log("Port", port);
});

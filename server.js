const express = require("express");
const dbconnection = require("./config/db.js");
const fs = require("fs");
var cors = require("cors");
const path = require("path");
const Users = require("./models/User.js");
const Video = require("./models/Video.js");

let app = express();
app.use(cors());

app.use(express.json());
//connect front and back
app.use("/", express.static(path.join(__dirname, "/client/build")));

///-------------------------------------------------------------
//for homepage form reactjs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });
//-----------------------------------------------

// app.get("/", function (req, res) {
//   fs.readFile("youtube.json", function (err, data) {
//     res.send(data);
//   });
// });
//----------------------------------------------
//For sign Form'
//----------------------------------------------
//for create users
app.post("/createUsers", (req, res) => {
  let videoDoc = new Users(req.body);

  videoDoc.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Savd Input");
    }
  });
});

//for check the password
app.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  Users.find({ email: email, password: password })
    .then((result) => {
      console.log(result[0].password);
      res.status(202).send(result[0]);

      // console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});

//-------------------------------------------
// for videos users
//-------------------------------------------
// Add videos for favorite
app.post("/videos", (req, res) => {
  let videoDoc = new Video(req.body);

  videoDoc.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Savd Input");
    }
  });
});

//For search videos for users
app.get("/videos/:name", function (req, res) {
  var search = req.params.name;
  console.log(search);
  Video.find({ user: search }, function (err, docs) {
    if (err) {
      console.log(err);
    }
    res.send(docs);
    console.log("done", docs);
  });
});

//for delete videos
app.delete(`/api/:id`, function (req, res) {
  Video.findByIdAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("done", req.body);
    res.end();
  });
});
//-----------------------------------------------------------
var port = process.env.PORT || 5003;
app.listen(port, () => {
  console.log("Port", port);
});

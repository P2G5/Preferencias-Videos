const express = require("express");
const dbconnection = require("./config/db.js");
const fs = require("fs");
var cors = require("cors");
const path = require("path");
const Video = require("./models/Video.js");
const Users = require("./models/User.js");

let app = express();
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
app.post("/signin", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(req);
  Users.find({ email: email, password: password })
    .then((result) => {
      console.log(result[0].password);
      res.status(202).send(true);

      // console.log(result);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});

//-------------------------------------------
app.post("/save", (req, res) => {
  let videoDoc = new Video(req.body);

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

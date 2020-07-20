const express = require('express');
const router = express.Router();
const Profile = require('../../models/Video');
const User = require('../../models/User')


//@route  GET pref/add/display
//@desc    Test route
//@ access Public



///////////display all data////////////////
router.get('/display',(req,res) => {
    console.log("Get data")
    Profile.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
      console.log("Cont Get Data")
    })
  });

  /////////////Add video ////////////
  router.post('/me',async(req,res) =>{ 
    const {linkVideo ,titleVedio ,descriptionVideo,photoUrl} = req.body;
    let profile = await Profile.findOne({linkVideo});
    if(profile){res.status(400).send("Is exists")}
    else{
    const profileDoc = new Profile({linkVideo ,titleVedio ,descriptionVideo,photoUrl});
    await profileDoc.save().then((response)=>{
        res.send("Data Video Save")
    })
    .catch((err)=>{
        res.send(err)
    })
}
});


module.exports = router;
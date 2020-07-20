const express = require('express');
const router = express.Router();
const Profile = require('../../models/Video');
const User = require('../../models/User')

//@route  DELETE pref/profile/removeOne
//@desc    Get users profile
//@ access Private



  ////////////remove one from  data////////
  router.delete('/removeOne',function(req,res){
    const number = req.params.number;
    Profile.find({})
    .deleteOne({}).then((result)=>{
      res.send("DeleteOne");
    })
    .catch((err)=>{
      res.send(err)
    })
  });



  //////////Find in your list using title//////////
  router.get('/search/:titleVedio',(req,res) => {
    console.log("Get data")
    Profile.find({titleVedio:req.params.titleVedio})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
      console.log("Cont Get this sarch")
    })
  });

  ////////////Edit using link video////////////////
  router.put('/update/:linkVideo',(req,res) => {
     Profile.findOneAndUpdate({linkVideo:req.params.linkVideo},req.body)
    .then(() => {
      res.send('Update it');
    })
    .catch((err) => {
      res.send(err);
      console.log("Cont Get this sarch")
    })
  });


  
module.exports = router;
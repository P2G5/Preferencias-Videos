const express = require('express');
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require('bcryptjs');

//@route  GET pref/login
//@desc    Test route
//@ access Public


///auth >>> login

router.post('/singin',async(req,res) =>{ 
     const {email,password } = req.body;
     let user = await User.findOne({email});
     if(!user){res.status(400).send("Register Plz")}
    
     const userDoc = new User({email,password});
     const isMatch = await bcrypt.compare(password,userDoc.password);
     
    if(!isMatch){res.status(404).send('Wrong Password')}
     
 });
 

module.exports = router;
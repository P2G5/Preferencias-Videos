const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User')
//@route  POST pref/users
//@desc    Register user
//@ access Public

router.post('/createUsers',async(req,res) =>{ 
    
    const {name , email,password   } = req.body;
    let user = await User.findOne({email});
    if(user){res.status(400).send("Is exists")}
    else{
    const userDoc = new User({name , email,password});
    // const salt = await bcrypt.genSalt(10);
    // userDoc.password = await bcrypt.hash(password,salt);
    await userDoc.save().then((response)=>{
        res.send("Datasaved")
    })
    .catch((err)=>{
        res.send(err)
    })
}
});



module.exports = router;
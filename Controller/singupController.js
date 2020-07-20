const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.create_account = (req, res) =>{
   const {name , email , password} = req.body;
    let user = User.findOne({email});
    if(user){
        res.status(400).send("Is exists")
          }
    else{
    const userDoc = new User({name , email , password});
    userDoc.save()
    .then((response)=>{
        console.log("Data Saved!!")
        res.send("Datasaved")
    })
    .catch((err)=>{
        res.send(err)
    })
}
}

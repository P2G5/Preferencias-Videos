const UserModel = require('../models/users')
const bcrypt = require('bcryptjs');

 function check_account (req,res){
   const {email,password } = req.body;
   let user =  UserModel.findOne({email});
   if(!user){
    console.log(user)
      res.status(400).send("Register Plz")
      console.log("You don't have an account");
   }else{
   //const userDoc = new UserModel({email,password});
   const isMatch =  bcrypt.compare(password,user.password);

  if(!isMatch){
     res.status(404).send('Wrong Password')
     console.log("Please enter your correct password")
   }else{
   res.send("correct account")
}}
 }
 exports.check_account = check_account ;
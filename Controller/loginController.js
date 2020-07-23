const UserModel = require('../models/users')
const bcrypt = require('bcryptjs');

 function check_account (req,res){
   const {email,password } = req.body;
   let user =  UserModel.findOne({email,password})
   console.log(user)
   if(!user){
      res.status(400).send("Register Plz")
      console.log("You don't have an account");
   }else{
   //const userDoc = new UserModel({email,password});

  const isMatchpass =  bcrypt.compare(password,user.password);
  const isMatchEmail =  bcrypt.compare(email,user.email);
  if((!isMatchpass ) && (!isMatchEmail)){
     res.status(404).send('Wrong Password')
     console.log("Please enter your correct password")
   }else{
   res.send("correct account")
}}
 }
 exports.check_account = check_account ;
 //get email and password from body
 //see if this email found in the database
 //
const UserModel = require('../models/users')
const bcrypt = require('bcryptjs');
exports.check_account = (req, res) =>{
	const {email,password } = req.body;
     let user = UserModel.findOne({email});
     if(!user){
     	res.status(400).send("Register Plz");
     	console.log("You don't have accout");
     }
     const userDoc = new UserModel({email,password});
     const isMatch = bcrypt.compare(password,userDoc.password);
     
    if(!isMatch){
    	res.status(404).send('Wrong Password')
    }
     
 }
 
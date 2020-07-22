const UserModel = require('../models/users')
const bcrypt = require('bcryptjs');

exports.create_account = (req, res) =>{
   const {name , email , password} = req.body;
    let user = UserModel.findOne({email});
    if(!user){
        console.log("Email had used before")
        res.status(400).send("Is exists")
          }
    else{
    const userDoc = new UserModel({name , email , password});
    userDoc.save()
    .then((response)=>{
        console.log("Data Saved!!")
        res.send("Datasaved")
    })
    .catch((err)=>{
        console.log("Erro while saving")
        res.send(err)
    
    })
}
}

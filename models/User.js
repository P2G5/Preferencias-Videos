const mongooes =require('mongoose');

const UserSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
  
    }
  
})

module.exports = User =mongooes.model('user',UserSchema);

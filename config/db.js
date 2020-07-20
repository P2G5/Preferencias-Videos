const mongoose = require('mongoose');
const config =require('config');

// const db = config.get('mongoURI');
const db = "mongodb+srv://wael123:wael123@cluster0.epeoa.mongodb.net/users?retryWrites=true&w=majority"
const connectDB = async ()=>{
    try{
        await mongoose.connect(db,
            { useNewUrlParser: true ,
              useCreateIndex:true,
              useUnifiedTopology: true
            }
            );
        console.log("Connect")
    }catch(err){
         console.error(err.message);
         //Exit
        //  process.exit(1);
    }
}

module.exports =connectDB;
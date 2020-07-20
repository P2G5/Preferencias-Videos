const mongoose = require('mongoose');
const config =require('config');
// const db = config.get('mongoURI');
mongoose.connect('mongodb://localhost:27017/accountsdb',
            { useNewUrlParser: true ,
              useCreateIndex:true,
              useUnifiedTopology: true
            })
.then(()=>{
  console.log("Connected data!!");
})
.catch((err)=>{
  console.log("Error when connected to the DB",err)
});
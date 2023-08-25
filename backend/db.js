const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/sath"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then( ()=>
       console.log("Connected to mongo Successful")
   )
}

module.exports = connectToMongo;
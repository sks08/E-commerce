const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://sunny:05082001@cluster0.kuale.mongodb.net/mern-eccommerce'

mongoose.connect(mongoDBURL, {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' ,()=>{
    console.log('Mongo DB connection Failed');
})

dbconnect.on('connected' , ()=>{
    console.log('Mongo DB Connection SuccessFull');
})

module.exports = mongoose
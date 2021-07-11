const express = require("express");

const app = express()

var dbconnection = require('./db')

app.get("/",(req,res) => {
      res.send('this is from backend')
});

const port =8000;

app.listen(port, () => console.log('Node JS Server Started'));
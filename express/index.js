const mongoose = require('mongoose')
const express = require('express');
const user = require("./schema/userSchema.js")
const app = express()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.post("/register", async(req,res)=>{
  console.log("dsdsdsdsdsd",req.firstname);
  let obj = new user({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  console.log(obj);
  res.send("as;da;sdsds");

  await obj.save();
})
const DB = 'mongodb+srv://hawanha1:hamza545072@cluster0.y9awrc3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
  console.log('connection succeful')
}).catch((err)=> console.log(err))
app.get('/profile', (req,res)=>{
  try{
    res.json({"tests":["test1","test2","test3"]})
  }catch(e){
    console.log(e);
  }
});

app.listen(5000, () => console.log('listening on port 5000...'))

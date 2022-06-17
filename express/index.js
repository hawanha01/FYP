const mongoose = require('mongoose')
const bodyParser=require("body-parser")
const express = require('express');
const User = require("./schema/userSchema.js");
const Test = require("./schema/testSchema.js");
const jwt = require('jsonwebtoken');
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
  }
);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/register", async (req,res)=>{
  var user = new User();
  user.email = req.body.email;
  user.password = req.body.password;
  user.username = req.body.username;
  console.log(user)
  const existingEmail = await User.findOne({email: user.email})
  if (existingEmail){
    return res.status(400).json({msg:"An account with this email already exists."})
  }
  else{
    await user.save(function(err) {
        if (err) return next(err);
        res.json(user);
    });
  }
})
const authentication = (req, res, next) => {
  const token = req.headers['x-auth-token'] || req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Auth Failed! Invalid Token' });
  const user = jwt.verify(token, 'this is my secret');
  if (!user) return res.status(401).json({ message: 'Auth Failed! Invalid Token' });
  req.user = user;
  console.log(token.id)
  next();
};
app.post("/TestPage",authentication,async(req,res)=>{
  var test = new Test()
  test.name = req.body.name;
  test.category = req.body.category
  test.description = req.body.description
    await test.save()
    console.log("value of test",test)
  User.findOne({_id: req.user.id},async function (err, users) {
    console.log("value of user",users)
    users.tests.push(test._id);
    console.log(users.tests)
   await users.save()
      res.json({success: true,users})
    // console.log(users[req.user._id].toObject())
  });
  // await test.save(function(err) {
  //   if (err) return next(err);
  // });
})
app.post("/login", async (req,res)=>{
  try{
    console.log(req.body)
    const {email, password} = req.body;
    if (!email || !password){
      return res.status(404).json({msg: "Not all field have been entered"})
    }
    const user = await User.findOne({email: email});
    if(!user){
      return res.status(404).json({msg:"No account with this email has been registered."})
    }
    if (password != user.password){
      return res.status(404).json({msg:"Invalid crediantials."});
    }
    console.log(user)
    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, 'this is my secret')
    res.json({success:true,token:token})
  }catch (error){
    console.log("in catch")
    res.status(500).json({err:error.message})
  }
})
const DB = 'mongodb+srv://hawanha1:hamza545072@cluster0.y9awrc3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
  console.log('connection succeful')
}).catch((err)=> console.log(err))
app.get('/profile',authentication, (req,res)=>{
  try{
    console.log(req.user)
    User.findOne({_id: req.user.id},async function (err, users) {
      res.json({success:true, users: users})
      // console.log(users[req.user._id].toObject())
    }).populate("tests");
    // res.json({success: true, id: mongoose.Types.ObjectId(req.user._id) })
  }catch(e){
    console.log(e);
  }
});

app.listen(5000, () => console.log('listening on port 5000...'))

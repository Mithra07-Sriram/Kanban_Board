var express = require('express')
var path=require("path");
var mdb=require("mongoose");
var cors=require('cors')
var User=require("./models/users")
var app = express()
const PORT = 3002
app.use(express.json())
app.use(cors())
mdb.connect("mongodb://localhost:27017/").then(()=>
 {
    console.log("Mongodb connection Successful");
})
.catch(()=>{
    console.log("Check your connection string");
})
app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
   // res.sendFile('/Users/admin/OneDrive/Desktop/Kanban_Board/Kanban_Board_Backend/index.html')
    //copy path change the \ to /
    res.sendFile(path.join(__dirname,'index.html'));
})
app.post('/signup',(req,res)=>{
    var{firstname,lastname,email,password}=req.body
    try{
        var user=new User({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password
        })
        var user=new User(req.body)
        console.log(req.body.password);
        user.save()
        console.log("User Added Successfully");
        res.status(200).send("User Added Successfully")
    }
    catch(err)
    {
        console.log(err)
    }
})
app.get('/getSignup',async(req,res)=>{
    try{
        var allrecords=await User.find()
        res.json(allrecords)
        console.log("All records fetched");
    }
    catch(err)
    {
        console.log(err)
        res.send(err)
    }
})
app.post('/login',async(req,res)=>
{
    var {email,password}=req.body
    try{
        var existinguser=await User.findOne({email:email})
        console.log(existinguser);
        if(existinguser)
        {
            if(existinguser.password===password){
                res.json({message:"Login Successful",loggedIn:true})
            }
            else{
                res.json({message:"Invalid Password",loggedIn:false})
            }
        }
        else{
            res.json({message:"User Not Found",loggedIn:false})
        }
    }
    catch(err)
    {
        console.log("Login failure")
    }
})
app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})
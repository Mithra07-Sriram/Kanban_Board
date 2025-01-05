var express = require('express')
var path=require("path");
var mdb=require("mongoose");
var User=require("./models/users")
var app = express()
const PORT = 3002
app.use(express.json())
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
    var{firstname,lastname,email}=req.body
    try{
        var user=new User({
            firstname:firstname,
            lastname:lastname,
            email:email
        })
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
app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})
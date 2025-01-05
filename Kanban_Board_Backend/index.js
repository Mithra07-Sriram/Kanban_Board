var express = require('express')
var app = express()
const PORT = 3002
app.get('/',(req,res)=>{
    res.send("Welcome to Backend Server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"localhost",port:PORT})
})
app.get('/static',(req,res)=>{
    res.sendFile('/Users/admin/OneDrive/Desktop/Kanban_Board/Kanban_Board_Backend/index.html')
    //copy path change the \ to /
})
app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
})
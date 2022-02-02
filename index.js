 var http = require('http');
 var express = require('express');


 app = express();

 app.get('/',(req,res)=>{
     res.sendfile('index.html',{root:__dirname})
 })

 http.createServer(app).listen(process.env.PORT||3000);
 console.log("server started");
var express = require ("express");
var app = express();
app.get("/",function(req,resp){
    resp.sendFile("index.html",{root:__dirname});
})
app.listen(7927)
console.log("Ok Server is running......")
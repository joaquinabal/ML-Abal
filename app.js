const express = require("express");
const app = express();
const path = require("path");
     

app.use(express.static('public'));

app.listen(process.env.PORT || 3000,()=>console.log("is running at: http://localhost:3000/"));

app.get("/", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/home.html")   
    res.sendFile(htmlPath)                                         
});
app.post("/", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/home.html") 
    res.sendFile(htmlPath)                                        
});

app.get("/register", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/register.html")   
    res.sendFile(htmlPath)                                       
});

app.get("/login", function(req,res){
    let htmlPath = path.resolve(__dirname,"./views/login.html")   
    res.sendFile(htmlPath)                                       
});

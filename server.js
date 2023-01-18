const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/",function(req,res){      //  "/" represent get request
    res.send("Hello");
});    

app.listen(3000 , function(){
    console.log("Server started on port 3000 ");     //-------> port is basically like a radio channel in which are server is tuned
});


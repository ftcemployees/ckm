
// Navigate this file in terminal and install the pagages by typing 
// npm install express
// npm install ejs

// To start the server type:
// node app.js
// then go to http://localhost:3000/


// initialize express
var express = require("express");
var app = express();

// set it to use ejs as the default viewer
app.set("view engine", "ejs");




// render our homepage
app.get("/", function(req, res){
	res.render("home");
});



// Have the server start listening for requests on port 3000
app.listen(3000, function(){
	console.log("Server is running...");
});
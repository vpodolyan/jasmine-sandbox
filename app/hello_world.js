var generator = require("./generator");
var express = require("express");
var app = express();

app.get("/", function(req, res) {
   var number = req.param("number");
   console.log(req.params);
   var helloWorldArray = generator.generateHelloWorlds(number);
   
   res.status(200).send(helloWorldArray);
});

app.listen(3000);
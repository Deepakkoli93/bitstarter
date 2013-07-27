var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var fs = require('fs');
 
  var buf = new Buffer(10000000);
 buf = fs.readFileSync('index.html');

  response.send(buf.toString("utf-8",0));
 //response.send(index.html);
 //response.render('index.html');
});

/*app.get("/", function(req, res) {
  render("index.html");
});*/

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


var express = require("express");
var server = require("http").createServer(express);
var io = require("socket.io")(server);

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

io.on("connection", function() {
  console.log("whats up");
});

server.listen(PORT, function() {
  console.log("I'm listening");
});

// app.listen(PORT, function() {
//   console.log("app listening on PORT " + PORT);
// });

// db.sequelize.sync().then(function() {
//   app.listen(PORT, function() {
//     console.log("app listening on PORT " + PORT);
//   });
// });

// server.js
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

//var users = []; //users array
var Connections = []; //connections array

server.listen(3000, function() {
  console.log("listening on *:3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/home.html");
});

io.sockets.on("connection", function(socket) {
  //connection
  Connections.push(socket);
  io.sockets.emit("new user"); //checks if anyone is online

  console.log("users connected: %s", Connections.length);

  socket.on("disconnect", function(data) {
    users.splice(users.indexOf(socket.username), 1); //accessing the array users

    io.sockets.emit("user left");

    Connections.splice(Connections.indexOf(socket), 1);
    console.log("user disconnected: %s ", Connections.length);
  });

  socket.on("send message", function(data) {
    console.log(data);
    io.sockets.emit("new message", { msg: data });
  });
});

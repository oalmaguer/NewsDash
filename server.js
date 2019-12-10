// var express = require("express");
// var server = require("http").createServer(express);
// var io = require("socket.io")(server);

// var app = express();
// var PORT = process.env.PORT || 8080;

// // var db = require("./models");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// io.on("connection", function() {
//   console.log("whats up");
// });

// server.listen(PORT, function() {
//   console.log("I'm listening");
// });

// // app.listen(PORT, function() {
// //   console.log("app listening on PORT " + PORT);
// // });

// // db.sequelize.sync().then(function() {
// //   app.listen(PORT, function() {
// //     console.log("app listening on PORT " + PORT);
// //   });
// // });

//oliver server

const express = require("express");
const app = express();
var path = require("path");
var mysql = require("mysql");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var config = require("./config/config");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
var connection = mysql.createConnection(config);
// var Favorite = require("./models/favorite");
var db = require("./models");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodelogin", "root", "aTl310195", {
  host: "localhost",
  dialect: "mysql"
});


//chat

// var io = require("socket.io").listen(server);
// var Connections = []; 

// io.sockets.on("connection", function(socket) {
//   //connection
//   Connections.push(socket);
//   io.sockets.emit("new user"); //checks if anyone is online

//   console.log("users connected: %s", Connections.length);

//   socket.on("disconnect", function(data) {
//     users.splice(users.indexOf(socket.username), 1); //accessing the array users

//     io.sockets.emit("user left");

//     Connections.splice(Connections.indexOf(socket), 1);
//     console.log("user disconnected: %s ", Connections.length);
//   });

//   socket.on("send message", function(data) {
//     console.log(data);
//     io.sockets.emit("new message", { msg: data });
//   });
// });

//end of chat




//register

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// module.exports = function(app) {
// Get all books
app.get("/api/all", function(req, res) {
  db.Account.findAll({}).then(function(results) {
    res.json(results);
  });
});

app.get("/api/all/favorites", function(req, res) {
  db.UserFav.findAll({}).then(function(results) {
    res.json(results);
  });
});
// };

app.post("/api/auth", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  if (username && password) {
    db.Account.create({
      username: username,
      password: password,
      email: email
    }).then(function(error, results, fields) {
      console.log(error);
      console.log(results);
      console.log(fields);
      if (username != null) {
        res.redirect("/");
      } else {
        console.log("error");
        res.send("Please enter pass or username");
      }
      res.end;
    });
  }
});

//favorites

//end of register

//login

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/auth", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
    // connection.query(
    //   "SELECT * FROM accounts WHERE username = ? AND password = ?",
    //   [username, password],
    db.Account.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(function(results) {
      if (results) {
        req.session.loggedin = true;
        req.session.username = username;

        res.redirect("/home");
      } else {
        res.send("Incorrect username or password");
      }
      res.end();
    });
  } else {
    res.send("Please enter pass or username");
    res.end();
  }
});

app.post("/description", function(req, res) {
  var user = req.session.username;
  db.Account.update(
    { userDesc: req.body.information },
    {
      where: { username: req.session.username }
    }
  ).then(function(dbPost) {
    res.redirect("/profile");
  });
});

app.post("/api/favorites/test", function(req, res) {
  var user = req.session.username;
  console.log(req.body.newsHl);
  console.log(req.body.newsUrl);
  console.log(req.body.imgUrl);
  if (user != null) {
    db.UserFav.create({
      username: user,
      newsHl: req.body.newsHl,
      newsUrl: req.body.newsUrl,
      imgUrl: req.body.imgUrl
    }).then(function(results) {
      res.redirect("/home");
    });
  } else {
    console.log("error");
  }
});

app.post("/api/favorites/test2", function(req, res) {
  var user = req.session.username;
  console.log(req.body.newsHl);
  console.log(req.body.newsUrl);
  console.log(req.body.imgUrl);
  if (user != null) {
    db.UserFav.create({
      username: user,
      newsHl: req.body.newsHl,
      newsUrl: req.body.newsUrl,
      imgUrl: req.body.imgUrl
    }).then(function(results) {
      res.redirect("/home");
    });
  } else {
    console.log("error");
  }
});

app.post("/api/favorites/test3", function(req, res) {
  var user = req.session.username;
  console.log(req.body.newsHl);
  console.log(req.body.newsUrl);
  console.log(req.body.imgUrl);
  if (user != null) {
    db.UserFav.create({
      username: user,
      newsHl: req.body.newsHl,
      newsUrl: req.body.newsUrl,
      imgUrl: req.body.imgUrl
    }).then(function(results) {
      res.redirect("/home");
    });
  } else {
    console.log("error");
  }
});
// });

app.post("/userProfile", function(req, res) {
  if (req.session.loggedin) {
    var user = req.session.username;
    var email = req.session.email;
    var description = req.res.end(`${"Hello " + user}`);
  } else {
    res.sendFile("/error");
  }
  res.end();
});

app.post("/userDesc", function(req, res) {
  db.Account.findOne({
    where: {
      username: req.session.username
    }
  }).then(function(dbPost) {
    req.res.send({
      userDesc: dbPost.userDesc,
      username: dbPost.username
    });
  });
});

app.post("/userFavorites", function(req, res) {
  db.UserFav.findAll({
    where: {
      username: req.session.username
    }
  }).then(function(result) {
    var arrayHl = [];
    var arrayNewsUrl = [];
    var arrayImgUrl = [];
    for (var i = 0; i < result.length; i++) {
      console.log(result[i].newsHl);
      arrayHl.push(result[i].newsHl);
      arrayNewsUrl.push(result[i].newsUrl);
      arrayImgUrl.push(result[i].imgUrl);
    }
    req.res.send({
      newsHl: arrayHl,
      newsUrl: arrayNewsUrl,
      imgUrl: arrayImgUrl
    });
  });
});

app.post("/userInfo", function(req, res) {
  var user = req.session.username;
  console.log("User name = " + user);
  var welcome = "Welcome Back ";
  if (req.session.username === undefined) {
    console.log("No user");
  } else {
    res.end(`${"Welcome back " + user}`);
  }
});

app.get("/logout", function(req, res) {
  if (req.session.loggedin) {
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
});
// app
//   .get("/userProfile", function(req, res) {
//     res.send(req.session.username);
//   })
//   .then(function(results) {
//     res.json(results);
//   });

//end of login

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const users = [];

app.use(express.static("/public"));

app.use(
  express.static(__dirname + "/public", {
    index: false,
    immutable: true,
    cacheControl: true,
    maxAge: "30d"
  })
);

// Routes
// =============================================================
require("./routes/html-routes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
  });
});

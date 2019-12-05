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

//register

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/auth", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  if (username && password) {
    connection.query(
      "INSERT INTO accounts (username, password, email) VALUES (?, ?, ?)",
      [username, password, email],
      function(error, results, fields) {
        if (username != null) {
          console.log("Goood");
          res.send("User with the name " + username + " is registered");
        } else {
          console.log("error");
          res.send("Please enter pass or username");
        }
        res.end;
      }
    );
  }
});

//favorites

app.post("/api/description", function(req, res) {
  var userDesc = req.body.information;
  if (userDesc) {
    connection.query(
      'UPDATE accounts SET userDesc="' + userDesc + '" WHERE id=1',
      [userDesc],
      function(error, results, fields) {
        console.log(error);
        if (userDesc != null) {
          console.log(userDesc);
          res.send("Added user description");
        } else {
          console.log("error");
          res.send("Please enter description");
        }
        res.end;
      }
    );
  }
});

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
    connection.query(
      "SELECT * FROM accounts WHERE username = ? AND password = ?",
      [username, password],
      function(error, results, fields) {
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.username = username;

          res.redirect("/home");
        } else {
          res.send("Incorrect username or password");
        }
        res.end();
      }
    );
  } else {
    res.send("Please enter pass or username");
    res.end();
  }
});

app.post("/userProfile", function(req, res) {
  if (req.session.loggedin) {
    var user = req.session.username;
    res.end(`${"Welcome back " + user}`);
  } else {
    res.sendFile("/error");
  }
  res.end();
});

app.post("/userDesc", function(req, res) {
  connection.query("SELECT userDesc FROM accounts WHERE id =1", function(
    err,
    result,
    fields
  ) {
    if (err) throw err;
    console.log("Result is " + result);
    var obj = JSON.stringify(result);
    console.log("userdesc var " + obj);
    res.end(`${"Your description " + obj[0]["userDesc"]}`);
    console.log(obj[0]["userDesc"]);
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

app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});

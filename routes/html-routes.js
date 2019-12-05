var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });

    app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/register.html"))
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"))
    });

    app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"))
    });

    app.get("/error", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/error.html"))
    });
}
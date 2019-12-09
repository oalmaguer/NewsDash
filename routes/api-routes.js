var favorite = require("../models");

module.exports = function(app) {
  // Get all books
  app.get("api/all", function(req, res) {
    favorite.findAll({}).then(function(results) {
      res.json(results);
    });
  });
};

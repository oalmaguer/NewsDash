//model is going to be composed of a news story that is a favorite
module.exports = function(sequelize, Datatypes) {
  var UserFav = sequelize.define("UserFav", {
    username: {
      type: Datatypes.STRING,
      allowNull: false
    },
    newsHl: {
      type: Datatypes.STRING,
      allowNull: true
    },
    newsUrl: {
      type: Datatypes.STRING,
      allowNull: true
    },
    imgUrl: {
      type: Datatypes.STRING,
      allowNull: true
    }
  });
  return UserFav;
};

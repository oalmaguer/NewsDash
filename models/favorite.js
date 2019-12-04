//model is going to be composed of a news story that is a favorite
module.exports = function(sequelize, Datatypes) {
  var Favorite = sequelize.define("Favorite", {
    headline: {
      type: Datatypes.STRING,
      allowNull: 0
    },
    link: {
      type: Datatypes.STRING,
      allowNull: 0
    },
    image: {
      type: Datatypes.image,
      allowNull: 0
    }
  });
  return Favorite;
};

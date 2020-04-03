module.exports = function(sequelize, Sequelize) {
  var Image = sequelize.define("image", {
    type: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    data: {
      type: Sequelize.BLOB("long")
    }
  });
  return Image;
};

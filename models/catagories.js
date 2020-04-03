module.exports = function(db, Sequelize) {
  var Category = db.define("category", {
    categoryName: Sequelize.STRING
  });
  return Category;
};

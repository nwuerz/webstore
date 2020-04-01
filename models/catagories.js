module.exports = function(db, Sequelize) {
  var Category = db.define("category", {
    categoryId: Sequelize.INTEGER,
    categoryName: Sequelize.STRING
  });
  return Category;
};

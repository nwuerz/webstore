module.exports = function(db, Sequelize) {
  // Create Product Table
  var Product = db.define("product", {
    productId: Sequelize.INTEGER,
    productName: Sequelize.STRING,
    categoryId: Sequelize.INTEGER
  });
  return Product;
};

module.exports = function(db, Sequelize) {
  // Create Product Table
  var Product = db.define("Product", {
    productName: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING,
    category: Sequelize.STRING
  });
  return Product;
};
